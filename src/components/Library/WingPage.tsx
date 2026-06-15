import Link from "next/link";

type Book = {
  id: string;
  title: string;
  logo?: string;
};

type Section = {
  id: string;
  title: string;
  note: string;
  books: Book[];
};

type Wing = {
  id: string;
  name: string;
  label: string;
  code: string;
  description: string;
  sections: Section[];
};

type WingPageProps = {
  wing: Wing;
};

function WingPage({ wing }: WingPageProps) {
  return (
    <main className="codex-library wing-page">
      <section className="wing-hero">
        <span className="seal">{wing.code} / {wing.label}</span>
        <h1>{wing.name}</h1>
        <p>{wing.description}</p>
        <Link href="/mapa">Volver al mapa</Link>
      </section>

      <section className="wing-shelves">
        {wing.sections.map((section) => (
          <article className="wing-section" key={section.id}>
            <div className="section-plaque">
              <span>{section.id}</span>
              <h2>{section.title}</h2>
              <p>{section.note}</p>
            </div>
            <div className="bookcase-row">
              {section.books.map((book) => (
                <Link className="shelf-book" href={`/libro/${book.id}`} key={book.id}>
                  <img src={book.logo || `/library-logos/${book.id}.svg`} alt="" />
                  <span>{book.title}</span>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default WingPage;
