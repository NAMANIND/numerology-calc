import * as React from "react";
import { anteroly } from "@/styles/fonts";

function Premium() {
  return (
    <div className="flex flex-col p-28 text-w">
      <div className="self-center text-5xl tracking-tighter leading-10 text-center text-black max-md:max-w-full max-md:text-4xl">
        Premium Numerology Services
      </div>
      <div
        className={`mt-20 w-full max-md:mt-10 max-md:max-w-full ${anteroly.className} `}
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-9 py-12 my-auto w-full text-3xl tracking-wide leading-8 text-center text-white border border-black border-solid shadow-ext rounded-[36px] max-md:px-5 max-md:mt-10 bg-[linear-gradient(180deg,#9E51FF_0%,#7200FF_100%)]">
              <div>Numerology Lucky Name Change</div>
              <div className="shrink-0 mt-72 h-12 bg-white rounded-3xl border-2 border-violet-200 border-solid shadow-2xl max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 py-14 w-full text-xl tracking-wide leading-5 text-center text-white border border-black border-solid shadow-ext rounded-[36px] max-md:px-5 max-md:mt-10 bg-[--pr]">
              <div className="text-4xl tracking-wide leading-10">
                NUMEROLOGY BUNDLE
              </div>
              <div className="mt-7">Lucky Name + Number Change </div>
              <div className="justify-center items-center px-16 py-5 mt-72 text-violet-800 bg-white rounded-3xl border-2 border-violet-600 border-solid shadow-2xl max-md:px-5 max-md:mt-10">
                Book Now
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-9 py-12 my-auto w-full text-3xl tracking-wide leading-8 text-center text-white border border-black border-solid shadow-ext bg-[linear-gradient(180deg,#9E51FF_0%,#7200FF_100%)] rounded-[36px] max-md:px-5 max-md:mt-10">
              <div>Numerology Lucky Number Change</div>
              <div className="shrink-0 mt-72 h-12 bg-white rounded-3xl border-2 border-violet-200 border-solid shadow-2xl max-md:mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
