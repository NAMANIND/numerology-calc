// components/Cards.js

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { amarante, anteroly } from "@/styles/fonts";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardCount = 10; // Total number of cards
  const cardsToShow = 4.5; // Number of cards to show in the viewport
  const cards = Array.from({ length: cardCount }, (_, i) => i + 1); // Array of cards

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardCount - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardCount - 1 ? 0 : prevIndex + 1
    );
  };

  // Generate the visible items in the viewport including duplicates for infinite scrolling effect
  const visibleItems = [...cards, ...cards].slice(
    currentIndex,
    currentIndex + Math.ceil(cardsToShow)
  );

  // Update currentIndex to maintain the infinite scroll effect
  useEffect(() => {
    if (currentIndex >= cardCount) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(cardCount - 1);
    }
  }, [currentIndex, cardCount]);

  const cardVariants = {
    enter: { opacity: 0, x: 20, scale: 1 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -20, scale: 1 },
    enter2: { opacity: 0, x: -20 },
    exit2: { opacity: 0, x: 20 },
  };

  return (
    <div className="relative w-full h-1/2">
      <div className=" absolute top-0 h-full w-full justify-between mb-4">
        <div
          onClick={handlePrev}
          className="bg-transparent hover:bg-black/40 
          transition-all duration-500 ease-in-out
          text-transparent hover:text-white
          p-2 rounded w-1/6  z-30 
          flex justify-center items-center
          absolute -left-1/4 h-full 
          cursor-pointer
          
          "
        >
          Previous
        </div>
        <div
          onClick={handleNext}
          className="bg-transparent hover:bg-black/40 text-transparent hover:text-white transition-all duration-500 ease-in-out p-2 rounded  w-1/12 z-30 flex h-full justify-center items-center absolute right-0 cursor-pointer"
        >
          Next
        </div>
      </div>
      <div className="cards flex justify-center h-full p-12">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleItems.map((card, index) => {
            const isFirstElement = index === 0;
            const islastelement = false;
            return (
              <motion.div
                key={`${card}-${index}-${currentIndex}`}
                className="flip-card card relative cursor-pointer w-24 h-36 m-0 mx-2"
                variants={cardVariants}
                transition={{ duration: 0.2 }}
                initial={isFirstElement ? "enter" : "enter2"}
                animate="center"
                exit={islastelement ? "exit" : "exit2"}
                onClick={() => {
                  window.location.href = `/card/${card}`;
                }}
                // change enter and exit on the basis of the direction of the card
              >
                <div className="flip-card-inner card-face absolute top-0 right-0 bottom-0 left-0 pointer-events-none transition-transform duration-[800ms]">
                  <div
                    className={`flip-card-front text-white card-label h-full text-4xl pt-16 ${amarante.className}`}
                  >
                    {card}
                  </div>
                  <div className="flip-card-back flex flex-col justify-between items-center ">
                    <h3 className="absolute top-[24.5%] right-5 text-2xl ">
                      {card}
                    </h3>
                    <h3 className="text-[#DFCAFF] text-2xl ">
                      {cardData[card - 1].description}
                    </h3>

                    <div
                      className={` ${anteroly.className} text-center text-[--pr] bg-white rounded-lg w-3/4  absolute bottom-10 `}
                    >
                      Learn More
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cards;

const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Card 4",
    description: "Description 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Card 5",
    description: "Description 5",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Card 6",
    description: "Description 6",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Card 7",
    description: "Description 7",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Card 8",
    description: "Description 8",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Card 9",
    description: "Description 9",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Card 10",
    description: "Description 10",
    image: "https://via.placeholder.com/150",
  },
];
