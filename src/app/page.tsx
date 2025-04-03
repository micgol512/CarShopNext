"use client";
import { useAuth } from "@/components/context/AuthContext";

// app/page.tsx - Strona główna
export default function HomePage() {
  const { user } = useAuth();
  return (
    <>
      {/* <!-- Widok startowy --> */}
      <section id="home-view" className="view">
        <h2>Witamy w Car Shop!</h2>
        <p>
          {user?.username
            ? "Wybierz opcję z menu."
            : "Zaloguj lub zarejestruj sie."}
        </p>
      </section>
    </>
  );
  //   return (<>
  //   <main>
  //     {/* <!-- Widok startowy --> */}
  //     <section id="home-view" className="view">
  //       <h2>Witamy w Car Shop!</h2>
  //       <p>Wybierz opcję z menu.</p>
  //     </section>

  //     {/* <!-- Widok logowania --> */}
  //     <section id="login-view" className="view" style={{display: "none"}}>
  //       <h2>Logowanie</h2>
  //       <form id="loginForm">
  //         <input
  //           type="text"
  //           id="loginUsername"
  //           placeholder="Username"
  //           required
  //         />
  //         <input
  //           type="password"
  //           id="loginPassword"
  //           placeholder="Password"
  //           required
  //         />
  //         <button type="submit">Zaloguj</button>
  //       </form>
  //     </section>

  //     {/* <!-- Widok rejestracji --> */}
  //     <section id="register-view" className="view" style={{display: "none"}}>
  //       <h2>Rejestracja</h2>
  //       <form id="registerForm">
  //         <input type="text" id="regUsername" placeholder="Username" required />
  //         <input
  //           type="password"
  //           id="regPassword"
  //           placeholder="Password"
  //           required
  //         />
  //         <button type="submit">Zarejestruj</button>
  //       </form>
  //     </section>

  //     {/* <!-- Widok profilu --> */}
  //     <section id="profile-view" className="view" style={{display: "none"}}>
  //       <h2>Profil</h2>
  //       <div id="profile-info"></div>
  //       <h3>Edytuj profil</h3>
  //       <form id="profileForm">
  //         <input type="text" id="newUsername" placeholder="Nowy Username" />
  //         <input type="password" id="newPassword" placeholder="Nowe Password" />
  //         <button type="submit">Aktualizuj profil</button>
  //       </form>
  //     </section>

  //     {/* <!-- Widok listy samochodów --> */}
  //     <section id="cars-view" className="view" style={{display: "none"}}>
  //       <h2>Samochody</h2>
  //       <div id="cars-list"></div>
  //       <h3>Dodaj nowy samochód</h3>
  //       <form id="addCarForm">
  //         <input type="text" id="carModel" placeholder="Model" required />
  //         <input type="number" id="carPrice" placeholder="Cena" required />
  //         <button type="submit">Dodaj samochód</button>
  //       </form>
  //     </section>

  //     {/* <!-- Widok zakupu samochodu --> */}
  //     <section id="buy-view" className="view" style={{display: "none"}}>
  //       <h2>Kup samochód</h2>
  //       <form id="buyCarForm">
  //         <input
  //           type="text"
  //           id="buyCarId"
  //           placeholder="ID samochodu"
  //           required
  //         />
  //         <button type="submit">Kup samochód</button>
  //       </form>
  //     </section>

  //     {/* <!-- Widok wylogowania (symulowany) --> */}
  //     <section id="logout-view" className="view" style={{display: "none"}}>
  //       <h2>Wylogowano</h2>
  //       <p>Zostałeś wylogowany.</p>
  //     </section>
  //   </main>

  // </>
  //   );
}
