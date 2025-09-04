import montajes from "../assets/servicios/montajeGlobo.jpeg";
import celebraciones from "../assets/servicios/celebraciones.jpeg";
import papeleria from "../assets/servicios/papeleria.jpg";
import detalles from "../assets/servicios/detalles.png";



export const servicios = [
  {
    image: montajes,
    alt: "Montajes de mesas",
    title: "Montajes de mesas",
    desc:
      "Creamos mesas decorativas a medida de diferentes tamaños. Cuidamos globos, dulces, temática y complementos para que sea el centro del evento.",
    tags: ["Montaje S", "Montaje M", "Montaje L", "Montaje XL", "Mesas infantiles"],
    objectPos: "object-center",
  },
  {
    image: celebraciones,
    alt: "Decoración de celebraciones",
    title: "Celebraciones",
    desc:
      "Diseñamos ambientes únicos y personalizados para que cada momento se convierta en un recuerdo inolvidable.",
    tags: ["Revelaciones de sexo", "Babyshowers", "Cumpleaños", "Comuniones"],
    objectPos: "object-center",
  },
  {
    image: papeleria,
    alt: "Papelería personalizada",
    title: "Papelería",
    desc:
      "Botellas personalizadas, manteles, etiquetas, cartelería y decoración temática para aportar un toque exclusivo a tu celebración.",
    tags: ["Pack S", "Pack M", "Pack L", "Pack XL"],
    objectPos: "object-center",
  },
  {
    image: detalles,
    alt: "Detalles y regalos personalizados",
    title: "Detalles y regalos",
    desc:
      "Detalles únicos para el Día de la Madre, del Padre, Navidad u otras fechas. Pequeños recuerdos que transmiten cariño.",
    tags: ["Tazas", "Botellas", "Cajas regalo", "Vinilos"],
    objectPos: "object-center",
  },
];
