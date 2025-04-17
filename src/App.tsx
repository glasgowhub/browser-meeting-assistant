import { useRef, useState } from 'react';
import { startMic } from './lib/mic';
import { SttSocket } from './lib/sttSocket';
import { maybeSummarise } from './lib/summariser';
import { diarise } from './lib/diarise';
import {
  downloadBlob,
  makeMarkdown,
  makeSRT,
  makeVTT,
} from './lib/exports';
import audioBufferToWav from 'audiobuffer-to-wav';

const mediaType = { mimeType: 'audio/webm;codecs=opus' } as MediaRecorderOptions;

export default function App() {
  const [live, setLive] = useState('');
  const [decisions, setDec] = useState<string[]>([]);
  const [todos, setTodos] = useState<string[]>([]);
  const [suggestions, setSug] = useState<string[]>([]);

  const stt = useRef<SttSocket>();
  const stopMicRef = useRef<() => void>();

  const mediaRec = useRef<MediaRecorder>();
  const chunks = useRef<Blob[]>([]);
  const sentences = useRef<{ t: number; text: string }[]>([]);
  const startEpoch = useRef<number>(0);

  /* ---------- START ---------- */
  const start = () => {
    startEpoch.current = Date.now() / 1000;

    stt.current = new SttSocket(async (txt, isFinal) => {
      setLive((p) => p + ' ' + txt);

      if (isFinal) {
        sentences.current.push({ t: Date.now() / 1000, text: txt });
        const sum = await maybeSummarise(txt);
        if (sum) {
          setDec(sum.decisions);
          setTodos(sum.todos);
          setSug(sum.suggestions);
        }
      }
    });
    stt.current.connect();

    startMic((buf) => stt.current!.send(buf)).then(
      (stop) => (stopMicRef.current = stop),
    );

    /* MediaRecorder erst hier starten */
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRec.current = new MediaRecorder(stream, mediaType);
        mediaRec.current.ondataavailable = (e) => chunks.current.push(e.data);
        mediaRec.current.start();
      });
  };

  /* ---------- STOP ---------- */
  const stop = async () => {
    // Mikro & STT beenden
    stopMicRef.current?.();
    stt.current = undefined;

    /* Aufnahme stoppen & fertiges WEBM abholen */
    await new Promise<void>((res) => {
      if (!mediaRec.current) return res();
      mediaRec.current.addEventListener('stop', () => res(), { once: true });
      mediaRec.current.stop();
    });
    const webmBlob = new Blob(chunks.current, { type: 'audio/webm' });
    const wavBlob = await convertToWav(webmBlob);

    /* Diarisation */
    let diarised: any[] = [];
    try {
      diarised = await diarise(wavBlob);
    } catch (e) {
      console.warn('Diarisation failed → weiter ohne Speaker‑Labels', e);
    }

    /* Transcript + Speaker zusammenführen */
    const transcriptWithSpk = sentences.current.map((s) => {
      const seg = diarised.find(
        (d) => s.t >= d.start && s.t <= d.end,
      );
      return { ...s, speaker: seg?.speaker ?? 'Speaker' };
    });

    /* Downloads bauen */
    downloadBlob(wavBlob, 'raw-audio.wav');
    downloadBlob(
      makeMarkdown(transcriptWithSpk, decisions, todos),
      'minutes.md',
    );
    const capped = transcriptWithSpk.map((s, i, arr) => ({
      start: s.t - startEpoch.current,
      end:
        (arr[i + 1]?.t || Date.now() / 1000) - startEpoch.current,
      text: s.text,
    }));
    downloadBlob(makeSRT(capped), 'captions.srt');
    downloadBlob(makeVTT(capped), 'captions.vtt');
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4 font-mono text-sm">
      <button
        className="col-span-2 bg-black text-white p-2 rounded"
        onClick={start}
      >
        Start Meeting
      </button>

      <pre className="border p-2 h-64 overflow-y-scroll whitespace-pre-wrap">
        {live}
      </pre>

      <ul className="border p-2">
        <h3>Decisions</h3>
        {decisions.map((d) => (
          <li key={d}>• {d}</li>
        ))}
      </ul>
      <ul className="border p-2">
        <h3>Open To‑Dos</h3>
        {todos.map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
      <ul className="border p-2">
        <h3>Clever things to say</h3>
        {suggestions.map((s) => (
          <li key={s}>💡 {s}</li>
        ))}
      </ul>

      <button
        className="col-span-2 bg-red-600 text-white p-2 rounded"
        onClick={stop}
      >
        Stop
      </button>
    </div>
  );
}

/* ---------- Helper ---------- */
async function convertToWav(webm: Blob): Promise<Blob> {
  const ctx = new AudioContext();
  const arrayBuffer = await webm.arrayBuffer();
  const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
  const wav = audioBufferToWav(audioBuffer);
  return new Blob([wav], { type: 'audio/wav' });
}
