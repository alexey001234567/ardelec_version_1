import specialPowerSupply_1 from '../../assets/special_power_supply_1.webp'
import specialPowerSupply_2 from '../../assets/special_power_supply_2.webp'
import specialPowerSupply_3 from '../../assets/special_power_supply_3.webp'

import logoHorizon1 from "../../assets/certificates/elektronik-fiber-optik1.webp";
import logoHorizon2 from "../../assets/certificates/elektronik-fiber-optik2.webp";
import logoHorizon3 from "../../assets/certificates/ISO-certificate.webp";
import logoHorizon4 from "../../assets/certificates/ISO-certificate-thumb2.webp";


 


export default function SpecialPowerSupply() {

  const openImage = () => {
    window.open(logoHorizon1, "_blank");
  };

  const openImage2 = () => {
    window.open(logoHorizon3, "_blank");
  };


  return (



    
     <div>

    <section className="container max-w-[1320px] mx-auto px-6 py-6">
      <p className="text-gray-600 text-md">Ardelec</p>
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Special Power Supply</h1>

      <div className="grid md:grid-cols-3 gap-10 items-start">
          <img 
            src={specialPowerSupply_1} alt="Special power supply image" className="w-full h-auto rounded object-cover shadow-md"/>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            High-Performance Industrial Rectifier Systems
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Rectifier systems used for production of hydrogen, metal extraction, refining and heat treatments are designed to operate in the most challenging operating conditions, maintaining highest efficiency. High-current busduct systems with high current switching devices.
          </p>
        </div>
      </div>

      <div className="my-6 border-t border-gray-300"></div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <img src={specialPowerSupply_2} alt="Special power supply image" className="w-full h-auto rounded object-cover shadow-md"/>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Advanced Power Quality and Stabilization Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Innovative power quality equipment offers the right load compensating performance for large and medium size industrial plants: excellent voltage stabilization and power factor correction provide the best preconditions for stable production, securing power quality parameters for electrical power supply.
          </p>
        </div>
      </div>

      <div className="my-6 border-t border-gray-300"></div>
      
      <div className="grid md:grid-cols-3 gap-10 items-start">
          <img 
            src={specialPowerSupply_3} alt="Special power supply" className="w-full h-auto rounded object-cover shadow-md"/>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Digital Fiber-Optic Measurement Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Flexible electronic fiber optical current transformers. The product line includes fiber optical instrument transformers for current measurement and electronic voltage transformers that enable solutions for digital smart grids and power demanding industries.
          </p>
        </div>
      </div>


           <section className="pt-15">

            <div className="flex item-center justify-center p-1">
              <h1 className="text-3xl font-bold mb-8 text-gray-700">Certificates</h1>
           </div>

 
            <div className="flex items-center justify-center p-1 mx-auto w-full max-w-[50%] h-auto  ">
                  <img
                    src={logoHorizon2}
                    alt="Special power supply image"
                    onClick={openImage}
                    className=" m-2 border border-black/30 rounded-[5px] cursor-pointer transition-all duration-100 ease-in-out hover:brightness-75 hover:scale-105"
                  />

                  <img
                    src={logoHorizon4}
                    alt="Special power supply image"
                    onClick={openImage2}
                    className="m-2 border border-black/30 rounded-[5px] cursor-pointer transition-all duration-100 ease-in-out hover:brightness-75 hover:scale-105"
                  />

            </div>

           </section>


     
    </section>




    </div>

  );
};
