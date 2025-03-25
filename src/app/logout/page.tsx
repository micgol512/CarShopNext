"use client";
import { useAuth } from "@/components/context/AuthContext";
import { delay } from "@/components/services/delay";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// app/logout/page.tsx - Strona wylogowania
export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   logout();
    //   router.push("/");
    // }, 3000);
    // return () => clearTimeout(timer);
    // async function logoutAndRedirect() {
    logout();
    delay(3000);
    router.push("/");
    // }
    // logoutAndRedirect();
  }, [logout, router]);

  return (
    <section>
      <h2>Wylogowano</h2>
      <p>Zostaniesz przekierowany za 3 sekundy...</p>
    </section>
  );
}
