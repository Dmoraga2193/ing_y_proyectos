import React from "react";
import "aos/dist/aos.css"; // Importación de los estilos de AOS

const people = [
  {
    name: "Ricardo Cabrera",
    role: "Director General /CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
  },
  {
    name: "Manuel Cabrera",
    role: "Director de Operaciones /COO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
  },
  {
    name: "Ignacio Cabrera",
    role: "Director de Finanzas /CFO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
  },
  {
    name: "Guillermo Cabrera",
    role: "Director de Tecnología /CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
  },
];

const Staff = () => {
  return (
    <div className="bg-cyan-950 py-24 sm:py-32 ">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2
            data-aos="fade-down-right"
            className="text-3xl font-bold tracking-tight text-cyan-100 sm:text-4xl"
          >
            Conozca a nuestros dirigentes
          </h2>
          <p
            data-aos="fade-up-right"
            className="mt-6 text-lg leading-8 text-cyan-50"
          >
            En IngProtec, contamos con un equipo de profesionales apasionados y
            dedicados. Cada miembro aporta su experiencia y creatividad para
            garantizar los mejores resultados, trabajando juntos para superar
            las expectativas en cada proyecto.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                  data-aos="flip-left"
                />
                <div>
                  <h3
                    data-aos="flip-down"
                    className="text-base leading-7 tracking-tight text-sky-50"
                  >
                    {person.name}
                  </h3>
                  <p
                    data-aos="flip-down"
                    className="text-sm font-semibold leading-6 text-indigo-50"
                  >
                    {person.role}
                  </p>
                  <p
                    data-aos="flip-down"
                    className="text-sm  leading-6 text-teal-200"
                  >
                    {person.email}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Staff;
