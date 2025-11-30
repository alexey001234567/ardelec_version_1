import logoHorizontal from '../assets/logo_horizontal_red.svg';
 
 /* eslint-disable no-unused-vars */

 
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useTrail, animated, useSpring } from "react-spring";
import logo from "../assets/logo_horizontal_red.svg";


 const socialUrls = [
  "http://www.facebook.com/",
  "http://www.twitter.com/",
  "http://www.linkedin.com/",
  
];

  
export function SocialIcons() {
  return (
    <div className="flex gap-2">
      {socialUrls.map((url) => (
        <SocialIcon
          key={url}
          url={url}
          fgColor="#4B5563"
          bgColor="transparent"
          style={{ height: 30, width: 30 }}
        />
      ))}
    </div>
  );
}

 export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">

     
      <div className="container mx-auto pb-7 pt-7 ">
        {/* MAIN CONTACT BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="main_contact">

          {/* COLUMN 1 — LOGO */}
          <div className="logo_footer_1">
            <div>
              <img
                src={logoHorizontal}
                alt="Ardelec logotype"
                className="h-12 mb-4 mx-auto"
              />
              <p className="text-gray-500 text-base text-center">
                considering the energy
              </p>
            </div>
            
            <div>
              <img
                src={logoHorizontal}
                alt="Ardelec logotype"
                className="h-12 mb-4 mx-auto"
              />
              <p className="text-gray-500 text-base text-center">
                considering the energy
              </p>
            </div>

          </div>

          


          {/* COLUMN 2 — CONTACT BLOCKS VERTICAL */}
          <div className="flex flex-col items-center justify-center gap-6 w-full">

              <h3 className="font-semibold text-gray-700 text-base">Contact Us</h3>


            {/* BLOCK #1 */}
            <div className="border border-black/50 rounded-[5px] p-4 text-sm space-y-4 w-full max-w-[50vw] text-center">

              <div className="flex items-start gap-3 justify-center">
                <svg className="w-4 h-4 text-gray-700 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="text-gray-700 text-left">
                  <p>ARDELEC INDUSTRIAL SOLUTIONS LTD</p>
                  <p>128, City Road, London, EC1V 2NX, UK</p>
                  <p>Company Reg. Number: 14794597</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <svg className="w-4 h-4 text-gray-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+442036933963" className="text-gray-700 hover:text-[#C41230] transition">+44 203 693 3963</a>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <svg className="w-4 h-4 text-gray-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@ardelecindustrial.com" className="text-gray-700 hover:text-[#C41230] transition">info@ardelecindustrial.com</a>
              </div>
            </div>


            {/* BLOCK #2 */}
            <div className="border border-black/50 rounded-[5px] p-4 text-sm space-y-4 w-full max-w-[50vw] text-center">
              <h3 className="text-gray-700 text-base font-normal">
                Meta FX Global Software and Trade Ltd
              </h3>

              <div className="flex items-start gap-3 justify-center">
                <svg className="w-4 h-4 text-gray-700 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="text-gray-700 text-left">
                  <p>Esentepe, Keskin Kalem street</p>
                  <p>Arya Plaza Nr: 17/2, Istanbul 34394</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <svg className="w-4 h-4 text-gray-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+905353795318" className="text-gray-700 hover:text-[#C41230] transition">+90 535 379 53 18</a>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <svg className="w-4 h-4 text-gray-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:sales@ardelecindustrial.com" className="text-gray-700 hover:text-[#C41230] transition">sales@ardelecindustrial.com</a>
              </div>
            </div>

          </div>

        </div>
      </div>


  <div className="flex justify-center items-center">
    <p className="text-gray-700/50">
      ARDELEC © 2025. All Rights Reserved.
    </p>
 
  </div>


  <div className="flex justify-center items-center">
 
    <div>
       <SocialIcons />
    </div>
  </div>
    <div className="invisible pb-7 w-full">
      
    </div>
 
    </footer>
  );
}




