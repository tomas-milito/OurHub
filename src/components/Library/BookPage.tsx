import { useState } from "react";
import Link from "next/link";

type Resource = {
  label: string;
  href: string;
};

type Author = {
  name: string;
  portrait: string;
  href: string;
  note: string;
};

type Page = {
  title: string;
  text: string;
  details?: string[];
  quote?: string;
};

type Book = {
  id: string;
  title: string;
  subtitle: string;
  logo?: string;
  pdf?: string;
  author: Author;
  pages: Page[];
  resources: Resource[];
};

type Wing = {
  id: string;
  name: string;
};

type Section = {
  title: string;
};

type BookPageProps = {
  book: Book;
  section: Section;
  wing: Wing;
};

function BookPage({ book, section, wing }: BookPageProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const totalPages = book.pages.length + 2;
  const isCover = pageIndex === 0;
  const isFinal = pageIndex === totalPages - 1;
  const currentPage = !isCover && !isFinal ? book.pages[pageIndex - 1] : null;

  const goBack = () => setPageIndex((current) => Math.max(0, current - 1));
  const goNext = () => setPageIndex((current) => Math.min(totalPages - 1, current + 1));

  return (
    <main className="codex-library book-page">
      <section className="book-return">
        <Link href={`/ala/${wing.id}`}>Regresar a {wing.name}</Link>
        <span>{section.title}</span>
      </section>

      <article className={`open-book paged-book${isMaximized ? " maximized-book" : ""}`}>
        <div className="book-page-window" aria-live="polite">
          {isCover ? (
            <section className="book-cover-page">
              <img className="book-cover-logo" src={book.logo || `/library-logos/${book.id}.svg`} alt="" />
              <span>Codex volume</span>
              <h1>{book.title}</h1>
              <p>{book.subtitle}</p>
              <button type="button" onClick={goNext}>
                Abrir volumen
              </button>
            </section>
          ) : null}

          {currentPage ? (
            <section className="book-spread">
              <div className="paper-page">
                <span>Pagina {pageIndex}</span>
                <h2>{currentPage.title}</h2>
                {currentPage.quote ? <blockquote>{currentPage.quote}</blockquote> : null}
              </div>
              <div className="paper-page">
                <p>{currentPage.text}</p>
                {currentPage.details ? (
                  <ul className="page-notes">
                    {currentPage.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ) : null}

          {isFinal ? (
            <section className="book-spread final-spread">
              <div className="paper-page">
                <span>Ultima pagina</span>
                <h2>Recursos externos</h2>
                <p>La biblioteca termina el volumen aqui y abre sus direcciones hacia otros archivos.</p>
                <div className="resource-links">
                  {book.resources.map((resource) => (
                    <a href={resource.href} target="_blank" rel="noreferrer" key={resource.href}>
                      {resource.label}
                    </a>
                  ))}
                  {book.pdf ? (
                    <a href={book.pdf} target="_blank" rel="noreferrer">
                      Abrir manuscrito PDF
                    </a>
                  ) : null}
                </div>
              </div>
              <aside className="paper-page author-fold">
                <span>Pliegue del autor</span>
                <a href={book.author.href} target="_blank" rel="noreferrer" className="author-medallion">
                  {book.author.portrait}
                </a>
                <h2>
                  <a href={book.author.href} target="_blank" rel="noreferrer">
                    {book.author.name}
                  </a>
                </h2>
                <p>{book.author.note}</p>
              </aside>
            </section>
          ) : null}
        </div>

        <nav className="book-pagination" aria-label="Controles del libro">
          <button type="button" onClick={goBack} disabled={pageIndex === 0}>
            Pagina anterior
          </button>
          <div>
            <span>
              {pageIndex + 1} / {totalPages}
            </span>
            <small>{isCover ? "Portada" : isFinal ? "Recursos" : currentPage?.title}</small>
          </div>
          <div className="book-pagination-actions">
            <button type="button" onClick={() => setIsMaximized((current) => !current)}>
              {isMaximized ? "Reducir libro" : "Maximizar libro"}
            </button>
            <button type="button" onClick={goNext} disabled={pageIndex === totalPages - 1}>
              Pagina siguiente
            </button>
          </div>
        </nav>

        <div className="page-markers" aria-label="Ir a pagina">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              aria-label={`Ir a pagina ${index + 1}`}
              className={index === pageIndex ? "active" : ""}
              key={index}
              onClick={() => setPageIndex(index)}
              type="button"
            />
          ))}
        </div>
      </article>
    </main>
  );
}

export default BookPage;
