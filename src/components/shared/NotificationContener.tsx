"use client";
import { useEffect, useState } from "react";

export default function NotificationContainer() {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource("/api/sse");

    eventSource.onmessage = (event) => {
      setMessage(event.data);
      setVisible(true);

      // Ukrywa powiadomienie po 3 sekundach
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setMessage(null), 300);
      }, 3000);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  if (!message) return null;

  return (
    <div
      id="notification"
      className={`fixed top-4 right-4 px-4 py-2 my-2 bg-blue-100 text-blue-800 border border-blue-200 rounded-md shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
}
