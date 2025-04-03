"use client";
// import { useAuth } from "../context/AuthContext";

export default function ChatBot() {
  const user = { name: "admin" };
  // sprawdź czy uzytkownik jest zalogowany
  // jak tak to dodaj prompt By zwracał się do użytkownika po nicku z danych
  // oraz ogólby prompt ze jest asystentem do pomocy w zakupie samochodu
  // oraz opierał sie wyłącznie na danych z bazy danych o samochodach i nie zchodził na inne tematy nie związane ze stroną

  if (!user) return <></>;
  return <div className="p-4 pt-1 bg-blue-400">Some chat</div>;
}
