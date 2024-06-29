import { Amarante } from "next/font/google";
// export const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

// export const ephesis = Ephesis({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
// });

// export const anton = Anton({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
//   variable: "--anton-font",
// });

// export const work_sans = Work_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "500", "600", "700", "800"],

//   variable: "--work-sans-font",
// });

export const amarante = Amarante({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--amarante-font",
});

// local font ttf Antroly

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const anteroly = localFont({ src: "../../public/fonts/anteroly.ttf" });

export { anteroly };
