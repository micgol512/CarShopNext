"use client";
import { useAuth } from "@/components/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <section id="profile-view" className="view">
      <h2>Profil</h2>
      {user ? <p>Witaj, {user.username}!</p> : <p>Nie jesteś zalogowany.</p>}
    </section>
  );
}
