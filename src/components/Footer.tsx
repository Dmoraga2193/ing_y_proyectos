import { Typography } from "@material-tailwind/react";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full p-8">
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Ing. Protec SPA. Todos los derechos reservados.
      </Typography>
    </footer>
  );
}
