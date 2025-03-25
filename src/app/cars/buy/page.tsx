// app/buy/page.tsx - Strona zakupu samochodu
export default function BuyPage() {
  return (
    <section>
      <h2>Kup samochód</h2>
      <form>
        <input type="text" placeholder="ID samochodu" required />
        <button type="submit">Kup samochód</button>
      </form>
    </section>
  );
}