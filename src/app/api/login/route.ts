import { pool } from "../sqlQuerys";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Typ danych:", typeof body.password);

    if (!body.username || !body.password) {
      return Response.json({ error: "Brak danych" }, { status: 400 }); // 400 - Bad Request
    }

    const user = await pool.query(
      "SELECT * FROM users WHERE username=$1 AND password=$2",
      [body.username, body.password]
    );

    if (!user) {
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
    return Response.json({ error: e?.message }, { status: 500 }); // 500 - Internal Server Error
  }
}
