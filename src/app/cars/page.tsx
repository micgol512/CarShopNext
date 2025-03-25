// app/cars/page.tsx - Strona samochodów
export default function CarsPage() {
  // const handleSubmit = (e)=>{
  //   e.preventDefault();

  // }
  return (
    <section id="cars-view" className="view">
      <h2>Samochody</h2>
      <div>Lista samochodów</div>
      <h3>Dodaj nowy samochód</h3>
      <form>
        <input type="text" placeholder="Model" required />
        <input type="number" placeholder="Cena" required />
        <button type="submit">Dodaj samochód</button>
      </form>
    </section>
  );
}
