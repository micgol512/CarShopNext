import { NextRequest } from "next/server";

const clients: Set<ReadableStreamDefaultController> = new Set();

export async function GET(req: NextRequest) {
  const stream = new ReadableStream({
    start(controller) {
      clients.add(controller);
      console.log("Nowy klient SSE podłączony!");

      req.signal.addEventListener("abort", () => {
        clients.delete(controller);
        controller.close();
        console.log("Klient SSE odłączony");
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}

// Funkcja do wysyłania wiadomości do wszystkich klientów SSE
export function broadcastSSE(message: string) {
  const data = `data: ${message}\n\n`;
  clients.forEach((controller) => {
    controller.enqueue(new TextEncoder().encode(data));
  });
}

import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { message } = await req.json();
  broadcastSSE(message);
  return NextResponse.json({ success: true });
}
