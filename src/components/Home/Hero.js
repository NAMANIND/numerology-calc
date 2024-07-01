"use client";
// components/Hero.js
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  const targetRef = useRef(null);

  // Using useScroll to track scrollYProgress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Animating opacity, scale, and position based on scrollYProgress
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.51, 0.6, 1],
    [0, 0, 0.2, 0.5, 1]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );
  const display1 = useTransform(scrollYProgress, (pos) => {
    pos > 0.4 ? "none" : "flex";
  });

  const display2 = useTransform(scrollYProgress, (pos) =>
    pos > 0.45 ? "flex" : "none"
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.45, 0.65],
    ["-100%", "0%", "25%"]
  );
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 0]);

  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.41],
    [1, 1, 0.5, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.65, 1],
    [0, 0.8, 1, 1]
  );

  const rotate = useTransform(scrollYProgress, [0, 0.45, 0.65], [0, 180, 360]);

  // Update mouse position effect
  //   useEffect(() => {
  //     const updateMousePosition = (ev) => {
  //       if (!targetRef.current) return;
  //       const { clientX, clientY } = ev;
  //       targetRef.current.style.setProperty("--x", `${clientX}px`);
  //       targetRef.current.style.setProperty("--y", `${clientY}px`);
  //     };

  //     window.addEventListener("mousemove", updateMousePosition);

  //     return () => {
  //       window.removeEventListener("mousemove", updateMousePosition);
  //     };
  //   }, []);

  return (
    <motion.section
      ref={targetRef}
      className={`relative w-full h-[200vh] flex justify-between text-white`}
    >
      <motion.div
        className=" sticky top-10 left-0 w-full h-[100vh] overflow-hidden"
        // style={{ position }}
      >
        <motion.div className="h-full w-[80vw] relative  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <motion.div
            initial={{ opacity: 1, rotate: 0 }}
            style={{
              opacity: opacity2,
              display: display1,
            }}
            className="w-full h-full  absolute right-1/4  transform -translate-y-1/2 -translate-x-1/2 flex justify-center items-center"
          >
            <h1 className="text-6xl font-bold w-1/2 ">
              Discover the hidden power of numbers and unlock your potential
              with AstroWins
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}
            style={{ right: x }}
            className="w-full h-full absolute  -translate-y-1/2 -translate-x-1/2  rotate-ch   flex justify-center items-center      
            "
          >
            <img
              src="./chakra.png"
              alt="Circular Image"
              className="w-[500px] h-[500px] rounded-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, rotate: 0 }}
            style={{
              opacity: opacity3,
              display: display2,
            }}
            className="w-full h-full  absolute  left-1/4 transform -translate-y-1/2 -translate-x-1/2 flex justify-center items-center"
          >
            <h1 className="text-6xl text-right font-bold w-1/2">
              Understand the profound influence of numbers on your destiny.
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
