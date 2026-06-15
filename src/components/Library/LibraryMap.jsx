import React from "react";
import Link from "next/link";
import { libraryWings } from "../../data/libraryData";

function LibraryMap() {
  return (
    <main className="codex-library library-map-page">
      <section className="map-intro">
        <span className="seal">Plano general / Archivum Creatorum</span>
        <h1>Mapa de la biblioteca</h1>
        <p>
          El edificio se divide en seis salones. Pasa sobre cada zona para encenderla;
          entra para encontrar sus estanterias y abrir los libros.
        </p>
      </section>

      <section className="floor-plan" aria-label="Mapa interactivo de la biblioteca">
        {libraryWings.map((wing) => (
          <Link className={`map-room ${wing.mapClass}`} href={`/ala/${wing.id}`} key={wing.id}>
            <span>{wing.code}</span>
            <strong>{wing.name}</strong>
            <em>{wing.label}</em>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default LibraryMap;
