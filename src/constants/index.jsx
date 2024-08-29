import { Wrench } from "lucide-react";
import { Target } from "lucide-react";
import { Cog } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Earth } from "lucide-react";
import { Handshake } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Inicio", href: "#carusel" },
  { label: "Quienes Somos", href: "#quienessomos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Wrench />,
    text: "Mejora",
    description:
      "Garantizamos el cumplimiento de los contratos y promovemos la mejora continua en la gestión de calidad.",
  },
  {
    icon: <Target />,
    text: "Objetivos",
    description:
      "Definimos y evaluamos periódicamente los objetivos de calidad.",
  },
  {
    icon: <Cog />,
    text: "Optimización",
    description:
      "Optimizamos los procesos organizacionales para maximizar la eficiencia.",
  },
  {
    icon: <ShieldCheck />,
    text: "Seguridad",
    description:
      "Fomentamos un entorno laboral óptimo, enfocándonos en la capacitación y el desarrollo del personal para asegurar la calidad del trabajo.",
  },
  {
    icon: <Earth />,
    text: "Sostenibilidad",
    description:
      "Implementamos estrategias medioambientales para cumplir con la normativa y minimizar el impacto ambiental.",
  },
  {
    icon: <Handshake />,
    text: "Colaboración",
    description:
      "Fortalecemos la colaboración con la comunidad y los usuarios locales del proyecto.",
  },
];

export const checklistItems = [
  {
    title: "Consultoría en Mejora de Procesos",
    description:
      "Nos especializamos en evaluar y ajustar los procesos internos de su empresa para implementar mejoras continuas. Nuestro objetivo es optimizar la eficiencia operativa y reducir costos, asegurando que su empresa funcione con el máximo rendimiento.",
  },
  {
    title: "Definición y Gestión de Objetivos Estratégicos",
    description:
      "Nos encargamos de ayudarle a establecer metas claras y alcanzables que alineen a toda su organización. Gestionamos el progreso hacia estos objetivos para garantizar que se logren resultados específicos y satisfactorios.",
  },
  {
    title: "Optimización de Recursos y Procesos",
    description:
      "Evaluamos y ajustamos los recursos y procesos dentro de su empresa para maximizar la eficiencia. Nuestro enfoque está en mejorar la productividad y reducir el desperdicio, creando un entorno de trabajo más ágil y eficaz.",
  },
  {
    title: "Programas de Capacitación y Desarrollo Profesional",
    description:
      "Implementamos programas de formación continua diseñados para desarrollar las habilidades técnicas y blandas de su personal. Ofrecemos talleres, cursos y certificaciones para asegurar que su equipo esté preparado para enfrentar los desafíos del mercado.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
