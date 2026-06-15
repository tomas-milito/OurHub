import React from "react";
import Link from "next/link";
import hallImage from "../../images/library/grand-library-hall.png";
import { grandHallContent } from "../../data/grandHallData";

function Inicio() {
  const { hero, ledger, invitations, quotes, featuredShelves, manuscriptCards, curatorPicks } = grandHallContent;

  return (
    <main id="inicio" className="codex-library">
      <section className="grand-hall intro-only" style={{ backgroundImage: `url(${hallImage.src})` }}>
        <div className="hall-overlay" />
        <div className="hall-copy">
          <span className="seal">{hero.seal}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hall-actions">
            {hero.actions.map((action) => (
              <Link href={action.href} key={action.href}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hall-ledger" aria-label="Registro de biblioteca">
          {ledger.map((item) => (
            <React.Fragment key={item.label}>
              <span>{item.value}</span>
              <p>{item.label}</p>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="building-map hall-routes">
        <div>
          <span className="section-kicker">Antesala de rutas</span>
          <h2>Elige una puerta segun lo que quieras construir.</h2>
        </div>
        <nav aria-label="Rutas sugeridas">
          {invitations.map((item) => (
            <Link href={item.href} key={item.title}>
              <span>{item.code}</span>
              <strong>{item.title}</strong>
              <em>{item.text}</em>
            </Link>
          ))}
        </nav>
      </section>

      <section className="quote-gallery" aria-label="Notas del gran salon">
        {quotes.map((quote) => (
          <blockquote key={quote}>{quote}</blockquote>
        ))}
      </section>

      <section className="archive-wing">
        <header className="wing-heading">
          <span>Vitrinas abiertas</span>
          <h2>Pequenas colecciones para entrar en calor.</h2>
          <p>
            El Grand Hall funciona como una mesa de orientacion: no reemplaza las alas,
            te ayuda a decidir por donde empezar.
          </p>
          <small>Curaduria viva</small>
        </header>
        <div className="slip-grid">
          {featuredShelves.map((shelf) => (
            <Link className="archive-slip" href={shelf.href} key={shelf.title}>
              <span className="catalog-number">{shelf.number}</span>
              <strong>{shelf.title}</strong>
              <p>{shelf.description}</p>
              <dl>
                {shelf.meta.map((detail) => (
                  <div key={detail.label}>
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </Link>
          ))}
        </div>
      </section>

      <section className="manuscript-room">
        <header className="wing-heading">
          <span>Mesa del archivista</span>
          <h2>Herramientas para que el salon siga creciendo.</h2>
          <p>
            La informacion nueva vive en un solo archivo de datos. Puedes sumar rutas,
            recomendaciones y notas sin tocar el diseno del componente.
          </p>
          <small>Editable</small>
        </header>
        <div className="manuscript-shelf">
          {manuscriptCards.map((card) => (
            <article className="manuscript" key={card.title}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div>
                {card.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="picks-room">
        <header className="wing-heading">
          <span>Lecturas destacadas</span>
          <h2>Volumenes que abren varias puertas.</h2>
          <p>Una seleccion rapida para entrar desde el Grand Hall directamente a un libro.</p>
          <small>Primeros pasos</small>
        </header>
        <div className="pick-list">
          {curatorPicks.map((pick) => (
            <Link href={pick.href} key={pick.title}>
              <span>{pick.label}</span>
              <strong>{pick.title}</strong>
              <em>{pick.subtitle}</em>
              <p>{pick.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;
