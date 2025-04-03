//metoda POST
// Czy uzytkownik jest nie zalogowany? (czy nie ma tokena autoryzacyjnego)
// Sprawdzenie danych czy są poprawne (czy nie sa puste).
// Sprawdzenie czy uzytkownik istnieje w bazie danych.
// Jak tak to zalogowanie uzytkownika: tj danie autoryzacji AuthNext

import { pool } from "../sqlQuerys";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Dane:", body.username, "-> ", body.password);

    if (!body.username || !body.password) {
      return Response.json({ error: "Brak danych" }, { status: 400 }); // 400 - Bad Request
    }
    console.log("Działa tu.");

    const user = await pool.query(
      "SELECT * FROM users WHERE username=$1 AND password=$2",
      [body.username, body.password]
    );

    if (!user.rowCount) {
      return Response.json(
        { error: "Niepoprawne dane logowania" },
        { status: 401 }
      ); // 401 - Unauthorized
    }

    return Response.json(
      { message: "Zalogowano pomyślnie", user },
      { status: 200 }
    ); // 200 - OK
  } catch (e) {
    console.log("To?", e);
    return Response.json({ error: "Błąd połączenia" }, { status: 500 }); // 500 - Internal Server Error
  }
}
