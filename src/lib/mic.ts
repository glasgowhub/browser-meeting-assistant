export async function startMic(onFrame: (buf: Int16Array) => void) {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new AudioContext({ sampleRate: 16000 });
    const src = ctx.createMediaStreamSource(stream);
    const processor = ctx.createScriptProcessor(4096, 1, 1);
    src.connect(processor);
    processor.connect(ctx.destination);
    processor.onaudioprocess = (e) => {
      const f32 = e.inputBuffer.getChannelData(0);
      const i16 = Int16Array.from(f32.map((n) => n * 0x7fff));
      onFrame(i16);
    };
    return () => ctx.close(); // returns a stop fn
  }