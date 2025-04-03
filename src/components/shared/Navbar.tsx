"use client";
import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem" }}>
        <li>
          <Link href="/">Strona główna</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link href="/profile">Profil ({user.username})</Link>
            </li>
            <li>
              <Link href="/cars">Samochody</Link>
            </li>
            <li>
              <Link href="/cars/buy">Kup samochód</Link>
            </li>
            <li>
              <Link href="/logout">Wyloguj</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Zaloguj</Link>
            </li>
            <li>
              <Link href="/register">Zarejestruj</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
