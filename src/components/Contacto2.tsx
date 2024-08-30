import React, { useState } from "react";
import Swal from "sweetalert2";

import emailjs from "emailjs-com";

const Contacto2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kn9fgmm", // Reemplaza con tu Service ID de EmailJS
        "template_9yg32x7", // Reemplaza con tu Template ID de EmailJS
        {
          fullName: formData.fullName, // Nombre de la variable en el template
          street: formData.street,
          city: formData.city,
          postcode: formData.postcode,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "6Zetoq5sEF9O3RElC" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "Consulta Enviada!",
            text: "Te responderemos lo antes posible!",
            icon: "success",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal, intenta nuevamente!",
          });
        }
      );
  };

  return (
    <div className="mt-20 grid md:grid-cols-2 items-center overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-gray-900 my-6">
      <div className="p-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-white">
          Contactate con{" "}
          <span className="bg-gradient-to-r from-green-200 via-sky-500 to-blue-600 text-transparent bg-clip-text">
            Nosotros
          </span>
        </h2>
        <p className="text-sm  mt-4 leading-relaxed mb-10 font-normal lg:mb-15 mx-auto max-w-3xl !text-gray-500">
          Have a specific inquiry or looking to explore new opportunities? Our
          experienced team is ready to engage with you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mt-8">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
            />
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Street"
              className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Postcode"
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
            </div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No."
              className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Message"
              className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="z-10 relative h-full max-md:min-h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.5409697596277!2d-70.70244289437535!3d-33.44173768915115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c46fa46fbd57%3A0xff601560cbb5e0e7!2sFerreteria%20Manquehue%20Limitada!5e0!3m2!1ses-419!2scl!4v1724950984850!5m2!1ses-419!2scl"
          className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto2;
