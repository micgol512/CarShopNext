import { MessageType } from "types/types";

export function showMessage(text: string, type: MessageType = "info") {
  const messageDiv = document.getElementById("message");
  if (!messageDiv) {
    return;
  }
  messageDiv.innerText = text;
  messageDiv.className = type;
  setTimeout(() => {
    messageDiv.innerText = "";
    messageDiv.className = "";
  }, 5000);
}
