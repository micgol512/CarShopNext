export function showNotification(text: string) {
  const notifDiv = document.getElementById("notification");
  if (!notifDiv) {
    return;
  }
  notifDiv.innerText = text;
  setTimeout(() => {
    notifDiv.innerText = "";
  }, 5000);
}
