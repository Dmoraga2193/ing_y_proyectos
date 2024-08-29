import { features } from "../constants";

const Caracteristicas = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-sky-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          CARACTERÍSTICAS
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt10 lg:mt-10 tracking wide">
          Soluciones tecno
          <span className="bg-gradient-to-r from-green-200 via-sky-500 to-blue-600 text-transparent bg-clip-text">
            lógicas a tu alcance
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-sky-500 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caracteristicas;
