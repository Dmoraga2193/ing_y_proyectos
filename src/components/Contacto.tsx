import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactSection14() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Conta
          <span className="bg-gradient-to-r from-green-200 via-sky-500 to-blue-600 text-transparent bg-clip-text">
            ctanos
          </span>
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Te responderemos lo más pronto posible.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          {/* Aquí ajustamos el margin-top para que el mapa se alinee con el formulario */}
          <div className="mt-4 lg:mt-0 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.5409697596277!2d-70.70244289437535!3d-33.44173768915115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c46fa46fbd57%3A0xff601560cbb5e0e7!2sFerreteria%20Manquehue%20Limitada!5e0!3m2!1ses-419!2scl!4v1724950984850!5m2!1ses-419!2scl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] rounded-lg shadow-lg"
            ></iframe>
          </div>
          <form action="#" className="flex flex-col gap-4 lg:max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium"
                >
                  Nombre
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Nombre"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium"
                >
                  Apellidos
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Apellidos"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium"
              >
                Correo Electronico
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="nombre@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium"
              >
                Consulta
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Consulta"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-green-400 to-blue-700  rounded-md">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection14;
