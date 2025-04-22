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
      },
    );
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  }