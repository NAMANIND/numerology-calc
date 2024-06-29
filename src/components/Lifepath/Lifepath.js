// components/LifePathCalculator.js
"use client";
import React, { useState } from "react";
import styles from "./LifePathCalculator.module.css";
import AnimatedSvg from "./AnimatedSvg";
import { anteroly } from "@/styles/fonts";

const LifePathCalculator = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [lifePath, setLifePath] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const handleCalculateOrReset = () => {
    if (lifePath) {
      handleReset();
    } else {
      handleCalculate();
    }
  };

  const handleCalculate = () => {
    if (!date || !month || !year) {
      alert("Please fill in all fields");
      return;
    }
    const lifePathNumber = calculateLifePathNumber(date, month, year);
    setLifePath(lifePathNumber);
    setIsAnimating(false);
  };

  const calculateLifePathNumber = (date, month, year) => {
    const sum = (num) =>
      num.split("").reduce((acc, curr) => acc + parseInt(curr), 0);
    const reduceToOneDigit = (num) => {
      while (num > 9) num = sum(num.toString());
      return num;
    };
    return reduceToOneDigit(sum(date) + sum(month) + sum(year));
  };

  const handleReset = () => {
    setIsAnimating(true);
    setLifePath(null);
    setDate("");
    setMonth("");
    setYear("");
  };

  return (
    <div
      className={`w-full h-fit flex flex-col items-center justify-center  ${anteroly.className} `}
    >
      <div className="flex flex-col w-2/3 items-center justify-center h-fit p-8 bg-white text-black rounded-[24px] shadow-ext">
        <h2 className="mb-6 text-2xl font-bold">Find Your Life Path Number</h2>
        <div className="flex items-center justify-center  w-full">
          <div className="w-1/2 flex flex-col items-center justify-center  border-r-1 pr-12 border-[--pr]">
            <div className="flex w-full justify-center flex-col gap-4 mb-6">
              <label htmlFor="date">Date</label>
              <select
                value={date ?? ""}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border-2  border-[--pr] rounded-lg"
              >
                <option value="">Day</option>
                {[...Array(31).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <label htmlFor="month">Month</label>
              <select
                value={month ?? ""}
                onChange={(e) => setMonth(e.target.value)}
                className="p-2 border-2 border-[--pr] rounded-lg"
              >
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((monthName, index) => (
                  <option key={index} value={index + 1}>
                    {monthName}
                  </option>
                ))}
              </select>
              <label htmlFor="year">Year</label>
              <select
                value={year ?? ""}
                onChange={(e) => setYear(e.target.value)}
                className="p-2 border-2 border-[--pr] rounded-lg"
              >
                <option value="">Year</option>
                {Array.from(
                  { length: 100 },
                  (v, k) => new Date().getFullYear() - k
                ).map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleCalculateOrReset}
              className="px-4 py-2 text-white w-full rounded-[24px] bg-purple-600 hover:bg-purple-700"
            >
              {lifePath ? "Reset" : "Find my path"}
            </button>
          </div>

          <div className="text-xl font-bold w-1/2 flex ml-0 flex-col items-center justify-center  pl-12">
            <AnimatedSvg isAnimating={isAnimating} onReset={lifePath} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifePathCalculator;
