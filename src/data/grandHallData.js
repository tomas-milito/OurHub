// Edit this file to add more Grand Hall content without touching components.
// Add a new object to any array and the home page will render it automatically.

export const grandHallContent = {
  hero: {
    seal: "BIBLIORATHUM / THE CREATOR'S LIBRARY",
    title: "Una biblioteca antigua para recorrer conocimiento moderno.",
    description:
      "Cada ala conserva una familia de saberes: programacion, diseno, inteligencia artificial, productividad, sistemas y manuscritos. El mapa es la llave del edificio.",
    actions: [
      { label: "Abrir mapa de la biblioteca", href: "/mapa" },
      { label: "Entrar por el Ala Izquierda", href: "/ala/left-wing" },
    ],
  },
  ledger: [
    { value: "6", label: "salones principales" },
    { value: "20+", label: "libros y manuscritos" },
    { value: "4", label: "rutas de lectura" },
  ],
  invitations: [
    {
      code: "Ruta I",
      title: "Aprender un lenguaje",
      text: "Empieza por JavaScript o Python, toma notas de sus origenes y salta despues a herramientas que lo vuelven oficio.",
      href: "/ala/left-wing",
    },
    {
      code: "Ruta II",
      title: "Construir interfaces",
      text: "Recorre frameworks, estilos, componentes y patrones visuales para transformar ideas en pantallas usables.",
      href: "/ala/right-wing",
    },
    {
      code: "Ruta III",
      title: "Abrir archivos raros",
      text: "Entra al sector restringido para temas que conectan tecnologia con criterio: IA, arquitectura y decisiones.",
      href: "/ala/restricted-section",
    },
    {
      code: "Ruta IV",
      title: "Guardar hallazgos",
      text: "Usa el archivo como memoria: recursos, documentacion, cursos y enlaces que conviene volver a consultar.",
      href: "/ala/grand-archive",
    },
  ],
  quotes: [
    "Un buen programador no solo escribe instrucciones: aprende a dejar mapas para su yo futuro.",
    "Cada tecnologia entra como herramienta y termina como una forma nueva de pensar problemas.",
    "La biblioteca no premia la prisa; premia volver, comparar y conectar lo que antes parecia separado.",
  ],
  featuredShelves: [
    {
      number: "01",
      title: "Mesa de inicio",
      description: "Lecturas cortas para elegir un camino antes de perderse felizmente entre estanterias.",
      meta: [
        { label: "Ideal", value: "primer recorrido" },
        { label: "Tiempo", value: "15 minutos" },
      ],
      href: "/mapa",
    },
    {
      number: "02",
      title: "Vitrina de fundamentos",
      description: "Lenguajes, web, bases de datos y control de versiones: el esqueleto que sostiene casi todo.",
      meta: [
        { label: "Ala", value: "izquierda" },
        { label: "Orden", value: "de base a practica" },
      ],
      href: "/ala/left-wing",
    },
    {
      number: "03",
      title: "Gabinete de creacion",
      description: "Diseno, frontend y experiencias visuales para que la tecnica tambien tenga presencia.",
      meta: [
        { label: "Ala", value: "derecha" },
        { label: "Foco", value: "interfaces" },
      ],
      href: "/ala/right-wing",
    },
  ],
  manuscriptCards: [
    {
      label: "Manuscrito activo",
      title: "Diario de aprendizajes",
      text: "Anota que estas estudiando, que recurso funciono y que pregunta queda abierta para la siguiente sesion.",
      links: [{ label: "Ir al mapa", href: "/mapa" }],
    },
    {
      label: "Ritual del salon",
      title: "Leer, probar, resumir",
      text: "Cada libro invita a tres pasos: entender la idea, tocar codigo real y dejar una sintesis propia.",
      links: [{ label: "Ver libros", href: "/ala/left-wing" }],
    },
    {
      label: "Llave maestra",
      title: "Agregar mas contenido",
      text: "Edita grandHallData.js y suma tarjetas, citas, rutas o manuscritos. El salon crece solo desde los datos.",
      links: [{ label: "Abrir archivo", href: "/mapa" }],
    },
  ],
  curatorPicks: [
    {
      label: "Hoy conviene mirar",
      title: "JavaScript",
      subtitle: "El idioma vivo de la web",
      text: "Una primera parada perfecta para entender eventos, estado, componentes y la web moderna.",
      href: "/libro/javascript",
    },
    {
      label: "Para ordenar proyectos",
      title: "TypeScript",
      subtitle: "JavaScript con memoria y contrato",
      text: "El volumen que convierte ideas grandes en codigo mas claro y mantenible.",
      href: "/libro/typescript",
    },
    {
      label: "Para pensar rapido",
      title: "Python",
      subtitle: "Claridad para pensar sistemas",
      text: "Una puerta amable hacia automatizacion, datos, backend y prototipos inteligentes.",
      href: "/libro/python",
    },
  ],
};
