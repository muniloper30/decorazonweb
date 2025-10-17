import montajes from "../assets/servicios/montajeGlobo.webp";
import celebraciones from "../assets/servicios/celebraciones.webp";
import papeleria from "../assets/servicios/papeleria.webp";
import detalles from "../assets/servicios/detalles.webp";



export const servicios = [
  {
    image: montajes,
    alt: "Montajes de mesas",
    title: "Montajes de mesas",
    url: "/MontajeMesas",
    desc:
      "Creamos mesas decorativas a medida de diferentes tamaños. Cuidamos cada detalle para lograr una decoración perfecta.",
    tags: ["Montaje S", "Montaje M", "Montaje L", "Montaje XL", "Mesas infantiles"],
    objectPos: "object-center",
  },
  {
    image: celebraciones,
    alt: "Decoración de celebraciones",
    title: "Celebraciones",
    url: "/Celebraciones",
    desc:
      "Diseñamos ambientes únicos y personalizados para que cada momento se convierta en un recuerdo inolvidable.",
    tags: ["Revelaciones de sexo", "Babyshowers", "Cumpleaños", "Comuniones"],
    objectPos: "object-center",
  },
  {
    image: papeleria,
    alt: "Papelería personalizada",
    title: "Papelería",
    url: "/Papeleria",
    desc:
      "Botellas personalizadas, manteles, etiquetas, cartelería y decoración temática para aportar un toque exclusivo a tu celebración.",
    tags: ["Botellas", "Manteles", "Recordatorios", "Chocolatinas"],
    objectPos: "object-center",
  },
  {
    image: detalles,
    alt: "Detalles y regalos personalizados",
    title: "Detalles y regalos",
    url: "/DetallesRegalos",
    desc:
      "Detalles únicos para el Día de la Madre, del Padre, Navidad u otras fechas. Pequeños recuerdos que transmiten cariño.",
    tags: ["Tazas", "Botellas", "Cajas regalo", "Vinilos"],
    objectPos: "object-center",
  },
];
