import * as React from "react";
import { anteroly, amarante } from "@/styles/fonts";

function Othercalc() {
  return (
    <div className={anteroly.className}>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 p-28">
        <div className="flex flex-col pr-12 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-16 py-10 w-full text-center text-black bg-white rounded-3xl shadow-ext leading-[100%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/name-num-cal.png"
              className="self-center max-w-full aspect-square w-[180px]"
            />
            <div className={`mt-8 text-3xl ${amarante.className}  `}>
              Name Numerology Calculator
            </div>
            <div className="mt-7 text-xl leading-5">
              Uncover your innate abilities and talents with the Name Numerology
              Calculator.
            </div>
            <div className="flex gap-3 px-16 py-4 mt-8 text-xl  text-white bg-violet-800 rounded-3xl max-md:px-5">
              <div className="flex-auto">Find my name numbers</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ea8c8a1f328681c04b16b609cbf5089553d15339488e3a08177c9c1a777b1f3?apiKey=5e27b1defd60460eaa6dca842133145f&"
                className="shrink-0 self-start w-4 aspect-[0.88]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-16 py-10 w-full text-center text-black bg-white rounded-3xl shadow-ext leading-[100%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/lo-shu.png"
              className="self-center max-w-full aspect-square w-[180px]"
            />
            <div className={`mt-8 text-3xl ${amarante.className}  `}>
              Lo Shu Grid Calculator
            </div>
            <div className="mt-7 text-xl leading-5">
              Uncover your innate abilities and talents with the Name Numerology
              Calculator.{" "}
            </div>
            <div className="flex gap-3 px-16 py-4 mt-8 text-xl  text-white bg-violet-800 rounded-3xl max-md:px-5">
              <div className="flex-auto">Reveal my chart</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ea8c8a1f328681c04b16b609cbf5089553d15339488e3a08177c9c1a777b1f3?apiKey=5e27b1defd60460eaa6dca842133145f&"
                className="shrink-0 self-start w-4 aspect-[0.88]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Othercalc;
