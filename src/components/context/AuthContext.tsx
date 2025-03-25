"use client";
import { createContext, useState, useContext, ReactNode } from "react";
import { User } from "types/types";
import { showMessage } from "../services/showMessages";
// import { useRouter } from "next/navigation";

interface AuthContextType {
  user: Pick<User, "username" | "password"> | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// async function checkAuth() {
//   try {
//     const res = await fetch("http://localhost:3000/users");
//     if (res.status === 200) {
//       const data = await res.json();
//       if (Array.isArray(data)) {
//         // Założenie: konto admina znajduje się wśród użytkowników i ma role 'admin'
//         currentUser = data.find((u) => u.role === "admin") || null;
//       } else {
//         currentUser = data;
//       }
//     } else {
//       currentUser = null;
//     }
//   } catch (err) {
//     currentUser = null;
//   }
//   renderNav();
// }

export function AuthProvider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<Pick<User, "username" | "password"> | null>({username:"admin",password:"admin123"});
  const [user, setUser] = useState<Pick<User, "username" | "password"> | null>(
    null
  );

  const login = async (username: string, password: string) => {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.status === 200) {
      showMessage("Zalogowano pomyślnie", "success");
      return true;
    } else {
      showMessage(data.error || "Błąd logowania", "error");
      return false;
    }

    // setUser({ username: username, password: password });
    // localStorage.setItem("user",JSON.stringify(user));
  };
  const logout = () => {
    setUser(null);
    // localStorage.removeItem("user");
  };

  // useEffect(()=>{
  //   async function checkAuth(){
  //   try {
  //     const res = await fetch("http://localhost:3000/users");
  //     if (res.status === 200) {
  //       const data = await res.json();
  //       if (Array.isArray(data)) {
  //         // Założenie: konto admina znajduje się wśród użytkowników i ma role 'admin'
  //         setUser(data.find((u) => u.role === "admin") || null)
  //       } else {
  //         setUser(data);
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //   } catch {
  //     setUser(null);
  //   }}
  //   checkAuth();
  // },[user])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
