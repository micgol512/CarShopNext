//metoda GET. Sprawdzenie czy zalogowany użytkownik to admin.
// jak tak to pobierze wszystkich userow jak nie to pobierze tylko swojego.

//metoda PUT.
// sprawdzenie poprawnościu danych tj.:
//  - czy nazwa nie jest pusta (albo nie wystepuje)
//  - czy hasło jest poprawne (czy nie jest puste)
// dodanie roli USER oraz balance na 10000 na start. // określienie dokładniej balance

//metoda DELETE.
// usunięcie uzytkowniaka o ID z bazy danych. (mozliwy przycisk usuń konto czy coś takiego)

export async function GET() {
  const users = [{ id: 1, name: "John" }];
  return Response.json({ users });
}

// POST /api/users - Create a new user
export async function POST(request: Request) {
  const data = await request.json();

  // Process the data (in a real app, you would save to a database)
  console.log("Creating user:", data);

  return Response.json(
    {
      message: "User created successfully",
      user: { id: 999, ...data },
    },
    { status: 201 }
  );
}

// DELETE /api/users - Delete a user
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  // Delete logic would go here

  return Response.json({
    message: `User ${id} deleted successfully`,
  });
}
