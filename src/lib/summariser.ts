import OpenAI from 'openai';
import { encoding_for_model } from 'tiktoken';
const enc = await encoding_for_model('gpt-4o-mini');

const openai = new OpenAI();

// running state kept outside fn
let history = '';
let lastVector: Uint32Array | null = null;

export async function maybeSummarise(delta: string) {
  history += ' ' + delta;
  const vec = encode(delta);

  if (lastVector) {
    // cheap Jaccard similarity between sparse token IDs
    const inter = vec.filter((t) => lastVector!.includes(t)).length;
    const union = new Set([...vec, ...lastVector!]).size;
    const sim = inter / union;
    if (sim > 0.88) return null; // not enough new info
  }
  lastVector = vec;

  const prompt = `You are a ruthless note taker …`;
  const res = await openai.chat.completions.create({
    model: import.meta.env.VITE_OPENAI_SUMMARY_MODEL,
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: history.slice(-8000) },
    ],
  });
  return JSON.parse(res.choices[0].message.content!);
}