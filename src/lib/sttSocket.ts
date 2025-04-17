export class SttSocket {
    private ws!: WebSocket;
    constructor(private onText: (t: string, final: boolean) => void) {}
  
    connect() {
      this.ws = new WebSocket('wss://api.openai.com/v1/audio/transcriptions/stream');
      this.ws.binaryType = 'arraybuffer';
      this.ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data as string);
        this.onText(msg.text, msg.is_final);
      };
      this.ws.onopen = () => {
        this.ws.send(
          JSON.stringify({
            model: import.meta.env.VITE_OPENAI_TRANSCRIBE_MODEL,
            language: 'de-DE',
          }),
        );
      };
    }
  
    send(buf: Int16Array) {
      this.ws?.readyState === 1 && this.ws.send(buf);
    }
  }