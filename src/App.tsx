import { useEffect, useRef, useState } from 'react';
import { startMic } from './lib/mic';
import { SttSocket } from './lib/sttSocket';
import { maybeSummarise } from './lib/summariser';

export default function App() {
  const [live, setLive] = useState('');
  const [decisions, setDec] = useState<string[]>([]);
  const [todos, setTodos] = useState<string[]>([]);
  const [suggestions, setSug] = useState<string[]>([]);
  const stopMicRef = useRef<() => void>();
  const stt = useRef<SttSocket>();

  const start = () => {
    stt.current = new SttSocket(async (txt, isFinal) => {
      setLive((p) => p + ' ' + txt);
      if (isFinal) {
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

  const stop = () => {
    stopMicRef.current?.();
    stt.current = undefined;
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
}