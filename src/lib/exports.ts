// ---- src/lib/exports.ts -----------------------------------------------
import { saveAs } from 'file-saver';

export function downloadBlob(blob: Blob, filename: string) {
  saveAs(blob, filename);
}

/* ---------- Markdown ---------- */
export function makeMarkdown(
  transcript: { t: number; text: string; speaker?: string }[],
  decisions: string[],
  todos: string[],
) {
  const body = [
    '# Meeting Minutes',
    '',
    '## Transcript',
    ...transcript.map(
      (s) => `- **${fmtTime(s.t)} ${s.speaker ?? ''}**: ${s.text}`,
    ),
    '',
    '## Decisions',
    ...decisions.map((d) => `- ${d}`),
    '',
    '## Open To‑Dos',
    ...todos.map((t) => `- [ ] ${t}`),
  ].join('\n');
  return new Blob([body], { type: 'text/markdown' });
}

/* ---------- SRT ---------- */
export function makeSRT(
  transcript: { start: number; end: number; text: string }[],
) {
  const lines = transcript
    .map(
      (l, i) => `${i + 1}
${fmtSRT(l.start)} --> ${fmtSRT(l.end)}
${l.text}

`,
    )
    .join('\n');
  return new Blob([lines], { type: 'text/plain' });
}

/* ---------- VTT ---------- */
export function makeVTT(
  transcript: { start: number; end: number; text: string }[],
) {
  const header = `WEBVTT

`;
  const body = transcript
    .map(
      (l) => `${fmtSRT(l.start)} --> ${fmtSRT(l.end)}
${l.text}

`,
    )
    .join('\n');
  return new Blob([header + body], { type: 'text/vtt' });
}

/* ---------- Helper ---------- */
function fmtTime(sec: number) {
  return new Date(sec * 1000).toISOString().substring(11, 19);
}
function fmtSRT(sec: number) {
  return new Date(sec * 1000)
    .toISOString()
    .substring(11, 23)
    .replace('.', ',');
}
