//metoda POST. pobieranie ID z params oraz sprawdzanie :
// - czy uzytkownik istnieje i jest zalogowany, (token autoryzacyny)
// - czy samochod o ID jest w bazie,
// - czy samochod o ID jest na sprzedaz,
// - czy uzytkownika stac na kupno tego samochodu
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json({ maessage: "działa", id: params.id });
}
