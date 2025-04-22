// src/lib/diarise.ts
export async function diarise(wav: Blob) {
  const res = await fetch(
    'https://api-inference.huggingface.co/models/pyannote/speaker-diarization',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
        'Content-Type': 'audio/wav',
      },
      body: wav,
    }
  );

  if (!res.ok) {
    // log the actual JSON or text error
    const errText = await res.text();
    throw new Error(`Diarisation API failed ${res.status}: ${errText}`);
  }

  return await res.json();  // should be an array of speaker segments
}
