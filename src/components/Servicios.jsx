import { CheckCircle2 } from "lucide-react";
import camionImg from "../assets/camion.jpg";
import { checklistItems } from "../constants";

const Servicios = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Nuestros
        <span className="bg-gradient-to-r from-green-200 via-sky-500 to-blue-600 text-transparent bg-clip-text">
          {" "}
          servicios
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-8 w-full lg:w-1/2  ">
          <img
            className="rounded-l-lg gradient-mask-r-0"
            src={camionImg}
            alt=""
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-sky-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2></CheckCircle2>
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
