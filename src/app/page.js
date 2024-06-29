import Hero from "@/components/Home/Hero";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import LifePathCalculator from "@/components/Lifepath/Lifepath";
import Footer from "@/components/footer/Footer";
import Premium from "@/components/Premium/Premium";
import Othercalc from "@/components/Othercalc/Othercalc";
import { amarante, anteroly } from "@/styles/fonts";
import Half from "@/components/Half/Half";
import Cards from "@/components/Cards/Cards";
export default function Home() {
  return (
    <div className={`w-full bg-img ${amarante.className}`}>
      <div className="bgimg">
        <Hero />
        <Half />
      </div>
      <div className=" bg-white h-72 text-white ">
        <div
          className=" text-white 
      relative -top-3/4 left-0 w-full h-full
      flex justify-center items-center flex-col gap-20
       "
        >
          <h1 className="text-6xl font-bold w-1/2 text-center ">
            Discover Our Free Numerology Calculators
          </h1>
          <LifePathCalculator />
        </div>
      </div>

      <div className="bg-white text-white overflow-hidden">
        <Othercalc />
        <div className=" flex justify-center items-center text-white py-4  ${anteroly.className} ">
          <div className="w-[30%] overflow-hidden">
            <img
              src="/main.svg"
              alt="Chakra"
              className=" w-full h-[500px] rotate-ch relative -left-1/2  "
            />
          </div>
          <Cards />
        </div>
        <Premium />
      </div>

      <Footer />
    </div>
  );
}
