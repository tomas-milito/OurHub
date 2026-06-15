import React from "react";
import logo from "../../logo-biblio-white.png";

const archiveLinks = [
  { href: "/", label: "Grand Hall" },
  { href: "/mapa", label: "Mapa" },
  { href: "/ala/left-wing", label: "Ala Izquierda" },
  { href: "/ala/right-wing", label: "Ala Derecha" },
  { href: "/ala/restricted-section", label: "Restricted" },
  { href: "/ala/grand-archive", label: "Archivo" },
];

function NavBar() {
  return (
    <header id="NavBar" className="archive-nav">
      <a className="archive-brand" href="/" aria-label="Bibliorathum home">
        <img src={logo.src} alt="Bibliorathum" />
      </a>
      <nav aria-label="Library navigation">
        {archiveLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
