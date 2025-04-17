import { useEffect, useRef, useState } from 'react';
import { startMic } from './lib/mic';
import { SttSocket } from './lib/sttSocket';
import { maybeSummarise } from './lib/summariser';
import { diarise } from './lib/diarise';
import { downloadBlob, makeMarkdown, makeSRT, makeVTT } from './lib/exports';
const mediaType = { mimeType: 'audio/webm;codecs=opus' } as MediaRecorderOptions;

export default function App() {
  const [live, setLive] = useState('');
  const [decisions, setDec] = useState<string[]>([]);
  const [todos, setTodos] = useState<string[]>([]);
  const [suggestions, setSug] = useState<string[]>([]);
  const stopMicRef = useRef<() => void>();
  const stt = useRef<SttSocket>();
  const mediaRec = useRef<MediaRecorder>();
  const chunks = useRef<Blob[]>([]);
  const sentences = useRef<{ t: number; text: string }[]>([]);

  const start = () => {
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
    startMic((buf) => stt.current!.send(buf)).then((stop) => (stopMicRef.current = stop));
  };
// ---- MediaRecorder ----
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  mediaRec.current = new MediaRecorder(stream, mediaType);
   mediaRec.current.ondataavailable = (e) => chunks.current.push(e.data);
  mediaRec.current.start();
  });
  const stop = async () => {
    stopMicRef.current?.();
    stt.current = undefined;
        stt.current = undefined;

    // ---- stop recorder & build WAV ----
       mediaRec.current?.addEventListener('stop', () => res());
     mediaRec.current?.stop();
     const webmBlob = new Blob(chunks.current, { type: 'audio/webm' });+    const wavBlob = await convertToWav(webmBlob); // util below

    // ---- speaker diarisation ----
    let diarised: any[] = [];
    try {
      diarised = await diarise(wavBlob);   // returns segments with speaker labels
    } catch (e) {
      console.warn('Diarisation failed, proceeding without labels', e);
    }

    // merge labels into transcript list (simplified)
    const transcriptWithSpk = sentences.current.map((s) => {
      const seg = diarised.find((d) => s.t >= d.start && s.t <= d.end);
       return { ...s, speaker: seg?.speaker ?? 'Speaker' };
     });
 
// ---- build & download files ----
downloadBlob(wavBlob, 'raw-audio.wav');
downloadBlob(makeMarkdown(transcriptWithSpk, decisions, todos), 'minutes.md');
const capped = transcriptWithSpk.map((s, i, arr) => ({
start: s.t - startEpoch.current,  // relative
 end: (arr[i   1]?.t || Date.now() / 1000) - startEpoch.current,
  text: s.text,
 }));
 downloadBlob(makeSRT(capped), 'captions.srt');
downloadBlob(makeVTT(capped), 'captions.vtt');
 };
    // TODO: capture WAV from MediaRecorder, call diarise(), then export files
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4 font-mono text-sm">
      <button className="col-span-2 bg-black text-white p-2 rounded" onClick={start}>Start Meeting</button>
      <pre className="border p-2 h-64 overflow-y-scroll whitespace-pre-wrap">{live}</pre>
      <ul className="border p-2">
        <h3>Decisions</h3>
        {decisions.map((d) => (
          <li key={d}>• {d}</li>
        ))}
      </ul>
      <ul className="border p-2">
        <h3>Open To‑Dos</h3>
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
      <button className="col-span-2 bg-red-600 text-white p-2 rounded" onClick={stop}>Stop</button>
    </div>
  );
  async function convertToWav(webm: Blob): Promise<Blob> {
    const ctx = new AudioContext();
    const arrayBuffer = await webm.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    const offline = new OfflineAudioContext(1, audioBuffer.duration * 16000, 16000);
    const src = offline.createBufferSource();
    src.buffer = audioBuffer;
    src.connect(offline.destination);
    src.start();
    const rendered = await offline.startRendering();
    const wav = audioBufferToWav(rendered); // use npm pcm‑utils or write tiny util
    return new Blob([wav], { type: 'audio/wav' });
  }
}