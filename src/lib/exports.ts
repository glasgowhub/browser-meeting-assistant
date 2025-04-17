// ---- src/lib/exports.ts -----------------------------------------------
import { saveAs } from 'file-saver';

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  saveAs(blob, filename);          // triggers native download
  URL.revokeObjectURL(url);
}

export function makeMarkdown(
  transcript: { t: number; text: string; speaker?: string }[],
  decisions: string[],
  todos: string[],
) {
  const body = [
    '# Meeting Minutes',
    '',
    '## Transcript',
    ...transcript.map((s) => `- **${fmtTime(s.t)} ${s.speaker ?? ''}**: ${s.text}`),
    '',
    '## Decisions',
    ...decisions.map((d) => `- ${d}`),
    '',
    '## Open To‑Dos',
    ...todos.map((t) => `- [ ] ${t}`),
  ].join('
');
  return new Blob([body], { type: 'text/markdown' });
}

export function makeSRT(
  transcript: { start: number; end: number; text: string }[],
) {
  return new Blob([
    transcript
      .map((l, i) =>
        [
          i + 1,
          `${fmtSRT(l.start)} --> ${fmtSRT(l.end)}`,
          l.text,
          '',
        ].join('
'),
      )
      .join('
'),
  ], { type: 'text/plain' });
}

export function makeVTT(transcript: { start: number; end: number; text: string }[]) {
  const header = 'WEBVTT

';
  const body = transcript
    .map((l) => `${fmtSRT(l.start)} --> ${fmtSRT(l.end)}
${l.text}
`)
    .join('
');
  return new Blob([header + body], { type: 'text/vtt' });
}

function fmtTime(sec: number) {
  return new Date(sec * 1000).toISOString().substr(11, 8);
}
function fmtSRT(sec: number) {
  const d = new Date(sec * 1000).toISOString().substr(11, 12);
  return d.replace('.', ','); // SRT wants , for ms
}