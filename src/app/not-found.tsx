import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h2>Nie znaleziono</h2>
      <p>Nie mogliśmy znaleźć żądanego zasobu</p>
      <Link href="/">Wróć do strony głównej</Link>
    </div>
  );
}
