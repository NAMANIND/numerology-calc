import { motion } from "framer-motion";

const pathColor = "#cdb480";
const shapeColor = "#cdb480";

const mainPathVariant = {
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0,
    },
  },
};

const shapeVariations = {
  transition: {
    delay: 0.2,
    duration: 0.5,
    ease: "easeIn",
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        delay: 2,
        duration: 3,
      },
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
    },
  },
};

const AnimateElement = ({ isAnimating, onReset }) => {
  return (
    <>
      <div className="w-full relative">
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={
            isAnimating ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={
            isAnimating
              ? { duration: 0.3, delay: 0 }
              : { duration: 2, delay: 0.5 }
          }
        >
          <svg
            viewBox="0 0 492 492"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M141.597 353.553C114.341 326.395 97.4159 288.707 97.4159 247.183C97.4159 164.231 164.721 96.9258 247.673 96.9258C330.624 96.9258 397.929 164.231 397.929 247.183C397.929 330.134 330.624 397.439 247.673 397.439C206.345 397.341 168.854 380.613 141.597 353.553Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576V96.9258"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L258.3 119.164"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.577L266.762 142.781"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L286.541 113.555"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578H397.93"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L376.183 258.107"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L352.567 266.471"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L381.792 286.348"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L247.673 397.343"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L237.242 375.892"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L228.878 352.276"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L209.001 381.599"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574H97.5143"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L119.458 237.047"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.573L143.073 228.582"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L113.75 208.805"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576V96.9258"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L258.3 119.164"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.577L266.762 142.781"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L286.541 113.555"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578H397.733"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L376.183 258.107"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L352.567 266.471"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L381.792 286.348"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L247.673 397.343"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L237.242 375.892"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L228.878 352.276"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L209.001 381.599"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574H97.5143"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L119.458 237.047"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.573L143.073 228.582"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L113.75 208.805"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L303.958 107.848"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L305.434 132.348"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L304.45 157.441"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.577L333.773 137.664"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L387.007 303.564"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L362.998 305.237"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L346.171 310.255"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L357.684 333.477"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L191.88 386.613"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L190.109 362.702"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L191.093 337.709"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L161.868 357.389"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.577L108.141 191.391"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L132.643 189.914"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.577L157.637 190.898"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L137.957 161.574"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.577L353.256 140.223"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L345.286 163.348"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.578L334.757 186.078"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L369.394 179.09"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L354.732 352.567"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L332.002 344.99"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L309.271 334.461"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L316.258 369.098"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L142.68 354.535"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L150.355 331.706"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L150.847 315.175"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L125.165 314.585"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.575L140.417 142.09"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.577L163.639 150.062"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.575L186.369 160.59"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L179.383 125.953"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.575L386.122 188.535"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L369.984 206.836"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L351.583 223.859"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.573L386.318 230.648"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L306.614 385.433"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L288.41 369.787"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L271.486 351.386"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L264.696 386.023"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L109.617 306.417"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L125.558 288.213"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L142.975 270.501"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L109.322 262.629"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.575L188.731 108.93"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.576L207.132 125.363"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.574L224.155 143.762"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.771 247.575L230.945 109.027"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M392.419 102.83L443.194 51.957"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M361.62 133.528L380.808 114.34"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M124.082 371.068L134.119 361.031"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M52.0536 443.097L112.471 382.68"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              opacity="0.6"
              d="M247.673 415.15C340.494 415.15 415.74 339.904 415.74 247.083C415.74 154.262 340.494 79.0156 247.673 79.0156C154.852 79.0156 79.6056 154.262 79.6056 247.083C79.6056 339.904 154.852 415.15 247.673 415.15Z"
              stroke="#D4B8FF"
              stroke-width="0.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="4 4"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M134.119 361.03C104.894 331.904 86.7887 291.658 86.7887 247.083C86.7887 158.228 158.817 86.1992 247.673 86.1992C336.528 86.1992 408.557 158.228 408.557 247.083C408.557 335.938 336.528 407.967 247.673 407.967C203.393 407.967 163.245 390.058 134.119 361.03Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.673 144.746L292.937 223.072L338.102 301.301H247.673H157.342L202.507 223.072L247.673 144.746Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              opacity="0.6"
              d="M170.429 293.726L247.673 159.902L325.015 293.726H170.429Z"
              stroke="#D4B8FF"
              stroke-width="0.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="4 4"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M157.342 301.301L247.673 247.574"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M338.004 301.301L247.673 247.574"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.673 144.746V247.18"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M112.471 371.066C82.5575 338.397 64.2551 294.904 64.2551 247.082C64.2551 145.73 146.419 63.6641 247.673 63.6641"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M431.189 247.082C431.189 348.434 349.025 430.5 247.771 430.5C200.146 430.5 156.751 412.394 124.181 382.579"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M392.518 114.242C424.596 149.273 444.276 195.914 444.276 247.181C444.276 355.716 356.306 443.784 247.673 443.784"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M51.168 247.084C51.168 138.548 139.138 50.4805 247.771 50.4805C299.234 50.4805 345.974 70.2589 381.005 102.534"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              opacity="0.6"
              d="M318.127 94.5636C369.886 61.8948 411.902 49.5948 428.63 66.3228C457.462 95.154 399.898 199.458 299.923 299.432C199.949 399.407 95.6448 456.872 66.8136 428.041C50.0856 411.313 62.3856 369.395 95.0544 317.538"
              stroke="#D4B8FF"
              stroke-width="0.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="4 4"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M258.84 71.1983C263.011 69.4811 265 64.7078 263.283 60.5368C261.566 56.3659 256.793 54.3767 252.622 56.0939C248.451 57.8111 246.461 62.5844 248.179 66.7553C249.896 70.9263 254.669 72.9155 258.84 71.1983Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M255.742 67.2083C253.774 67.2083 252.298 65.6339 252.298 63.7643C252.298 61.7963 253.872 60.3203 255.742 60.3203C257.71 60.3203 259.186 61.8947 259.186 63.7643C259.186 65.6339 257.611 67.2083 255.742 67.2083Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M380.808 114.34C379.332 112.864 378.446 110.798 378.446 108.534C378.446 104.008 382.087 100.367 386.613 100.367C391.14 100.367 394.781 104.008 394.781 108.534C394.781 113.061 391.14 116.702 386.613 116.702C384.35 116.8 382.284 115.816 380.808 114.34Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M386.614 121.523C383.17 121.523 379.922 120.145 377.462 117.784C375.002 115.324 373.723 112.077 373.723 108.633C373.723 101.548 379.529 95.7422 386.614 95.7422C393.698 95.7422 399.504 101.548 399.504 108.633C399.504 115.717 393.698 121.523 386.614 121.523ZM386.614 105.09C384.646 105.09 383.17 106.665 383.17 108.534C383.17 109.42 383.563 110.305 384.154 110.994C384.842 111.683 385.728 111.978 386.614 111.978C388.582 111.978 390.058 110.404 390.058 108.534C390.058 106.665 388.483 105.09 386.614 105.09Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M112.471 382.68C110.995 381.204 110.109 379.137 110.109 376.874C110.109 372.348 113.75 368.707 118.277 368.707C122.803 368.707 126.444 372.348 126.444 376.874C126.444 381.401 122.803 385.041 118.277 385.041C116.013 385.14 113.947 384.156 112.471 382.68Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M118.277 389.863C114.833 389.863 111.586 388.485 109.126 386.124C106.666 383.664 105.386 380.416 105.386 376.972C105.386 369.888 111.192 364.082 118.277 364.082C125.362 364.082 131.167 369.888 131.167 376.972C131.167 384.057 125.362 389.863 118.277 389.863ZM118.277 373.43C116.309 373.43 114.833 375.004 114.833 376.874C114.833 377.76 115.226 378.645 115.817 379.334C116.506 380.023 117.391 380.318 118.277 380.318C120.245 380.318 121.721 378.744 121.721 376.874C121.721 375.004 120.245 373.43 118.277 373.43Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M441.816 48.3153C441.816 45.5601 444.079 43.2969 446.834 43.2969C449.59 43.2969 451.853 45.5601 451.853 48.3153C451.853 51.0705 449.59 53.3337 446.834 53.3337C444.079 53.3337 441.816 51.0705 441.816 48.3153Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M444.276 48.3162C444.276 46.9386 445.457 45.7578 446.834 45.7578C448.212 45.7578 449.393 46.9386 449.393 48.3162C449.393 49.6938 448.212 50.8746 446.834 50.8746C445.457 50.8746 444.276 49.7922 444.276 48.3162Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M43.4928 446.639C43.4928 443.884 45.756 441.621 48.5112 441.621C51.2664 441.621 53.5296 443.884 53.5296 446.639C53.5296 449.395 51.2664 451.658 48.5112 451.658C45.756 451.658 43.4928 449.395 43.4928 446.639Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M45.9528 446.64C45.9528 445.263 47.1336 444.082 48.5112 444.082C49.8888 444.082 51.0696 445.263 51.0696 446.64C51.0696 448.018 49.8888 449.199 48.5112 449.199C47.1336 449.199 45.9528 448.116 45.9528 446.64Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M431.189 246.987C435.699 246.987 439.356 243.33 439.356 238.82C439.356 234.309 435.699 230.652 431.189 230.652C426.678 230.652 423.021 234.309 423.021 238.82C423.021 243.33 426.678 246.987 431.189 246.987Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M431.189 242.263C429.221 242.263 427.745 240.689 427.745 238.819C427.745 236.851 429.319 235.375 431.189 235.375C433.157 235.375 434.633 236.949 434.633 238.819C434.633 240.787 433.058 242.263 431.189 242.263Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M59.1331 258.087C60.1696 253.697 57.4513 249.298 53.0616 248.261C48.6718 247.225 44.273 249.943 43.2364 254.333C42.1999 258.723 44.9182 263.122 49.3079 264.158C53.6977 265.195 58.0965 262.476 59.1331 258.087Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M51.168 259.677C49.2 259.677 47.724 258.103 47.724 256.233C47.724 254.265 49.2984 252.789 51.168 252.789C53.136 252.789 54.612 254.363 54.612 256.233C54.612 258.103 53.0376 259.677 51.168 259.677Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M247.495 445.539C248.535 441.15 245.82 436.749 241.431 435.709C237.042 434.669 232.641 437.383 231.601 441.772C230.561 446.161 233.276 450.562 237.664 451.602C242.053 452.642 246.454 449.928 247.495 445.539Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M239.604 447.13C237.636 447.13 236.16 445.556 236.16 443.686C236.16 441.718 237.734 440.242 239.604 440.242C241.572 440.242 243.048 441.817 243.048 443.686C243.048 445.654 241.474 447.13 239.604 447.13Z"
              stroke="#D4B8FF"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M281.886 256.793C286.408 237.814 274.688 218.763 255.709 214.24C236.73 209.718 217.678 221.437 213.156 240.417C208.634 259.396 220.353 278.447 239.332 282.97C258.312 287.492 277.363 275.773 281.886 256.793Z"
              fill="black"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M246.984 467.398C368.716 467.398 467.4 368.715 467.4 246.982C467.4 125.25 368.716 26.5664 246.984 26.5664C125.252 26.5664 26.568 125.25 26.568 246.982C26.568 368.715 125.252 467.398 246.984 467.398Z"
              stroke="url(#paint0_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M246.984 461.298C365.347 461.298 461.299 365.346 461.299 246.983C461.299 128.62 365.347 32.668 246.984 32.668C128.621 32.668 32.6688 128.62 32.6688 246.983C32.6688 365.346 128.621 461.298 246.984 461.298Z"
              stroke="url(#paint1_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M246.984 26.4688V32.668"
              stroke="url(#paint2_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M227.796 27.3555L228.288 33.4563"
              stroke="url(#paint3_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M208.706 29.8125L209.789 35.9133"
              stroke="url(#paint4_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M189.912 33.9453L191.486 39.9477"
              stroke="url(#paint5_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M171.61 39.7539L173.676 45.5595"
              stroke="url(#paint6_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M153.799 47.1328L156.358 52.7416"
              stroke="url(#paint7_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M136.776 55.9883L139.826 61.3019"
              stroke="url(#paint8_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M120.54 66.3203L124.082 71.3387"
              stroke="url(#paint9_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M105.288 78.0312L109.224 82.7544"
              stroke="url(#paint10_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M91.1184 91.0195L95.448 95.3491"
              stroke="url(#paint11_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M78.1296 105.188L82.7544 109.222"
              stroke="url(#paint12_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M66.42 120.539L71.4384 123.983"
              stroke="url(#paint13_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M56.088 136.676L61.4016 139.825"
              stroke="url(#paint14_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M47.1335 153.797L52.7423 156.355"
              stroke="url(#paint15_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M39.8521 171.512L45.5592 173.677"
              stroke="url(#paint16_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M34.0464 189.91L39.9504 191.485"
              stroke="url(#paint17_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M29.9136 208.707L35.916 209.691"
              stroke="url(#paint18_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M27.3552 227.695L33.456 228.286"
              stroke="url(#paint19_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M26.568 246.984H32.6688"
              stroke="url(#paint20_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M27.3552 266.172L33.456 265.582"
              stroke="url(#paint21_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M29.9136 285.262L35.916 284.18"
              stroke="url(#paint22_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M34.0464 303.957L39.9504 302.383"
              stroke="url(#paint23_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M39.8521 322.359L45.5592 320.293"
              stroke="url(#paint24_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M47.1335 340.07L52.7423 337.512"
              stroke="url(#paint25_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M56.088 357.191L61.4016 354.141"
              stroke="url(#paint26_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M66.42 373.425L71.4384 369.883"
              stroke="url(#paint27_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M78.1296 388.678L82.7544 384.742"
              stroke="url(#paint28_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M91.1184 402.849L95.448 398.52"
              stroke="url(#paint29_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M105.288 415.836L109.224 411.113"
              stroke="url(#paint30_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M120.54 427.546L124.082 422.527"
              stroke="url(#paint31_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M136.776 437.88L139.826 432.566"
              stroke="url(#paint32_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M153.799 446.737L156.358 441.227"
              stroke="url(#paint33_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M171.61 454.114L173.676 448.309"
              stroke="url(#paint34_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M189.912 459.92L191.486 453.918"
              stroke="url(#paint35_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M208.706 464.053L209.789 458.051"
              stroke="url(#paint36_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M227.796 466.613L228.288 460.414"
              stroke="url(#paint37_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M246.984 467.398V461.297"
              stroke="url(#paint38_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M266.172 466.613L265.68 460.414"
              stroke="url(#paint39_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M285.262 464.053L284.179 458.051"
              stroke="url(#paint40_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M304.056 459.92L302.383 453.918"
              stroke="url(#paint41_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M322.358 454.114L320.292 448.309"
              stroke="url(#paint42_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M340.169 446.737L337.512 441.227"
              stroke="url(#paint43_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M357.192 437.88L354.142 432.566"
              stroke="url(#paint44_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M373.428 427.546L369.886 422.527"
              stroke="url(#paint45_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M388.68 415.836L384.744 411.113"
              stroke="url(#paint46_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M402.85 402.849L398.52 398.52"
              stroke="url(#paint47_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M415.838 388.678L411.115 384.742"
              stroke="url(#paint48_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M427.548 373.425L422.53 369.883"
              stroke="url(#paint49_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M437.88 357.191L432.566 354.141"
              stroke="url(#paint50_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M446.736 340.07L441.226 337.512"
              stroke="url(#paint51_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M454.116 322.359L448.31 320.293"
              stroke="url(#paint52_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M459.922 303.957L453.919 302.383"
              stroke="url(#paint53_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M464.054 285.262L458.052 284.18"
              stroke="url(#paint54_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M466.514 266.172L460.414 265.582"
              stroke="url(#paint55_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M467.4 246.984H461.299"
              stroke="url(#paint56_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M466.514 227.695L460.414 228.286"
              stroke="url(#paint57_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M464.054 208.707L458.052 209.691"
              stroke="url(#paint58_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M459.922 189.91L453.919 191.485"
              stroke="url(#paint59_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M454.116 171.512L448.31 173.677"
              stroke="url(#paint60_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M446.736 153.797L441.226 156.355"
              stroke="url(#paint61_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M437.88 136.676L432.566 139.825"
              stroke="url(#paint62_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M427.548 120.539L422.53 123.983"
              stroke="url(#paint63_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M415.838 105.188L411.115 109.222"
              stroke="url(#paint64_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M402.85 91.0195L398.52 95.3491"
              stroke="url(#paint65_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M388.877 77.9336L384.744 82.7552"
              stroke="url(#paint66_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M373.428 66.3203L369.886 71.3387"
              stroke="url(#paint67_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M357.192 55.9883L354.142 61.3019"
              stroke="url(#paint68_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M340.169 47.1328L337.512 52.7416"
              stroke="url(#paint69_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M322.358 39.7539L320.292 45.5595"
              stroke="url(#paint70_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M304.056 33.9453L302.383 39.9477"
              stroke="url(#paint71_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M285.262 29.8125L284.179 35.9133"
              stroke="url(#paint72_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M266.172 27.3555L265.68 33.4563"
              stroke="url(#paint73_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M237.341 26.6641L237.636 32.8633"
              stroke="url(#paint74_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M218.153 28.3359L218.94 34.4367"
              stroke="url(#paint75_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M199.26 31.6836L200.539 37.686"
              stroke="url(#paint76_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M180.662 36.6992L182.532 42.5048"
              stroke="url(#paint77_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M162.557 43.293L164.918 48.9018"
              stroke="url(#paint78_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M145.14 51.3633L147.994 56.8737"
              stroke="url(#paint79_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M128.51 61.0039L131.856 66.2191"
              stroke="url(#paint80_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M112.766 72.0273L116.506 76.9473"
              stroke="url(#paint81_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M98.0063 84.4258L102.139 88.9522"
              stroke="url(#paint82_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M84.4271 98.0039L88.9535 102.137"
              stroke="url(#paint83_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M72.0288 112.766L76.9488 116.505"
              stroke="url(#paint84_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M61.0079 128.508L66.2231 131.755"
              stroke="url(#paint85_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M51.4631 145.137L56.8751 147.99"
              stroke="url(#paint86_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M43.296 162.555L49.0032 164.916"
              stroke="url(#paint87_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M36.7031 180.66L42.6071 182.53"
              stroke="url(#paint88_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M31.7832 199.258L37.7856 200.537"
              stroke="url(#paint89_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M28.4376 218.152L34.5384 218.94"
              stroke="url(#paint90_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M26.7648 237.34L32.8656 237.635"
              stroke="url(#paint91_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M26.7648 256.525L32.8656 256.328"
              stroke="url(#paint92_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M28.4376 275.713L34.5384 274.926"
              stroke="url(#paint93_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M31.7832 294.706L37.7856 293.328"
              stroke="url(#paint94_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M36.7031 313.205L42.6071 311.434"
              stroke="url(#paint95_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M43.296 331.311L49.0032 328.949"
              stroke="url(#paint96_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M51.4631 348.729L56.8751 345.875"
              stroke="url(#paint97_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M61.0079 365.357L66.2231 362.109"
              stroke="url(#paint98_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M72.0288 381.102L76.9488 377.363"
              stroke="url(#paint99_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M84.4271 395.859L88.9535 391.727"
              stroke="url(#paint100_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M98.0063 409.44L102.139 404.914"
              stroke="url(#paint101_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M112.766 421.837L116.506 417.016"
              stroke="url(#paint102_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M128.51 432.859L131.856 427.742"
              stroke="url(#paint103_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M145.14 442.502L147.994 437.09"
              stroke="url(#paint104_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M162.557 450.57L164.918 444.961"
              stroke="url(#paint105_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M180.662 457.165L182.532 451.359"
              stroke="url(#paint106_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M199.26 462.182L200.539 456.18"
              stroke="url(#paint107_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M218.153 465.527L218.94 459.426"
              stroke="url(#paint108_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M237.341 467.202L237.636 461.102"
              stroke="url(#paint109_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M256.529 467.202L256.332 461.102"
              stroke="url(#paint110_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M275.717 465.527L274.93 459.426"
              stroke="url(#paint111_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M294.708 462.182L293.33 456.18"
              stroke="url(#paint112_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M313.207 457.165L311.436 451.359"
              stroke="url(#paint113_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M331.313 450.57L328.951 444.961"
              stroke="url(#paint114_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M348.73 442.502L345.876 437.09"
              stroke="url(#paint115_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M365.359 432.859L362.112 427.742"
              stroke="url(#paint116_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M381.202 421.837L377.462 417.016"
              stroke="url(#paint117_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M395.863 409.44L391.73 404.914"
              stroke="url(#paint118_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M409.442 395.859L404.916 391.727"
              stroke="url(#paint119_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M421.841 381.102L417.019 377.363"
              stroke="url(#paint120_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M432.862 365.357L427.745 362.109"
              stroke="url(#paint121_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M442.505 348.729L437.093 345.875"
              stroke="url(#paint122_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M450.574 331.311L444.965 328.949"
              stroke="url(#paint123_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M457.166 313.205L451.361 311.434"
              stroke="url(#paint124_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M462.185 294.706L456.182 293.328"
              stroke="url(#paint125_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M465.53 275.713L459.43 274.926"
              stroke="url(#paint126_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M467.203 256.525L461.102 256.328"
              stroke="url(#paint127_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M467.203 237.34L461.102 237.635"
              stroke="url(#paint128_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M465.53 218.152L459.43 218.94"
              stroke="url(#paint129_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M462.185 199.258L456.182 200.537"
              stroke="url(#paint130_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M457.166 180.66L451.361 182.53"
              stroke="url(#paint131_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M450.574 162.555L444.965 164.916"
              stroke="url(#paint132_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M442.505 145.137L437.093 147.99"
              stroke="url(#paint133_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M432.862 128.508L427.745 131.755"
              stroke="url(#paint134_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M421.841 112.766L417.019 116.505"
              stroke="url(#paint135_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M409.442 98.0039L404.916 102.137"
              stroke="url(#paint136_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M395.863 84.4258L391.73 88.9522"
              stroke="url(#paint137_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M381.202 72.0273L377.462 76.9473"
              stroke="url(#paint138_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M365.359 61.0039L362.112 66.2191"
              stroke="url(#paint139_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M348.73 51.3633L345.876 56.8737"
              stroke="url(#paint140_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M331.313 43.293L328.951 48.9018"
              stroke="url(#paint141_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M313.207 36.6992L311.436 42.5048"
              stroke="url(#paint142_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M294.708 31.6836L293.33 37.686"
              stroke="url(#paint143_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M275.717 28.3359L274.93 34.4367"
              stroke="url(#paint144_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M256.529 26.6641L256.332 32.8633"
              stroke="url(#paint145_linear_186_1694)"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g opacity="0.92">
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M387.177 282.911C386.575 283.375 385.974 283.727 385.372 283.968C384.77 284.192 384.108 284.295 383.386 284.278L382.922 282.446C383.008 282.464 383.136 282.472 383.308 282.472C383.962 282.472 384.632 282.283 385.32 281.905C386.025 281.527 386.962 280.925 388.131 280.099C388.252 280.031 388.432 279.91 388.673 279.738H389.292V296.967H387.177V282.911Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M314.537 223.249C314.007 223.658 313.478 223.968 312.948 224.18C312.418 224.377 311.835 224.468 311.199 224.453L310.791 222.841C310.866 222.856 310.98 222.863 311.131 222.863C311.706 222.863 312.297 222.697 312.902 222.364C313.523 222.031 314.348 221.501 315.377 220.774C315.483 220.714 315.642 220.608 315.854 220.456H316.399V235.624H314.537V223.249Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M261.809 121.525C261.345 121.883 260.882 122.154 260.419 122.339C259.956 122.511 259.446 122.591 258.891 122.577L258.533 121.168C258.599 121.181 258.699 121.188 258.831 121.188C259.334 121.188 259.85 121.042 260.379 120.751C260.922 120.46 261.643 119.997 262.543 119.362C262.636 119.309 262.775 119.216 262.96 119.084H263.436V132.344H261.809V121.525Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M339.579 110.031C339.161 110.353 338.744 110.598 338.326 110.765C337.908 110.92 337.449 110.992 336.948 110.98L336.625 109.709C336.685 109.721 336.775 109.727 336.894 109.727C337.347 109.727 337.813 109.596 338.29 109.333C338.779 109.07 339.43 108.653 340.241 108.08C340.325 108.032 340.45 107.949 340.617 107.829H341.047V119.787H339.579V110.031Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M191.242 203.247C190.64 203.711 190.038 204.063 189.437 204.304C188.835 204.528 188.173 204.631 187.451 204.614L186.986 202.782C187.072 202.8 187.201 202.808 187.373 202.808C188.027 202.808 188.697 202.619 189.385 202.241C190.09 201.863 191.027 201.261 192.196 200.435C192.317 200.367 192.497 200.246 192.738 200.074H193.357V217.303H191.242V203.247Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M380.554 380.75C380.554 379.546 380.906 378.437 381.611 377.423C382.316 376.408 383.468 375.299 385.067 374.095L385.764 373.58C386.503 373.047 387.096 372.582 387.543 372.187C387.99 371.791 388.369 371.336 388.678 370.82C388.988 370.304 389.142 369.728 389.142 369.092C389.142 368.249 388.867 367.579 388.317 367.08C387.784 366.581 387.053 366.332 386.125 366.332C385.127 366.332 384.285 366.616 383.597 367.183C382.927 367.751 382.488 368.524 382.282 369.505L380.502 368.576C380.949 367.218 381.646 366.186 382.591 365.481C383.554 364.776 384.741 364.424 386.151 364.424C387.75 364.424 388.996 364.853 389.89 365.713C390.802 366.556 391.257 367.691 391.257 369.118C391.257 370.063 391.077 370.889 390.716 371.594C390.355 372.299 389.89 372.9 389.323 373.399C388.773 373.898 388.016 374.5 387.053 375.205C386.331 375.738 385.755 376.176 385.325 376.52C384.655 377.07 384.13 377.56 383.752 377.99C383.391 378.42 383.107 378.91 382.901 379.46H392.083V381.42H380.554V380.75Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M375.856 238.414C375.856 237.21 376.208 236.101 376.913 235.087C377.618 234.072 378.77 232.963 380.369 231.76L381.066 231.244C381.805 230.711 382.398 230.246 382.845 229.851C383.292 229.455 383.671 229 383.98 228.484C384.29 227.968 384.445 227.392 384.445 226.756C384.445 225.913 384.169 225.243 383.619 224.744C383.086 224.246 382.355 223.996 381.427 223.996C380.43 223.996 379.587 224.28 378.899 224.847C378.229 225.415 377.79 226.189 377.584 227.169L375.804 226.24C376.251 224.882 376.948 223.85 377.893 223.145C378.856 222.44 380.043 222.088 381.453 222.088C383.052 222.088 384.298 222.518 385.192 223.377C386.104 224.22 386.559 225.355 386.559 226.782C386.559 227.727 386.379 228.553 386.018 229.258C385.657 229.963 385.192 230.565 384.625 231.063C384.075 231.562 383.318 232.164 382.355 232.869C381.633 233.402 381.057 233.84 380.627 234.184C379.957 234.734 379.432 235.224 379.054 235.654C378.693 236.084 378.409 236.574 378.203 237.124H387.385V239.084H375.856V238.414Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M197.086 357.237C197.086 356.375 197.339 355.58 197.844 354.853C198.349 354.126 199.175 353.332 200.32 352.469L200.819 352.1C201.349 351.718 201.774 351.385 202.094 351.102C202.415 350.818 202.686 350.492 202.908 350.122C203.129 349.753 203.24 349.34 203.24 348.884C203.24 348.28 203.043 347.8 202.649 347.442C202.267 347.085 201.743 346.907 201.078 346.907C200.363 346.907 199.76 347.11 199.267 347.516C198.786 347.923 198.472 348.477 198.324 349.18L197.049 348.514C197.37 347.541 197.869 346.802 198.546 346.297C199.236 345.792 200.086 345.539 201.097 345.539C202.242 345.539 203.136 345.847 203.776 346.463C204.429 347.067 204.756 347.88 204.756 348.902C204.756 349.58 204.626 350.171 204.368 350.677C204.109 351.182 203.776 351.613 203.37 351.97C202.975 352.328 202.433 352.759 201.743 353.264C201.226 353.646 200.813 353.96 200.505 354.206C200.025 354.601 199.649 354.952 199.378 355.26C199.119 355.568 198.916 355.919 198.768 356.313H205.347V357.718H197.086V357.237Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M294.922 108.89C294.922 108.027 295.175 107.232 295.68 106.506C296.185 105.779 297.01 104.984 298.156 104.122L298.655 103.752C299.185 103.37 299.61 103.037 299.93 102.754C300.251 102.471 300.522 102.144 300.744 101.775C300.965 101.405 301.076 100.992 301.076 100.536C301.076 99.9326 300.879 99.4521 300.485 99.0948C300.103 98.7375 299.579 98.5589 298.914 98.5589C298.199 98.5589 297.596 98.7622 297.103 99.1688C296.622 99.5753 296.308 100.13 296.16 100.832L294.885 100.167C295.206 99.1934 295.705 98.4542 296.382 97.949C297.072 97.4439 297.922 97.1913 298.932 97.1913C300.078 97.1913 300.971 97.4993 301.612 98.1154C302.265 98.7191 302.592 99.5322 302.592 100.555C302.592 101.232 302.462 101.824 302.204 102.329C301.945 102.834 301.612 103.265 301.206 103.623C300.811 103.98 300.269 104.411 299.579 104.916C299.062 105.298 298.649 105.612 298.341 105.859C297.861 106.253 297.485 106.604 297.214 106.912C296.955 107.22 296.752 107.571 296.604 107.966H303.183V109.37H294.922V108.89Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M164.988 170.874C164.988 169.763 165.313 168.74 165.963 167.804C166.614 166.868 167.677 165.845 169.152 164.734L169.795 164.258C170.477 163.767 171.024 163.338 171.437 162.973C171.849 162.608 172.198 162.188 172.484 161.712C172.769 161.236 172.912 160.705 172.912 160.118C172.912 159.34 172.658 158.722 172.15 158.262C171.659 157.801 170.984 157.571 170.128 157.571C169.208 157.571 168.43 157.833 167.796 158.357C167.177 158.88 166.772 159.594 166.582 160.498L164.94 159.642C165.352 158.388 165.995 157.437 166.868 156.786C167.756 156.136 168.851 155.81 170.151 155.81C171.627 155.81 172.777 156.207 173.602 157C174.443 157.778 174.863 158.825 174.863 160.141C174.863 161.014 174.697 161.776 174.364 162.426C174.03 163.076 173.602 163.632 173.079 164.092C172.571 164.552 171.873 165.107 170.984 165.758C170.318 166.249 169.787 166.654 169.39 166.971C168.771 167.479 168.287 167.931 167.938 168.328C167.605 168.724 167.343 169.176 167.153 169.684H175.625V171.493H164.988V170.874Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M67.7416 331.198C67.7416 330.336 67.9942 329.541 68.4993 328.814C69.0045 328.087 69.8299 327.293 70.9757 326.43L71.4747 326.061C72.0045 325.679 72.4295 325.346 72.7499 325.063C73.0702 324.779 73.3413 324.453 73.563 324.083C73.7848 323.713 73.8957 323.301 73.8957 322.845C73.8957 322.241 73.6985 321.761 73.3043 321.403C72.9224 321.046 72.3987 320.867 71.7334 320.867C71.0189 320.867 70.4152 321.071 69.9223 321.477C69.4419 321.884 69.1277 322.438 68.9798 323.141L67.7047 322.475C68.025 321.502 68.524 320.763 69.2016 320.258C69.8915 319.752 70.7417 319.5 71.7519 319.5C72.8977 319.5 73.791 319.808 74.4316 320.424C75.0846 321.028 75.4111 321.841 75.4111 322.863C75.4111 323.541 75.2817 324.132 75.023 324.638C74.7643 325.143 74.4316 325.574 74.025 325.931C73.6308 326.288 73.0887 326.72 72.3987 327.225C71.8813 327.607 71.4686 327.921 71.1605 328.167C70.6801 328.562 70.3043 328.913 70.0332 329.221C69.7745 329.529 69.5712 329.88 69.4234 330.274H76.0025V331.679H67.7416V331.198Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M333.139 358.403C331.374 358.403 329.783 358.066 328.366 357.392C326.949 356.718 325.787 355.87 324.881 354.848L326.484 352.862C327.483 353.838 328.447 354.57 329.376 355.057C330.305 355.522 331.432 355.754 332.756 355.754C334.405 355.754 335.764 355.371 336.833 354.604C337.901 353.838 338.436 352.758 338.436 351.364C338.436 350.435 338.18 349.622 337.669 348.925C337.181 348.228 336.531 347.694 335.718 347.322C334.928 346.95 334.103 346.765 333.244 346.765H329.167V344.186H333.209C334.44 344.186 335.416 343.838 336.136 343.141C336.879 342.444 337.251 341.619 337.251 340.667C337.251 339.645 336.833 338.866 335.997 338.332C335.16 337.775 334.115 337.496 332.861 337.496C332.117 337.496 331.316 337.647 330.456 337.949C329.597 338.228 328.842 338.657 328.192 339.238L326.833 337.078C327.692 336.358 328.633 335.812 329.655 335.44C330.7 335.045 331.757 334.848 332.826 334.848C334.196 334.848 335.428 335.08 336.519 335.545C337.634 335.986 338.505 336.636 339.133 337.496C339.76 338.332 340.073 339.308 340.073 340.423C340.073 341.422 339.818 342.363 339.307 343.245C338.819 344.105 338.087 344.744 337.112 345.162C338.32 345.626 339.318 346.474 340.108 347.705C340.898 348.936 341.293 350.261 341.293 351.678C341.293 353.002 340.945 354.175 340.248 355.197C339.551 356.196 338.575 356.986 337.321 357.566C336.09 358.124 334.696 358.403 333.139 358.403Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M249.3 185.552C247.994 185.552 246.816 185.302 245.767 184.804C244.718 184.305 243.858 183.677 243.188 182.921L244.374 181.451C245.113 182.173 245.827 182.715 246.515 183.076C247.203 183.42 248.037 183.592 249.017 183.592C250.237 183.592 251.243 183.308 252.034 182.74C252.825 182.173 253.221 181.373 253.221 180.342C253.221 179.654 253.032 179.052 252.653 178.536C252.292 178.021 251.811 177.625 251.209 177.35C250.624 177.075 250.014 176.937 249.378 176.937H246.36V175.029H249.352C250.263 175.029 250.985 174.771 251.518 174.255C252.069 173.739 252.344 173.129 252.344 172.424C252.344 171.667 252.034 171.091 251.415 170.696C250.796 170.283 250.022 170.077 249.094 170.077C248.544 170.077 247.951 170.188 247.314 170.412C246.678 170.618 246.119 170.936 245.638 171.366L244.632 169.767C245.268 169.234 245.965 168.83 246.721 168.555C247.495 168.263 248.277 168.116 249.068 168.116C250.083 168.116 250.994 168.288 251.802 168.632C252.627 168.959 253.272 169.44 253.736 170.077C254.201 170.696 254.433 171.418 254.433 172.243C254.433 172.983 254.244 173.679 253.865 174.332C253.504 174.968 252.963 175.441 252.241 175.751C253.135 176.095 253.874 176.722 254.459 177.634C255.043 178.545 255.336 179.525 255.336 180.574C255.336 181.554 255.078 182.422 254.562 183.179C254.046 183.918 253.324 184.503 252.395 184.933C251.484 185.345 250.452 185.552 249.3 185.552Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M169.454 291.946C168.147 291.946 166.969 291.697 165.92 291.198C164.871 290.7 164.012 290.072 163.341 289.315L164.527 287.845C165.267 288.568 165.98 289.109 166.668 289.47C167.356 289.814 168.19 289.986 169.17 289.986C170.391 289.986 171.397 289.702 172.188 289.135C172.978 288.568 173.374 287.768 173.374 286.736C173.374 286.049 173.185 285.447 172.807 284.931C172.445 284.415 171.964 284.02 171.362 283.744C170.778 283.469 170.167 283.332 169.531 283.332H166.513V281.423H169.505C170.417 281.423 171.139 281.165 171.672 280.649C172.222 280.134 172.497 279.523 172.497 278.818C172.497 278.062 172.188 277.486 171.569 277.09C170.95 276.678 170.176 276.471 169.247 276.471C168.697 276.471 168.104 276.583 167.468 276.806C166.831 277.013 166.273 277.331 165.791 277.761L164.785 276.162C165.422 275.629 166.118 275.225 166.874 274.949C167.648 274.657 168.431 274.511 169.222 274.511C170.236 274.511 171.147 274.683 171.955 275.027C172.781 275.354 173.426 275.835 173.89 276.471C174.354 277.09 174.586 277.812 174.586 278.638C174.586 279.377 174.397 280.073 174.019 280.727C173.658 281.363 173.116 281.836 172.394 282.145C173.288 282.489 174.027 283.117 174.612 284.028C175.197 284.939 175.489 285.92 175.489 286.968C175.489 287.949 175.231 288.817 174.715 289.573C174.199 290.313 173.477 290.897 172.549 291.327C171.637 291.74 170.606 291.946 169.454 291.946Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M403.603 189.052C402.297 189.052 401.119 188.802 400.07 188.304C399.021 187.805 398.161 187.177 397.491 186.421L398.677 184.951C399.416 185.673 400.13 186.215 400.818 186.576C401.506 186.92 402.339 187.092 403.32 187.092C404.54 187.092 405.546 186.808 406.337 186.24C407.128 185.673 407.524 184.873 407.524 183.842C407.524 183.154 407.334 182.552 406.956 182.036C406.595 181.521 406.114 181.125 405.512 180.85C404.927 180.575 404.317 180.437 403.681 180.437H400.663V178.529H403.655C404.566 178.529 405.288 178.271 405.821 177.755C406.372 177.239 406.647 176.629 406.647 175.924C406.647 175.167 406.337 174.591 405.718 174.196C405.099 173.783 404.325 173.577 403.397 173.577C402.847 173.577 402.254 173.688 401.617 173.912C400.981 174.118 400.422 174.436 399.941 174.866L398.935 173.267C399.571 172.734 400.268 172.33 401.024 172.055C401.798 171.763 402.58 171.616 403.371 171.616C404.386 171.616 405.297 171.788 406.105 172.132C406.93 172.459 407.575 172.94 408.039 173.577C408.504 174.196 408.736 174.918 408.736 175.743C408.736 176.483 408.547 177.179 408.168 177.832C407.807 178.468 407.266 178.941 406.544 179.251C407.438 179.595 408.177 180.222 408.762 181.134C409.346 182.045 409.639 183.025 409.639 184.074C409.639 185.054 409.381 185.922 408.865 186.679C408.349 187.418 407.627 188.003 406.698 188.433C405.787 188.845 404.755 189.052 403.603 189.052Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M209.044 171.842H201.1V170.268L206.31 158.172H208.58L203.55 169.882H209.044V164.285H211.159V169.882H213.248V171.842H211.159V175.066H209.044V171.842Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M320.97 386.93H315.901V385.926L319.225 378.208H320.673L317.464 385.679H320.97V382.108H322.319V385.679H323.652V386.93H322.319V388.987H320.97V386.93Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M215.305 327.186C214.17 327.186 213.138 326.997 212.21 326.619C211.281 326.24 210.593 325.776 210.146 325.226L211.126 323.73C211.78 324.28 212.399 324.667 212.983 324.891C213.568 325.114 214.264 325.226 215.073 325.226C216.293 325.226 217.273 324.856 218.013 324.117C218.752 323.377 219.122 322.38 219.122 321.125C219.122 319.956 218.735 319.096 217.961 318.546C217.187 317.978 215.984 317.695 214.35 317.695C212.631 317.695 211.427 317.892 210.74 318.288V310.55L219.689 310.499V312.485L212.854 312.459V315.786C213.216 315.717 213.654 315.683 214.17 315.683C214.686 315.683 214.987 315.683 215.073 315.683C216.311 315.683 217.394 315.915 218.322 316.379C219.251 316.844 219.964 317.506 220.463 318.365C220.979 319.208 221.237 320.188 221.237 321.305C221.237 322.406 220.97 323.403 220.437 324.297C219.921 325.191 219.208 325.896 218.296 326.412C217.402 326.928 216.405 327.186 215.305 327.186Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M71.7824 195.395C71.0074 195.395 70.3028 195.266 69.6687 195.007C69.0346 194.749 68.5648 194.432 68.2595 194.056L68.9289 193.034C69.3751 193.41 69.7979 193.674 70.1971 193.827C70.5964 193.98 71.072 194.056 71.6239 194.056C72.4576 194.056 73.127 193.804 73.6319 193.299C74.1369 192.794 74.3893 192.113 74.3893 191.255C74.3893 190.457 74.1251 189.87 73.5967 189.494C73.0683 189.106 72.2463 188.913 71.1307 188.913C69.9564 188.913 69.1344 189.048 68.6647 189.318V184.033L74.7769 183.998V185.355L70.109 185.337V187.609C70.3556 187.562 70.6551 187.539 71.0074 187.539C71.3597 187.539 71.5652 187.539 71.6239 187.539C72.4694 187.539 73.2092 187.697 73.8433 188.014C74.4774 188.331 74.9647 188.783 75.3053 189.371C75.6576 189.946 75.8337 190.615 75.8337 191.379C75.8337 192.13 75.6517 192.811 75.2877 193.422C74.9354 194.033 74.4481 194.514 73.8257 194.866C73.215 195.219 72.534 195.395 71.7824 195.395Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M326.436 160.108C325.301 160.108 324.269 159.919 323.341 159.54C322.412 159.162 321.724 158.698 321.277 158.148L322.257 156.652C322.911 157.202 323.53 157.589 324.114 157.812C324.699 158.036 325.395 158.148 326.203 158.148C327.424 158.148 328.404 157.778 329.144 157.039C329.883 156.299 330.253 155.302 330.253 154.047C330.253 152.878 329.866 152.018 329.092 151.468C328.318 150.9 327.115 150.617 325.481 150.617C323.762 150.617 322.558 150.814 321.87 151.21V143.472L330.82 143.421V145.407L323.985 145.381V148.708C324.346 148.639 324.785 148.605 325.301 148.605C325.817 148.605 326.118 148.605 326.203 148.605C327.441 148.605 328.525 148.837 329.453 149.301C330.382 149.765 331.095 150.427 331.594 151.287C332.11 152.13 332.368 153.11 332.368 154.227C332.368 155.328 332.101 156.325 331.568 157.219C331.052 158.113 330.339 158.818 329.427 159.334C328.533 159.85 327.536 160.108 326.436 160.108Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M280.795 369.742C279.54 369.742 278.431 369.441 277.468 368.839C276.505 368.237 275.757 367.403 275.224 366.337C274.691 365.254 274.424 364.007 274.424 362.597C274.424 360.878 274.82 359.305 275.611 357.877C276.419 356.433 277.571 355.212 279.067 354.215C279.927 353.63 280.855 353.201 281.852 352.925C282.867 352.65 283.898 352.53 284.947 352.564V354.473C284.139 354.439 283.314 354.542 282.471 354.782C281.629 355.006 280.838 355.35 280.098 355.814C279.325 356.313 278.637 356.966 278.035 357.774C277.451 358.565 277.038 359.408 276.797 360.302C277.175 359.614 277.76 359.038 278.551 358.574C279.359 358.11 280.141 357.877 280.898 357.877C281.964 357.877 282.961 358.153 283.89 358.703C284.818 359.236 285.549 359.967 286.082 360.895C286.632 361.806 286.908 362.786 286.908 363.835C286.908 364.901 286.632 365.89 286.082 366.801C285.532 367.713 284.784 368.435 283.838 368.968C282.91 369.484 281.895 369.742 280.795 369.742ZM280.821 367.781C281.543 367.781 282.205 367.601 282.807 367.24C283.408 366.879 283.89 366.397 284.251 365.795C284.612 365.176 284.793 364.514 284.793 363.81C284.793 363.105 284.612 362.451 284.251 361.849C283.89 361.23 283.408 360.74 282.807 360.379C282.205 360.018 281.56 359.838 280.872 359.838C280.133 359.838 279.454 360.018 278.835 360.379C278.216 360.74 277.726 361.23 277.365 361.849C277.003 362.451 276.823 363.122 276.823 363.861C276.823 364.549 277.003 365.194 277.365 365.795C277.726 366.397 278.216 366.879 278.835 367.24C279.454 367.601 280.116 367.781 280.821 367.781Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M347.154 208.939C346.146 208.939 345.255 208.698 344.482 208.214C343.709 207.731 343.109 207.062 342.681 206.206C342.253 205.336 342.039 204.335 342.039 203.203C342.039 201.823 342.356 200.56 342.991 199.414C343.64 198.254 344.565 197.274 345.766 196.473C346.456 196.004 347.202 195.659 348.003 195.438C348.817 195.217 349.645 195.12 350.487 195.148V196.68C349.839 196.653 349.176 196.736 348.5 196.929C347.823 197.108 347.188 197.384 346.594 197.757C345.973 198.157 345.421 198.682 344.938 199.331C344.469 199.966 344.137 200.642 343.944 201.36C344.248 200.808 344.717 200.346 345.352 199.973C346.001 199.6 346.629 199.414 347.236 199.414C348.092 199.414 348.893 199.635 349.638 200.076C350.384 200.504 350.971 201.091 351.399 201.837C351.84 202.568 352.061 203.355 352.061 204.197C352.061 205.053 351.84 205.847 351.399 206.578C350.957 207.31 350.356 207.89 349.597 208.318C348.852 208.732 348.037 208.939 347.154 208.939ZM347.174 207.365C347.754 207.365 348.286 207.22 348.769 206.931C349.252 206.641 349.638 206.254 349.928 205.771C350.218 205.274 350.363 204.742 350.363 204.176C350.363 203.61 350.218 203.086 349.928 202.603C349.638 202.106 349.252 201.712 348.769 201.422C348.286 201.132 347.768 200.987 347.216 200.987C346.622 200.987 346.077 201.132 345.58 201.422C345.083 201.712 344.689 202.106 344.399 202.603C344.11 203.086 343.965 203.624 343.965 204.218C343.965 204.77 344.11 205.288 344.399 205.771C344.689 206.254 345.083 206.641 345.58 206.931C346.077 207.22 346.608 207.365 347.174 207.365Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M184.413 340.878C183.157 340.878 182.048 340.577 181.086 339.976C180.123 339.374 179.375 338.54 178.842 337.474C178.309 336.391 178.042 335.144 178.042 333.734C178.042 332.015 178.438 330.441 179.229 329.014C180.037 327.57 181.189 326.349 182.685 325.352C183.544 324.767 184.473 324.337 185.47 324.062C186.485 323.787 187.516 323.667 188.565 323.701V325.61C187.757 325.575 186.932 325.678 186.089 325.919C185.247 326.143 184.456 326.487 183.716 326.951C182.943 327.449 182.255 328.103 181.653 328.911C181.068 329.702 180.656 330.544 180.415 331.439C180.793 330.751 181.378 330.175 182.169 329.711C182.977 329.246 183.759 329.014 184.516 329.014C185.582 329.014 186.579 329.289 187.508 329.839C188.436 330.372 189.167 331.103 189.7 332.032C190.25 332.943 190.525 333.923 190.525 334.972C190.525 336.038 190.25 337.027 189.7 337.938C189.15 338.849 188.402 339.572 187.456 340.105C186.528 340.62 185.513 340.878 184.413 340.878ZM184.438 338.918C185.161 338.918 185.823 338.738 186.424 338.377C187.026 338.015 187.508 337.534 187.869 336.932C188.23 336.313 188.41 335.651 188.41 334.946C188.41 334.241 188.23 333.588 187.869 332.986C187.508 332.367 187.026 331.877 186.424 331.516C185.823 331.155 185.178 330.974 184.49 330.974C183.751 330.974 183.071 331.155 182.452 331.516C181.833 331.877 181.343 332.367 180.982 332.986C180.621 333.588 180.441 334.258 180.441 334.998C180.441 335.686 180.621 336.33 180.982 336.932C181.343 337.534 181.833 338.015 182.452 338.377C183.071 338.738 183.733 338.918 184.438 338.918Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M360.506 317.027C359.251 317.027 358.142 316.726 357.179 316.124C356.216 315.522 355.468 314.688 354.935 313.622C354.402 312.539 354.135 311.292 354.135 309.882C354.135 308.163 354.531 306.59 355.322 305.163C356.13 303.718 357.282 302.497 358.778 301.5C359.638 300.916 360.566 300.486 361.563 300.211C362.578 299.935 363.61 299.815 364.658 299.849V301.758C363.85 301.724 363.025 301.827 362.182 302.068C361.34 302.291 360.549 302.635 359.81 303.099C359.036 303.598 358.348 304.251 357.746 305.059C357.162 305.85 356.749 306.693 356.508 307.587C356.886 306.899 357.471 306.323 358.262 305.859C359.07 305.395 359.853 305.163 360.609 305.163C361.675 305.163 362.672 305.438 363.601 305.988C364.529 306.521 365.26 307.252 365.793 308.18C366.343 309.092 366.619 310.072 366.619 311.12C366.619 312.187 366.343 313.175 365.793 314.086C365.243 314.998 364.495 315.72 363.549 316.253C362.621 316.769 361.606 317.027 360.506 317.027ZM360.532 315.067C361.254 315.067 361.916 314.886 362.518 314.525C363.119 314.164 363.601 313.682 363.962 313.081C364.323 312.462 364.504 311.8 364.504 311.095C364.504 310.39 364.323 309.736 363.962 309.134C363.601 308.515 363.119 308.025 362.518 307.664C361.916 307.303 361.271 307.123 360.583 307.123C359.844 307.123 359.165 307.303 358.546 307.664C357.927 308.025 357.437 308.515 357.076 309.134C356.715 309.736 356.534 310.407 356.534 311.146C356.534 311.834 356.715 312.479 357.076 313.081C357.437 313.682 357.927 314.164 358.546 314.525C359.165 314.886 359.827 315.067 360.532 315.067Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M214.686 270.084L206.51 270.032V267.866H217.703V268.511L211.255 284.424H208.754L214.686 270.084Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M156.568 380.335L151.094 380.3V378.85H158.588V379.281L154.272 389.935H152.597L156.568 380.335Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M346.792 273.604C345.657 273.604 344.643 273.398 343.749 272.985C342.855 272.555 342.15 271.945 341.634 271.154C341.135 270.363 340.886 269.452 340.886 268.42C340.886 267.457 341.127 266.606 341.608 265.867C342.09 265.11 342.752 264.405 343.594 263.752C342.391 262.944 341.789 261.852 341.789 260.476C341.789 259.668 342.004 258.946 342.433 258.31C342.881 257.656 343.482 257.149 344.239 256.788C344.995 256.41 345.821 256.22 346.715 256.22C347.626 256.22 348.46 256.41 349.217 256.788C349.99 257.149 350.601 257.648 351.048 258.284C351.512 258.92 351.744 259.616 351.744 260.373C351.744 261.129 351.555 261.809 351.177 262.41C350.799 263.012 350.326 263.528 349.758 263.958C350.635 264.405 351.34 265.015 351.873 265.789C352.406 266.563 352.673 267.457 352.673 268.472C352.673 269.52 352.415 270.432 351.899 271.205C351.383 271.979 350.678 272.572 349.784 272.985C348.907 273.398 347.91 273.604 346.792 273.604ZM347.695 263.236C348.331 262.772 348.804 262.333 349.114 261.92C349.44 261.508 349.604 261.026 349.604 260.476C349.604 259.84 349.337 259.298 348.804 258.851C348.271 258.404 347.592 258.181 346.766 258.181C345.941 258.181 345.262 258.413 344.729 258.877C344.196 259.341 343.929 259.9 343.929 260.553C343.929 261.138 344.093 261.585 344.419 261.895C344.746 262.204 345.219 262.453 345.838 262.643L347.489 263.184L347.695 263.236ZM346.792 271.644C347.962 271.644 348.881 271.352 349.552 270.767C350.223 270.165 350.558 269.366 350.558 268.368C350.558 267.663 350.369 267.087 349.99 266.64C349.612 266.176 349.096 265.815 348.443 265.557C347.807 265.282 346.99 265.015 345.993 264.758L345.58 264.654L345.09 265.067C344.282 265.772 343.732 266.348 343.439 266.795C343.147 267.242 343.001 267.758 343.001 268.343C343.001 269.374 343.336 270.182 344.007 270.767C344.695 271.352 345.623 271.644 346.792 271.644Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M398.576 138.293C397.739 138.293 396.99 138.14 396.331 137.836C395.671 137.519 395.151 137.069 394.771 136.485C394.403 135.902 394.219 135.229 394.219 134.468C394.219 133.758 394.397 133.13 394.752 132.585C395.107 132.027 395.595 131.507 396.217 131.025C395.329 130.428 394.885 129.623 394.885 128.608C394.885 128.012 395.043 127.479 395.361 127.01C395.69 126.528 396.134 126.154 396.692 125.887C397.25 125.608 397.859 125.469 398.519 125.469C399.191 125.469 399.806 125.608 400.364 125.887C400.935 126.154 401.386 126.522 401.715 126.991C402.058 127.46 402.229 127.974 402.229 128.532C402.229 129.09 402.09 129.591 401.81 130.035C401.531 130.479 401.183 130.86 400.764 131.177C401.411 131.507 401.931 131.957 402.324 132.528C402.717 133.098 402.914 133.758 402.914 134.506C402.914 135.28 402.724 135.952 402.343 136.523C401.963 137.094 401.443 137.532 400.783 137.836C400.136 138.14 399.4 138.293 398.576 138.293ZM399.242 130.644C399.711 130.302 400.06 129.978 400.288 129.674C400.529 129.369 400.65 129.014 400.65 128.608C400.65 128.139 400.453 127.739 400.06 127.41C399.667 127.08 399.166 126.915 398.557 126.915C397.948 126.915 397.447 127.086 397.054 127.429C396.661 127.771 396.464 128.183 396.464 128.665C396.464 129.097 396.585 129.426 396.826 129.655C397.067 129.883 397.415 130.067 397.872 130.206L399.09 130.606L399.242 130.644ZM398.576 136.847C399.439 136.847 400.117 136.631 400.612 136.2C401.107 135.756 401.354 135.166 401.354 134.43C401.354 133.91 401.214 133.485 400.935 133.156C400.656 132.813 400.276 132.547 399.794 132.356C399.324 132.153 398.722 131.957 397.986 131.767L397.682 131.691L397.32 131.995C396.724 132.515 396.318 132.94 396.103 133.27C395.887 133.6 395.779 133.98 395.779 134.411C395.779 135.172 396.026 135.769 396.521 136.2C397.028 136.631 397.713 136.847 398.576 136.847Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M204.731 136.293C203.065 136.293 201.575 135.99 200.262 135.385C198.949 134.753 197.914 133.857 197.157 132.696C196.424 131.534 196.058 130.196 196.058 128.681C196.058 127.267 196.412 126.018 197.119 124.932C197.826 123.821 198.798 122.786 200.035 121.827C198.268 120.64 197.384 119.037 197.384 117.017C197.384 115.83 197.699 114.77 198.331 113.836C198.987 112.876 199.871 112.131 200.982 111.601C202.093 111.046 203.304 110.768 204.617 110.768C205.955 110.768 207.18 111.046 208.291 111.601C209.427 112.131 210.323 112.864 210.98 113.798C211.661 114.732 212.002 115.754 212.002 116.865C212.002 117.976 211.725 118.974 211.169 119.857C210.614 120.741 209.919 121.498 209.086 122.13C210.374 122.786 211.409 123.682 212.192 124.818C212.974 125.955 213.366 127.267 213.366 128.757C213.366 130.297 212.987 131.635 212.229 132.771C211.472 133.908 210.437 134.779 209.124 135.385C207.836 135.99 206.372 136.293 204.731 136.293ZM206.056 121.069C206.991 120.387 207.685 119.744 208.139 119.138C208.619 118.532 208.859 117.825 208.859 117.017C208.859 116.083 208.468 115.287 207.685 114.631C206.902 113.975 205.905 113.646 204.693 113.646C203.481 113.646 202.484 113.987 201.701 114.669C200.919 115.351 200.527 116.171 200.527 117.13C200.527 117.989 200.767 118.645 201.247 119.1C201.726 119.554 202.421 119.92 203.33 120.198L205.753 120.993L206.056 121.069ZM204.731 133.415C206.448 133.415 207.799 132.986 208.783 132.128C209.768 131.244 210.26 130.07 210.26 128.606C210.26 127.57 209.982 126.725 209.427 126.068C208.872 125.386 208.114 124.856 207.155 124.478C206.221 124.074 205.021 123.682 203.557 123.304L202.951 123.152L202.231 123.758C201.045 124.793 200.237 125.639 199.808 126.295C199.378 126.952 199.164 127.709 199.164 128.568C199.164 130.083 199.656 131.269 200.641 132.128C201.651 132.986 203.014 133.415 204.731 133.415Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M249.444 327.784C250.7 327.784 251.809 328.085 252.772 328.686C253.734 329.288 254.482 330.131 255.015 331.214C255.548 332.28 255.815 333.518 255.815 334.928C255.815 336.648 255.411 338.229 254.603 339.674C253.812 341.101 252.668 342.313 251.172 343.31C250.313 343.895 249.376 344.325 248.361 344.6C247.364 344.875 246.341 344.995 245.292 344.961V343.052C246.1 343.087 246.925 342.992 247.768 342.769C248.61 342.528 249.401 342.176 250.141 341.711C250.915 341.213 251.594 340.568 252.178 339.777C252.78 338.969 253.201 338.118 253.442 337.224C253.064 337.911 252.471 338.487 251.663 338.952C250.872 339.416 250.098 339.648 249.341 339.648C248.275 339.648 247.278 339.381 246.349 338.848C245.421 338.298 244.682 337.567 244.131 336.656C243.598 335.728 243.332 334.739 243.332 333.69C243.332 332.624 243.607 331.635 244.157 330.724C244.707 329.813 245.447 329.099 246.375 328.583C247.321 328.05 248.344 327.784 249.444 327.784ZM249.419 329.744C248.696 329.744 248.034 329.924 247.433 330.286C246.831 330.647 246.349 331.137 245.988 331.756C245.627 332.357 245.447 333.011 245.447 333.716C245.447 334.421 245.627 335.083 245.988 335.702C246.349 336.304 246.831 336.785 247.433 337.146C248.034 337.507 248.679 337.688 249.367 337.688C250.106 337.688 250.786 337.507 251.405 337.146C252.024 336.785 252.514 336.304 252.875 335.702C253.236 335.083 253.416 334.404 253.416 333.664C253.416 332.976 253.236 332.332 252.875 331.73C252.514 331.128 252.024 330.647 251.405 330.286C250.786 329.924 250.124 329.744 249.419 329.744Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M413.806 327.725C414.753 327.725 415.59 327.952 416.317 328.406C417.043 328.86 417.608 329.496 418.01 330.314C418.412 331.118 418.613 332.052 418.613 333.116C418.613 334.414 418.308 335.607 417.699 336.697C417.102 337.774 416.239 338.689 415.11 339.441C414.461 339.882 413.754 340.207 412.989 340.414C412.236 340.622 411.464 340.713 410.673 340.687V339.247C411.283 339.273 411.905 339.201 412.541 339.033C413.177 338.851 413.774 338.585 414.332 338.235C414.916 337.858 415.428 337.372 415.869 336.775C416.323 336.165 416.641 335.523 416.823 334.848C416.537 335.367 416.09 335.802 415.48 336.152C414.883 336.502 414.299 336.678 413.728 336.678C412.924 336.678 412.171 336.477 411.471 336.074C410.77 335.659 410.212 335.108 409.797 334.42C409.395 333.719 409.194 332.973 409.194 332.182C409.194 331.378 409.401 330.631 409.817 329.944C410.232 329.256 410.79 328.718 411.49 328.328C412.204 327.926 412.976 327.725 413.806 327.725ZM413.787 329.204C413.242 329.204 412.742 329.341 412.288 329.613C411.834 329.885 411.471 330.255 411.198 330.722C410.926 331.176 410.79 331.669 410.79 332.201C410.79 332.733 410.926 333.233 411.198 333.7C411.471 334.154 411.834 334.517 412.288 334.79C412.742 335.062 413.229 335.199 413.748 335.199C414.306 335.199 414.818 335.062 415.285 334.79C415.752 334.517 416.122 334.154 416.395 333.7C416.667 333.233 416.803 332.72 416.803 332.162C416.803 331.644 416.667 331.157 416.395 330.703C416.122 330.249 415.752 329.885 415.285 329.613C414.818 329.341 414.319 329.204 413.787 329.204Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M207.165 234.162C208.05 234.162 208.832 234.374 209.511 234.799C210.19 235.223 210.717 235.817 211.093 236.58C211.468 237.332 211.656 238.205 211.656 239.199C211.656 240.411 211.371 241.526 210.802 242.544C210.244 243.55 209.438 244.405 208.384 245.108C207.777 245.52 207.117 245.823 206.402 246.017C205.699 246.211 204.977 246.296 204.238 246.272V244.926C204.808 244.95 205.389 244.884 205.983 244.726C206.577 244.556 207.135 244.308 207.656 243.981C208.202 243.629 208.68 243.175 209.093 242.617C209.517 242.047 209.814 241.447 209.984 240.817C209.717 241.302 209.299 241.708 208.729 242.035C208.171 242.362 207.626 242.526 207.093 242.526C206.341 242.526 205.638 242.338 204.983 241.962C204.329 241.575 203.808 241.059 203.42 240.417C203.044 239.762 202.856 239.065 202.856 238.326C202.856 237.574 203.05 236.877 203.438 236.235C203.826 235.593 204.347 235.089 205.002 234.726C205.668 234.35 206.39 234.162 207.165 234.162ZM207.147 235.544C206.638 235.544 206.171 235.671 205.747 235.926C205.323 236.18 204.983 236.526 204.729 236.962C204.474 237.387 204.347 237.847 204.347 238.344C204.347 238.841 204.474 239.308 204.729 239.744C204.983 240.168 205.323 240.508 205.747 240.762C206.171 241.017 206.626 241.144 207.111 241.144C207.632 241.144 208.111 241.017 208.547 240.762C208.984 240.508 209.329 240.168 209.584 239.744C209.838 239.308 209.965 238.829 209.965 238.308C209.965 237.823 209.838 237.368 209.584 236.944C209.329 236.52 208.984 236.18 208.547 235.926C208.111 235.671 207.644 235.544 207.147 235.544Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M107.34 131.428C108.595 131.428 109.704 131.729 110.667 132.331C111.63 132.933 112.378 133.775 112.911 134.859C113.444 135.925 113.711 137.163 113.711 138.573C113.711 140.292 113.307 141.874 112.498 143.318C111.707 144.745 110.564 145.958 109.068 146.955C108.208 147.54 107.271 147.969 106.257 148.244C105.26 148.52 104.236 148.64 103.188 148.606V146.697C103.996 146.731 104.821 146.637 105.664 146.413C106.506 146.173 107.297 145.82 108.036 145.356C108.81 144.857 109.489 144.212 110.074 143.421C110.676 142.613 111.097 141.762 111.338 140.868C110.959 141.556 110.366 142.132 109.558 142.596C108.767 143.06 107.993 143.292 107.237 143.292C106.171 143.292 105.174 143.026 104.245 142.493C103.317 141.943 102.577 141.212 102.027 140.301C101.494 139.372 101.227 138.383 101.227 137.335C101.227 136.269 101.503 135.28 102.053 134.369C102.603 133.457 103.342 132.744 104.271 132.228C105.217 131.695 106.24 131.428 107.34 131.428ZM107.314 133.388C106.592 133.388 105.93 133.569 105.328 133.93C104.726 134.291 104.245 134.781 103.884 135.4C103.523 136.002 103.342 136.655 103.342 137.36C103.342 138.065 103.523 138.727 103.884 139.346C104.245 139.948 104.726 140.43 105.328 140.791C105.93 141.152 106.575 141.332 107.263 141.332C108.002 141.332 108.681 141.152 109.3 140.791C109.919 140.43 110.409 139.948 110.77 139.346C111.131 138.727 111.312 138.048 111.312 137.309C111.312 136.621 111.131 135.976 110.77 135.374C110.409 134.773 109.919 134.291 109.3 133.93C108.681 133.569 108.019 133.388 107.314 133.388Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M161.08 216.804C161.944 216.804 162.707 217.011 163.37 217.425C164.033 217.839 164.548 218.419 164.915 219.165C165.281 219.899 165.465 220.751 165.465 221.721C165.465 222.905 165.187 223.993 164.631 224.988C164.086 225.97 163.299 226.804 162.27 227.491C161.678 227.893 161.033 228.189 160.335 228.378C159.648 228.568 158.944 228.65 158.222 228.627V227.313C158.778 227.337 159.346 227.272 159.926 227.118C160.506 226.952 161.051 226.71 161.559 226.39C162.092 226.047 162.559 225.603 162.962 225.059C163.376 224.502 163.666 223.917 163.832 223.301C163.571 223.774 163.163 224.171 162.607 224.491C162.062 224.81 161.53 224.97 161.009 224.97C160.275 224.97 159.589 224.786 158.95 224.419C158.311 224.041 157.802 223.538 157.423 222.911C157.056 222.271 156.873 221.591 156.873 220.869C156.873 220.135 157.062 219.455 157.441 218.828C157.82 218.2 158.329 217.709 158.968 217.354C159.619 216.987 160.323 216.804 161.08 216.804ZM161.062 218.153C160.565 218.153 160.11 218.277 159.695 218.526C159.281 218.774 158.95 219.112 158.701 219.538C158.453 219.952 158.329 220.402 158.329 220.887C158.329 221.372 158.453 221.828 158.701 222.254C158.95 222.668 159.281 222.999 159.695 223.248C160.11 223.496 160.554 223.621 161.027 223.621C161.536 223.621 162.003 223.496 162.429 223.248C162.855 222.999 163.193 222.668 163.441 222.254C163.69 221.828 163.814 221.36 163.814 220.851C163.814 220.378 163.69 219.934 163.441 219.52C163.193 219.106 162.855 218.774 162.429 218.526C162.003 218.277 161.548 218.153 161.062 218.153Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M234.314 383.775C232.853 383.775 231.58 383.371 230.497 382.563C229.431 381.755 228.614 380.697 228.047 379.391C227.497 378.067 227.222 376.665 227.222 375.186C227.222 373.691 227.505 372.289 228.073 370.982C228.64 369.658 229.457 368.601 230.523 367.81C231.606 367.002 232.87 366.598 234.314 366.598C235.759 366.598 237.014 367.002 238.08 367.81C239.146 368.618 239.963 369.693 240.53 371.034C241.097 372.358 241.381 373.768 241.381 375.264C241.381 376.76 241.097 378.161 240.53 379.468C239.963 380.775 239.137 381.824 238.054 382.614C236.988 383.388 235.741 383.775 234.314 383.775ZM234.34 381.841C235.389 381.841 236.283 381.523 237.022 380.886C237.779 380.25 238.338 379.425 238.699 378.41C239.077 377.396 239.266 376.313 239.266 375.161C239.266 373.991 239.069 372.9 238.673 371.885C238.295 370.871 237.727 370.063 236.971 369.461C236.231 368.859 235.346 368.558 234.314 368.558C233.265 368.558 232.363 368.867 231.606 369.486C230.867 370.105 230.299 370.922 229.904 371.937C229.526 372.951 229.336 374.034 229.336 375.186C229.336 376.338 229.526 377.43 229.904 378.462C230.299 379.476 230.875 380.293 231.632 380.912C232.388 381.531 233.291 381.841 234.34 381.841Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M134.354 275.171C133.353 275.171 132.483 274.894 131.741 274.341C131.012 273.788 130.453 273.064 130.065 272.17C129.688 271.264 129.5 270.305 129.5 269.293C129.5 268.269 129.694 267.311 130.082 266.416C130.471 265.51 131.03 264.787 131.759 264.245C132.5 263.692 133.365 263.416 134.354 263.416C135.342 263.416 136.201 263.692 136.931 264.245C137.66 264.798 138.219 265.534 138.607 266.452C138.996 267.358 139.19 268.322 139.19 269.346C139.19 270.37 138.996 271.329 138.607 272.223C138.219 273.117 137.654 273.835 136.913 274.376C136.183 274.906 135.33 275.171 134.354 275.171ZM134.371 273.847C135.089 273.847 135.701 273.629 136.207 273.194C136.725 272.758 137.107 272.194 137.354 271.499C137.613 270.805 137.742 270.064 137.742 269.276C137.742 268.475 137.607 267.728 137.336 267.034C137.078 266.34 136.689 265.787 136.172 265.375C135.666 264.963 135.06 264.757 134.354 264.757C133.636 264.757 133.018 264.969 132.5 265.393C131.994 265.816 131.606 266.375 131.336 267.069C131.077 267.764 130.947 268.505 130.947 269.293C130.947 270.082 131.077 270.829 131.336 271.535C131.606 272.229 132 272.788 132.518 273.211C133.036 273.635 133.654 273.847 134.371 273.847Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M299.148 316.545C297.687 316.545 296.414 316.141 295.331 315.332C294.265 314.524 293.448 313.467 292.881 312.16C292.331 310.836 292.056 309.435 292.056 307.956C292.056 306.46 292.339 305.059 292.907 303.752C293.474 302.428 294.291 301.371 295.357 300.58C296.44 299.771 297.704 299.367 299.148 299.367C300.593 299.367 301.848 299.771 302.914 300.58C303.98 301.388 304.797 302.462 305.364 303.804C305.931 305.127 306.215 306.537 306.215 308.033C306.215 309.529 305.931 310.931 305.364 312.237C304.797 313.544 303.971 314.593 302.888 315.384C301.822 316.158 300.575 316.545 299.148 316.545ZM299.174 314.61C300.223 314.61 301.117 314.292 301.856 313.656C302.613 313.02 303.172 312.194 303.533 311.18C303.911 310.165 304.1 309.082 304.1 307.93C304.1 306.761 303.903 305.669 303.507 304.655C303.129 303.64 302.561 302.832 301.805 302.23C301.065 301.628 300.18 301.328 299.148 301.328C298.099 301.328 297.197 301.637 296.44 302.256C295.701 302.875 295.133 303.692 294.738 304.706C294.36 305.721 294.17 306.804 294.17 307.956C294.17 309.108 294.36 310.2 294.738 311.232C295.133 312.246 295.709 313.063 296.466 313.682C297.222 314.301 298.125 314.61 299.174 314.61Z"
                fill="white"
              />
              <motion.path
                {...mainPathVariant}
                animate={isAnimating ? "visible" : "hidden"}
                initial="hidden"
                d="M373.544 173.549C372.082 173.549 370.81 173.144 369.727 172.336C368.661 171.528 367.844 170.471 367.277 169.164C366.726 167.84 366.451 166.439 366.451 164.96C366.451 163.464 366.735 162.063 367.302 160.756C367.87 159.432 368.687 158.374 369.753 157.583C370.836 156.775 372.1 156.371 373.544 156.371C374.988 156.371 376.244 156.775 377.31 157.583C378.376 158.392 379.192 159.466 379.76 160.807C380.327 162.131 380.611 163.541 380.611 165.037C380.611 166.533 380.327 167.935 379.76 169.241C379.192 170.548 378.367 171.597 377.284 172.388C376.218 173.162 374.971 173.549 373.544 173.549ZM373.57 171.614C374.619 171.614 375.513 171.296 376.252 170.66C377.009 170.024 377.567 169.198 377.929 168.184C378.307 167.169 378.496 166.086 378.496 164.934C378.496 163.765 378.298 162.673 377.903 161.659C377.525 160.644 376.957 159.836 376.201 159.234C375.461 158.632 374.576 158.331 373.544 158.331C372.495 158.331 371.592 158.641 370.836 159.26C370.097 159.879 369.529 160.696 369.134 161.71C368.755 162.725 368.566 163.808 368.566 164.96C368.566 166.112 368.755 167.204 369.134 168.235C369.529 169.25 370.105 170.067 370.862 170.686C371.618 171.305 372.521 171.614 373.57 171.614Z"
                fill="white"
              />
              <g opacity="0.6">
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M388.188 282.898L385.236 284.473L384.842 282.8L388.483 280.832H390.353V297.363H388.188V282.898Z"
                  fill="url(#paint146_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M315.372 223.267L312.814 224.645L312.42 223.169L315.569 221.496H317.242V236.059H315.372V223.267Z"
                  fill="url(#paint147_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M262.531 121.719L260.268 122.9L259.973 121.621L262.728 120.145H264.204V132.838H262.531V121.719Z"
                  fill="url(#paint148_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M340.267 109.417L338.201 110.5L337.906 109.319L340.366 107.941H341.645V119.356H340.169V109.417H340.267Z"
                  fill="url(#paint149_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M192.274 203.289L189.322 204.863L188.928 203.191L192.569 201.223H194.438V217.754H192.274V203.289Z"
                  fill="url(#paint150_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M380.513 381.787V380.41L382.284 378.737C386.515 374.703 388.385 372.636 388.385 370.078C388.385 368.405 387.598 366.831 385.138 366.831C383.662 366.831 382.382 367.618 381.595 368.208L380.906 366.634C382.087 365.65 383.662 364.961 385.531 364.961C389.074 364.961 390.55 367.421 390.55 369.783C390.55 372.833 388.385 375.293 384.842 378.639L383.563 379.819V379.918H390.943V381.787H380.513Z"
                  fill="url(#paint151_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M375.79 239.405V238.027L377.561 236.354C381.792 232.32 383.662 230.253 383.662 227.695C383.662 226.022 382.874 224.448 380.414 224.448C378.938 224.448 377.659 225.235 376.872 225.825L376.183 224.251C377.364 223.267 378.938 222.578 380.808 222.578C384.35 222.578 385.826 225.038 385.826 227.4C385.826 230.45 383.662 232.91 380.119 236.256L378.84 237.437V237.535H386.22V239.405H375.79Z"
                  fill="url(#paint152_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M196.997 357.879V356.895L198.276 355.714C201.326 352.861 202.704 351.286 202.704 349.515C202.704 348.334 202.114 347.252 200.342 347.252C199.26 347.252 198.374 347.842 197.784 348.236L197.292 347.153C198.079 346.465 199.26 345.973 200.638 345.973C203.196 345.973 204.278 347.744 204.278 349.417C204.278 351.581 202.704 353.353 200.244 355.714L199.26 356.6H204.574V357.879H196.997Z"
                  fill="url(#paint153_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M294.905 109.516V108.532L296.184 107.351C299.234 104.497 300.612 102.923 300.612 101.152C300.612 99.971 300.022 98.8886 298.25 98.8886C297.168 98.8886 296.282 99.479 295.79 99.8726L295.298 98.7902C296.086 98.1014 297.266 97.6094 298.644 97.6094C301.202 97.6094 302.285 99.3806 302.285 101.053C302.285 103.218 300.71 104.989 298.25 107.351L297.266 108.237H302.58V109.516H294.905Z"
                  fill="url(#paint154_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M164.918 171.903V170.623L166.493 169.049C170.429 165.31 172.102 163.342 172.2 161.079C172.2 159.504 171.413 158.127 169.15 158.127C167.772 158.127 166.591 158.815 165.902 159.406L165.214 157.93C166.296 157.044 167.772 156.355 169.543 156.355C172.79 156.355 174.168 158.619 174.168 160.783C174.168 163.637 172.102 165.9 168.953 168.951L167.772 170.033H174.66V171.706H164.918V171.903Z"
                  fill="url(#paint155_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M67.6992 331.801V330.817L68.9784 329.636C72.0288 326.783 73.4064 325.208 73.4064 323.437C73.4064 322.256 72.816 321.174 71.0448 321.174C69.9624 321.174 69.0768 321.764 68.4864 322.158L67.9944 321.075C68.7816 320.387 69.9624 319.895 71.34 319.895C73.8984 319.895 74.9808 321.666 74.9808 323.339C74.9808 325.503 73.4064 327.275 70.9464 329.636L69.9624 330.522H75.276V331.801H67.6992Z"
                  fill="url(#paint156_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M326.196 354.828C327.082 355.418 329.05 356.205 331.116 356.205C334.954 356.205 336.233 353.745 336.134 351.876C336.134 348.727 333.281 347.448 330.329 347.448H328.656V345.185H330.329C332.494 345.185 335.347 344.102 335.347 341.445C335.347 339.674 334.166 338.1 331.411 338.1C329.64 338.1 327.869 338.887 326.983 339.576L326.196 337.411C327.377 336.525 329.64 335.738 332.002 335.738C336.43 335.738 338.398 338.297 338.398 341.052C338.398 343.315 337.02 345.283 334.265 346.267V346.365C337.02 346.956 339.283 348.924 339.283 352.073C339.283 355.615 336.528 358.764 331.116 358.764C328.656 358.764 326.393 357.977 325.31 357.288L326.196 354.828Z"
                  fill="url(#paint157_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M244.229 183.021C244.819 183.415 246.295 184.104 247.87 184.104C250.723 184.104 251.609 182.234 251.609 180.955C251.609 178.692 249.542 177.609 247.378 177.609H246.098V175.936H247.378C249.05 175.936 251.018 175.051 251.018 173.181C251.018 171.902 250.133 170.721 248.165 170.721C246.886 170.721 245.606 171.312 244.819 171.804L244.229 170.131C245.114 169.54 246.787 168.852 248.558 168.852C251.806 168.852 253.282 170.82 253.282 172.788C253.282 174.46 252.298 175.936 250.231 176.625V176.724C252.298 177.117 253.872 178.692 253.872 180.955C253.872 183.612 251.806 185.875 247.87 185.875C246 185.875 244.426 185.284 243.54 184.792L244.229 183.021Z"
                  fill="url(#paint158_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M164.328 289.491C164.918 289.884 166.394 290.573 167.969 290.573C170.822 290.573 171.708 288.703 171.708 287.424C171.708 285.161 169.642 284.079 167.477 284.079H166.198V282.406H167.477C169.15 282.406 171.118 281.52 171.118 279.651C171.118 278.371 170.232 277.191 168.264 277.191C166.985 277.191 165.706 277.781 164.918 278.273L164.328 276.502C165.214 275.911 166.886 275.223 168.658 275.223C171.905 275.223 173.381 277.191 173.381 279.159C173.381 280.831 172.397 282.307 170.33 282.996V283.095C172.397 283.488 173.971 285.063 173.971 287.326C173.971 289.983 171.905 292.246 167.969 292.246C166.099 292.246 164.525 291.655 163.639 291.163L164.328 289.491Z"
                  fill="url(#paint159_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M398.52 186.564C399.11 186.958 400.586 187.647 402.161 187.647C405.014 187.647 405.9 185.777 405.9 184.498C405.9 182.235 403.834 181.152 401.669 181.152H400.39V179.479H401.669C403.342 179.479 405.31 178.594 405.31 176.724C405.31 175.445 404.424 174.264 402.456 174.264C401.177 174.264 399.898 174.855 399.11 175.347L398.52 173.674C399.406 173.083 401.078 172.395 402.85 172.395C406.097 172.395 407.573 174.363 407.573 176.331C407.573 178.003 406.589 179.479 404.522 180.168V180.267C406.589 180.66 408.163 182.235 408.163 184.498C408.163 187.155 406.097 189.418 402.161 189.418C400.291 189.418 398.717 188.827 397.831 188.335L398.52 186.564Z"
                  fill="url(#paint160_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M208.214 175.344V170.817H200.539V169.341L207.919 158.812H210.281V169.046H212.544V170.817H210.281V175.344H208.214ZM208.214 169.144V163.634C208.214 162.749 208.214 161.863 208.313 161.076H208.214C207.722 162.06 207.329 162.749 206.837 163.536L202.802 169.144V169.243H208.214V169.144Z"
                  fill="url(#paint161_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M320.39 389.169V386.316H315.47V385.332L320.194 378.641H321.768V385.135H323.244V386.217H321.768V389.071H320.39V389.169ZM320.39 385.135V381.593C320.39 381.002 320.39 380.51 320.39 379.92C320.095 380.51 319.8 381.002 319.505 381.494L316.946 385.037H320.39V385.135Z"
                  fill="url(#paint162_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M219.727 312.81H213.43L212.839 317.041C213.233 316.943 213.528 316.943 214.217 316.943C215.496 316.943 216.775 317.238 217.759 317.829C219.038 318.517 220.121 319.993 220.121 322.06C220.121 325.307 217.562 327.669 214.02 327.669C212.249 327.669 210.674 327.177 209.887 326.685L210.478 325.012C211.166 325.405 212.544 325.897 214.02 325.897C216.086 325.897 217.956 324.52 217.956 322.355C217.956 320.19 216.48 318.714 213.233 318.714C212.249 318.714 211.56 318.813 210.97 318.911L212.052 311.039H219.924V312.81H219.727Z"
                  fill="url(#paint163_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M74.784 185.679H70.4544L70.0608 188.533C70.356 188.533 70.5528 188.434 70.9464 188.434C71.832 188.434 72.7176 188.631 73.4064 189.025C74.292 189.517 74.9808 190.501 74.9808 191.878C74.9808 194.043 73.2096 195.716 70.7496 195.716C69.4704 195.716 68.4864 195.322 67.896 195.027L68.2896 193.846C68.7816 194.142 69.6672 194.437 70.6512 194.437C72.1272 194.437 73.308 193.453 73.308 191.977C73.308 190.501 72.324 189.517 70.0608 189.517C69.372 189.517 68.88 189.615 68.4864 189.615L69.1752 184.203H74.784V185.679Z"
                  fill="url(#paint164_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M330.919 145.728H324.622L324.031 149.959C324.425 149.861 324.72 149.861 325.409 149.861C326.688 149.861 327.967 150.156 328.951 150.747C330.23 151.435 331.313 152.911 331.313 154.978C331.313 158.225 328.754 160.587 325.212 160.587C323.441 160.587 321.866 160.095 321.079 159.603L321.67 157.93C322.358 158.323 323.736 158.815 325.212 158.815C327.278 158.815 329.148 157.438 329.148 155.273C329.148 153.108 327.672 151.632 324.425 151.632C323.441 151.632 322.752 151.731 322.162 151.829L323.244 143.957H331.116V145.728H330.919Z"
                  fill="url(#paint165_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M283.687 354.728C283.195 354.728 282.605 354.728 282.014 354.827C278.472 355.417 276.701 357.975 276.307 360.731H276.406C277.193 359.648 278.57 358.861 280.342 358.861C283.294 358.861 285.36 360.927 285.36 364.175C285.36 367.225 283.294 369.98 279.85 369.98C276.307 369.98 274.044 367.225 274.044 362.994C274.044 359.747 275.225 357.188 276.799 355.515C278.177 354.138 279.948 353.351 282.113 353.055C282.802 352.957 283.294 352.957 283.786 352.957V354.728H283.687ZM283.097 364.273C283.097 361.911 281.719 360.534 279.653 360.534C278.275 360.534 277.094 361.419 276.504 362.6C276.307 362.895 276.209 363.191 276.209 363.584C276.307 366.339 277.488 368.307 279.85 368.307C281.818 368.209 283.097 366.635 283.097 364.273Z"
                  fill="url(#paint166_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M349.517 196.992C349.123 196.992 348.73 196.992 348.139 197.091C345.286 197.583 343.81 199.649 343.514 201.814H343.613C344.203 201.027 345.384 200.24 346.86 200.24C349.222 200.24 350.894 201.912 350.894 204.471C350.894 206.931 349.222 209.096 346.466 209.096C343.613 209.096 341.743 206.931 341.743 203.487C341.743 200.83 342.727 198.862 344.006 197.484C345.089 196.402 346.565 195.713 348.238 195.516C348.73 195.418 349.222 195.418 349.517 195.418V196.992ZM349.025 204.569C349.025 202.7 347.942 201.519 346.27 201.519C345.187 201.519 344.203 202.208 343.711 203.192C343.613 203.388 343.514 203.684 343.514 203.979C343.514 206.144 344.597 207.816 346.466 207.816C347.942 207.816 349.025 206.537 349.025 204.569Z"
                  fill="url(#paint167_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M187.354 325.896C186.862 325.896 186.271 325.896 185.681 325.995C182.138 326.585 180.367 329.143 179.974 331.899H180.072C180.859 330.816 182.237 330.029 184.008 330.029C186.96 330.029 189.026 332.095 189.026 335.343C189.026 338.393 186.96 341.148 183.516 341.148C179.974 341.148 177.71 338.393 177.71 334.162C177.71 330.915 178.891 328.356 180.466 326.683C181.843 325.306 183.614 324.519 185.779 324.223C186.468 324.125 186.96 324.125 187.452 324.125V325.896H187.354ZM186.665 335.343C186.665 332.981 185.287 331.603 183.221 331.603C181.843 331.603 180.662 332.489 180.072 333.67C179.875 333.965 179.777 334.26 179.777 334.654C179.875 337.409 181.056 339.377 183.418 339.377C185.386 339.377 186.665 337.704 186.665 335.343Z"
                  fill="url(#paint168_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M363.391 301.986C362.899 301.986 362.309 301.986 361.718 302.084C358.176 302.675 356.405 305.233 356.011 307.988H356.11C356.897 306.906 358.274 306.119 360.046 306.119C362.998 306.119 365.064 308.185 365.064 311.432C365.064 314.483 362.998 317.238 359.554 317.238C356.011 317.238 353.748 314.483 353.748 310.252C353.748 307.004 354.929 304.446 356.503 302.773C357.881 301.396 359.652 300.608 361.817 300.313C362.506 300.215 362.998 300.215 363.49 300.215V301.986H363.391ZM362.801 311.531C362.801 309.169 361.423 307.792 359.357 307.792C357.979 307.792 356.798 308.677 356.208 309.858C356.011 310.153 355.913 310.448 355.913 310.842C356.011 313.597 357.192 315.565 359.554 315.565C361.522 315.467 362.801 313.892 362.801 311.531Z"
                  fill="url(#paint169_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M217.562 268.234V269.71L210.379 284.766H208.116L215.299 270.202V270.104H207.23V268.234H217.562Z"
                  fill="url(#paint170_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M158.522 378.836V379.82L153.701 389.857H152.126L156.948 380.115H151.536V378.836H158.522Z"
                  fill="url(#paint171_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M340.562 269.416C340.562 267.35 341.842 265.874 343.81 264.988V264.89C341.94 264.004 341.153 262.627 341.153 261.151C341.153 258.494 343.318 256.723 346.27 256.723C349.418 256.723 351.091 258.691 351.091 260.757C351.091 262.135 350.402 263.611 348.336 264.595V264.693C350.402 265.48 351.682 266.956 351.682 268.924C351.682 271.778 349.222 273.746 346.073 273.746C342.629 273.844 340.562 271.778 340.562 269.416ZM349.418 269.318C349.418 267.35 348.041 266.366 345.778 265.677C343.81 266.267 342.826 267.547 342.826 269.121C342.727 270.794 344.006 272.27 346.171 272.27C348.139 272.27 349.418 270.991 349.418 269.318ZM343.318 261.052C343.318 262.725 344.597 263.611 346.466 264.103C347.844 263.611 349.025 262.627 349.025 261.151C349.025 259.871 348.238 258.494 346.27 258.494C344.302 258.395 343.318 259.576 343.318 261.052Z"
                  fill="url(#paint172_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M393.994 135.59C393.994 134.016 394.879 132.933 396.454 132.343V132.245C395.076 131.654 394.486 130.572 394.486 129.489C394.486 127.521 396.158 126.242 398.225 126.242C400.586 126.242 401.767 127.718 401.767 129.194C401.767 130.178 401.275 131.359 399.799 132.048V132.146C401.275 132.737 402.259 133.819 402.259 135.295C402.259 137.361 400.488 138.837 398.126 138.837C395.47 138.936 393.994 137.361 393.994 135.59ZM400.488 135.59C400.488 134.114 399.504 133.425 397.831 132.933C396.454 133.327 395.666 134.311 395.666 135.393C395.568 136.673 396.552 137.755 398.126 137.755C399.602 137.755 400.488 136.771 400.488 135.59ZM395.962 129.489C395.962 130.67 396.847 131.359 398.323 131.753C399.406 131.359 400.193 130.67 400.193 129.588C400.193 128.604 399.602 127.62 398.126 127.62C396.749 127.521 395.962 128.407 395.962 129.489Z"
                  fill="url(#paint173_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M195.619 129.784C195.619 126.734 197.489 124.569 200.441 123.29V123.192C197.784 121.912 196.603 119.846 196.603 117.78C196.603 113.942 199.85 111.285 204.082 111.285C208.805 111.285 211.166 114.237 211.166 117.288C211.166 119.354 210.182 121.519 207.132 122.995V123.093C210.182 124.274 212.052 126.439 212.052 129.391C212.052 133.622 208.411 136.476 203.786 136.476C198.67 136.377 195.619 133.327 195.619 129.784ZM208.608 129.686C208.608 126.734 206.542 125.356 203.294 124.372C200.441 125.16 198.965 127.029 198.965 129.391C198.866 131.851 200.736 134.016 203.786 134.016C206.738 134.016 208.608 132.146 208.608 129.686ZM199.654 117.583C199.654 120.043 201.523 121.322 204.278 122.011C206.345 121.322 207.919 119.846 207.919 117.583C207.919 115.615 206.738 113.647 203.786 113.647C201.13 113.647 199.654 115.418 199.654 117.583Z"
                  fill="url(#paint174_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M244.721 343.51C245.213 343.608 245.803 343.51 246.492 343.411C247.771 343.215 249.05 342.723 249.936 341.837C251.018 340.853 251.806 339.377 252.101 337.409H252.002C251.117 338.491 249.739 339.18 248.165 339.18C245.213 339.18 243.245 336.917 243.245 334.162C243.245 331.013 245.508 328.258 248.854 328.258C252.199 328.258 254.266 331.013 254.266 335.244C254.266 338.885 253.085 341.443 251.412 343.018C250.133 344.297 248.362 344.986 246.59 345.183C245.803 345.281 245.114 345.379 244.524 345.281V343.51H244.721ZM245.508 334.063C245.508 336.13 246.787 337.606 248.657 337.606C250.133 337.606 251.314 336.917 251.904 335.835C252.002 335.638 252.101 335.343 252.101 335.047C252.101 332.194 251.018 330.029 248.755 330.029C246.886 330.029 245.508 331.702 245.508 334.063Z"
                  fill="url(#paint175_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M410.23 339.478C410.623 339.478 411.017 339.478 411.607 339.379C412.591 339.281 413.477 338.887 414.166 338.198C414.953 337.411 415.543 336.329 415.838 334.853H415.74C415.051 335.738 414.067 336.23 412.788 336.23C410.525 336.23 409.147 334.558 409.147 332.393C409.147 330.031 410.82 327.965 413.378 327.965C415.937 327.965 417.511 330.031 417.511 333.18C417.511 335.935 416.626 337.805 415.346 338.986C414.362 339.97 413.083 340.462 411.706 340.658C411.115 340.757 410.525 340.757 410.131 340.757V339.478H410.23ZM410.82 332.294C410.82 333.869 411.804 334.951 413.182 334.951C414.264 334.951 415.15 334.361 415.642 333.672C415.74 333.475 415.838 333.278 415.838 333.082C415.838 330.917 415.051 329.342 413.28 329.342C411.804 329.244 410.82 330.523 410.82 332.294Z"
                  fill="url(#paint176_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M203.786 244.912C204.082 244.912 204.475 244.912 205.066 244.814C205.951 244.716 206.837 244.322 207.526 243.732C208.313 243.043 208.805 242.059 209.1 240.681H209.002C208.313 241.468 207.427 241.96 206.246 241.96C204.18 241.96 202.802 240.386 202.802 238.418C202.802 236.253 204.377 234.285 206.738 234.285C209.1 234.285 210.576 236.253 210.576 239.205C210.576 241.764 209.69 243.535 208.608 244.617C207.722 245.503 206.443 245.995 205.262 246.192C204.672 246.29 204.18 246.29 203.786 246.29V244.912ZM204.377 238.221C204.377 239.697 205.262 240.681 206.64 240.681C207.722 240.681 208.51 240.189 208.903 239.5C209.002 239.402 209.002 239.205 209.002 238.91C209.002 236.942 208.313 235.368 206.64 235.368C205.361 235.368 204.377 236.548 204.377 238.221Z"
                  fill="url(#paint177_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M102.533 147.104C103.025 147.202 103.615 147.104 104.304 147.005C105.583 146.808 106.862 146.316 107.748 145.431C108.83 144.447 109.618 142.971 109.913 141.003H109.814C108.929 142.085 107.551 142.774 105.977 142.774C103.025 142.774 101.057 140.511 101.057 137.756C101.057 134.607 103.32 131.852 106.666 131.852C110.011 131.852 112.078 134.607 112.078 138.838C112.078 142.479 110.897 145.037 109.224 146.612C107.945 147.891 106.174 148.58 104.402 148.776C103.615 148.875 102.926 148.973 102.336 148.875V147.104H102.533ZM103.418 137.657C103.418 139.724 104.698 141.2 106.567 141.2C108.043 141.2 109.224 140.511 109.814 139.428C109.913 139.232 110.011 138.936 110.011 138.641C110.011 135.788 108.929 133.623 106.666 133.623C104.698 133.623 103.418 135.296 103.418 137.657Z"
                  fill="url(#paint178_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M157.834 227.794C158.129 227.794 158.522 227.794 159.113 227.696C159.998 227.598 160.884 227.204 161.474 226.614C162.262 225.925 162.754 224.941 162.95 223.563H162.852C162.262 224.35 161.278 224.744 160.195 224.744C158.129 224.744 156.85 223.17 156.85 221.3C156.85 219.135 158.424 217.266 160.687 217.266C163.049 217.266 164.426 219.135 164.426 222.087C164.426 224.547 163.541 226.318 162.458 227.401C161.573 228.286 160.392 228.778 159.113 228.877C158.522 228.975 158.03 228.975 157.735 228.975V227.794H157.834ZM158.326 221.3C158.326 222.678 159.211 223.662 160.49 223.662C161.474 223.662 162.36 223.17 162.754 222.481C162.852 222.382 162.852 222.186 162.852 221.89C162.852 219.922 162.163 218.446 160.49 218.446C159.31 218.545 158.326 219.726 158.326 221.3Z"
                  fill="url(#paint179_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M238.03 375.493C238.03 381.102 235.963 384.152 232.322 384.152C229.075 384.152 226.91 381.102 226.91 375.69C226.91 370.179 229.272 367.129 232.618 367.129C235.963 367.129 238.03 370.278 238.03 375.493ZM229.075 375.788C229.075 380.118 230.354 382.479 232.421 382.479C234.684 382.479 235.766 379.823 235.766 375.591C235.766 371.557 234.684 368.9 232.421 368.9C230.453 368.9 229.075 371.262 229.075 375.788Z"
                  fill="url(#paint180_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M136.874 269.613C136.874 273.451 135.497 275.616 132.938 275.616C130.774 275.616 129.199 273.549 129.199 269.81C129.199 266.071 130.872 263.906 133.135 263.906C135.497 263.906 136.874 265.973 136.874 269.613ZM130.774 269.81C130.774 272.762 131.659 274.435 133.037 274.435C134.611 274.435 135.3 272.565 135.3 269.712C135.3 266.957 134.611 265.087 133.037 265.087C131.758 265.087 130.774 266.661 130.774 269.81Z"
                  fill="url(#paint181_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M302.777 308.282C302.777 313.891 300.71 316.941 297.07 316.941C293.822 316.941 291.658 313.891 291.658 308.479C291.658 302.968 294.019 299.918 297.365 299.918C300.809 299.918 302.777 302.968 302.777 308.282ZM293.822 308.479C293.822 312.808 295.102 315.17 297.168 315.17C299.431 315.17 300.514 312.513 300.514 308.282C300.514 304.248 299.431 301.591 297.168 301.591C295.298 301.689 293.822 304.051 293.822 308.479Z"
                  fill="url(#paint182_linear_186_1694)"
                />
                <motion.path
                  {...mainPathVariant}
                  animate={isAnimating ? "visible" : "hidden"}
                  initial="hidden"
                  d="M377.167 165.309C377.167 170.918 375.101 173.969 371.46 173.969C368.213 173.969 366.048 170.918 366.048 165.506C366.048 159.996 368.41 156.945 371.755 156.945C375.199 156.945 377.167 159.996 377.167 165.309ZM368.213 165.506C368.213 169.836 369.492 172.197 371.559 172.197C373.822 172.197 374.904 169.541 374.904 165.309C374.904 161.275 373.822 158.618 371.559 158.618C369.689 158.618 368.213 161.078 368.213 165.506Z"
                  fill="url(#paint183_linear_186_1694)"
                />
              </g>
            </g>
            <motion.path
              {...mainPathVariant}
              animate={isAnimating ? "visible" : "hidden"}
              initial="hidden"
              d="M240.263 242.383C239.201 241.852 238.67 239.398 238.67 235.023C238.67 231.805 239.084 229.523 239.912 228.18C240.115 227.852 240.349 227.633 240.615 227.523C241.099 228.195 241.474 228.602 241.74 228.742C242.146 228.977 242.638 229.094 243.216 229.094C243.795 229.094 244.287 229.062 244.693 229L245.959 228.812C247.224 228.609 248.412 228.508 249.521 228.508C250.646 228.508 251.74 228.656 252.802 228.953C253.865 229.25 254.779 229.703 255.545 230.312C257.123 231.594 257.943 233.562 258.006 236.219C258.037 238.938 256.396 241.766 253.084 244.703C250.974 246.562 249.607 247.945 248.982 248.852C248.357 249.758 248.045 250.531 248.045 251.172C248.045 251.812 248.06 252.289 248.091 252.602C248.138 252.898 248.193 253.164 248.256 253.398C248.334 253.617 248.427 253.812 248.537 253.984L248.959 254.641H243.615C243.49 252.281 244.068 250.047 245.349 247.938C245.818 247.156 246.318 246.391 246.849 245.641L248.49 243.367C250.49 240.68 251.49 238 251.49 235.328C251.49 232.641 250.56 231.297 248.701 231.297C247.248 231.297 245.865 231.914 244.552 233.148C242.802 234.773 241.529 237.047 240.732 239.969C240.498 240.812 240.341 241.617 240.263 242.383ZM242.42 261.18C242.42 260.086 242.787 259.141 243.521 258.344C244.256 257.562 245.146 257.172 246.193 257.172C247.24 257.172 248.131 257.562 248.865 258.344C249.599 259.141 249.966 260.086 249.966 261.18C249.966 262.305 249.599 263.25 248.865 264.016C248.115 264.797 247.224 265.188 246.193 265.188C245.162 265.188 244.271 264.797 243.521 264.016C242.787 263.25 242.42 262.305 242.42 261.18Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_186_1694"
                x1="26.1515"
                y1="246.942"
                x2="467.769"
                y2="246.942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_186_1694"
                x1="32.292"
                y1="246.943"
                x2="461.628"
                y2="246.943"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_186_1694"
                x1="nan"
                y1="nan"
                x2="nan"
                y2="nan"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_186_1694"
                x1="227.379"
                y1="30.3819"
                x2="228.652"
                y2="30.3819"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_186_1694"
                x1="208.312"
                y1="32.8542"
                x2="210.117"
                y2="32.8542"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_186_1694"
                x1="189.537"
                y1="36.959"
                x2="191.865"
                y2="36.959"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_186_1694"
                x1="171.196"
                y1="42.6648"
                x2="174.035"
                y2="42.6648"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_186_1694"
                x1="153.429"
                y1="49.9213"
                x2="156.762"
                y2="49.9213"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_186_1694"
                x1="136.371"
                y1="58.6777"
                x2="140.18"
                y2="58.6777"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_186_1694"
                x1="120.152"
                y1="68.8674"
                x2="124.412"
                y2="68.8674"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_186_1694"
                x1="104.895"
                y1="80.4138"
                x2="109.58"
                y2="80.4138"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_186_1694"
                x1="90.7167"
                y1="93.2258"
                x2="95.7968"
                y2="93.2258"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_186_1694"
                x1="77.7246"
                y1="107.206"
                x2="83.1665"
                y2="107.206"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_186_1694"
                x1="66.0176"
                y1="122.253"
                x2="71.7857"
                y2="122.253"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_186_1694"
                x1="55.6849"
                y1="138.247"
                x2="61.7407"
                y2="138.247"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_186_1694"
                x1="46.8049"
                y1="155.069"
                x2="53.1081"
                y2="155.069"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_186_1694"
                x1="39.4457"
                y1="172.593"
                x2="45.9539"
                y2="172.593"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_186_1694"
                x1="33.6627"
                y1="190.677"
                x2="40.3321"
                y2="190.677"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_186_1694"
                x1="29.5005"
                y1="209.195"
                x2="36.2857"
                y2="209.195"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_186_1694"
                x1="26.9904"
                y1="227.995"
                x2="33.8455"
                y2="227.995"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint20_linear_186_1694"
                x1="nan"
                y1="nan"
                x2="nan"
                y2="nan"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint21_linear_186_1694"
                x1="26.9904"
                y1="265.891"
                x2="33.8455"
                y2="265.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint22_linear_186_1694"
                x1="29.5005"
                y1="284.693"
                x2="36.2857"
                y2="284.693"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint23_linear_186_1694"
                x1="33.6627"
                y1="303.208"
                x2="40.3321"
                y2="303.208"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint24_linear_186_1694"
                x1="39.4457"
                y1="321.296"
                x2="45.9539"
                y2="321.296"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint25_linear_186_1694"
                x1="46.8049"
                y1="338.816"
                x2="53.1081"
                y2="338.816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint26_linear_186_1694"
                x1="55.6849"
                y1="355.637"
                x2="61.7407"
                y2="355.637"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint27_linear_186_1694"
                x1="66.0176"
                y1="371.63"
                x2="71.7857"
                y2="371.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint28_linear_186_1694"
                x1="77.7246"
                y1="386.677"
                x2="83.1665"
                y2="386.677"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint29_linear_186_1694"
                x1="90.7167"
                y1="400.661"
                x2="95.7968"
                y2="400.661"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint30_linear_186_1694"
                x1="104.895"
                y1="413.472"
                x2="109.58"
                y2="413.472"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint31_linear_186_1694"
                x1="120.152"
                y1="425.016"
                x2="124.412"
                y2="425.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint32_linear_186_1694"
                x1="136.371"
                y1="435.208"
                x2="140.18"
                y2="435.208"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint33_linear_186_1694"
                x1="153.429"
                y1="443.966"
                x2="156.762"
                y2="443.966"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint34_linear_186_1694"
                x1="171.196"
                y1="451.221"
                x2="174.035"
                y2="451.221"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint35_linear_186_1694"
                x1="189.537"
                y1="456.924"
                x2="191.865"
                y2="456.924"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint36_linear_186_1694"
                x1="208.312"
                y1="461.029"
                x2="210.117"
                y2="461.029"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint37_linear_186_1694"
                x1="227.379"
                y1="463.506"
                x2="228.652"
                y2="463.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint38_linear_186_1694"
                x1="nan"
                y1="nan"
                x2="nan"
                y2="nan"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint39_linear_186_1694"
                x1="265.269"
                y1="463.506"
                x2="266.542"
                y2="463.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint40_linear_186_1694"
                x1="283.804"
                y1="461.029"
                x2="285.608"
                y2="461.029"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint41_linear_186_1694"
                x1="302.056"
                y1="456.924"
                x2="304.383"
                y2="456.924"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint42_linear_186_1694"
                x1="319.886"
                y1="451.221"
                x2="322.724"
                y2="451.221"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint43_linear_186_1694"
                x1="337.158"
                y1="443.966"
                x2="340.491"
                y2="443.966"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint44_linear_186_1694"
                x1="353.741"
                y1="435.208"
                x2="357.549"
                y2="435.208"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint45_linear_186_1694"
                x1="369.508"
                y1="425.016"
                x2="373.768"
                y2="425.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint46_linear_186_1694"
                x1="384.34"
                y1="413.472"
                x2="389.025"
                y2="413.472"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint47_linear_186_1694"
                x1="398.124"
                y1="400.661"
                x2="403.204"
                y2="400.661"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint48_linear_186_1694"
                x1="410.754"
                y1="386.677"
                x2="416.196"
                y2="386.677"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint49_linear_186_1694"
                x1="422.135"
                y1="371.63"
                x2="427.903"
                y2="371.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint50_linear_186_1694"
                x1="432.18"
                y1="355.637"
                x2="438.236"
                y2="355.637"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint51_linear_186_1694"
                x1="440.812"
                y1="338.816"
                x2="447.116"
                y2="338.816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint52_linear_186_1694"
                x1="447.967"
                y1="321.296"
                x2="454.475"
                y2="321.296"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint53_linear_186_1694"
                x1="453.588"
                y1="303.208"
                x2="460.258"
                y2="303.208"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint54_linear_186_1694"
                x1="457.635"
                y1="284.693"
                x2="464.42"
                y2="284.693"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint55_linear_186_1694"
                x1="460.075"
                y1="265.891"
                x2="466.93"
                y2="265.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint56_linear_186_1694"
                x1="nan"
                y1="nan"
                x2="nan"
                y2="nan"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint57_linear_186_1694"
                x1="460.075"
                y1="227.995"
                x2="466.93"
                y2="227.995"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint58_linear_186_1694"
                x1="457.635"
                y1="209.195"
                x2="464.42"
                y2="209.195"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint59_linear_186_1694"
                x1="453.588"
                y1="190.677"
                x2="460.258"
                y2="190.677"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint60_linear_186_1694"
                x1="447.967"
                y1="172.593"
                x2="454.475"
                y2="172.593"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint61_linear_186_1694"
                x1="440.812"
                y1="155.069"
                x2="447.116"
                y2="155.069"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint62_linear_186_1694"
                x1="432.18"
                y1="138.247"
                x2="438.236"
                y2="138.247"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint63_linear_186_1694"
                x1="422.135"
                y1="122.253"
                x2="427.903"
                y2="122.253"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint64_linear_186_1694"
                x1="410.754"
                y1="107.206"
                x2="416.196"
                y2="107.206"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint65_linear_186_1694"
                x1="398.124"
                y1="93.2258"
                x2="403.204"
                y2="93.2258"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint66_linear_186_1694"
                x1="384.34"
                y1="80.3746"
                x2="389.2"
                y2="80.3746"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint67_linear_186_1694"
                x1="369.508"
                y1="68.8674"
                x2="373.768"
                y2="68.8674"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint68_linear_186_1694"
                x1="353.741"
                y1="58.6777"
                x2="357.549"
                y2="58.6777"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint69_linear_186_1694"
                x1="337.158"
                y1="49.9213"
                x2="340.491"
                y2="49.9213"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint70_linear_186_1694"
                x1="319.886"
                y1="42.6648"
                x2="322.724"
                y2="42.6648"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint71_linear_186_1694"
                x1="302.056"
                y1="36.959"
                x2="304.383"
                y2="36.959"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint72_linear_186_1694"
                x1="283.804"
                y1="32.8542"
                x2="285.608"
                y2="32.8542"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint73_linear_186_1694"
                x1="265.269"
                y1="30.3819"
                x2="266.542"
                y2="30.3819"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint74_linear_186_1694"
                x1="236.976"
                y1="29.7589"
                x2="237.982"
                y2="29.7589"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint75_linear_186_1694"
                x1="217.818"
                y1="31.4108"
                x2="219.358"
                y2="31.4108"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint76_linear_186_1694"
                x1="198.879"
                y1="34.7061"
                x2="200.946"
                y2="34.7061"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint77_linear_186_1694"
                x1="180.304"
                y1="39.6118"
                x2="182.888"
                y2="39.6118"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint78_linear_186_1694"
                x1="162.233"
                y1="46.099"
                x2="165.32"
                y2="46.099"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint79_linear_186_1694"
                x1="144.803"
                y1="54.1154"
                x2="148.377"
                y2="54.1154"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint80_linear_186_1694"
                x1="128.149"
                y1="63.5953"
                x2="132.186"
                y2="63.5953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint81_linear_186_1694"
                x1="112.396"
                y1="74.4756"
                x2="116.872"
                y2="74.4756"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint82_linear_186_1694"
                x1="97.6642"
                y1="86.6661"
                x2="102.551"
                y2="86.6661"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint83_linear_186_1694"
                x1="84.0659"
                y1="100.075"
                x2="89.3312"
                y2="100.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint84_linear_186_1694"
                x1="71.7047"
                y1="114.605"
                x2="77.3143"
                y2="114.605"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint85_linear_186_1694"
                x1="60.6742"
                y1="130.138"
                x2="66.591"
                y2="130.138"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint86_linear_186_1694"
                x1="51.0587"
                y1="146.561"
                x2="57.2434"
                y2="146.561"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint87_linear_186_1694"
                x1="42.9314"
                y1="163.75"
                x2="49.3426"
                y2="163.75"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint88_linear_186_1694"
                x1="36.3541"
                y1="181.571"
                x2="42.9484"
                y2="181.571"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint89_linear_186_1694"
                x1="31.3768"
                y1="199.89"
                x2="38.1097"
                y2="199.89"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint90_linear_186_1694"
                x1="28.0373"
                y1="218.568"
                x2="34.8634"
                y2="218.568"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint91_linear_186_1694"
                x1="26.3612"
                y1="237.46"
                x2="33.234"
                y2="237.46"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint92_linear_186_1694"
                x1="26.3612"
                y1="256.422"
                x2="33.234"
                y2="256.422"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint93_linear_186_1694"
                x1="28.0373"
                y1="275.315"
                x2="34.8634"
                y2="275.315"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint94_linear_186_1694"
                x1="31.3768"
                y1="293.993"
                x2="38.1097"
                y2="293.993"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint95_linear_186_1694"
                x1="36.3541"
                y1="312.312"
                x2="42.9484"
                y2="312.312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint96_linear_186_1694"
                x1="42.9314"
                y1="330.133"
                x2="49.3426"
                y2="330.133"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint97_linear_186_1694"
                x1="51.0587"
                y1="347.322"
                x2="57.2434"
                y2="347.322"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint98_linear_186_1694"
                x1="60.6742"
                y1="363.744"
                x2="66.591"
                y2="363.744"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint99_linear_186_1694"
                x1="71.7047"
                y1="379.281"
                x2="77.3143"
                y2="379.281"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint100_linear_186_1694"
                x1="84.0659"
                y1="393.806"
                x2="89.3312"
                y2="393.806"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint101_linear_186_1694"
                x1="97.6642"
                y1="407.218"
                x2="102.551"
                y2="407.218"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint102_linear_186_1694"
                x1="112.396"
                y1="419.407"
                x2="116.872"
                y2="419.407"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint103_linear_186_1694"
                x1="128.149"
                y1="430.285"
                x2="132.186"
                y2="430.285"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint104_linear_186_1694"
                x1="144.803"
                y1="439.768"
                x2="148.377"
                y2="439.768"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint105_linear_186_1694"
                x1="162.233"
                y1="447.781"
                x2="165.32"
                y2="447.781"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint106_linear_186_1694"
                x1="180.304"
                y1="454.27"
                x2="182.888"
                y2="454.27"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint107_linear_186_1694"
                x1="198.879"
                y1="459.177"
                x2="200.946"
                y2="459.177"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint108_linear_186_1694"
                x1="217.818"
                y1="462.469"
                x2="219.358"
                y2="462.469"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint109_linear_186_1694"
                x1="236.976"
                y1="464.125"
                x2="237.982"
                y2="464.125"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint110_linear_186_1694"
                x1="255.939"
                y1="464.125"
                x2="256.945"
                y2="464.125"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint111_linear_186_1694"
                x1="274.563"
                y1="462.469"
                x2="276.102"
                y2="462.469"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint112_linear_186_1694"
                x1="292.974"
                y1="459.177"
                x2="295.041"
                y2="459.177"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint113_linear_186_1694"
                x1="311.032"
                y1="454.27"
                x2="313.617"
                y2="454.27"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint114_linear_186_1694"
                x1="328.6"
                y1="447.781"
                x2="331.688"
                y2="447.781"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint115_linear_186_1694"
                x1="345.544"
                y1="439.768"
                x2="349.117"
                y2="439.768"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint116_linear_186_1694"
                x1="361.734"
                y1="430.285"
                x2="365.771"
                y2="430.285"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint117_linear_186_1694"
                x1="377.048"
                y1="419.407"
                x2="381.524"
                y2="419.407"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint118_linear_186_1694"
                x1="391.37"
                y1="407.218"
                x2="396.256"
                y2="407.218"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint119_linear_186_1694"
                x1="404.589"
                y1="393.806"
                x2="409.854"
                y2="393.806"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint120_linear_186_1694"
                x1="416.606"
                y1="379.281"
                x2="422.216"
                y2="379.281"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint121_linear_186_1694"
                x1="427.329"
                y1="363.744"
                x2="433.246"
                y2="363.744"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint122_linear_186_1694"
                x1="436.677"
                y1="347.322"
                x2="442.862"
                y2="347.322"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint123_linear_186_1694"
                x1="444.578"
                y1="330.133"
                x2="450.989"
                y2="330.133"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint124_linear_186_1694"
                x1="450.972"
                y1="312.312"
                x2="457.566"
                y2="312.312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint125_linear_186_1694"
                x1="455.811"
                y1="293.993"
                x2="462.544"
                y2="293.993"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint126_linear_186_1694"
                x1="459.057"
                y1="275.315"
                x2="465.883"
                y2="275.315"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint127_linear_186_1694"
                x1="460.686"
                y1="256.422"
                x2="467.559"
                y2="256.422"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint128_linear_186_1694"
                x1="460.686"
                y1="237.46"
                x2="467.559"
                y2="237.46"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint129_linear_186_1694"
                x1="459.057"
                y1="218.568"
                x2="465.883"
                y2="218.568"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint130_linear_186_1694"
                x1="455.811"
                y1="199.89"
                x2="462.544"
                y2="199.89"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint131_linear_186_1694"
                x1="450.972"
                y1="181.571"
                x2="457.566"
                y2="181.571"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint132_linear_186_1694"
                x1="444.578"
                y1="163.75"
                x2="450.989"
                y2="163.75"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint133_linear_186_1694"
                x1="436.677"
                y1="146.561"
                x2="442.862"
                y2="146.561"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint134_linear_186_1694"
                x1="427.329"
                y1="130.138"
                x2="433.246"
                y2="130.138"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint135_linear_186_1694"
                x1="416.606"
                y1="114.605"
                x2="422.216"
                y2="114.605"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint136_linear_186_1694"
                x1="404.589"
                y1="100.075"
                x2="409.854"
                y2="100.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint137_linear_186_1694"
                x1="391.37"
                y1="86.6661"
                x2="396.256"
                y2="86.6661"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint138_linear_186_1694"
                x1="377.048"
                y1="74.4756"
                x2="381.524"
                y2="74.4756"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint139_linear_186_1694"
                x1="361.734"
                y1="63.5953"
                x2="365.771"
                y2="63.5953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint140_linear_186_1694"
                x1="345.544"
                y1="54.1154"
                x2="349.117"
                y2="54.1154"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint141_linear_186_1694"
                x1="328.6"
                y1="46.099"
                x2="331.688"
                y2="46.099"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint142_linear_186_1694"
                x1="311.032"
                y1="39.6118"
                x2="313.617"
                y2="39.6118"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint143_linear_186_1694"
                x1="292.974"
                y1="34.7061"
                x2="295.041"
                y2="34.7061"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint144_linear_186_1694"
                x1="274.563"
                y1="31.4108"
                x2="276.102"
                y2="31.4108"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint145_linear_186_1694"
                x1="255.939"
                y1="29.7589"
                x2="256.945"
                y2="29.7589"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36B0FF" />
                <stop offset="1" stop-color="#FF68FF" />
              </linearGradient>
              <linearGradient
                id="paint146_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint147_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint148_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.109"
                y2="115.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint149_linear_186_1694"
                x1="120.229"
                y1="384.384"
                x2="389.107"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint150_linear_186_1694"
                x1="120.23"
                y1="384.381"
                x2="389.108"
                y2="115.503"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint151_linear_186_1694"
                x1="120.231"
                y1="384.382"
                x2="389.109"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint152_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint153_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.109"
                y2="115.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint154_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.109"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint155_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint156_linear_186_1694"
                x1="120.23"
                y1="384.383"
                x2="389.108"
                y2="115.505"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint157_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.109"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint158_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.108"
                y2="115.505"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint159_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint160_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint161_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.108"
                y2="115.503"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint162_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.109"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint163_linear_186_1694"
                x1="120.23"
                y1="384.383"
                x2="389.108"
                y2="115.505"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint164_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint165_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint166_linear_186_1694"
                x1="120.23"
                y1="384.383"
                x2="389.108"
                y2="115.505"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint167_linear_186_1694"
                x1="120.229"
                y1="384.382"
                x2="389.108"
                y2="115.503"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint168_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.109"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint169_linear_186_1694"
                x1="120.23"
                y1="384.383"
                x2="389.108"
                y2="115.505"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint170_linear_186_1694"
                x1="120.23"
                y1="384.383"
                x2="389.108"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint171_linear_186_1694"
                x1="120.23"
                y1="384.383"
                x2="389.109"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint172_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.109"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint173_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.109"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint174_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.108"
                y2="115.503"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint175_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.108"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint176_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint177_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.108"
                y2="115.503"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint178_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.108"
                y2="115.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint179_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint180_linear_186_1694"
                x1="120.23"
                y1="384.385"
                x2="389.108"
                y2="115.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint181_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.108"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint182_linear_186_1694"
                x1="120.23"
                y1="384.382"
                x2="389.108"
                y2="115.503"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
              <linearGradient
                id="paint183_linear_186_1694"
                x1="120.23"
                y1="384.384"
                x2="389.109"
                y2="115.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF80FF" />
                <stop offset="1" stop-color="#36B0FF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {onReset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isAnimating ? { opacity: 0 } : { opacity: 1 }}
            transition={
              isAnimating
                ? { duration: 0.3, delay: 0 }
                : { duration: 0.5, delay: 1.5 }
            }
            className="flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white items-center"
          >
            <Lifepathnumbersvg onReset={onReset} />
          </motion.div>
        )}
      </div>
    </>
  );
};

const Lifepathnumbersvg = ({ onReset }) => {
  return (
    <div className="w-full">
      <svg viewBox="0 0 203 202" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M101.3 7.80078L20.6 147.601H182L101.3 7.80078Z"
          stroke="url(#paint0_linear_311_2)"
          stroke-width="0.75"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M101.3 194.202L182 54.4023H20.6L101.3 194.202Z"
          stroke="url(#paint1_linear_311_2)"
          stroke-width="0.75"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M101.3 7.80078L20.6 54.4008V147.601L101.3 194.201L182 147.601V54.4008L101.3 7.80078Z"
          stroke="url(#paint2_linear_311_2)"
          stroke-width="0.75"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M101.3 166.902C137.696 166.902 167.2 137.397 167.2 101.002C167.2 64.606 137.696 35.1016 101.3 35.1016C64.9045 35.1016 35.4 64.606 35.4 101.002C35.4 137.397 64.9045 166.902 101.3 166.902Z"
          stroke="url(#paint3_linear_311_2)"
          stroke-width="0.75"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M101.3 201C46.2001 201 1.30005 156.1 1.30005 101C1.30005 45.9 46.2001 1 101.3 1C156.4 1 201.3 45.9 201.3 101C201.3 156.1 156.4 201 101.3 201ZM101.3 1.6C46.5 1.6 1.90005 46.2 1.90005 101C1.90005 155.8 46.5 200.4 101.3 200.4C156.1 200.4 200.7 155.8 200.7 101C200.7 46.2 156.1 1.6 101.3 1.6Z"
          fill="url(#paint4_linear_311_2)"
        />
        <path
          d="M101.3 198.201C47.7001 198.201 4.1001 154.601 4.1001 101.001C4.1001 47.4008 47.7001 3.80078 101.3 3.80078C154.9 3.80078 198.5 47.4008 198.5 101.001C198.5 154.601 154.9 198.201 101.3 198.201ZM101.3 4.40078C48.0001 4.40078 4.7001 47.7008 4.7001 101.001C4.7001 154.301 48.0001 197.601 101.3 197.601C154.6 197.601 197.9 154.301 197.9 101.001C197.9 47.7008 154.6 4.40078 101.3 4.40078Z"
          fill="url(#paint5_linear_311_2)"
        />
        <path
          d="M101.3 4.4C101.1 4.4 101 4.3 101 4.1V1.3C101 1.1 101.1 1 101.3 1C101.5 1 101.6 1.1 101.6 1.3V4.1C101.6 4.3 101.5 4.4 101.3 4.4Z"
          fill="url(#paint6_linear_311_2)"
        />
        <path
          d="M92.9 4.79844C92.7 4.79844 92.6 4.69844 92.6 4.49844L92.4 1.69844C92.4 1.49844 92.5 1.39844 92.7 1.39844C92.9 1.39844 93 1.49844 93 1.69844L93.2 4.49844C93.2 4.59844 93.1 4.79844 92.9 4.79844Z"
          fill="url(#paint7_linear_311_2)"
        />
        <path
          d="M84.5001 5.9C84.3001 5.9 84.2001 5.8 84.2001 5.6L83.7001 2.9C83.7001 2.7 83.8001 2.6 84.0001 2.5C84.2001 2.5 84.3001 2.6 84.4001 2.8L84.9001 5.5C84.8001 5.7 84.7001 5.9 84.5001 5.9Z"
          fill="url(#paint8_linear_311_2)"
        />
        <path
          d="M76.2001 7.69844C76.1001 7.69844 75.9001 7.59844 75.9001 7.49844L75.2001 4.79844C75.2001 4.59844 75.3001 4.49844 75.4001 4.39844C75.6001 4.39844 75.7001 4.49844 75.8001 4.59844L76.5001 7.29844C76.6001 7.49844 76.5001 7.69844 76.2001 7.69844Z"
          fill="url(#paint9_linear_311_2)"
        />
        <path
          d="M68.2 10.3017C68.1 10.3017 67.9 10.2017 67.9 10.1017L67 7.50173C66.9 7.30173 67 7.10173 67.2 7.10173C67.4 7.00173 67.6 7.10173 67.6 7.30173L68.5 9.90173C68.6 10.1017 68.5 10.3017 68.3 10.3017C68.2 10.3017 68.2 10.3017 68.2 10.3017Z"
          fill="url(#paint10_linear_311_2)"
        />
        <path
          d="M60.3001 13.4986C60.2001 13.4986 60.1001 13.3986 60.0001 13.2986L58.8001 10.7986C58.7001 10.5986 58.8001 10.3986 59.0001 10.3986C59.2001 10.2986 59.4001 10.3986 59.4001 10.5986L60.6001 13.0986C60.7001 13.2986 60.6001 13.4986 60.4001 13.4986C60.4001 13.4986 60.4001 13.4986 60.3001 13.4986Z"
          fill="url(#paint11_linear_311_2)"
        />
        <path
          d="M52.9001 17.4008C52.8001 17.4008 52.7001 17.3008 52.6001 17.2008L51.2001 14.8008C51.1001 14.6008 51.2001 14.4008 51.3001 14.4008C51.5001 14.3008 51.7001 14.4008 51.7001 14.5008L53.1001 16.9008C53.2001 17.1008 53.1001 17.3008 53.0001 17.3008C53.0001 17.4008 52.9001 17.4008 52.9001 17.4008Z"
          fill="url(#paint12_linear_311_2)"
        />
        <path
          d="M45.7001 21.8993C45.6001 21.8993 45.5001 21.8993 45.4001 21.7993L43.8001 19.4993C43.7001 19.3993 43.7001 19.1993 43.9001 18.9993C44.0001 18.8993 44.2001 18.8993 44.4001 19.0993L46.0001 21.3993C46.1001 21.4993 46.1001 21.6993 45.9001 21.8993C45.9001 21.8993 45.8001 21.8993 45.7001 21.8993Z"
          fill="url(#paint13_linear_311_2)"
        />
        <path
          d="M39 27.0992C38.9 27.0992 38.8 27.0992 38.8 26.9992L37 24.8992C36.9 24.7992 36.9 24.5992 37 24.3992C37.1 24.2992 37.3 24.2992 37.5 24.3992L39.3 26.4992C39.4 26.5992 39.4 26.7992 39.3 26.9992C39.2 27.0992 39.1 27.0992 39 27.0992Z"
          fill="url(#paint14_linear_311_2)"
        />
        <path
          d="M32.8 32.8C32.7 32.8 32.6 32.8 32.6 32.7L30.6 30.7C30.5 30.6 30.5 30.4 30.6 30.2C30.7 30.1 30.9 30.1 31.1 30.2L33.1 32.2C33.2 32.3 33.2 32.5 33.1 32.7C32.9 32.8 32.9 32.8 32.8 32.8Z"
          fill="url(#paint15_linear_311_2)"
        />
        <path
          d="M27.1 38.9998C27 38.9998 27 38.9998 26.9 38.8998L24.8 37.0998C24.7 36.9998 24.6 36.7998 24.8 36.5998C24.9 36.4998 25.1 36.3998 25.3 36.5998L27.4 38.3998C27.5 38.4998 27.6 38.6998 27.4 38.8998C27.3 38.9998 27.2 38.9998 27.1 38.9998Z"
          fill="url(#paint16_linear_311_2)"
        />
        <path
          d="M21.9001 45.7008C21.8001 45.7008 21.8001 45.7008 21.7001 45.6008L19.4001 44.0008C19.3001 43.9008 19.2001 43.7008 19.3001 43.5008C19.4001 43.4008 19.6001 43.3008 19.8001 43.4008L22.1001 45.0008C22.2001 45.1008 22.3001 45.3008 22.2001 45.5008C22.1001 45.7008 22.0001 45.7008 21.9001 45.7008Z"
          fill="url(#paint17_linear_311_2)"
        />
        <path
          d="M17.4001 52.8985C17.3001 52.8985 17.3001 52.8985 17.2001 52.8985L14.8001 51.4985C14.6001 51.3985 14.6001 51.1985 14.7001 51.0985C14.8001 50.9985 15.0001 50.8985 15.1001 50.9985L17.5001 52.3985C17.7001 52.4985 17.7001 52.6985 17.6001 52.7985C17.6001 52.7985 17.5001 52.8985 17.4001 52.8985Z"
          fill="url(#paint18_linear_311_2)"
        />
        <path
          d="M13.5001 60.4016H13.4001L10.9001 59.2016C10.7001 59.1016 10.7001 58.9016 10.7001 58.8016C10.8001 58.6016 11.0001 58.6016 11.1001 58.6016L13.6001 59.8016C13.8001 59.9016 13.8001 60.1016 13.8001 60.2016C13.7001 60.3016 13.6001 60.4016 13.5001 60.4016Z"
          fill="url(#paint19_linear_311_2)"
        />
        <path
          d="M10.2001 68.1994H10.1001L7.50009 67.2994C7.30009 67.1994 7.20009 67.0994 7.30009 66.8994C7.40009 66.6994 7.50009 66.5994 7.70009 66.6994L10.3001 67.5994C10.5001 67.6994 10.6001 67.7994 10.5001 67.9994C10.5001 68.0994 10.4001 68.1994 10.2001 68.1994Z"
          fill="url(#paint20_linear_311_2)"
        />
        <path
          d="M7.7 76.1986L4.9 75.4986C4.7 75.4986 4.6 75.2986 4.7 75.0986C4.7 74.8986 4.9 74.7986 5.1 74.8986L7.8 75.5986C8 75.6986 8.1 75.7986 8 75.9986C8 76.0986 7.8 76.1986 7.7 76.1986Z"
          fill="url(#paint21_linear_311_2)"
        />
        <path
          d="M5.90005 84.5008L3.10005 84.0008C2.90005 84.0008 2.80005 83.8008 2.80005 83.6008C2.80005 83.4008 3.00005 83.3008 3.20005 83.3008L5.90005 83.8008C6.10005 83.8008 6.20005 84.0008 6.20005 84.2008C6.20005 84.4008 6.00005 84.5008 5.90005 84.5008Z"
          fill="url(#paint22_linear_311_2)"
        />
        <path
          d="M4.80007 92.9L2.00007 92.6C1.80007 92.6 1.70007 92.4 1.70007 92.3C1.70007 92.2 1.90007 92 2.00007 92L4.80007 92.2C5.00007 92.2 5.10007 92.4 5.10007 92.5C5.10007 92.8 4.90007 92.9 4.80007 92.9Z"
          fill="url(#paint23_linear_311_2)"
        />
        <path
          d="M4.40005 101.299H1.60005C1.40005 101.299 1.30005 101.199 1.30005 100.999C1.30005 100.799 1.40005 100.699 1.60005 100.699H4.40005C4.60005 100.699 4.70005 100.799 4.70005 100.999C4.70005 101.199 4.60005 101.299 4.40005 101.299Z"
          fill="url(#paint24_linear_311_2)"
        />
        <path
          d="M2.00007 109.999C1.80007 109.999 1.70007 109.899 1.70007 109.699C1.70007 109.499 1.80007 109.399 2.00007 109.399L4.80007 109.199C5.00007 109.199 5.10007 109.299 5.10007 109.499C5.10007 109.699 5.00007 109.799 4.80007 109.799L2.00007 109.999Z"
          fill="url(#paint25_linear_311_2)"
        />
        <path
          d="M3.10005 118.598C2.90005 118.598 2.80005 118.498 2.80005 118.298C2.80005 118.098 2.90005 117.998 3.10005 117.898L5.80005 117.398C6.00005 117.398 6.10005 117.498 6.20005 117.698C6.20005 117.898 6.10005 117.998 5.90005 118.098L3.10005 118.598C3.20005 118.598 3.20005 118.598 3.10005 118.598Z"
          fill="url(#paint26_linear_311_2)"
        />
        <path
          d="M5.00007 127.101C4.90007 127.101 4.70007 127.001 4.70007 126.901C4.70007 126.701 4.80007 126.601 4.90007 126.501L7.60007 125.801C7.80007 125.801 7.90007 125.901 8.00007 126.001C8.00007 126.201 7.90007 126.301 7.80007 126.401L5.00007 127.101Z"
          fill="url(#paint27_linear_311_2)"
        />
        <path
          d="M7.60009 135.399C7.50009 135.399 7.30009 135.299 7.30009 135.199C7.20009 134.999 7.30009 134.799 7.50009 134.799L10.1001 133.899C10.3001 133.799 10.5001 133.899 10.5001 134.099C10.6001 134.299 10.5001 134.499 10.3001 134.499L7.70009 135.399C7.70009 135.399 7.70009 135.399 7.60009 135.399Z"
          fill="url(#paint28_linear_311_2)"
        />
        <path
          d="M11 143.402C10.9 143.402 10.8 143.302 10.7 143.202C10.6 143.002 10.7 142.802 10.9 142.802L13.4 141.602C13.6 141.502 13.8 141.602 13.8 141.802C13.9 142.002 13.8 142.202 13.6 142.202L11.1 143.402H11Z"
          fill="url(#paint29_linear_311_2)"
        />
        <path
          d="M15 151.202C14.9 151.202 14.8 151.102 14.7 151.002C14.6 150.802 14.7 150.602 14.8 150.602L17.2 149.202C17.4 149.102 17.6 149.202 17.6 149.302C17.7 149.502 17.6 149.702 17.5 149.702L15.1 151.102L15 151.202Z"
          fill="url(#paint30_linear_311_2)"
        />
        <path
          d="M19.7 158.5C19.6 158.5 19.5 158.5 19.4 158.4C19.3 158.3 19.3 158.1 19.5 157.9L21.8 156.3C21.9 156.2 22.1 156.2 22.3 156.4C22.4 156.5 22.4 156.7 22.2 156.9L19.9 158.5C19.8 158.5 19.7 158.5 19.7 158.5Z"
          fill="url(#paint31_linear_311_2)"
        />
        <path
          d="M24.9 165.401C24.8 165.401 24.7 165.401 24.7 165.301C24.6 165.201 24.6 165.001 24.7 164.801L26.8 163.001C26.9 162.901 27.1 162.901 27.3 163.001C27.4 163.101 27.4 163.301 27.3 163.501L25.2 165.301C25.1 165.401 25 165.401 24.9 165.401Z"
          fill="url(#paint32_linear_311_2)"
        />
        <path
          d="M30.8 171.8C30.7 171.8 30.6 171.8 30.6 171.7C30.5 171.6 30.5 171.4 30.6 171.2L32.6 169.2C32.7 169.1 32.9 169.1 33.1 169.2C33.2 169.3 33.2 169.5 33.1 169.7L31.1 171.7C31 171.8 30.9 171.8 30.8 171.8Z"
          fill="url(#paint33_linear_311_2)"
        />
        <path
          d="M37.2 177.698C37.1 177.698 37.1 177.698 37 177.598C36.9 177.498 36.8 177.298 37 177.098L38.8 174.998C38.9 174.898 39.1 174.798 39.3 174.998C39.4 175.098 39.5 175.298 39.3 175.498L37.5 177.598C37.4 177.598 37.3 177.698 37.2 177.698Z"
          fill="url(#paint34_linear_311_2)"
        />
        <path
          d="M44.1001 182.998C44.0001 182.998 44.0001 182.998 43.9001 182.898C43.8001 182.798 43.7001 182.598 43.8001 182.398L45.4001 180.098C45.5001 179.998 45.7001 179.898 45.9001 179.998C46.0001 180.098 46.1001 180.298 46.0001 180.498L44.4001 182.798C44.3001 182.898 44.2001 182.998 44.1001 182.998Z"
          fill="url(#paint35_linear_311_2)"
        />
        <path
          d="M51.5001 187.599C51.4001 187.599 51.4001 187.599 51.3001 187.599C51.1001 187.499 51.1001 187.298 51.2001 187.198L52.6001 184.799C52.7001 184.599 52.9001 184.598 53.0001 184.698C53.2001 184.798 53.2001 184.999 53.1001 185.099L51.7001 187.498C51.7001 187.598 51.6001 187.599 51.5001 187.599Z"
          fill="url(#paint36_linear_311_2)"
        />
        <path
          d="M59.2 191.702H59.1C58.9 191.602 58.9 191.402 58.9 191.302L60.1 188.802C60.2 188.602 60.4 188.602 60.5 188.602C60.7 188.702 60.7 188.902 60.7 189.002L59.5 191.502C59.4 191.602 59.3 191.702 59.2 191.702Z"
          fill="url(#paint37_linear_311_2)"
        />
        <path
          d="M67.2001 195.001H67.1001C66.9001 194.901 66.8001 194.801 66.9001 194.601L67.8001 192.001C67.9001 191.801 68.0001 191.701 68.2001 191.801C68.4001 191.901 68.5001 192.001 68.4001 192.201L67.5001 194.801C67.5001 194.901 67.3001 195.001 67.2001 195.001Z"
          fill="url(#paint38_linear_311_2)"
        />
        <path
          d="M75.5001 197.601C75.2001 197.501 75.1001 197.401 75.2001 197.201L75.9001 194.501C75.9001 194.301 76.1001 194.201 76.3001 194.301C76.5001 194.301 76.6001 194.501 76.5001 194.701L75.8001 197.401C75.8001 197.501 75.6001 197.601 75.5001 197.601Z"
          fill="url(#paint39_linear_311_2)"
        />
        <path
          d="M84.0001 199.502C83.8001 199.502 83.7001 199.302 83.7001 199.102L84.2001 196.402C84.2001 196.202 84.4001 196.102 84.6001 196.102C84.8001 196.102 84.9001 196.302 84.9001 196.502L84.4001 199.202C84.3001 199.402 84.1001 199.502 84.0001 199.502Z"
          fill="url(#paint40_linear_311_2)"
        />
        <path
          d="M92.6 200.602C92.4 200.602 92.3 200.402 92.3 200.202L92.5 197.402C92.5 197.202 92.7 197.102 92.8 197.102C93 197.102 93.1 197.302 93.1 197.402L92.9 200.202C92.9 200.502 92.8 200.602 92.6 200.602Z"
          fill="url(#paint41_linear_311_2)"
        />
        <path
          d="M101.3 201.002C101.1 201.002 101 200.902 101 200.702V197.902C101 197.702 101.1 197.602 101.3 197.602C101.5 197.602 101.6 197.702 101.6 197.902V200.702C101.6 200.902 101.5 201.002 101.3 201.002Z"
          fill="url(#paint42_linear_311_2)"
        />
        <path
          d="M110 200.599C109.8 200.599 109.7 200.499 109.7 200.299L109.5 197.499C109.5 197.299 109.6 197.199 109.8 197.199C110 197.199 110.1 197.299 110.1 197.499L110.3 200.299C110.3 200.399 110.2 200.599 110 200.599Z"
          fill="url(#paint43_linear_311_2)"
        />
        <path
          d="M118.6 199.502C118.4 199.502 118.3 199.402 118.3 199.202L117.8 196.502C117.8 196.302 117.9 196.202 118.1 196.102C118.3 196.102 118.4 196.202 118.5 196.402L119 199.102C119 199.302 118.8 199.402 118.6 199.502Z"
          fill="url(#paint44_linear_311_2)"
        />
        <path
          d="M127.1 197.601C127 197.601 126.8 197.501 126.8 197.401L126.1 194.701C126.1 194.501 126.2 194.401 126.3 194.301C126.5 194.301 126.6 194.401 126.7 194.501L127.4 197.201C127.5 197.401 127.4 197.501 127.1 197.601Z"
          fill="url(#paint45_linear_311_2)"
        />
        <path
          d="M135.4 195.001C135.3 195.001 135.1 194.901 135.1 194.801L134.2 192.201C134.1 192.001 134.2 191.801 134.4 191.801C134.6 191.701 134.8 191.801 134.8 192.001L135.7 194.601C135.8 194.801 135.7 195.001 135.5 195.001H135.4Z"
          fill="url(#paint46_linear_311_2)"
        />
        <path
          d="M143.4 191.702C143.3 191.702 143.2 191.602 143.1 191.502L142 189.002C141.9 188.802 142 188.602 142.2 188.602C142.4 188.502 142.6 188.602 142.6 188.802L143.8 191.302C143.9 191.502 143.8 191.702 143.6 191.702C143.5 191.702 143.5 191.702 143.4 191.702Z"
          fill="url(#paint47_linear_311_2)"
        />
        <path
          d="M151.1 187.6C151 187.6 150.9 187.5 150.8 187.4L149.4 185C149.3 184.8 149.4 184.6 149.5 184.6C149.7 184.5 149.9 184.6 149.9 184.7L151.3 187.1C151.4 187.3 151.3 187.5 151.2 187.5C151.3 187.6 151.2 187.6 151.1 187.6Z"
          fill="url(#paint48_linear_311_2)"
        />
        <path
          d="M158.5 183.001C158.4 183.001 158.3 183.001 158.2 182.901L156.6 180.601C156.5 180.501 156.5 180.301 156.7 180.101C156.8 180.001 157 180.001 157.2 180.201L158.8 182.501C158.9 182.601 158.9 182.801 158.7 183.001C158.6 183.001 158.5 183.001 158.5 183.001Z"
          fill="url(#paint49_linear_311_2)"
        />
        <path
          d="M165.4 177.701C165.3 177.701 165.2 177.701 165.2 177.601L163.4 175.501C163.3 175.401 163.3 175.201 163.4 175.001C163.5 174.901 163.7 174.901 163.9 175.001L165.7 177.101C165.8 177.201 165.8 177.401 165.7 177.601C165.5 177.701 165.4 177.701 165.4 177.701Z"
          fill="url(#paint50_linear_311_2)"
        />
        <path
          d="M171.8 171.8C171.7 171.8 171.6 171.8 171.6 171.7L169.6 169.7C169.5 169.6 169.5 169.4 169.6 169.2C169.7 169.1 169.9 169.1 170.1 169.2L172.1 171.2C172.2 171.3 172.2 171.5 172.1 171.7C171.9 171.8 171.9 171.8 171.8 171.8Z"
          fill="url(#paint51_linear_311_2)"
        />
        <path
          d="M177.7 165.398C177.6 165.398 177.6 165.398 177.5 165.298L175.4 163.498C175.3 163.398 175.2 163.198 175.4 162.998C175.5 162.898 175.7 162.798 175.9 162.998L178 164.798C178.1 164.898 178.2 165.098 178 165.298C177.8 165.398 177.7 165.398 177.7 165.398Z"
          fill="url(#paint52_linear_311_2)"
        />
        <path
          d="M183 158.502C182.9 158.502 182.9 158.502 182.8 158.402L180.5 156.802C180.4 156.702 180.3 156.502 180.4 156.302C180.5 156.202 180.7 156.102 180.9 156.202L183.2 157.802C183.3 157.902 183.4 158.102 183.3 158.302C183.2 158.402 183.1 158.502 183 158.502Z"
          fill="url(#paint53_linear_311_2)"
        />
        <path
          d="M187.6 151.2C187.5 151.2 187.5 151.2 187.4 151.2L185 149.8C184.8 149.7 184.8 149.5 184.9 149.4C185 149.2 185.2 149.2 185.3 149.3L187.7 150.7C187.9 150.8 187.9 151 187.8 151.1C187.8 151.1 187.7 151.2 187.6 151.2Z"
          fill="url(#paint54_linear_311_2)"
        />
        <path
          d="M191.6 143.402H191.5L189 142.202C188.8 142.102 188.8 141.902 188.8 141.802C188.9 141.602 189.1 141.602 189.2 141.602L191.7 142.802C191.9 142.902 191.9 143.102 191.9 143.202C191.9 143.402 191.8 143.402 191.6 143.402Z"
          fill="url(#paint55_linear_311_2)"
        />
        <path
          d="M195 135.399H194.9L192.3 134.499C192.1 134.399 192 134.299 192.1 134.099C192.2 133.899 192.3 133.799 192.5 133.899L195.1 134.799C195.3 134.899 195.4 134.999 195.3 135.199C195.2 135.299 195.1 135.399 195 135.399Z"
          fill="url(#paint56_linear_311_2)"
        />
        <path
          d="M197.6 127.101L194.8 126.401C194.6 126.401 194.5 126.201 194.6 126.001C194.6 125.801 194.8 125.701 195 125.801L197.7 126.501C197.9 126.501 198 126.701 197.9 126.901C197.9 127.001 197.7 127.101 197.6 127.101Z"
          fill="url(#paint57_linear_311_2)"
        />
        <path
          d="M199.5 118.598C199.4 118.598 199.4 118.598 199.5 118.598L196.7 118.098C196.5 118.098 196.4 117.898 196.4 117.698C196.4 117.498 196.6 117.398 196.8 117.398L199.5 117.898C199.7 117.898 199.8 118.098 199.8 118.298C199.8 118.498 199.6 118.598 199.5 118.598Z"
          fill="url(#paint58_linear_311_2)"
        />
        <path
          d="M200.6 109.999L197.8 109.799C197.6 109.799 197.5 109.599 197.5 109.499C197.5 109.299 197.7 109.199 197.8 109.199L200.6 109.399C200.8 109.399 200.9 109.599 200.9 109.699C200.9 109.899 200.8 109.999 200.6 109.999Z"
          fill="url(#paint59_linear_311_2)"
        />
        <path
          d="M201 101.299H198.2C198 101.299 197.9 101.199 197.9 100.999C197.9 100.799 198 100.699 198.2 100.699H201C201.2 100.699 201.3 100.799 201.3 100.999C201.3 101.199 201.2 101.299 201 101.299Z"
          fill="url(#paint60_linear_311_2)"
        />
        <path
          d="M197.8 92.9016C197.6 92.9016 197.5 92.8016 197.5 92.6016C197.5 92.4016 197.6 92.3016 197.8 92.3016L200.6 92.1016C200.8 92.1016 200.9 92.2016 200.9 92.4016C200.9 92.6016 200.8 92.7016 200.6 92.7016L197.8 92.9016Z"
          fill="url(#paint61_linear_311_2)"
        />
        <path
          d="M196.7 84.5008C196.5 84.5008 196.4 84.4008 196.4 84.2008C196.4 84.0008 196.5 83.9008 196.7 83.8008L199.4 83.3008C199.6 83.3008 199.7 83.4008 199.8 83.6008C199.8 83.8008 199.7 83.9008 199.5 84.0008L196.7 84.5008Z"
          fill="url(#paint62_linear_311_2)"
        />
        <path
          d="M194.9 76.1984C194.8 76.1984 194.6 76.0984 194.6 75.9984C194.6 75.7984 194.7 75.6984 194.8 75.5984L197.5 74.8984C197.7 74.8984 197.8 74.9984 197.9 75.0984C197.9 75.2984 197.8 75.3984 197.7 75.4984L194.9 76.1984Z"
          fill="url(#paint63_linear_311_2)"
        />
        <path
          d="M192.4 68.1994C192.3 68.1994 192.1 68.0994 192.1 67.9994C192 67.7994 192.1 67.5994 192.3 67.5994L194.9 66.6994C195.1 66.5994 195.3 66.6994 195.3 66.8994C195.4 67.0994 195.3 67.2994 195.1 67.2994L192.5 68.1994C192.4 68.1994 192.4 68.1994 192.4 68.1994Z"
          fill="url(#paint64_linear_311_2)"
        />
        <path
          d="M189.1 60.4017C189 60.4017 188.9 60.3017 188.8 60.2017C188.7 60.0017 188.8 59.8017 189 59.8017L191.5 58.6017C191.7 58.5017 191.9 58.6017 191.9 58.8017C192 59.0017 191.9 59.2017 191.7 59.2017L189.2 60.4017C189.2 60.4017 189.2 60.4017 189.1 60.4017Z"
          fill="url(#paint65_linear_311_2)"
        />
        <path
          d="M185.2 52.9008C185.1 52.9008 185 52.8008 184.9 52.7008C184.8 52.5008 184.9 52.3008 185 52.3008L187.4 50.9008C187.6 50.8008 187.8 50.9008 187.8 51.0008C187.9 51.2008 187.8 51.4008 187.7 51.4008L185.3 52.8008C185.3 52.9008 185.3 52.9008 185.2 52.9008Z"
          fill="url(#paint66_linear_311_2)"
        />
        <path
          d="M180.7 45.7008C180.6 45.7008 180.5 45.7008 180.4 45.6008C180.3 45.5008 180.3 45.3008 180.5 45.2008L182.8 43.6008C182.9 43.5008 183.1 43.5008 183.3 43.7008C183.4 43.8008 183.4 44.0008 183.2 44.1008L180.9 45.7008C180.8 45.7008 180.7 45.7008 180.7 45.7008Z"
          fill="url(#paint67_linear_311_2)"
        />
        <path
          d="M175.5 38.9984C175.4 38.9984 175.3 38.9984 175.3 38.8984C175.2 38.7984 175.2 38.5984 175.3 38.3984L177.4 36.5984C177.5 36.4984 177.7 36.4984 177.9 36.5984C178 36.6984 178 36.8984 177.9 37.0984L175.8 38.8984C175.7 38.9984 175.6 38.9984 175.5 38.9984Z"
          fill="url(#paint68_linear_311_2)"
        />
        <path
          d="M169.8 32.8C169.7 32.8 169.6 32.8 169.6 32.7C169.5 32.6 169.5 32.4 169.6 32.2L171.6 30.2C171.7 30.1 171.9 30.1 172.1 30.2C172.2 30.3 172.2 30.5 172.1 30.7L170.1 32.7C170 32.8 169.9 32.8 169.8 32.8Z"
          fill="url(#paint69_linear_311_2)"
        />
        <path
          d="M163.6 27.1006C163.5 27.1006 163.5 27.1006 163.4 27.0006C163.3 26.9006 163.2 26.7006 163.4 26.5006L165.2 24.4006C165.3 24.3006 165.5 24.2006 165.7 24.4006C165.8 24.5006 165.9 24.7006 165.7 24.9006L163.9 27.0006C163.8 27.1006 163.7 27.1006 163.6 27.1006Z"
          fill="url(#paint70_linear_311_2)"
        />
        <path
          d="M156.9 21.9008C156.8 21.9008 156.8 21.9008 156.7 21.8008C156.6 21.7008 156.5 21.5008 156.6 21.3008L158.2 19.0008C158.3 18.9008 158.5 18.8008 158.7 18.9008C158.8 19.0008 158.9 19.2008 158.8 19.4008L157.2 21.7008C157.1 21.9008 157 21.9008 156.9 21.9008Z"
          fill="url(#paint71_linear_311_2)"
        />
        <path
          d="M149.8 17.3993C149.7 17.3993 149.7 17.3993 149.6 17.3993C149.4 17.2993 149.4 17.0993 149.5 16.9993L150.9 14.5993C151 14.3993 151.2 14.3993 151.3 14.4993C151.5 14.5993 151.5 14.7993 151.4 14.8993L150 17.2993C150 17.2993 149.9 17.3993 149.8 17.3993Z"
          fill="url(#paint72_linear_311_2)"
        />
        <path
          d="M142.3 13.4984H142.2C142 13.3984 142 13.1984 142 13.0984L143.2 10.5984C143.3 10.3984 143.5 10.3984 143.6 10.3984C143.8 10.4984 143.8 10.6984 143.8 10.7984L142.6 13.2984C142.5 13.3984 142.4 13.4984 142.3 13.4984Z"
          fill="url(#paint73_linear_311_2)"
        />
        <path
          d="M134.4 10.3017H134.3C134.1 10.2017 134 10.1017 134.1 9.90173L135 7.30173C135.1 7.10173 135.2 7.00173 135.4 7.10173C135.6 7.20173 135.7 7.30173 135.6 7.50173L134.7 10.1017C134.7 10.2017 134.6 10.3017 134.4 10.3017Z"
          fill="url(#paint74_linear_311_2)"
        />
        <path
          d="M126.4 7.69861C126.1 7.59861 126 7.49861 126.1 7.29861L126.8 4.59861C126.8 4.39861 127 4.29861 127.2 4.39861C127.4 4.39861 127.5 4.59861 127.4 4.79861L126.7 7.49861C126.7 7.59861 126.5 7.69861 126.4 7.69861Z"
          fill="url(#paint75_linear_311_2)"
        />
        <path
          d="M118.1 5.9C117.9 5.9 117.8 5.7 117.8 5.5L118.3 2.8C118.3 2.6 118.5 2.5 118.7 2.5C118.9 2.5 119 2.7 119 2.9L118.5 5.6C118.4 5.8 118.3 5.9 118.1 5.9Z"
          fill="url(#paint76_linear_311_2)"
        />
        <path
          d="M109.7 4.80078C109.5 4.80078 109.4 4.60078 109.4 4.40078L109.6 1.60078C109.6 1.40078 109.8 1.30078 109.9 1.30078C110.1 1.30078 110.2 1.50078 110.2 1.60078L110 4.40078C110.1 4.70078 109.9 4.80078 109.7 4.80078Z"
          fill="url(#paint77_linear_311_2)"
        />
        <path
          d="M97.1001 4.50156C96.9001 4.50156 96.8001 4.40156 96.8001 4.20156L96.7001 1.40156C96.7001 1.20156 96.8001 1.10156 97.0001 1.10156C97.2001 1.10156 97.3001 1.20156 97.3001 1.40156L97.4001 4.20156C97.4001 4.40156 97.3001 4.50156 97.1001 4.50156Z"
          fill="url(#paint78_linear_311_2)"
        />
        <path
          d="M88.7 5.30078C88.5 5.30078 88.4 5.20078 88.4 5.00078L88 2.20078C88 2.00078 88.1 1.90078 88.3 1.80078C88.5 1.80078 88.6 1.90078 88.7 2.10078L89 4.90078C89 5.10078 88.9 5.20078 88.7 5.30078Z"
          fill="url(#paint79_linear_311_2)"
        />
        <path
          d="M80.3 6.70078C80.2 6.70078 80 6.60078 80 6.40078L79.4 3.70078C79.4 3.50078 79.5 3.40078 79.6 3.30078C79.8 3.30078 79.9 3.40078 80 3.50078L80.6 6.20078C80.7 6.50078 80.6 6.70078 80.3 6.70078C80.4 6.70078 80.4 6.70078 80.3 6.70078Z"
          fill="url(#paint80_linear_311_2)"
        />
        <path
          d="M72.2 8.90173C72.1 8.90173 71.9 8.80173 71.9 8.70173L71 6.00173C70.9 5.80173 71 5.60173 71.2 5.60173C71.4 5.50173 71.6 5.60173 71.6 5.80173L72.4 8.40173C72.5 8.70173 72.4 8.80173 72.2 8.90173Z"
          fill="url(#paint81_linear_311_2)"
        />
        <path
          d="M64.2001 11.8017C64.1001 11.8017 64.0001 11.7017 63.9001 11.6017L62.9001 9.00173C62.8001 8.80173 62.9001 8.60173 63.1001 8.60173C63.3001 8.50173 63.5001 8.60173 63.5001 8.80173L64.6001 11.4017C64.7001 11.6017 64.6001 11.8017 64.4001 11.8017C64.3001 11.8017 64.3001 11.8017 64.2001 11.8017Z"
          fill="url(#paint82_linear_311_2)"
        />
        <path
          d="M56.6 15.4031C56.5 15.4031 56.4 15.3031 56.3 15.2031L55 12.7031C54.9 12.5031 55 12.3031 55.1 12.3031C55.3 12.2031 55.5 12.3031 55.5 12.4031L56.8 14.9031C56.9 15.1031 56.8 15.3031 56.7 15.3031C56.7 15.4031 56.6 15.4031 56.6 15.4031Z"
          fill="url(#paint83_linear_311_2)"
        />
        <path
          d="M49.2 19.6001C49.1 19.6001 49 19.5001 48.9 19.5001L47.4 17.2001C47.3 17.0001 47.3 16.8001 47.5 16.8001C47.7 16.7001 47.9 16.7001 47.9 16.9001L49.4 19.2001C49.5 19.4001 49.5 19.6001 49.3 19.6001C49.4 19.6001 49.3 19.6001 49.2 19.6001Z"
          fill="url(#paint84_linear_311_2)"
        />
        <path
          d="M42.3001 24.4008C42.2001 24.4008 42.1001 24.4008 42.0001 24.3008L40.3001 22.1008C40.2001 22.0008 40.2001 21.8008 40.4001 21.6008C40.5001 21.5008 40.7001 21.5008 40.9001 21.7008L42.6001 23.9008C42.7001 24.0008 42.7001 24.2008 42.5001 24.4008C42.4001 24.4008 42.4001 24.4008 42.3001 24.4008Z"
          fill="url(#paint85_linear_311_2)"
        />
        <path
          d="M35.8 29.9016C35.7 29.9016 35.6 29.9016 35.6 29.8016L33.7 27.8016C33.6 27.7016 33.6 27.5016 33.7 27.3016C33.8 27.2016 34 27.2016 34.2 27.3016L36.1 29.3016C36.2 29.4016 36.2 29.6016 36.1 29.8016C36 29.9016 35.9 29.9016 35.8 29.9016Z"
          fill="url(#paint86_linear_311_2)"
        />
        <path
          d="M29.9 35.9031C29.8 35.9031 29.7 35.9031 29.7 35.8031L27.7 33.9031C27.6 33.8031 27.6 33.6031 27.7 33.4031C27.8 33.3031 28 33.3031 28.2 33.4031L30.2 35.3031C30.3 35.4031 30.3 35.6031 30.2 35.8031C30 35.8031 29.9 35.9031 29.9 35.9031Z"
          fill="url(#paint87_linear_311_2)"
        />
        <path
          d="M24.4001 42.3024C24.3001 42.3024 24.3001 42.3024 24.2001 42.2024L22.0001 40.6024C21.9001 40.5024 21.8001 40.3024 21.9001 40.1024C22.0001 40.0024 22.2001 39.9024 22.4001 40.0024L24.6001 41.7024C24.7001 41.8024 24.8001 42.0024 24.7001 42.2024C24.6001 42.3024 24.5001 42.3024 24.4001 42.3024Z"
          fill="url(#paint88_linear_311_2)"
        />
        <path
          d="M19.6 49.3016C19.5 49.3016 19.5 49.3016 19.4 49.2016L17.1 47.7016C16.9 47.6016 16.9 47.4016 17 47.3016C17.1 47.2016 17.3 47.1016 17.4 47.2016L19.7 48.7016C19.9 48.8016 19.9 49.0016 19.8 49.1016C19.8 49.2016 19.7 49.3016 19.6 49.3016Z"
          fill="url(#paint89_linear_311_2)"
        />
        <path
          d="M15.3 56.6001C15.2 56.6001 15.2 56.6001 15.2 56.6001L12.7 55.3001C12.5 55.2001 12.5 55.0001 12.6 54.9001C12.7 54.7001 12.9 54.7001 13 54.8001L15.5 56.1001C15.7 56.2001 15.7 56.4001 15.6 56.5001C15.6 56.5001 15.5 56.6001 15.3 56.6001Z"
          fill="url(#paint90_linear_311_2)"
        />
        <path
          d="M11.8 64.2H11.7L9.10003 63.1C8.90003 63 8.90002 62.8 8.90002 62.7C9.00002 62.5 9.20002 62.5 9.30002 62.5L11.9 63.6C12.1 63.7 12.1 63.9 12.1 64C12 64.2 11.9 64.2 11.8 64.2Z"
          fill="url(#paint91_linear_311_2)"
        />
        <path
          d="M8.90005 72.2033L6.20005 71.3033C6.00005 71.2033 5.90005 71.1033 6.00005 70.9033C6.10005 70.7033 6.20005 70.6033 6.40005 70.7033L9.00005 71.6033C9.20005 71.7033 9.30005 71.8033 9.20005 72.0033C9.10005 72.1033 9.00005 72.2033 8.90005 72.2033Z"
          fill="url(#paint92_linear_311_2)"
        />
        <path
          d="M6.7 80.3017L3.9 79.7017C3.7 79.7017 3.6 79.5017 3.7 79.3017C3.8 79.1017 3.9 79.0017 4.1 79.1017L6.8 79.7017C7 79.7017 7.1 79.9017 7 80.1017C7 80.2017 6.8 80.3017 6.7 80.3017Z"
          fill="url(#paint93_linear_311_2)"
        />
        <path
          d="M5.19998 88.7016L2.39998 88.3016C2.19998 88.3016 2.09998 88.1016 2.09998 87.9016C2.09998 87.7016 2.29998 87.6016 2.49998 87.6016L5.29998 88.0016C5.49998 88.0016 5.59998 88.2016 5.59998 88.4016C5.49998 88.6016 5.39998 88.7016 5.19998 88.7016Z"
          fill="url(#paint94_linear_311_2)"
        />
        <path
          d="M4.50002 97.1023L1.70002 97.0023C1.50002 97.0023 1.40002 96.8023 1.40002 96.7023C1.40002 96.5023 1.60002 96.4023 1.70002 96.4023L4.50002 96.5023C4.70002 96.5023 4.80002 96.7023 4.80002 96.8023C4.80002 97.0023 4.70002 97.1023 4.50002 97.1023Z"
          fill="url(#paint95_linear_311_2)"
        />
        <path
          d="M1.70002 105.7C1.50002 105.7 1.40002 105.6 1.40002 105.4C1.40002 105.2 1.50002 105.1 1.70002 105.1L4.50002 105C4.70002 105 4.80002 105.1 4.80002 105.3C4.80002 105.5 4.70002 105.6 4.50002 105.6L1.70002 105.7Z"
          fill="url(#paint96_linear_311_2)"
        />
        <path
          d="M2.50007 114.303C2.30007 114.303 2.20007 114.203 2.20007 114.003C2.20007 113.803 2.30007 113.703 2.50007 113.603L5.30007 113.203C5.50007 113.203 5.60007 113.303 5.70007 113.503C5.70007 113.703 5.60007 113.803 5.40007 113.903L2.50007 114.303Z"
          fill="url(#paint97_linear_311_2)"
        />
        <path
          d="M4.00007 122.902C3.90007 122.902 3.70007 122.802 3.70007 122.602C3.70007 122.402 3.80007 122.302 3.90007 122.202L6.60007 121.602C6.80007 121.602 6.90007 121.702 7.00007 121.802C7.00007 122.002 6.90007 122.102 6.80007 122.202L4.00007 122.902Z"
          fill="url(#paint98_linear_311_2)"
        />
        <path
          d="M6.20007 131.303C6.10007 131.303 5.90007 131.203 5.90007 131.103C5.80007 130.903 5.90007 130.703 6.10007 130.703L8.70007 129.903C8.90007 129.803 9.10007 129.903 9.10007 130.103C9.20007 130.303 9.10007 130.503 8.90007 130.503L6.20007 131.303C6.30007 131.303 6.30007 131.303 6.20007 131.303Z"
          fill="url(#paint99_linear_311_2)"
        />
        <path
          d="M9.20007 139.501C9.10007 139.501 9.00007 139.401 8.90007 139.301C8.80007 139.101 8.90007 138.901 9.10007 138.901L11.7001 137.801C11.9001 137.701 12.1001 137.801 12.1001 138.001C12.2001 138.201 12.1001 138.401 11.9001 138.401L9.30007 139.501C9.30007 139.501 9.30007 139.501 9.20007 139.501Z"
          fill="url(#paint100_linear_311_2)"
        />
        <path
          d="M12.9 147.301C12.8 147.301 12.7 147.201 12.6 147.101C12.5 146.901 12.6 146.701 12.7 146.701L15.2 145.401C15.4 145.301 15.6 145.401 15.6 145.501C15.7 145.701 15.6 145.901 15.5 145.901L13 147.201C13 147.301 12.9 147.301 12.9 147.301Z"
          fill="url(#paint101_linear_311_2)"
        />
        <path
          d="M17.2 154.902C17.1 154.902 17 154.802 16.9 154.802C16.8 154.602 16.8 154.502 17 154.402L19.3 152.902C19.5 152.802 19.7 152.802 19.7 153.002C19.7 153.202 19.8 153.302 19.6 153.402L17.3 154.902C17.4 154.902 17.3 154.902 17.2 154.902Z"
          fill="url(#paint102_linear_311_2)"
        />
        <path
          d="M22.2 162.002C22.1 162.002 22 162.002 21.9 161.902C21.8 161.802 21.8 161.602 22 161.402L24.2 159.702C24.3 159.602 24.5 159.602 24.7 159.802C24.8 159.902 24.8 160.102 24.6 160.302L22.4 162.002C22.4 162.002 22.3 162.002 22.2 162.002Z"
          fill="url(#paint103_linear_311_2)"
        />
        <path
          d="M27.8 168.7C27.7 168.7 27.6 168.7 27.6 168.6C27.5 168.5 27.5 168.3 27.6 168.1L29.6 166.2C29.7 166.1 29.9 166.1 30.1 166.2C30.2 166.3 30.2 166.5 30.1 166.7L28.1 168.6C28 168.6 27.9 168.7 27.8 168.7Z"
          fill="url(#paint104_linear_311_2)"
        />
        <path
          d="M34 174.8C33.9 174.8 33.8 174.8 33.8 174.7C33.7 174.6 33.7 174.4 33.8 174.2L35.7 172.2C35.8 172.1 36 172.1 36.2 172.2C36.3 172.3 36.3 172.5 36.2 172.7L34.3 174.7C34.1 174.8 34 174.8 34 174.8Z"
          fill="url(#paint105_linear_311_2)"
        />
        <path
          d="M40.6 180.402C40.5 180.402 40.5 180.402 40.4 180.302C40.3 180.202 40.2 180.002 40.3 179.802L42 177.602C42.1 177.502 42.3 177.402 42.5 177.502C42.6 177.602 42.7 177.802 42.6 178.002L40.9 180.202C40.8 180.402 40.7 180.402 40.6 180.402Z"
          fill="url(#paint106_linear_311_2)"
        />
        <path
          d="M47.7 185.403C47.6 185.403 47.6 185.403 47.5 185.303C47.3 185.203 47.3 185.003 47.4 184.903L48.9 182.603C49 182.403 49.2 182.403 49.3 182.503C49.5 182.603 49.5 182.803 49.4 182.903L47.9 185.203C48 185.303 47.9 185.403 47.7 185.403Z"
          fill="url(#paint107_linear_311_2)"
        />
        <path
          d="M55.3 189.702C55.2 189.702 55.2 189.702 55.2 189.702C55 189.602 55 189.402 55.1 189.302L56.4 186.802C56.5 186.602 56.7 186.602 56.8 186.702C57 186.802 57 187.002 56.9 187.102L55.6 189.602C55.5 189.702 55.4 189.702 55.3 189.702Z"
          fill="url(#paint108_linear_311_2)"
        />
        <path
          d="M63.2 193.403H63.1C62.9 193.303 62.9 193.103 62.9 193.003L64 190.403C64.1 190.203 64.3 190.203 64.4 190.203C64.6 190.303 64.6 190.503 64.6 190.603L63.5 193.203C63.4 193.303 63.3 193.403 63.2 193.403Z"
          fill="url(#paint109_linear_311_2)"
        />
        <path
          d="M71.3 196.403C71 196.303 70.9 196.203 71 196.003L71.8 193.403C71.9 193.203 72 193.103 72.2 193.203C72.4 193.303 72.5 193.403 72.4 193.603L71.6 196.203C71.6 196.303 71.5 196.403 71.3 196.403Z"
          fill="url(#paint110_linear_311_2)"
        />
        <path
          d="M79.7 198.601C79.5 198.601 79.3 198.401 79.4 198.201L80 195.501C80 195.301 80.2 195.201 80.4 195.301C80.6 195.301 80.7 195.501 80.6 195.701L80 198.401C80 198.501 79.9 198.601 79.7 198.601Z"
          fill="url(#paint111_linear_311_2)"
        />
        <path
          d="M88.3 200.102C88.1 200.102 88 199.902 88 199.702L88.4 196.902C88.4 196.702 88.6 196.602 88.8 196.602C89 196.602 89.1 196.802 89.1 197.002L88.7 199.802C88.6 200.002 88.5 200.102 88.3 200.102Z"
          fill="url(#paint112_linear_311_2)"
        />
        <path
          d="M97.0001 200.9C96.9001 200.9 96.9001 200.9 97.0001 200.9C96.8001 200.9 96.7001 200.7 96.7001 200.6L96.8001 197.8C96.8001 197.6 97.0001 197.5 97.1001 197.5C97.3001 197.5 97.4001 197.7 97.4001 197.8L97.3001 200.6C97.3001 200.8 97.1001 200.9 97.0001 200.9Z"
          fill="url(#paint113_linear_311_2)"
        />
        <path
          d="M105.6 200.9C105.4 200.9 105.3 200.8 105.3 200.6L105.2 197.8C105.2 197.6 105.3 197.5 105.5 197.5C105.7 197.5 105.8 197.6 105.8 197.8L105.9 200.6C106 200.7 105.8 200.9 105.6 200.9C105.7 200.9 105.7 200.9 105.6 200.9Z"
          fill="url(#paint114_linear_311_2)"
        />
        <path
          d="M114.3 200.102C114.1 200.102 114 200.002 114 199.802L113.6 197.002C113.6 196.802 113.7 196.702 113.9 196.602C114.1 196.602 114.2 196.702 114.3 196.902L114.7 199.702C114.7 200.002 114.5 200.102 114.3 200.102Z"
          fill="url(#paint115_linear_311_2)"
        />
        <path
          d="M122.9 198.603C122.8 198.603 122.6 198.503 122.6 198.303L122 195.603C122 195.403 122.1 195.303 122.2 195.203C122.4 195.203 122.5 195.303 122.6 195.403L123.2 198.103C123.2 198.403 123.1 198.603 122.9 198.603Z"
          fill="url(#paint116_linear_311_2)"
        />
        <path
          d="M131.3 196.403C131.2 196.403 131 196.303 131 196.203L130.2 193.603C130.1 193.403 130.2 193.203 130.4 193.203C130.6 193.103 130.8 193.203 130.8 193.403L131.6 196.003C131.6 196.103 131.5 196.303 131.3 196.403Z"
          fill="url(#paint117_linear_311_2)"
        />
        <path
          d="M139.4 193.403C139.3 193.403 139.2 193.303 139.1 193.203L138 190.603C137.9 190.403 138 190.203 138.2 190.203C138.4 190.103 138.6 190.203 138.6 190.403L139.7 193.003C139.8 193.203 139.7 193.403 139.5 193.403C139.5 193.403 139.5 193.403 139.4 193.403Z"
          fill="url(#paint118_linear_311_2)"
        />
        <path
          d="M147.3 189.7C147.2 189.7 147.1 189.6 147 189.5L145.7 187C145.6 186.8 145.7 186.6 145.8 186.6C146 186.5 146.2 186.6 146.2 186.7L147.5 189.2C147.6 189.4 147.5 189.6 147.4 189.6C147.4 189.7 147.4 189.7 147.3 189.7Z"
          fill="url(#paint119_linear_311_2)"
        />
        <path
          d="M154.9 185.401C154.8 185.401 154.7 185.301 154.6 185.301L153.1 183.001C153 182.801 153 182.701 153.2 182.601C153.3 182.501 153.5 182.501 153.6 182.701L155.1 185.001C155.2 185.201 155.2 185.301 155 185.401H154.9Z"
          fill="url(#paint120_linear_311_2)"
        />
        <path
          d="M162 180.401C161.9 180.401 161.8 180.401 161.7 180.301L160 178.101C159.9 178.001 159.9 177.801 160.1 177.601C160.2 177.501 160.4 177.501 160.6 177.701L162.3 179.901C162.4 180.001 162.4 180.201 162.2 180.401C162.1 180.401 162 180.401 162 180.401Z"
          fill="url(#paint121_linear_311_2)"
        />
        <path
          d="M168.6 174.8C168.5 174.8 168.4 174.8 168.4 174.7L166.5 172.7C166.4 172.6 166.4 172.4 166.5 172.2C166.6 172.1 166.8 172.1 167 172.2L168.9 174.2C169 174.3 169 174.5 168.9 174.7C168.8 174.8 168.7 174.8 168.6 174.8Z"
          fill="url(#paint122_linear_311_2)"
        />
        <path
          d="M174.8 168.7C174.7 168.7 174.6 168.7 174.6 168.6L172.6 166.7C172.5 166.6 172.5 166.4 172.6 166.2C172.7 166.1 172.9 166.1 173.1 166.2L175.1 168.1C175.2 168.2 175.2 168.4 175.1 168.6C175 168.6 174.9 168.7 174.8 168.7Z"
          fill="url(#paint123_linear_311_2)"
        />
        <path
          d="M180.4 162C180.3 162 180.3 162 180.2 161.9L178 160.2C177.9 160.1 177.8 159.9 177.9 159.7C178 159.6 178.2 159.5 178.4 159.6L180.6 161.3C180.7 161.4 180.8 161.6 180.7 161.8C180.6 162 180.5 162 180.4 162Z"
          fill="url(#paint124_linear_311_2)"
        />
        <path
          d="M185.4 154.9C185.3 154.9 185.3 154.9 185.2 154.8L182.9 153.3C182.7 153.2 182.7 153 182.8 152.9C182.9 152.7 183.1 152.7 183.2 152.8L185.5 154.3C185.7 154.4 185.7 154.6 185.6 154.7C185.6 154.8 185.5 154.9 185.4 154.9Z"
          fill="url(#paint125_linear_311_2)"
        />
        <path
          d="M189.7 147.303C189.6 147.303 189.6 147.303 189.6 147.303L187.1 146.003C186.9 145.903 186.9 145.703 187 145.603C187.1 145.403 187.3 145.403 187.4 145.503L189.9 146.803C190.1 146.903 190.1 147.103 190 147.203C189.9 147.303 189.8 147.303 189.7 147.303Z"
          fill="url(#paint126_linear_311_2)"
        />
        <path
          d="M193.4 139.501H193.3L190.7 138.401C190.5 138.301 190.5 138.101 190.5 138.001C190.5 137.901 190.8 137.801 190.9 137.801L193.5 138.901C193.7 139.001 193.7 139.201 193.7 139.301C193.6 139.401 193.5 139.501 193.4 139.501Z"
          fill="url(#paint127_linear_311_2)"
        />
        <path
          d="M196.4 131.301C196.3 131.301 196.3 131.301 196.4 131.301L193.7 130.401C193.5 130.301 193.4 130.201 193.5 130.001C193.6 129.801 193.7 129.701 193.9 129.801L196.5 130.601C196.7 130.701 196.8 130.801 196.7 131.001C196.6 131.201 196.5 131.301 196.4 131.301Z"
          fill="url(#paint128_linear_311_2)"
        />
        <path
          d="M198.6 122.903L195.8 122.303C195.6 122.303 195.5 122.103 195.6 121.903C195.6 121.703 195.8 121.603 196 121.703L198.7 122.303C198.9 122.303 199 122.503 198.9 122.703C198.9 122.803 198.8 122.903 198.6 122.903Z"
          fill="url(#paint129_linear_311_2)"
        />
        <path
          d="M200.1 114.303L197.3 113.903C197.1 113.903 197 113.703 197 113.503C197 113.303 197.2 113.203 197.4 113.203L200.2 113.603C200.4 113.603 200.5 113.803 200.5 114.003C200.4 114.203 200.3 114.303 200.1 114.303Z"
          fill="url(#paint130_linear_311_2)"
        />
        <path
          d="M200.9 105.7L198.1 105.6C197.9 105.6 197.8 105.4 197.8 105.3C197.8 105.1 198 105 198.1 105L200.9 105.1C201.1 105.1 201.2 105.3 201.2 105.4C201.2 105.5 201.1 105.7 200.9 105.7Z"
          fill="url(#paint131_linear_311_2)"
        />
        <path
          d="M198.1 97.1023C197.9 97.1023 197.8 97.0023 197.8 96.8023C197.8 96.6023 197.9 96.5023 198.1 96.5023L200.9 96.4023C201.1 96.4023 201.2 96.5023 201.2 96.7023C201.2 96.9023 201.1 97.0023 200.9 97.0023L198.1 97.1023Z"
          fill="url(#paint132_linear_311_2)"
        />
        <path
          d="M197.4 88.7016C197.2 88.7016 197.1 88.6016 197.1 88.4016C197.1 88.2016 197.2 88.1016 197.4 88.0016L200.2 87.6016C200.4 87.6016 200.5 87.7016 200.6 87.9016C200.6 88.1016 200.5 88.2016 200.3 88.3016L197.4 88.7016Z"
          fill="url(#paint133_linear_311_2)"
        />
        <path
          d="M195.9 80.3C195.8 80.3 195.6 80.2 195.6 80C195.6 79.8 195.7 79.7 195.8 79.6L198.5 79C198.7 79 198.8 79.1 198.9 79.2C198.9 79.4 198.8 79.5 198.7 79.6L195.9 80.3Z"
          fill="url(#paint134_linear_311_2)"
        />
        <path
          d="M193.7 72.2009C193.6 72.2009 193.4 72.1009 193.4 72.0009C193.3 71.8009 193.4 71.6009 193.6 71.6009L196.2 70.8009C196.4 70.7009 196.6 70.8009 196.6 71.0009C196.7 71.2009 196.6 71.4009 196.4 71.4009L193.7 72.2009Z"
          fill="url(#paint135_linear_311_2)"
        />
        <path
          d="M190.8 64.2002C190.7 64.2002 190.6 64.1002 190.5 64.0002C190.4 63.8002 190.5 63.6002 190.7 63.6002L193.3 62.5002C193.5 62.4002 193.7 62.5002 193.7 62.7002C193.8 62.9002 193.7 63.1002 193.5 63.1002L190.9 64.2002C190.9 64.2002 190.9 64.2002 190.8 64.2002Z"
          fill="url(#paint136_linear_311_2)"
        />
        <path
          d="M187.3 56.6016C187.2 56.6016 187.1 56.5016 187 56.4016C186.9 56.2016 187 56.0016 187.1 56.0016L189.6 54.7016C189.8 54.6016 190 54.7016 190 54.8016C190.1 55.0016 190 55.2016 189.9 55.2016L187.4 56.5016C187.4 56.6016 187.3 56.6016 187.3 56.6016Z"
          fill="url(#paint137_linear_311_2)"
        />
        <path
          d="M183 49.3001C182.9 49.3001 182.8 49.2001 182.7 49.2001C182.6 49.0001 182.6 48.8001 182.8 48.8001L185.1 47.3001C185.2 47.2001 185.4 47.2001 185.5 47.4001C185.6 47.6001 185.6 47.8001 185.4 47.8001L183.1 49.3001C183.1 49.2001 183.1 49.3001 183 49.3001Z"
          fill="url(#paint138_linear_311_2)"
        />
        <path
          d="M178.2 42.3032C178.1 42.3032 178 42.3032 177.9 42.2032C177.8 42.1032 177.8 41.9032 178 41.7032L180.2 40.0032C180.3 39.9032 180.5 39.9032 180.7 40.1032C180.8 40.2032 180.8 40.4032 180.6 40.6032L178.4 42.3032C178.3 42.3032 178.2 42.3032 178.2 42.3032Z"
          fill="url(#paint139_linear_311_2)"
        />
        <path
          d="M172.7 35.9031C172.6 35.9031 172.5 35.9031 172.5 35.8031C172.4 35.7031 172.4 35.5031 172.5 35.3031L174.5 33.4031C174.6 33.3031 174.8 33.3031 175 33.4031C175.1 33.5031 175.1 33.7031 175 33.9031L173 35.8031C172.9 35.8031 172.8 35.9031 172.7 35.9031Z"
          fill="url(#paint140_linear_311_2)"
        />
        <path
          d="M166.8 29.9016C166.7 29.9016 166.6 29.9016 166.6 29.8016C166.5 29.7016 166.5 29.5016 166.6 29.3016L168.5 27.3016C168.6 27.2016 168.8 27.2016 169 27.3016C169.1 27.4016 169.1 27.6016 169 27.8016L167.1 29.8016C166.9 29.8016 166.9 29.9016 166.8 29.9016Z"
          fill="url(#paint141_linear_311_2)"
        />
        <path
          d="M160.3 24.4024C160.2 24.4024 160.2 24.4024 160.1 24.3024C160 24.2024 159.9 24.0024 160 23.8024L161.7 21.6024C161.8 21.5024 162 21.4024 162.2 21.5024C162.3 21.6024 162.4 21.8024 162.3 22.0024L160.6 24.2024C160.5 24.4024 160.4 24.4024 160.3 24.4024Z"
          fill="url(#paint142_linear_311_2)"
        />
        <path
          d="M153.4 19.6024C153.3 19.6024 153.3 19.6024 153.2 19.5024C153 19.4024 153 19.2024 153.1 19.1024L154.6 16.8024C154.7 16.6024 154.9 16.6024 155 16.7024C155.2 16.8024 155.2 17.0024 155.1 17.1024L153.6 19.4024C153.6 19.5024 153.5 19.6024 153.4 19.6024Z"
          fill="url(#paint143_linear_311_2)"
        />
        <path
          d="M146 15.4016C145.9 15.4016 145.9 15.4016 145.9 15.4016C145.7 15.3016 145.7 15.1016 145.8 15.0016L147.1 12.5016C147.2 12.3016 147.4 12.3016 147.5 12.4016C147.7 12.5016 147.7 12.7016 147.6 12.8016L146.3 15.3016C146.3 15.3016 146.2 15.4016 146 15.4016Z"
          fill="url(#paint144_linear_311_2)"
        />
        <path
          d="M138.4 11.8016H138.3C138.1 11.7016 138.1 11.5016 138.1 11.4016L139.2 8.80156C139.3 8.60156 139.5 8.60156 139.6 8.60156C139.8 8.70156 139.8 8.90156 139.8 9.00156L138.7 11.6016C138.6 11.7016 138.5 11.8016 138.4 11.8016Z"
          fill="url(#paint145_linear_311_2)"
        />
        <path
          d="M130.4 8.90329C130.1 8.80329 130 8.60329 130.1 8.50329L130.9 5.90329C131 5.70329 131.1 5.60329 131.3 5.70329C131.5 5.80329 131.6 5.90329 131.5 6.10329L130.7 8.70329C130.7 8.80329 130.6 8.90329 130.4 8.90329Z"
          fill="url(#paint146_linear_311_2)"
        />
        <path
          d="M122.3 6.70251C122.1 6.70251 121.9 6.50251 122 6.30251L122.6 3.60251C122.6 3.40251 122.8 3.30251 123 3.40251C123.2 3.40251 123.3 3.60251 123.2 3.80251L122.6 6.50251C122.6 6.60251 122.4 6.70251 122.3 6.70251Z"
          fill="url(#paint147_linear_311_2)"
        />
        <path
          d="M113.9 5.30078C113.7 5.30078 113.6 5.10078 113.6 4.90078L114 2.10078C114 1.90078 114.2 1.80078 114.4 1.80078C114.6 1.80078 114.7 2.00078 114.7 2.20078L114.3 5.00078C114.2 5.10078 114.1 5.30078 113.9 5.30078Z"
          fill="url(#paint148_linear_311_2)"
        />
        <path
          d="M105.5 4.50156C105.3 4.50156 105.2 4.30156 105.2 4.20156L105.3 1.40156C105.3 1.20156 105.5 1.10156 105.6 1.10156C105.8 1.10156 105.9 1.30156 105.9 1.40156L105.8 4.20156C105.8 4.40156 105.7 4.50156 105.5 4.50156Z"
          fill="url(#paint149_linear_311_2)"
        />
        <path
          d="M101.3 146.701C76.1 146.701 55.6 126.201 55.6 101.001C55.6 75.8008 76.1 55.3008 101.3 55.3008C126.5 55.3008 147 75.8008 147 101.001C147 126.201 126.5 146.701 101.3 146.701ZM101.3 55.8008C76.4 55.8008 56.1 76.1008 56.1 101.001C56.1 125.901 76.4 146.201 101.3 146.201C126.2 146.201 146.5 125.901 146.5 101.001C146.5 76.1008 126.2 55.8008 101.3 55.8008Z"
          fill="url(#paint150_linear_311_2)"
        />
        <path
          d="M101.3 145.402C76.8 145.402 56.9 125.502 56.9 101.002C56.9 76.5016 76.8 56.6016 101.3 56.6016C125.8 56.6016 145.7 76.5016 145.7 101.002C145.7 125.502 125.8 145.402 101.3 145.402ZM101.3 57.1016C77.1 57.1016 57.4 76.8016 57.4 101.002C57.4 125.202 77.1 144.902 101.3 144.902C125.5 144.902 145.2 125.202 145.2 101.002C145.2 76.8016 125.5 57.1016 101.3 57.1016Z"
          fill="url(#paint151_linear_311_2)"
        />
        <path
          d="M101.3 57.0992C101.2 57.0992 101 56.9992 101 56.7992V55.4992C101 55.3992 101.1 55.1992 101.3 55.1992C101.5 55.1992 101.6 55.2992 101.6 55.4992V56.7992C101.6 56.9992 101.4 57.0992 101.3 57.0992Z"
          fill="url(#paint152_linear_311_2)"
        />
        <path
          d="M97.4 57.1984C97.3 57.1984 97.2 57.0984 97.2 56.9984L97.1 55.6984C97.1 55.5984 97.2 55.3984 97.3 55.3984C97.4 55.3984 97.6 55.4984 97.6 55.5984L97.7 56.8984C97.7 57.0984 97.6 57.1984 97.4 57.1984C97.5 57.1984 97.5 57.1984 97.4 57.1984Z"
          fill="url(#paint153_linear_311_2)"
        />
        <path
          d="M93.6 57.7C93.5 57.7 93.4 57.6 93.4 57.5L93.2 56.3C93.2 56.2 93.3 56 93.4 56C93.5 56 93.7 56.1 93.7 56.2L93.9 57.4C93.9 57.6 93.8 57.7 93.6 57.7Z"
          fill="url(#paint154_linear_311_2)"
        />
        <path
          d="M89.9 58.5984C89.8 58.5984 89.7 58.4984 89.7 58.3984L89.4 57.1984C89.4 57.0984 89.4 56.8984 89.6 56.8984C89.7 56.8984 89.9 56.8984 89.9 57.0984L90.2 58.2984C90.1 58.3984 90.1 58.4984 89.9 58.5984Z"
          fill="url(#paint155_linear_311_2)"
        />
        <path
          d="M86.2 59.7C86.1 59.7 86 59.6 86 59.5L85.6 58.3C85.6 58.2 85.6 58 85.7 58C85.8 58 86 58 86 58.1L86.4 59.3C86.5 59.5 86.4 59.7 86.2 59.7Z"
          fill="url(#paint156_linear_311_2)"
        />
        <path
          d="M82.6001 61.1977C82.5001 61.1977 82.4001 61.0977 82.4001 61.0977L81.9001 59.9977C81.8001 59.8977 81.9001 59.6977 82.0001 59.6977C82.1001 59.5977 82.3001 59.6977 82.3001 59.7977L82.8001 60.8977C82.9001 60.9977 82.8001 61.1977 82.7001 61.1977C82.7001 61.1977 82.7001 61.1977 82.6001 61.1977Z"
          fill="url(#paint157_linear_311_2)"
        />
        <path
          d="M79.2001 62.9985C79.1001 62.9985 79.0001 62.9985 79.0001 62.8985L78.4001 61.7985C78.3001 61.6985 78.4001 61.4985 78.5001 61.4985C78.6001 61.3985 78.8001 61.4985 78.8001 61.5985L79.4001 62.6985C79.5001 62.7985 79.4001 62.9985 79.3001 62.9985C79.3001 62.9985 79.3001 62.9985 79.2001 62.9985Z"
          fill="url(#paint158_linear_311_2)"
        />
        <path
          d="M76 65.0985C75.9 65.0985 75.8 65.0985 75.8 64.9985L75.1 63.9985C75 63.8985 75 63.6985 75.2 63.6985C75.3 63.5985 75.5 63.5985 75.5 63.7985L76.2 64.7985C76.3 64.8985 76.3 65.0985 76.1 65.0985C76.1 64.9985 76 65.0985 76 65.0985Z"
          fill="url(#paint159_linear_311_2)"
        />
        <path
          d="M72.9 67.3992C72.8 67.3992 72.7999 67.3992 72.6999 67.2992L71.9 66.2992C71.8 66.1992 71.8 65.9992 71.9 65.8992C72 65.7992 72.2 65.7992 72.3 65.8992L73.0999 66.8992C73.1999 66.9992 73.1999 67.1992 73.0999 67.2992C72.9999 67.3992 73 67.3992 72.9 67.3992Z"
          fill="url(#paint160_linear_311_2)"
        />
        <path
          d="M70.1 69.9984C70 69.9984 70.0001 69.9984 69.9001 69.8984L69 68.9984C68.9 68.8984 68.9 68.6984 69 68.5984C69.1 68.4984 69.3001 68.4984 69.4001 68.5984L70.3001 69.4984C70.4001 69.5984 70.4001 69.7984 70.3001 69.8984C70.2001 69.9984 70.1 69.9984 70.1 69.9984Z"
          fill="url(#paint161_linear_311_2)"
        />
        <path
          d="M67.5 72.8008C67.4 72.8008 67.4 72.8008 67.3 72.7008L66.3 71.9008C66.2 71.8008 66.2 71.7008 66.3 71.5008C66.4 71.4008 66.5 71.4008 66.7 71.5008L67.7 72.3008C67.8 72.4008 67.8 72.5008 67.7 72.7008C67.6 72.8008 67.5 72.8008 67.5 72.8008Z"
          fill="url(#paint162_linear_311_2)"
        />
        <path
          d="M65.1 75.9008H65L64 75.2008C63.9 75.1008 63.9 75.0008 63.9 74.9008C64 74.8008 64.1 74.8008 64.2 74.8008L65.2 75.5008C65.3 75.6008 65.3 75.7008 65.3 75.8008C65.3 75.9008 65.2 75.9008 65.1 75.9008Z"
          fill="url(#paint163_linear_311_2)"
        />
        <path
          d="M63 79.1977H62.9L61.8 78.5977C61.7 78.4977 61.6 78.3977 61.7 78.2977C61.8 78.1977 61.9 78.0977 62 78.1977L63.1 78.7977C63.2 78.8977 63.3 78.9977 63.2 79.0977C63.2 79.0977 63.1 79.1977 63 79.1977Z"
          fill="url(#paint164_linear_311_2)"
        />
        <path
          d="M61.3001 82.6H61.2001L60.0001 82C59.9001 81.9 59.8001 81.8 59.9001 81.7C60.0001 81.6 60.1001 81.5 60.2001 81.6L61.3001 82.1C61.4001 82.2 61.5001 82.3 61.4001 82.4C61.4001 82.5 61.4001 82.6 61.3001 82.6Z"
          fill="url(#paint165_linear_311_2)"
        />
        <path
          d="M59.8001 86.0992L58.5001 85.6992C58.4001 85.6992 58.3001 85.4992 58.4001 85.3992C58.4001 85.2992 58.6001 85.1992 58.7001 85.2992L59.9001 85.6992C60.0001 85.6992 60.1001 85.8992 60.0001 85.9992C60.0001 86.0992 59.9001 86.0992 59.8001 86.0992Z"
          fill="url(#paint166_linear_311_2)"
        />
        <path
          d="M58.6 89.8L57.3 89.5C57.2 89.5 57.1 89.3 57.1 89.2C57.1 89.1 57.3 89 57.4 89L58.6 89.3C58.7 89.3 58.8 89.5 58.8 89.6C58.8 89.7 58.7 89.8 58.6 89.8Z"
          fill="url(#paint167_linear_311_2)"
        />
        <path
          d="M57.8 93.5984L56.5 93.3984C56.4 93.3984 56.3 93.1984 56.3 93.0984C56.3 92.9984 56.5 92.8984 56.6 92.8984L57.8 93.0984C57.9 93.0984 58 93.2984 58 93.3984C58 93.4984 57.9 93.5984 57.8 93.5984Z"
          fill="url(#paint168_linear_311_2)"
        />
        <path
          d="M57.3 97.4008L56 97.3008C55.9 97.3008 55.8 97.2008 55.8 97.0008C55.8 96.9008 55.9 96.8008 56.1 96.8008L57.4001 96.9008C57.5001 96.9008 57.6 97.0008 57.6 97.2008C57.5 97.3008 57.4 97.4008 57.3 97.4008Z"
          fill="url(#paint169_linear_311_2)"
        />
        <path
          d="M57.1 101.299H55.8C55.7 101.299 55.5 101.199 55.5 100.999C55.5 100.899 55.6 100.699 55.8 100.699H57.1C57.2 100.699 57.4 100.799 57.4 100.999C57.4 101.099 57.3 101.299 57.1 101.299Z"
          fill="url(#paint170_linear_311_2)"
        />
        <path
          d="M56 105.198C55.9 105.198 55.8 105.098 55.8 104.998C55.8 104.898 55.9 104.698 56 104.698L57.3 104.598C57.4 104.598 57.6 104.698 57.6 104.798C57.6 104.898 57.5001 105.098 57.4001 105.098L56 105.198Z"
          fill="url(#paint171_linear_311_2)"
        />
        <path
          d="M56.5 109.098C56.4 109.098 56.3 108.998 56.3 108.898C56.3 108.798 56.4 108.598 56.5 108.598L57.7001 108.398C57.8001 108.398 58 108.498 58 108.598C58 108.698 57.9 108.898 57.8 108.898L56.5 109.098C56.6 109.098 56.6 109.098 56.5 109.098Z"
          fill="url(#paint172_linear_311_2)"
        />
        <path
          d="M57.4 112.999C57.3 112.999 57.2 112.899 57.2 112.799C57.2 112.699 57.2 112.499 57.4 112.499L58.5999 112.199C58.6999 112.199 58.9 112.199 58.9 112.399C58.9 112.499 58.9 112.699 58.7 112.699L57.4 112.999Z"
          fill="url(#paint173_linear_311_2)"
        />
        <path
          d="M58.6 116.798C58.5 116.798 58.4 116.698 58.4 116.598C58.4 116.498 58.4 116.298 58.5 116.298L59.7 115.898C59.8 115.898 60 115.898 60 115.998C60 116.098 60 116.298 59.9 116.298L58.6 116.798Z"
          fill="url(#paint174_linear_311_2)"
        />
        <path
          d="M60.1001 120.5C60.0001 120.5 59.9001 120.4 59.9001 120.4C59.8001 120.3 59.9001 120.1 60.0001 120.1L61.1001 119.6C61.2001 119.5 61.4001 119.6 61.4001 119.7C61.5001 119.8 61.4001 120 61.3001 120L60.2001 120.5H60.1001Z"
          fill="url(#paint175_linear_311_2)"
        />
        <path
          d="M61.9 123.998C61.8 123.998 61.7 123.998 61.7 123.898C61.6 123.798 61.7 123.598 61.8 123.598L62.9 122.998C63 122.898 63.2 122.998 63.2 123.098C63.3 123.198 63.2 123.398 63.1 123.398L62 123.998C62 123.998 62 123.998 61.9 123.998Z"
          fill="url(#paint176_linear_311_2)"
        />
        <path
          d="M64.1 127.299C64 127.299 63.9 127.298 63.9 127.198C63.8 127.098 63.8 126.899 64 126.899L65 126.198C65.1 126.098 65.3 126.099 65.3 126.299C65.4 126.399 65.4 126.598 65.2 126.598L64.2 127.299H64.1Z"
          fill="url(#paint177_linear_311_2)"
        />
        <path
          d="M66.5 130.5C66.4 130.5 66.4 130.5 66.3 130.4C66.2 130.3 66.2 130.1 66.3 130L67.3 129.2C67.4 129.1 67.6 129.1 67.7 129.2C67.8 129.3 67.8 129.5 67.7 129.6L66.7 130.4C66.6 130.4 66.5 130.5 66.5 130.5Z"
          fill="url(#paint178_linear_311_2)"
        />
        <path
          d="M69.2 133.401C69.1 133.401 69.1 133.401 69 133.301C68.9 133.201 68.9 133.001 69 132.901L69.9001 132.001C70.0001 131.901 70.2001 131.901 70.3001 132.001C70.4001 132.101 70.4001 132.301 70.3001 132.401L69.4001 133.301C69.3001 133.401 69.2 133.401 69.2 133.401Z"
          fill="url(#paint179_linear_311_2)"
        />
        <path
          d="M72.0999 136.098C71.9999 136.098 72 136.098 71.9 135.998C71.8 135.898 71.8 135.798 71.9 135.598L72.6999 134.598C72.7999 134.498 72.8999 134.498 73.0999 134.598C73.1999 134.698 73.1999 134.798 73.0999 134.998L72.3 135.998C72.2 135.998 72.1999 136.098 72.0999 136.098Z"
          fill="url(#paint180_linear_311_2)"
        />
        <path
          d="M75.2 138.498H75.1C75 138.398 75 138.298 75 138.198L75.7 137.198C75.8 137.098 75.9 137.098 76 137.098C76.1 137.198 76.1 137.298 76.1 137.398L75.4 138.398C75.4 138.398 75.3 138.498 75.2 138.498Z"
          fill="url(#paint181_linear_311_2)"
        />
        <path
          d="M78.6001 140.6H78.5001C78.4001 140.5 78.3001 140.4 78.4001 140.3L79.0001 139.2C79.1001 139.1 79.2001 139 79.3001 139.1C79.4001 139.2 79.5001 139.3 79.4001 139.4L78.8001 140.5C78.7001 140.6 78.7001 140.6 78.6001 140.6Z"
          fill="url(#paint182_linear_311_2)"
        />
        <path
          d="M82.1001 142.401H82.0001C81.9001 142.301 81.8001 142.201 81.9001 142.101L82.4001 141.001C82.5001 140.901 82.6001 140.801 82.7001 140.901C82.8001 141.001 82.9001 141.101 82.8001 141.201L82.3001 142.301C82.3001 142.401 82.2001 142.401 82.1001 142.401Z"
          fill="url(#paint183_linear_311_2)"
        />
        <path
          d="M85.8 144.001C85.7 144.001 85.7 144.001 85.8 144.001C85.6 143.901 85.5 143.801 85.6 143.701L86 142.501C86 142.401 86.2 142.301 86.3 142.401C86.4 142.401 86.5 142.601 86.4 142.701L86 143.901C86 143.901 85.9 144.001 85.8 144.001Z"
          fill="url(#paint184_linear_311_2)"
        />
        <path
          d="M89.5 145.2C89.3 145.2 89.2 145 89.3 144.9L89.6 143.7C89.6 143.6 89.8 143.5 89.9 143.5C90 143.5 90.1 143.7 90.1 143.8L89.8 145C89.7 145.1 89.6 145.2 89.5 145.2Z"
          fill="url(#paint185_linear_311_2)"
        />
        <path
          d="M93.4 146.001C93.2 146.001 93.1 145.801 93.2 145.701L93.4 144.501C93.4 144.401 93.6 144.301 93.7 144.301C93.8 144.301 93.9 144.501 93.9 144.601L93.7 145.801C93.6 145.901 93.5 146.001 93.4 146.001Z"
          fill="url(#paint186_linear_311_2)"
        />
        <path
          d="M97.3 146.499C97.1 146.499 97 146.399 97.1 146.199L97.2 144.899C97.2 144.799 97.3 144.699 97.5 144.699C97.6 144.699 97.7 144.799 97.7 144.999L97.6 146.299C97.6 146.399 97.5 146.499 97.3 146.499Z"
          fill="url(#paint187_linear_311_2)"
        />
        <path
          d="M101.3 146.701C101.2 146.701 101 146.601 101 146.401V145.101C101 145.001 101.1 144.801 101.3 144.801C101.5 144.801 101.6 144.901 101.6 145.101V146.401C101.6 146.601 101.4 146.701 101.3 146.701Z"
          fill="url(#paint188_linear_311_2)"
        />
        <path
          d="M105.3 146.499C105.2 146.499 105.1 146.399 105.1 146.299L105 144.999C105 144.899 105.1 144.699 105.2 144.699C105.3 144.699 105.5 144.799 105.5 144.899L105.6 146.199C105.5 146.399 105.4 146.499 105.3 146.499Z"
          fill="url(#paint189_linear_311_2)"
        />
        <path
          d="M109.2 146.001C109.1 146.001 109 145.901 109 145.801L108.8 144.601C108.8 144.501 108.9 144.301 109 144.301C109.1 144.301 109.3 144.401 109.3 144.501L109.5 145.701C109.5 145.901 109.4 146.001 109.2 146.001Z"
          fill="url(#paint190_linear_311_2)"
        />
        <path
          d="M113.1 145.2C113 145.2 112.9 145.1 112.9 145L112.6 143.8C112.6 143.7 112.6 143.5 112.8 143.5C112.9 143.5 113.1 143.5 113.1 143.7L113.4 144.9C113.3 145 113.3 145.1 113.1 145.2Z"
          fill="url(#paint191_linear_311_2)"
        />
        <path
          d="M116.8 144.001C116.7 144.001 116.6 143.901 116.6 143.801L116.2 142.601C116.2 142.501 116.2 142.301 116.3 142.301C116.4 142.301 116.6 142.301 116.6 142.401L117 143.601C117.1 143.801 117.1 143.901 116.8 144.001C116.9 144.001 116.9 144.001 116.8 144.001Z"
          fill="url(#paint192_linear_311_2)"
        />
        <path
          d="M120.5 142.401C120.4 142.401 120.3 142.301 120.3 142.301L119.8 141.201C119.7 141.101 119.8 140.901 119.9 140.901C120 140.801 120.2 140.901 120.2 141.001L120.7 142.101C120.8 142.201 120.7 142.401 120.6 142.401H120.5Z"
          fill="url(#paint193_linear_311_2)"
        />
        <path
          d="M124 140.6C123.9 140.6 123.8 140.6 123.8 140.5L123.2 139.4C123.1 139.3 123.2 139.1 123.3 139.1C123.4 139 123.6 139.1 123.6 139.2L124.2 140.3C124.3 140.4 124.2 140.6 124.1 140.6C124.1 140.6 124.1 140.6 124 140.6Z"
          fill="url(#paint194_linear_311_2)"
        />
        <path
          d="M127.4 138.501C127.3 138.501 127.2 138.501 127.2 138.401L126.5 137.401C126.4 137.301 126.4 137.101 126.6 137.101C126.7 137.001 126.9 137.001 126.9 137.201L127.6 138.201C127.7 138.301 127.7 138.501 127.5 138.501H127.4Z"
          fill="url(#paint195_linear_311_2)"
        />
        <path
          d="M130.5 136.098C130.4 136.098 130.4 136.098 130.3 135.998L129.5 134.998C129.4 134.898 129.4 134.698 129.5 134.598C129.6 134.498 129.8 134.498 129.9 134.598L130.7 135.598C130.8 135.698 130.8 135.898 130.7 135.998C130.6 135.998 130.6 136.098 130.5 136.098Z"
          fill="url(#paint196_linear_311_2)"
        />
        <path
          d="M133.4 133.401C133.3 133.401 133.3 133.401 133.2 133.301L132.3 132.401C132.2 132.301 132.2 132.101 132.3 132.001C132.4 131.901 132.6 131.901 132.7 132.001L133.6 132.901C133.7 133.001 133.7 133.201 133.6 133.301C133.6 133.401 133.5 133.401 133.4 133.401Z"
          fill="url(#paint197_linear_311_2)"
        />
        <path
          d="M136.1 130.5C136 130.5 136 130.5 135.9 130.4L134.9 129.6C134.8 129.5 134.8 129.4 134.9 129.2C135 129.1 135.1 129.1 135.3 129.2L136.3 130C136.4 130.1 136.4 130.2 136.3 130.4C136.3 130.4 136.2 130.5 136.1 130.5Z"
          fill="url(#paint198_linear_311_2)"
        />
        <path
          d="M138.5 127.299H138.4L137.4 126.599C137.3 126.499 137.3 126.399 137.3 126.299C137.4 126.199 137.5 126.199 137.6 126.199L138.6 126.899C138.7 126.999 138.7 127.099 138.7 127.199C138.7 127.299 138.6 127.299 138.5 127.299Z"
          fill="url(#paint199_linear_311_2)"
        />
        <path
          d="M140.7 123.998H140.6L139.5 123.398C139.4 123.298 139.3 123.198 139.4 123.098C139.5 122.998 139.6 122.898 139.7 122.998L140.8 123.598C140.9 123.698 141 123.798 140.9 123.898C140.8 123.898 140.7 123.998 140.7 123.998Z"
          fill="url(#paint200_linear_311_2)"
        />
        <path
          d="M142.5 120.5H142.4L141.3 120C141.2 119.9 141.1 119.8 141.2 119.7C141.3 119.6 141.4 119.5 141.5 119.6L142.6 120.1C142.7 120.2 142.8 120.3 142.7 120.4C142.7 120.4 142.6 120.5 142.5 120.5Z"
          fill="url(#paint201_linear_311_2)"
        />
        <path
          d="M144 116.798L142.7 116.398C142.6 116.398 142.5 116.198 142.6 116.098C142.6 115.998 142.8 115.898 142.9 115.998L144.1 116.398C144.2 116.398 144.3 116.598 144.2 116.698C144.2 116.698 144.1 116.798 144 116.798Z"
          fill="url(#paint202_linear_311_2)"
        />
        <path
          d="M145.2 112.999L143.9 112.699C143.8 112.699 143.7 112.499 143.7 112.399C143.7 112.299 143.9 112.199 144 112.199L145.2 112.499C145.3 112.499 145.4 112.699 145.4 112.799C145.4 112.899 145.3 112.999 145.2 112.999Z"
          fill="url(#paint203_linear_311_2)"
        />
        <path
          d="M146.1 109.098C146 109.098 146 109.098 146.1 109.098L144.8 108.898C144.7 108.898 144.6 108.698 144.6 108.598C144.6 108.498 144.7 108.398 144.9 108.398L146.1 108.598C146.2 108.598 146.3 108.798 146.3 108.898C146.3 109.098 146.2 109.098 146.1 109.098Z"
          fill="url(#paint204_linear_311_2)"
        />
        <path
          d="M146.6 105.198L145.3 105.098C145.2 105.098 145.1 104.998 145.1 104.798C145.1 104.698 145.2 104.598 145.4 104.598L146.7 104.698C146.8 104.698 146.9 104.798 146.9 104.998C146.8 105.098 146.7 105.198 146.6 105.198Z"
          fill="url(#paint205_linear_311_2)"
        />
        <path
          d="M146.7 101.299H145.4C145.3 101.299 145.1 101.199 145.1 100.999C145.1 100.899 145.2 100.699 145.4 100.699H146.7C146.8 100.699 147 100.799 147 100.999C147 101.099 146.9 101.299 146.7 101.299Z"
          fill="url(#paint206_linear_311_2)"
        />
        <path
          d="M145.3 97.4008C145.2 97.4008 145.1 97.3008 145.1 97.2008C145.1 97.1008 145.2 96.9008 145.3 96.9008L146.6 96.8008C146.7 96.8008 146.9 96.9008 146.9 97.0008C146.9 97.1008 146.8 97.3008 146.7 97.3008L145.3 97.4008Z"
          fill="url(#paint207_linear_311_2)"
        />
        <path
          d="M144.8 93.5984C144.7 93.5984 144.6 93.4984 144.6 93.3984C144.6 93.2984 144.7 93.0984 144.8 93.0984L146 92.8984C146.1 92.8984 146.3 92.9984 146.3 93.0984C146.3 93.1984 146.2 93.3984 146.1 93.3984L144.8 93.5984Z"
          fill="url(#paint208_linear_311_2)"
        />
        <path
          d="M144 89.8C143.9 89.8 143.8 89.7 143.8 89.6C143.8 89.5 143.8 89.3 144 89.3L145.2 89C145.3 89 145.5 89 145.5 89.2C145.5 89.3 145.5 89.5 145.3 89.5L144 89.8Z"
          fill="url(#paint209_linear_311_2)"
        />
        <path
          d="M142.8 86.0992C142.7 86.0992 142.6 85.9992 142.6 85.8992C142.6 85.7992 142.6 85.5992 142.7 85.5992L143.9 85.1992C144 85.1992 144.2 85.1992 144.2 85.2992C144.2 85.3992 144.2 85.5992 144.1 85.5992L142.8 86.0992Z"
          fill="url(#paint210_linear_311_2)"
        />
        <path
          d="M141.3 82.5977C141.2 82.5977 141.1 82.4977 141.1 82.4977C141 82.3977 141.1 82.1977 141.2 82.1977L142.3 81.6977C142.4 81.5977 142.6 81.6977 142.6 81.7977C142.7 81.8977 142.6 82.0977 142.5 82.0977L141.4 82.5977C141.4 82.5977 141.4 82.5977 141.3 82.5977Z"
          fill="url(#paint211_linear_311_2)"
        />
        <path
          d="M139.6 79.1977C139.5 79.1977 139.4 79.1977 139.4 79.0977C139.3 78.9977 139.4 78.7977 139.5 78.7977L140.6 78.1977C140.7 78.0977 140.9 78.1977 140.9 78.2977C141 78.3977 140.9 78.5977 140.8 78.5977L139.7 79.1977C139.7 79.0977 139.6 79.1977 139.6 79.1977Z"
          fill="url(#paint212_linear_311_2)"
        />
        <path
          d="M137.5 75.9001C137.4 75.9001 137.3 75.9001 137.3 75.8001C137.2 75.7001 137.2 75.5001 137.4 75.5001L138.4 74.8001C138.5 74.7001 138.7 74.7001 138.7 74.9001C138.8 75.0001 138.8 75.2001 138.6 75.2001L137.6 75.9001H137.5Z"
          fill="url(#paint213_linear_311_2)"
        />
        <path
          d="M135.1 72.8008C135 72.8008 135 72.8008 134.9 72.7008C134.8 72.6008 134.8 72.4008 134.9 72.3008L135.9 71.5008C136 71.4008 136.2 71.4008 136.3 71.5008C136.4 71.6008 136.4 71.8008 136.3 71.9008L135.3 72.7008C135.3 72.8008 135.2 72.8008 135.1 72.8008Z"
          fill="url(#paint214_linear_311_2)"
        />
        <path
          d="M132.5 69.9984C132.4 69.9984 132.4 69.9984 132.3 69.8984C132.2 69.7984 132.2 69.5984 132.3 69.4984L133.2 68.5984C133.3 68.4984 133.5 68.4984 133.6 68.5984C133.7 68.6984 133.7 68.8984 133.6 68.9984L132.7 69.8984C132.7 69.9984 132.6 69.9984 132.5 69.9984Z"
          fill="url(#paint215_linear_311_2)"
        />
        <path
          d="M129.7 67.3992C129.6 67.3992 129.6 67.3992 129.5 67.2992C129.4 67.1992 129.4 67.0992 129.5 66.8992L130.3 65.8992C130.4 65.7992 130.5 65.7992 130.7 65.8992C130.8 65.9992 130.8 66.0992 130.7 66.2992L129.9 67.2992C129.8 67.3992 129.8 67.3992 129.7 67.3992Z"
          fill="url(#paint216_linear_311_2)"
        />
        <path
          d="M126.6 65.0992H126.5C126.4 64.9992 126.4 64.8992 126.4 64.7992L127.1 63.7992C127.2 63.6992 127.3 63.6992 127.4 63.6992C127.5 63.7992 127.5 63.8992 127.5 63.9992L126.8 64.9992C126.8 64.9992 126.7 65.0992 126.6 65.0992Z"
          fill="url(#paint217_linear_311_2)"
        />
        <path
          d="M123.4 62.9985H123.3C123.2 62.8985 123.1 62.7985 123.2 62.6985L123.8 61.5985C123.9 61.4985 124 61.3985 124.1 61.4985C124.2 61.5985 124.3 61.6985 124.2 61.7985L123.6 62.8985C123.6 62.8985 123.5 62.9985 123.4 62.9985Z"
          fill="url(#paint218_linear_311_2)"
        />
        <path
          d="M120 61.1977H119.9C119.8 61.0977 119.7 60.9977 119.8 60.8977L120.3 59.7977C120.4 59.6977 120.5 59.5977 120.6 59.6977C120.7 59.7977 120.8 59.8977 120.7 59.9977L120.2 61.0977C120.2 61.1977 120.1 61.1977 120 61.1977Z"
          fill="url(#paint219_linear_311_2)"
        />
        <path
          d="M116.4 59.7C116.2 59.6 116.1 59.5 116.2 59.4L116.6 58.2C116.6 58.1 116.8 58 116.9 58.1C117 58.1 117.1 58.3 117 58.4L116.6 59.6C116.6 59.7 116.5 59.7 116.4 59.7Z"
          fill="url(#paint220_linear_311_2)"
        />
        <path
          d="M112.7 58.5984C112.5 58.5984 112.4 58.3984 112.5 58.2984L112.8 57.0984C112.8 56.9984 113 56.8984 113.1 56.8984C113.2 56.8984 113.3 57.0984 113.3 57.1984L113 58.3984C112.9 58.4984 112.8 58.5984 112.7 58.5984Z"
          fill="url(#paint221_linear_311_2)"
        />
        <path
          d="M109 57.7C108.8 57.7 108.7 57.5 108.8 57.4L109 56.2C109 56.1 109.1 56 109.3 56C109.4 56 109.5 56.2 109.5 56.3L109.3 57.5C109.2 57.7 109.1 57.7 109 57.7Z"
          fill="url(#paint222_linear_311_2)"
        />
        <path
          d="M105.2 57.1984C105.1 57.1984 105.1 57.1984 105.2 57.1984C105 57.1984 104.9 57.0984 105 56.8984L105.1 55.5984C105.1 55.4984 105.2 55.3984 105.4 55.3984C105.5 55.3984 105.6 55.4984 105.6 55.6984L105.5 56.9984C105.4 57.0984 105.3 57.1984 105.2 57.1984Z"
          fill="url(#paint223_linear_311_2)"
        />
        <path
          d="M99.4 57.1008C99.3 57.1008 99.2 57.0008 99.1 56.9008L99 55.6008C99 55.5008 99.1 55.3008 99.2 55.3008C99.3 55.3008 99.5 55.4008 99.5 55.5008L99.6 56.8008C99.6 57.0008 99.5 57.1008 99.4 57.1008Z"
          fill="url(#paint224_linear_311_2)"
        />
        <path
          d="M95.5 57.3992C95.4 57.3992 95.3 57.2992 95.3 57.1992L95.1 55.9992C95.1 55.8992 95.2 55.6992 95.3 55.6992C95.4 55.6992 95.6 55.7992 95.6 55.8992L95.8 57.1992C95.8 57.2992 95.7 57.3992 95.5 57.3992Z"
          fill="url(#paint225_linear_311_2)"
        />
        <path
          d="M91.7 58.1023C91.6 58.1023 91.5 58.0023 91.5 57.9023L91.2 56.7023C91.2 56.6023 91.3 56.4023 91.4 56.4023C91.5 56.4023 91.7 56.5023 91.7 56.6023L92 57.8023C92 57.9023 91.9 58.1023 91.7 58.1023C91.8 58.1023 91.8 58.1023 91.7 58.1023Z"
          fill="url(#paint226_linear_311_2)"
        />
        <path
          d="M88 59.1023C87.9 59.1023 87.8 59.0023 87.8 58.9023L87.4 57.7023C87.4 57.6023 87.4 57.4023 87.6 57.4023C87.7 57.4023 87.9 57.4023 87.9 57.6023L88.3 58.8023C88.3 58.9023 88.2 59.1023 88 59.1023Z"
          fill="url(#paint227_linear_311_2)"
        />
        <path
          d="M84.4 60.4016C84.3 60.4016 84.2 60.3016 84.2 60.2016L83.7 59.0016C83.6 58.9016 83.7 58.7016 83.8 58.7016C83.9 58.6016 84.1 58.7016 84.1 58.8016L84.6 60.0016C84.7 60.2016 84.6 60.4016 84.4 60.4016Z"
          fill="url(#paint228_linear_311_2)"
        />
        <path
          d="M80.9 62.1C80.8 62.1 80.7 62.1 80.7 62L80.1 60.9C80 60.8 80.1 60.6 80.2 60.6C80.3 60.5 80.5 60.6 80.5 60.7L81.1 61.8C81.2 61.9 81.1 62.1 81 62.1H80.9Z"
          fill="url(#paint229_linear_311_2)"
        />
        <path
          d="M77.6 64.0024C77.5 64.0024 77.4 64.0024 77.4 63.9024L76.7 62.8024C76.6 62.7024 76.7 62.5024 76.8 62.5024C76.9 62.4024 77.1 62.5024 77.1 62.6024L77.8 63.7024C77.9 63.8024 77.8 64.0024 77.7 64.0024H77.6Z"
          fill="url(#paint230_linear_311_2)"
        />
        <path
          d="M74.4 66.2C74.3 66.2 74.2999 66.2 74.1999 66.1L73.4 65.1C73.3 65 73.3 64.8 73.4 64.7C73.5 64.6 73.7 64.6 73.8 64.7L74.5999 65.7C74.6999 65.8 74.6999 66 74.5999 66.1C74.4999 66.2 74.5 66.2 74.4 66.2Z"
          fill="url(#paint231_linear_311_2)"
        />
        <path
          d="M71.4999 68.7016C71.3999 68.7016 71.4 68.7016 71.3 68.6016L70.4 67.7016C70.3 67.6016 70.3 67.4016 70.4 67.3016C70.5 67.2016 70.7 67.2016 70.8 67.3016L71.6999 68.2016C71.7999 68.3016 71.7999 68.5016 71.6999 68.6016C71.5999 68.7016 71.4999 68.7016 71.4999 68.7016Z"
          fill="url(#paint232_linear_311_2)"
        />
        <path
          d="M68.7 71.4008C68.6 71.4008 68.6 71.4008 68.5 71.3008L67.6 70.4008C67.5 70.3008 67.5 70.1008 67.6 70.0008C67.7 69.9008 67.9 69.9008 68 70.0008L68.9 70.9008C69 71.0008 69 71.2008 68.9 71.3008C68.9 71.4008 68.8 71.4008 68.7 71.4008Z"
          fill="url(#paint233_linear_311_2)"
        />
        <path
          d="M66.1999 74.4023C66.0999 74.4023 66.0999 74.4023 65.9999 74.3023L64.9999 73.5023C64.8999 73.4023 64.8999 73.3023 64.9999 73.1023C65.0999 73.0023 65.1999 73.0023 65.3999 73.1023L66.3999 73.9023C66.4999 74.0023 66.4999 74.1023 66.3999 74.3023C66.3999 74.3023 66.2999 74.4023 66.1999 74.4023Z"
          fill="url(#paint234_linear_311_2)"
        />
        <path
          d="M64 77.5023H63.9L62.8 76.8023C62.7 76.7023 62.6 76.6023 62.7 76.5023C62.8 76.4023 62.9 76.4023 63 76.4023L64.1 77.1023C64.2 77.2023 64.3 77.3023 64.2 77.4023C64.2 77.5023 64.1 77.5023 64 77.5023Z"
          fill="url(#paint235_linear_311_2)"
        />
        <path
          d="M62.1 80.7992H62L60.9 80.1992C60.8 80.0992 60.7 79.9992 60.8 79.8992C60.9 79.7992 61 79.6992 61.1 79.7992L62.2 80.3992C62.3 80.4992 62.4 80.5992 62.3 80.6992C62.3 80.7992 62.2 80.7992 62.1 80.7992Z"
          fill="url(#paint236_linear_311_2)"
        />
        <path
          d="M60.5 84.3008C60.4 84.3008 60.4 84.3008 60.5 84.3008L59.2 83.8008C59.1 83.7008 59 83.6008 59.1 83.5008C59.2 83.4008 59.3 83.3008 59.4 83.4008L60.6 83.9008C60.7 84.0008 60.8 84.1008 60.7 84.2008C60.7 84.3008 60.6 84.3008 60.5 84.3008Z"
          fill="url(#paint237_linear_311_2)"
        />
        <path
          d="M59.2 88.0016C59.1 88.0016 59.1 88.0016 59.2 88.0016L57.9 87.6016C57.8 87.6016 57.7 87.4016 57.7 87.3016C57.7 87.2016 57.9 87.1016 58 87.1016L59.2 87.5016C59.3 87.5016 59.4 87.7016 59.4 87.8016C59.4 87.9016 59.3 88.0016 59.2 88.0016Z"
          fill="url(#paint238_linear_311_2)"
        />
        <path
          d="M58.2 91.7023C58.1 91.7023 58.1 91.7023 58.2 91.7023L56.9 91.4023C56.8 91.4023 56.7 91.2023 56.7 91.1023C56.7 91.0023 56.9 90.9023 57 90.9023L58.2 91.2023C58.3 91.2023 58.4 91.4023 58.4 91.5023C58.4 91.6023 58.3 91.7023 58.2 91.7023Z"
          fill="url(#paint239_linear_311_2)"
        />
        <path
          d="M57.5 95.5008L56.2 95.3008C56.1 95.3008 56 95.2008 56 95.0008C56 94.9008 56.1 94.8008 56.3 94.8008L57.6 95.0008C57.7 95.0008 57.8 95.1008 57.8 95.3008C57.7 95.4008 57.6 95.5008 57.5 95.5008Z"
          fill="url(#paint240_linear_311_2)"
        />
        <path
          d="M57.2 99.2991L55.9 99.1991C55.8 99.1991 55.7 99.0991 55.7 98.8991C55.7 98.7991 55.8 98.5991 56 98.6991L57.2999 98.7991C57.3999 98.7991 57.5 98.8991 57.5 99.0991C57.4 99.1991 57.3 99.2991 57.2 99.2991Z"
          fill="url(#paint241_linear_311_2)"
        />
        <path
          d="M55.9 103.202C55.8 103.202 55.7 103.102 55.6 103.002C55.6 102.902 55.7 102.702 55.8 102.702L57.1 102.602C57.2 102.602 57.4 102.702 57.4 102.802C57.4 102.902 57.3 103.102 57.2 103.102L55.9 103.202Z"
          fill="url(#paint242_linear_311_2)"
        />
        <path
          d="M56.2 107.2C56.1 107.2 56 107.1 56 107C56 106.9 56.1 106.7 56.2 106.7L57.5 106.5C57.6 106.5 57.8 106.6 57.8 106.7C57.8 106.8 57.7 107 57.6 107L56.2 107.2C56.3 107.2 56.3 107.2 56.2 107.2Z"
          fill="url(#paint243_linear_311_2)"
        />
        <path
          d="M56.9 111.101C56.8 111.101 56.7 111.001 56.7 110.901C56.7 110.801 56.8 110.601 56.9 110.601L58.0999 110.301C58.1999 110.301 58.4 110.401 58.4 110.501C58.4 110.601 58.3 110.801 58.2 110.801L56.9 111.101Z"
          fill="url(#paint244_linear_311_2)"
        />
        <path
          d="M57.9999 114.9C57.8999 114.9 57.7999 114.8 57.7999 114.7C57.7999 114.6 57.7999 114.4 57.9999 114.4L59.1999 114C59.2999 114 59.4999 114 59.4999 114.2C59.4999 114.3 59.4999 114.5 59.2999 114.5L57.9999 114.9Z"
          fill="url(#paint245_linear_311_2)"
        />
        <path
          d="M59.3 118.6C59.2 118.6 59.1 118.5 59.1 118.4C59 118.3 59.1 118.1 59.2 118.1L60.4 117.6C60.5 117.5 60.7 117.6 60.7 117.7C60.8 117.8 60.7 118 60.6 118L59.3 118.6Z"
          fill="url(#paint246_linear_311_2)"
        />
        <path
          d="M61 122.202C60.9 122.202 60.8 122.202 60.8 122.102C60.7 122.002 60.8 121.802 60.9 121.802L62 121.202C62.1 121.102 62.3 121.202 62.3 121.302C62.4 121.402 62.3 121.602 62.2 121.602L61.1 122.202H61Z"
          fill="url(#paint247_linear_311_2)"
        />
        <path
          d="M63 125.7C62.9 125.7 62.8 125.7 62.8 125.6C62.7 125.5 62.8 125.3 62.9 125.3L64 124.6C64.1 124.5 64.3 124.6 64.3 124.7C64.4 124.8 64.3 125 64.2 125L63.1 125.7H63Z"
          fill="url(#paint248_linear_311_2)"
        />
        <path
          d="M65.1999 128.902C65.0999 128.902 65.0999 128.902 64.9999 128.802C64.8999 128.702 64.8999 128.502 64.9999 128.402L65.9999 127.602C66.0999 127.502 66.2999 127.502 66.3999 127.602C66.4999 127.702 66.4999 127.902 66.3999 128.002L65.3999 128.802C65.3999 128.902 65.2999 128.902 65.1999 128.902Z"
          fill="url(#paint249_linear_311_2)"
        />
        <path
          d="M67.8 132.002C67.7 132.002 67.7 132.002 67.6 131.902C67.5 131.802 67.5 131.602 67.6 131.502L68.5 130.602C68.6 130.502 68.8 130.502 68.9 130.602C69 130.702 69 130.902 68.9 131.002L68 131.902C67.9 131.902 67.9 132.002 67.8 132.002Z"
          fill="url(#paint250_linear_311_2)"
        />
        <path
          d="M70.5999 134.799C70.4999 134.799 70.5 134.799 70.4 134.699C70.3 134.599 70.3 134.399 70.4 134.299L71.3 133.399C71.4 133.299 71.5999 133.299 71.6999 133.399C71.7999 133.499 71.7999 133.699 71.6999 133.799L70.8 134.699C70.7 134.699 70.6999 134.799 70.5999 134.799Z"
          fill="url(#paint251_linear_311_2)"
        />
        <path
          d="M73.5999 137.302C73.4999 137.302 73.5 137.302 73.4 137.202C73.3 137.102 73.3 137.002 73.4 136.802L74.1999 135.802C74.2999 135.702 74.3999 135.702 74.5999 135.802C74.6999 135.902 74.6999 136.002 74.5999 136.202L73.8 137.202C73.8 137.302 73.6999 137.302 73.5999 137.302Z"
          fill="url(#paint252_linear_311_2)"
        />
        <path
          d="M76.9 139.6H76.8C76.7 139.5 76.6 139.4 76.7 139.3L77.4 138.2C77.5 138.1 77.6 138 77.7 138.1C77.8 138.2 77.9 138.3 77.8 138.4L77.1 139.5C77 139.5 77 139.6 76.9 139.6Z"
          fill="url(#paint253_linear_311_2)"
        />
        <path
          d="M80.3 141.6H80.2C80.1 141.5 80 141.4 80.1 141.3L80.7 140.2C80.8 140.1 80.9 140 81 140.1C81.1 140.2 81.2 140.3 81.1 140.4L80.5 141.5C80.5 141.5 80.4 141.6 80.3 141.6Z"
          fill="url(#paint254_linear_311_2)"
        />
        <path
          d="M83.9 143.2C83.7 143.1 83.6 143 83.7 142.9L84.2 141.7C84.3 141.6 84.4 141.5 84.5 141.6C84.6 141.7 84.7 141.8 84.6 141.9L84.1 143.1C84.1 143.2 84 143.2 83.9 143.2Z"
          fill="url(#paint255_linear_311_2)"
        />
        <path
          d="M87.5999 144.602C87.3999 144.502 87.2999 144.402 87.3999 144.302L87.8 143.102C87.8 143.002 87.9999 142.902 88.0999 142.902C88.1999 142.902 88.3 143.102 88.3 143.202L87.8999 144.402C87.7999 144.502 87.6999 144.602 87.5999 144.602Z"
          fill="url(#paint256_linear_311_2)"
        />
        <path
          d="M91.5 145.602C91.4 145.602 91.4 145.602 91.5 145.602C91.3 145.602 91.2 145.402 91.3 145.302L91.6 144.102C91.6 144.002 91.8 143.902 91.9 143.902C92 143.902 92.1 144.102 92.1 144.202L91.8 145.402C91.7 145.502 91.6 145.602 91.5 145.602Z"
          fill="url(#paint257_linear_311_2)"
        />
        <path
          d="M95.4 146.3C95.2 146.3 95.1 146.2 95.2 146L95.4 144.7C95.4 144.6 95.5 144.5 95.7 144.5C95.8 144.5 95.9 144.6 95.9 144.8L95.7 146.1C95.6 146.2 95.5 146.3 95.4 146.3Z"
          fill="url(#paint258_linear_311_2)"
        />
        <path
          d="M99.3 146.702C99.2 146.702 99 146.602 99 146.402L99.1 145.102C99.1 145.002 99.2 144.902 99.4 144.902C99.5 144.902 99.6 145.002 99.6 145.202L99.5 146.502C99.6 146.602 99.5 146.702 99.3 146.702Z"
          fill="url(#paint259_linear_311_2)"
        />
        <path
          d="M103.3 146.702C103.2 146.702 103.1 146.602 103 146.502L102.9 145.202C102.9 145.102 103 144.902 103.1 144.902C103.2 144.902 103.4 145.002 103.4 145.102L103.5 146.402C103.5 146.502 103.4 146.602 103.3 146.702Z"
          fill="url(#paint260_linear_311_2)"
        />
        <path
          d="M107.2 146.3C107.1 146.3 107 146.2 107 146.1L106.8 144.8C106.8 144.7 106.9 144.5 107 144.5C107.1 144.5 107.3 144.6 107.3 144.7L107.5 146C107.5 146.2 107.4 146.3 107.2 146.3Z"
          fill="url(#paint261_linear_311_2)"
        />
        <path
          d="M111.1 145.602C111 145.602 110.9 145.502 110.9 145.402L110.6 144.202C110.6 144.102 110.7 143.902 110.8 143.902C110.9 143.902 111.1 144.002 111.1 144.102L111.4 145.302C111.4 145.502 111.3 145.602 111.1 145.602C111.2 145.602 111.2 145.602 111.1 145.602Z"
          fill="url(#paint262_linear_311_2)"
        />
        <path
          d="M115 144.602C114.9 144.602 114.8 144.502 114.8 144.402L114.4 143.202C114.4 143.102 114.4 142.902 114.6 142.902C114.7 142.902 114.9 142.902 114.9 143.102L115.3 144.302C115.2 144.402 115.2 144.502 115 144.602Z"
          fill="url(#paint263_linear_311_2)"
        />
        <path
          d="M118.7 143.202C118.6 143.202 118.5 143.102 118.5 143.002L118 141.802C117.9 141.702 118 141.502 118.1 141.502C118.2 141.402 118.4 141.502 118.4 141.602L118.9 142.802C119 143.002 118.9 143.202 118.7 143.202Z"
          fill="url(#paint264_linear_311_2)"
        />
        <path
          d="M122.3 141.6C122.2 141.6 122.1 141.6 122.1 141.5L121.5 140.4C121.4 140.3 121.5 140.1 121.6 140.1C121.7 140 121.9 140.1 121.9 140.2L122.5 141.3C122.6 141.4 122.5 141.6 122.4 141.6H122.3Z"
          fill="url(#paint265_linear_311_2)"
        />
        <path
          d="M125.7 139.6C125.6 139.6 125.5 139.6 125.5 139.5L124.8 138.4C124.7 138.3 124.8 138.1 124.9 138.1C125 138 125.2 138.1 125.2 138.2L125.9 139.3C126 139.4 125.9 139.6 125.8 139.6C125.8 139.6 125.8 139.6 125.7 139.6Z"
          fill="url(#paint266_linear_311_2)"
        />
        <path
          d="M129 137.302C128.9 137.302 128.9 137.302 128.8 137.202L128 136.202C127.9 136.102 127.9 135.902 128 135.802C128.1 135.702 128.3 135.702 128.4 135.802L129.2 136.802C129.3 136.902 129.3 137.102 129.2 137.202C129.1 137.302 129 137.302 129 137.302Z"
          fill="url(#paint267_linear_311_2)"
        />
        <path
          d="M132 134.799C131.9 134.799 131.9 134.799 131.8 134.699L130.9 133.799C130.8 133.699 130.8 133.499 130.9 133.399C131 133.299 131.2 133.299 131.3 133.399L132.2 134.299C132.3 134.399 132.3 134.599 132.2 134.699C132.1 134.699 132.1 134.799 132 134.799Z"
          fill="url(#paint268_linear_311_2)"
        />
        <path
          d="M134.8 132.002C134.7 132.002 134.7 132.002 134.6 131.902L133.7 131.002C133.6 130.902 133.6 130.702 133.7 130.602C133.8 130.502 134 130.502 134.1 130.602L135 131.502C135.1 131.602 135.1 131.802 135 131.902C134.9 131.902 134.9 132.002 134.8 132.002Z"
          fill="url(#paint269_linear_311_2)"
        />
        <path
          d="M137.4 128.902C137.3 128.902 137.3 128.902 137.2 128.802L136.2 128.002C136.1 127.902 136.1 127.802 136.2 127.602C136.3 127.502 136.4 127.502 136.6 127.602L137.6 128.402C137.7 128.502 137.7 128.602 137.6 128.802C137.5 128.902 137.4 128.902 137.4 128.902Z"
          fill="url(#paint270_linear_311_2)"
        />
        <path
          d="M139.6 125.702H139.5L138.4 125.002C138.3 124.902 138.2 124.802 138.3 124.702C138.4 124.602 138.5 124.602 138.6 124.602L139.7 125.302C139.8 125.402 139.9 125.502 139.8 125.602C139.8 125.602 139.7 125.702 139.6 125.702Z"
          fill="url(#paint271_linear_311_2)"
        />
        <path
          d="M141.6 122.202H141.5L140.4 121.602C140.3 121.502 140.2 121.402 140.3 121.302C140.4 121.202 140.5 121.102 140.6 121.202L141.7 121.802C141.8 121.902 141.9 122.002 141.8 122.102C141.8 122.202 141.7 122.202 141.6 122.202Z"
          fill="url(#paint272_linear_311_2)"
        />
        <path
          d="M143.3 118.602L142 118.102C141.9 118.002 141.8 117.902 141.9 117.802C142 117.702 142.1 117.602 142.2 117.702L143.4 118.202C143.5 118.302 143.6 118.402 143.5 118.502C143.5 118.602 143.4 118.602 143.3 118.602Z"
          fill="url(#paint273_linear_311_2)"
        />
        <path
          d="M144.6 114.9L143.3 114.5C143.2 114.5 143.1 114.3 143.1 114.2C143.1 114.1 143.3 114 143.4 114L144.6 114.4C144.7 114.4 144.8 114.6 144.8 114.7C144.9 114.8 144.8 114.9 144.6 114.9Z"
          fill="url(#paint274_linear_311_2)"
        />
        <path
          d="M145.7 111.101L144.4 110.801C144.3 110.801 144.2 110.601 144.2 110.501C144.2 110.401 144.4 110.301 144.5 110.301L145.7 110.601C145.8 110.601 145.9 110.801 145.9 110.901C145.9 111.001 145.8 111.101 145.7 111.101Z"
          fill="url(#paint275_linear_311_2)"
        />
        <path
          d="M146.4 107.2L145.1 107C145 107 144.9 106.9 144.9 106.7C144.9 106.6 145 106.5 145.2 106.5L146.5 106.7C146.6 106.7 146.7 106.8 146.7 107C146.6 107.1 146.5 107.2 146.4 107.2Z"
          fill="url(#paint276_linear_311_2)"
        />
        <path
          d="M146.7 103.202L145.4 103.102C145.3 103.102 145.2 103.002 145.2 102.802C145.2 102.702 145.3 102.602 145.5 102.602L146.8 102.702C146.9 102.702 147 102.802 147 103.002C147 103.102 146.8 103.202 146.7 103.202Z"
          fill="url(#paint277_linear_311_2)"
        />
        <path
          d="M145.4 99.2992C145.3 99.2992 145.2 99.1992 145.1 99.0992C145.1 98.9992 145.2 98.7992 145.3 98.7992L146.6 98.6992C146.7 98.6992 146.9 98.7992 146.9 98.8992C146.9 98.9992 146.8 99.1992 146.7 99.1992L145.4 99.2992Z"
          fill="url(#paint278_linear_311_2)"
        />
        <path
          d="M145.1 95.5008C145 95.5008 144.9 95.4008 144.9 95.3008C144.9 95.2008 145 95.0008 145.1 95.0008L146.4 94.8008C146.5 94.8008 146.7 94.9008 146.7 95.0008C146.7 95.1008 146.6 95.3008 146.5 95.3008L145.1 95.5008Z"
          fill="url(#paint279_linear_311_2)"
        />
        <path
          d="M144.4 91.7023C144.3 91.7023 144.2 91.6023 144.2 91.5023C144.2 91.4023 144.3 91.2023 144.4 91.2023L145.6 90.9023C145.7 90.9023 145.9 91.0023 145.9 91.1023C145.9 91.2023 145.8 91.4023 145.7 91.4023L144.4 91.7023C144.5 91.7023 144.5 91.7023 144.4 91.7023Z"
          fill="url(#paint280_linear_311_2)"
        />
        <path
          d="M143.4 88.0016C143.3 88.0016 143.2 87.9016 143.2 87.8016C143.2 87.7016 143.2 87.5016 143.4 87.5016L144.6 87.1016C144.7 87.1016 144.9 87.1016 144.9 87.3016C144.9 87.4016 144.9 87.6016 144.7 87.6016L143.4 88.0016C143.5 88.0016 143.5 88.0016 143.4 88.0016Z"
          fill="url(#paint281_linear_311_2)"
        />
        <path
          d="M142.1 84.2992C142 84.2992 141.9 84.1992 141.9 84.0992C141.8 83.9992 141.9 83.7992 142 83.7992L143.2 83.2992C143.3 83.1992 143.5 83.2992 143.5 83.3992C143.6 83.4992 143.5 83.6992 143.4 83.6992L142.1 84.2992C142.2 84.2992 142.2 84.2992 142.1 84.2992Z"
          fill="url(#paint282_linear_311_2)"
        />
        <path
          d="M140.5 80.7992C140.4 80.7992 140.3 80.7992 140.3 80.6992C140.2 80.5992 140.3 80.3992 140.4 80.3992L141.5 79.7992C141.6 79.6992 141.8 79.7992 141.8 79.8992C141.9 79.9992 141.8 80.1992 141.7 80.1992L140.6 80.7992H140.5Z"
          fill="url(#paint283_linear_311_2)"
        />
        <path
          d="M138.6 77.5008C138.5 77.5008 138.4 77.5008 138.4 77.4008C138.3 77.3008 138.4 77.1008 138.5 77.1008L139.6 76.4008C139.7 76.3008 139.9 76.4008 139.9 76.5008C140 76.6008 139.9 76.8008 139.8 76.8008L138.7 77.5008H138.6Z"
          fill="url(#paint284_linear_311_2)"
        />
        <path
          d="M136.4 74.4023C136.3 74.4023 136.3 74.4023 136.2 74.3023C136.1 74.2023 136.1 74.0023 136.2 73.9023L137.2 73.1023C137.3 73.0023 137.5 73.0023 137.6 73.1023C137.7 73.2023 137.7 73.4023 137.6 73.5023L136.6 74.3023C136.5 74.3023 136.4 74.4023 136.4 74.4023Z"
          fill="url(#paint285_linear_311_2)"
        />
        <path
          d="M133.9 71.4008C133.8 71.4008 133.8 71.4008 133.7 71.3008C133.6 71.2008 133.6 71.0008 133.7 70.9008L134.6 70.0008C134.7 69.9008 134.9 69.9008 135 70.0008C135.1 70.1008 135.1 70.3008 135 70.4008L134.1 71.3008C134 71.4008 133.9 71.4008 133.9 71.4008Z"
          fill="url(#paint286_linear_311_2)"
        />
        <path
          d="M131.2 68.7016C131.1 68.7016 131.1 68.7016 131 68.6016C130.9 68.5016 130.9 68.3016 131 68.2016L131.9 67.3016C132 67.2016 132.2 67.2016 132.3 67.3016C132.4 67.4016 132.4 67.6016 132.3 67.7016L131.4 68.6016C131.3 68.6016 131.2 68.7016 131.2 68.7016Z"
          fill="url(#paint287_linear_311_2)"
        />
        <path
          d="M128.2 66.2C128.1 66.2 128.1 66.2 128 66.1C127.9 66 127.9 65.9 128 65.7L128.8 64.7C128.9 64.6 129 64.6 129.2 64.7C129.3 64.8 129.3 64.9 129.2 65.1L128.4 66.1C128.3 66.2 128.3 66.2 128.2 66.2Z"
          fill="url(#paint288_linear_311_2)"
        />
        <path
          d="M125 64H124.9C124.8 63.9 124.7 63.8 124.8 63.7L125.5 62.6C125.6 62.5 125.7 62.5 125.8 62.5C125.9 62.6 126 62.7 125.9 62.8L125.2 63.9C125.2 63.9 125.1 64 125 64Z"
          fill="url(#paint289_linear_311_2)"
        />
        <path
          d="M121.7 62.1H121.6C121.5 62 121.4 61.9 121.5 61.8L122.1 60.7C122.2 60.6 122.3 60.5 122.4 60.6C122.5 60.7 122.6 60.8 122.5 60.9L121.9 62C121.9 62 121.8 62.1 121.7 62.1Z"
          fill="url(#paint290_linear_311_2)"
        />
        <path
          d="M118.2 60.3992C118 60.2992 117.9 60.1992 118 60.0992L118.5 58.8992C118.6 58.7992 118.7 58.6992 118.8 58.7992C118.9 58.8992 119 58.9992 118.9 59.0992L118.4 60.2992C118.4 60.3992 118.3 60.3992 118.2 60.3992Z"
          fill="url(#paint291_linear_311_2)"
        />
        <path
          d="M114.6 59.1023C114.4 59.0023 114.3 58.9023 114.4 58.8023L114.8 57.6023C114.8 57.5023 115 57.4023 115.1 57.4023C115.2 57.4023 115.3 57.6023 115.3 57.7023L114.9 58.9023C114.8 59.0023 114.7 59.1023 114.6 59.1023Z"
          fill="url(#paint292_linear_311_2)"
        />
        <path
          d="M110.9 58.1023C110.8 58.1023 110.8 58.1023 110.9 58.1023C110.7 58.1023 110.6 57.9023 110.7 57.8023L111 56.6023C111 56.5023 111.2 56.4023 111.3 56.4023C111.4 56.4023 111.5 56.6023 111.5 56.7023L111.2 57.9023C111.1 58.0023 111 58.1023 110.9 58.1023Z"
          fill="url(#paint293_linear_311_2)"
        />
        <path
          d="M107.1 57.4016C106.9 57.4016 106.8 57.3016 106.9 57.1016L107.1 55.8016C107.1 55.7016 107.2 55.6016 107.4 55.6016C107.5 55.6016 107.6 55.7016 107.6 55.9016L107.4 57.2016C107.3 57.4016 107.2 57.4016 107.1 57.4016Z"
          fill="url(#paint294_linear_311_2)"
        />
        <path
          d="M103.2 57.1008C103.1 57.1008 102.9 57.0008 102.9 56.8008L103 55.5008C103 55.4008 103.1 55.3008 103.3 55.3008C103.4 55.3008 103.5 55.4008 103.5 55.6008L103.4 56.9008C103.5 57.0008 103.4 57.1008 103.2 57.1008Z"
          fill="url(#paint295_linear_311_2)"
        />
        <text
          x="50%"
          y="51%"
          fontSize="54"
          fill="#5500C0"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: 54 + "px" }}
        >
          {onReset}
        </text>
        <defs>
          <linearGradient
            id="paint0_linear_311_2"
            x1="20.2027"
            y1="77.6978"
            x2="182.4"
            y2="77.6978"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_311_2"
            x1="20.2027"
            y1="124.305"
            x2="182.4"
            y2="124.305"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_311_2"
            x1="20.2026"
            y1="101.001"
            x2="182.4"
            y2="101.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_311_2"
            x1="35.0432"
            y1="101.001"
            x2="167.559"
            y2="101.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_311_2"
            x1="1.30085"
            y1="101"
            x2="201.301"
            y2="101"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_311_2"
            x1="4.0777"
            y1="101.001"
            x2="198.525"
            y2="101.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_311_2"
            x1="100.978"
            y1="2.7113"
            x2="101.624"
            y2="2.7113"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_311_2"
            x1="92.2906"
            y1="3.08364"
            x2="93.1786"
            y2="3.08364"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_311_2"
            x1="83.6696"
            y1="4.2045"
            x2="84.7978"
            y2="4.2045"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_311_2"
            x1="75.1795"
            y1="6.05854"
            x2="76.545"
            y2="6.05854"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_311_2"
            x1="66.8865"
            y1="8.64073"
            x2="68.4824"
            y2="8.64073"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_311_2"
            x1="58.8529"
            y1="11.9184"
            x2="60.6723"
            y2="11.9184"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_311_2"
            x1="51.1396"
            y1="15.88"
            x2="53.1739"
            y2="15.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_311_2"
            x1="43.8058"
            y1="20.4859"
            x2="46.0445"
            y2="20.4859"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_311_2"
            x1="36.9067"
            y1="25.7056"
            x2="39.3378"
            y2="25.7056"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_311_2"
            x1="30.4958"
            y1="31.4992"
            x2="33.1052"
            y2="31.4992"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_311_2"
            x1="24.6211"
            y1="37.8207"
            x2="27.3943"
            y2="37.8207"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_311_2"
            x1="19.3277"
            y1="44.6243"
            x2="22.2479"
            y2="44.6243"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_311_2"
            x1="14.6554"
            y1="51.8537"
            x2="17.706"
            y2="51.8537"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_311_2"
            x1="10.6401"
            y1="59.463"
            x2="13.8027"
            y2="59.463"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_311_2"
            x1="7.31199"
            y1="67.3826"
            x2="10.5679"
            y2="67.3826"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_311_2"
            x1="4.6971"
            y1="75.5596"
            x2="8.0258"
            y2="75.5596"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint22_linear_311_2"
            x1="2.81535"
            y1="83.9333"
            x2="6.19605"
            y2="83.9333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint23_linear_311_2"
            x1="1.68037"
            y1="92.4336"
            x2="5.09277"
            y2="92.4336"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_311_2"
            x1="1.30085"
            y1="100.999"
            x2="4.72385"
            y2="100.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint25_linear_311_2"
            x1="1.68037"
            y1="109.565"
            x2="5.09277"
            y2="109.565"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint26_linear_311_2"
            x1="2.81535"
            y1="118.066"
            x2="6.19605"
            y2="118.066"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint27_linear_311_2"
            x1="4.69717"
            y1="126.44"
            x2="8.02577"
            y2="126.44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint28_linear_311_2"
            x1="7.31199"
            y1="134.615"
            x2="10.5679"
            y2="134.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint29_linear_311_2"
            x1="10.64"
            y1="142.54"
            x2="13.8026"
            y2="142.54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint30_linear_311_2"
            x1="14.6553"
            y1="150.146"
            x2="17.7059"
            y2="150.146"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint31_linear_311_2"
            x1="19.3276"
            y1="157.376"
            x2="22.2478"
            y2="157.376"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint32_linear_311_2"
            x1="24.6211"
            y1="164.179"
            x2="27.3943"
            y2="164.179"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint33_linear_311_2"
            x1="30.4958"
            y1="170.5"
            x2="33.1052"
            y2="170.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint34_linear_311_2"
            x1="36.9067"
            y1="176.292"
            x2="39.3378"
            y2="176.292"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint35_linear_311_2"
            x1="43.8058"
            y1="181.512"
            x2="46.0445"
            y2="181.512"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint36_linear_311_2"
            x1="51.1396"
            y1="186.119"
            x2="53.1739"
            y2="186.119"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint37_linear_311_2"
            x1="58.8528"
            y1="190.081"
            x2="60.6722"
            y2="190.081"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint38_linear_311_2"
            x1="66.8866"
            y1="193.362"
            x2="68.4825"
            y2="193.362"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint39_linear_311_2"
            x1="75.1795"
            y1="195.941"
            x2="76.545"
            y2="195.941"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint40_linear_311_2"
            x1="83.6696"
            y1="197.797"
            x2="84.7978"
            y2="197.797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint41_linear_311_2"
            x1="92.2906"
            y1="198.915"
            x2="93.1786"
            y2="198.915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint42_linear_311_2"
            x1="100.978"
            y1="199.29"
            x2="101.624"
            y2="199.29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint43_linear_311_2"
            x1="109.423"
            y1="198.914"
            x2="110.312"
            y2="198.914"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint44_linear_311_2"
            x1="117.804"
            y1="197.797"
            x2="118.933"
            y2="197.797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint45_linear_311_2"
            x1="126.058"
            y1="195.94"
            x2="127.423"
            y2="195.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint46_linear_311_2"
            x1="134.12"
            y1="193.362"
            x2="135.715"
            y2="193.362"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint47_linear_311_2"
            x1="141.93"
            y1="190.082"
            x2="143.749"
            y2="190.082"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint48_linear_311_2"
            x1="149.428"
            y1="186.121"
            x2="151.463"
            y2="186.121"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint49_linear_311_2"
            x1="156.558"
            y1="181.515"
            x2="158.797"
            y2="181.515"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint50_linear_311_2"
            x1="163.265"
            y1="176.294"
            x2="165.695"
            y2="176.294"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint51_linear_311_2"
            x1="169.498"
            y1="170.5"
            x2="172.106"
            y2="170.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint52_linear_311_2"
            x1="175.209"
            y1="164.177"
            x2="177.981"
            y2="164.177"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint53_linear_311_2"
            x1="180.354"
            y1="157.377"
            x2="183.275"
            y2="157.377"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint54_linear_311_2"
            x1="184.896"
            y1="150.144"
            x2="187.947"
            y2="150.144"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint55_linear_311_2"
            x1="188.8"
            y1="142.54"
            x2="191.963"
            y2="142.54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint56_linear_311_2"
            x1="192.035"
            y1="134.615"
            x2="195.29"
            y2="134.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint57_linear_311_2"
            x1="194.576"
            y1="126.44"
            x2="197.905"
            y2="126.44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint58_linear_311_2"
            x1="196.406"
            y1="118.066"
            x2="199.787"
            y2="118.066"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint59_linear_311_2"
            x1="197.509"
            y1="109.566"
            x2="200.922"
            y2="109.566"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint60_linear_311_2"
            x1="197.879"
            y1="100.999"
            x2="201.301"
            y2="100.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint61_linear_311_2"
            x1="197.509"
            y1="92.4351"
            x2="200.922"
            y2="92.4351"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint62_linear_311_2"
            x1="196.406"
            y1="83.9333"
            x2="199.787"
            y2="83.9333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint63_linear_311_2"
            x1="194.576"
            y1="75.5591"
            x2="197.905"
            y2="75.5591"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint64_linear_311_2"
            x1="192.035"
            y1="67.3828"
            x2="195.29"
            y2="67.3828"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint65_linear_311_2"
            x1="188.8"
            y1="59.4631"
            x2="191.963"
            y2="59.4631"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint66_linear_311_2"
            x1="184.896"
            y1="51.8563"
            x2="187.947"
            y2="51.8563"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint67_linear_311_2"
            x1="180.354"
            y1="44.6246"
            x2="183.275"
            y2="44.6246"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint68_linear_311_2"
            x1="175.209"
            y1="37.8195"
            x2="177.981"
            y2="37.8195"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint69_linear_311_2"
            x1="169.497"
            y1="31.4992"
            x2="172.106"
            y2="31.4992"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint70_linear_311_2"
            x1="163.265"
            y1="25.7071"
            x2="165.695"
            y2="25.7071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint71_linear_311_2"
            x1="156.558"
            y1="20.487"
            x2="158.797"
            y2="20.487"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint72_linear_311_2"
            x1="149.428"
            y1="15.8787"
            x2="151.463"
            y2="15.8787"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint73_linear_311_2"
            x1="141.93"
            y1="11.9185"
            x2="143.749"
            y2="11.9185"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint74_linear_311_2"
            x1="134.12"
            y1="8.64033"
            x2="135.716"
            y2="8.64033"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint75_linear_311_2"
            x1="126.058"
            y1="6.05881"
            x2="127.423"
            y2="6.05881"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint76_linear_311_2"
            x1="117.804"
            y1="4.2045"
            x2="118.933"
            y2="4.2045"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint77_linear_311_2"
            x1="109.424"
            y1="3.08628"
            x2="110.312"
            y2="3.08628"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint78_linear_311_2"
            x1="96.6304"
            y1="2.80546"
            x2="97.3975"
            y2="2.80546"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint79_linear_311_2"
            x1="87.9675"
            y1="3.55278"
            x2="88.9761"
            y2="3.55278"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint80_linear_311_2"
            x1="79.4038"
            y1="5.04168"
            x2="80.6514"
            y2="5.04168"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint81_linear_311_2"
            x1="71.0046"
            y1="7.26153"
            x2="72.4857"
            y2="7.26153"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint82_linear_311_2"
            x1="62.833"
            y1="10.1946"
            x2="64.5422"
            y2="10.1946"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint83_linear_311_2"
            x1="54.9524"
            y1="13.8197"
            x2="56.8808"
            y2="13.8197"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint84_linear_311_2"
            x1="47.4215"
            y1="18.1044"
            x2="49.5596"
            y2="18.1044"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint85_linear_311_2"
            x1="40.2987"
            y1="23.0231"
            x2="42.6349"
            y2="23.0231"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint86_linear_311_2"
            x1="33.6372"
            y1="28.5356"
            x2="36.1593"
            y2="28.5356"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint87_linear_311_2"
            x1="27.4884"
            y1="34.6003"
            x2="30.1816"
            y2="34.6003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint88_linear_311_2"
            x1="21.8993"
            y1="41.1678"
            x2="24.7478"
            y2="41.1678"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint89_linear_311_2"
            x1="16.9112"
            y1="48.191"
            x2="19.8994"
            y2="48.191"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint90_linear_311_2"
            x1="12.5632"
            y1="55.6155"
            x2="15.6724"
            y2="55.6155"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint91_linear_311_2"
            x1="8.88812"
            y1="63.3865"
            x2="12.0999"
            y2="63.3865"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint92_linear_311_2"
            x1="5.91435"
            y1="71.4469"
            x2="9.20845"
            y2="71.4469"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint93_linear_311_2"
            x1="3.6635"
            y1="79.7283"
            x2="7.0208"
            y2="79.7283"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint94_linear_311_2"
            x1="2.15398"
            y1="88.1716"
            x2="5.55278"
            y2="88.1716"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint95_linear_311_2"
            x1="1.39602"
            y1="96.715"
            x2="4.81582"
            y2="96.715"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint96_linear_311_2"
            x1="1.39602"
            y1="105.287"
            x2="4.81582"
            y2="105.287"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint97_linear_311_2"
            x1="2.15407"
            y1="113.832"
            x2="5.55287"
            y2="113.832"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint98_linear_311_2"
            x1="3.66357"
            y1="122.275"
            x2="7.02087"
            y2="122.275"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint99_linear_311_2"
            x1="5.91427"
            y1="130.559"
            x2="9.20857"
            y2="130.559"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint100_linear_311_2"
            x1="8.88817"
            y1="138.614"
            x2="12.1"
            y2="138.614"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint101_linear_311_2"
            x1="12.5632"
            y1="146.385"
            x2="15.6724"
            y2="146.385"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint102_linear_311_2"
            x1="16.9112"
            y1="153.812"
            x2="19.8994"
            y2="153.812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint103_linear_311_2"
            x1="21.8992"
            y1="160.837"
            x2="24.7477"
            y2="160.837"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint104_linear_311_2"
            x1="27.4884"
            y1="167.403"
            x2="30.1816"
            y2="167.403"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint105_linear_311_2"
            x1="33.6372"
            y1="173.466"
            x2="36.1593"
            y2="173.466"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint106_linear_311_2"
            x1="40.2986"
            y1="178.98"
            x2="42.6348"
            y2="178.98"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint107_linear_311_2"
            x1="47.4215"
            y1="183.899"
            x2="49.5596"
            y2="183.899"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint108_linear_311_2"
            x1="54.9524"
            y1="188.186"
            x2="56.8808"
            y2="188.186"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint109_linear_311_2"
            x1="62.8329"
            y1="191.81"
            x2="64.5421"
            y2="191.81"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint110_linear_311_2"
            x1="71.0046"
            y1="194.743"
            x2="72.4857"
            y2="194.743"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint111_linear_311_2"
            x1="79.4038"
            y1="196.96"
            x2="80.6514"
            y2="196.96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint112_linear_311_2"
            x1="87.9675"
            y1="198.449"
            x2="88.9761"
            y2="198.449"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint113_linear_311_2"
            x1="96.6304"
            y1="199.195"
            x2="97.3975"
            y2="199.195"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint114_linear_311_2"
            x1="105.204"
            y1="199.195"
            x2="105.972"
            y2="199.195"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint115_linear_311_2"
            x1="113.626"
            y1="198.449"
            x2="114.635"
            y2="198.449"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint116_linear_311_2"
            x1="121.951"
            y1="196.962"
            x2="123.198"
            y2="196.962"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint117_linear_311_2"
            x1="130.116"
            y1="194.743"
            x2="131.598"
            y2="194.743"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint118_linear_311_2"
            x1="138.06"
            y1="191.81"
            x2="139.769"
            y2="191.81"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint119_linear_311_2"
            x1="145.721"
            y1="188.183"
            x2="147.65"
            y2="188.183"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint120_linear_311_2"
            x1="153.042"
            y1="183.896"
            x2="155.18"
            y2="183.896"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint121_linear_311_2"
            x1="159.967"
            y1="178.979"
            x2="162.304"
            y2="178.979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint122_linear_311_2"
            x1="166.443"
            y1="173.466"
            x2="168.965"
            y2="173.466"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint123_linear_311_2"
            x1="172.421"
            y1="167.403"
            x2="175.114"
            y2="167.403"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint124_linear_311_2"
            x1="177.854"
            y1="160.835"
            x2="180.703"
            y2="160.835"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint125_linear_311_2"
            x1="182.703"
            y1="153.81"
            x2="185.691"
            y2="153.81"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint126_linear_311_2"
            x1="186.929"
            y1="146.388"
            x2="190.04"
            y2="146.388"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint127_linear_311_2"
            x1="190.503"
            y1="138.614"
            x2="193.714"
            y2="138.614"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint128_linear_311_2"
            x1="193.394"
            y1="130.557"
            x2="196.688"
            y2="130.557"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint129_linear_311_2"
            x1="195.582"
            y1="122.277"
            x2="198.939"
            y2="122.277"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint130_linear_311_2"
            x1="197.049"
            y1="113.833"
            x2="200.448"
            y2="113.833"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint131_linear_311_2"
            x1="197.786"
            y1="105.287"
            x2="201.207"
            y2="105.287"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint132_linear_311_2"
            x1="197.786"
            y1="96.7151"
            x2="201.207"
            y2="96.7151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint133_linear_311_2"
            x1="197.049"
            y1="88.1719"
            x2="200.448"
            y2="88.1719"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint134_linear_311_2"
            x1="195.582"
            y1="79.7262"
            x2="198.939"
            y2="79.7262"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint135_linear_311_2"
            x1="193.394"
            y1="71.4445"
            x2="196.688"
            y2="71.4445"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint136_linear_311_2"
            x1="190.503"
            y1="63.3866"
            x2="193.714"
            y2="63.3866"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint137_linear_311_2"
            x1="186.929"
            y1="55.6169"
            x2="190.04"
            y2="55.6169"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint138_linear_311_2"
            x1="182.703"
            y1="48.1895"
            x2="185.691"
            y2="48.1895"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint139_linear_311_2"
            x1="177.854"
            y1="41.1689"
            x2="180.703"
            y2="41.1689"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint140_linear_311_2"
            x1="172.421"
            y1="34.6003"
            x2="175.114"
            y2="34.6003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint141_linear_311_2"
            x1="166.443"
            y1="28.5356"
            x2="168.965"
            y2="28.5356"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint142_linear_311_2"
            x1="159.967"
            y1="23.0246"
            x2="162.304"
            y2="23.0246"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint143_linear_311_2"
            x1="153.042"
            y1="18.1066"
            x2="155.18"
            y2="18.1066"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint144_linear_311_2"
            x1="145.721"
            y1="13.8185"
            x2="147.65"
            y2="13.8185"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint145_linear_311_2"
            x1="138.06"
            y1="10.1948"
            x2="139.769"
            y2="10.1948"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint146_linear_311_2"
            x1="130.116"
            y1="7.26309"
            x2="131.598"
            y2="7.26309"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint147_linear_311_2"
            x1="121.951"
            y1="5.04381"
            x2="123.198"
            y2="5.04381"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint148_linear_311_2"
            x1="113.626"
            y1="3.55278"
            x2="114.635"
            y2="3.55278"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint149_linear_311_2"
            x1="105.204"
            y1="2.80626"
            x2="105.972"
            y2="2.80626"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint150_linear_311_2"
            x1="55.6021"
            y1="101.001"
            x2="147"
            y2="101.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint151_linear_311_2"
            x1="56.8683"
            y1="101.001"
            x2="145.734"
            y2="101.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint152_linear_311_2"
            x1="101.051"
            y1="56.1832"
            x2="101.551"
            y2="56.1832"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint153_linear_311_2"
            x1="97.0898"
            y1="56.3526"
            x2="97.7005"
            y2="56.3526"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint154_linear_311_2"
            x1="93.1589"
            y1="56.8644"
            x2="93.8788"
            y2="56.8644"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint155_linear_311_2"
            x1="89.2876"
            y1="57.71"
            x2="90.1161"
            y2="57.71"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint156_linear_311_2"
            x1="85.5067"
            y1="58.8866"
            x2="86.4399"
            y2="58.8866"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint157_linear_311_2"
            x1="81.8433"
            y1="60.3809"
            x2="82.8788"
            y2="60.3809"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint158_linear_311_2"
            x1="78.3267"
            y1="62.1865"
            x2="79.4601"
            y2="62.1865"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint159_linear_311_2"
            x1="74.9827"
            y1="64.2872"
            x2="76.2089"
            y2="64.2872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint160_linear_311_2"
            x1="71.8372"
            y1="66.6679"
            x2="73.1508"
            y2="66.6679"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint161_linear_311_2"
            x1="68.914"
            y1="69.3087"
            x2="70.3093"
            y2="69.3087"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint162_linear_311_2"
            x1="66.2349"
            y1="72.1938"
            x2="67.7054"
            y2="72.1938"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint163_linear_311_2"
            x1="63.8212"
            y1="75.2953"
            x2="65.3586"
            y2="75.2953"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint164_linear_311_2"
            x1="61.6908"
            y1="78.59"
            x2="63.2878"
            y2="78.59"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint165_linear_311_2"
            x1="59.8603"
            y1="82.0592"
            x2="61.5084"
            y2="82.0592"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint166_linear_311_2"
            x1="58.3431"
            y1="85.6712"
            x2="60.033"
            y2="85.6712"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint167_linear_311_2"
            x1="57.1504"
            y1="89.4011"
            x2="58.8739"
            y2="89.4011"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint168_linear_311_2"
            x1="56.2924"
            y1="93.2156"
            x2="58.0396"
            y2="93.2156"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint169_linear_311_2"
            x1="55.775"
            y1="97.095"
            x2="57.5366"
            y2="97.095"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint170_linear_311_2"
            x1="55.6021"
            y1="100.999"
            x2="57.3685"
            y2="100.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint171_linear_311_2"
            x1="55.775"
            y1="104.903"
            x2="57.5366"
            y2="104.903"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint172_linear_311_2"
            x1="56.2924"
            y1="108.78"
            x2="58.0396"
            y2="108.78"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint173_linear_311_2"
            x1="57.1504"
            y1="112.599"
            x2="58.8739"
            y2="112.599"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint174_linear_311_2"
            x1="58.343"
            y1="116.326"
            x2="60.0329"
            y2="116.326"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint175_linear_311_2"
            x1="59.8603"
            y1="119.94"
            x2="61.5084"
            y2="119.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint176_linear_311_2"
            x1="61.6908"
            y1="123.406"
            x2="63.2878"
            y2="123.406"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint177_linear_311_2"
            x1="63.8212"
            y1="126.704"
            x2="65.3586"
            y2="126.704"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint178_linear_311_2"
            x1="66.2349"
            y1="129.807"
            x2="67.7054"
            y2="129.807"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint179_linear_311_2"
            x1="68.914"
            y1="132.69"
            x2="70.3093"
            y2="132.69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint180_linear_311_2"
            x1="71.8372"
            y1="135.329"
            x2="73.1508"
            y2="135.329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint181_linear_311_2"
            x1="74.9826"
            y1="137.709"
            x2="76.2091"
            y2="137.709"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint182_linear_311_2"
            x1="78.3267"
            y1="139.812"
            x2="79.4601"
            y2="139.812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint183_linear_311_2"
            x1="81.8433"
            y1="141.617"
            x2="82.8788"
            y2="141.617"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint184_linear_311_2"
            x1="85.5067"
            y1="143.114"
            x2="86.4399"
            y2="143.114"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint185_linear_311_2"
            x1="89.2876"
            y1="144.289"
            x2="90.1161"
            y2="144.289"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint186_linear_311_2"
            x1="93.1589"
            y1="145.135"
            x2="93.8788"
            y2="145.135"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint187_linear_311_2"
            x1="97.0898"
            y1="145.644"
            x2="97.7005"
            y2="145.644"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint188_linear_311_2"
            x1="101.051"
            y1="145.816"
            x2="101.551"
            y2="145.816"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint189_linear_311_2"
            x1="104.902"
            y1="145.644"
            x2="105.513"
            y2="145.644"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint190_linear_311_2"
            x1="108.723"
            y1="145.135"
            x2="109.443"
            y2="145.135"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint191_linear_311_2"
            x1="112.487"
            y1="144.289"
            x2="113.314"
            y2="144.289"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint192_linear_311_2"
            x1="116.162"
            y1="143.114"
            x2="117.096"
            y2="143.114"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint193_linear_311_2"
            x1="119.723"
            y1="141.617"
            x2="120.759"
            y2="141.617"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint194_linear_311_2"
            x1="123.142"
            y1="139.812"
            x2="124.275"
            y2="139.812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint195_linear_311_2"
            x1="126.393"
            y1="137.712"
            x2="127.62"
            y2="137.712"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint196_linear_311_2"
            x1="129.452"
            y1="135.329"
            x2="130.765"
            y2="135.329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint197_linear_311_2"
            x1="132.293"
            y1="132.69"
            x2="133.688"
            y2="132.69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint198_linear_311_2"
            x1="134.897"
            y1="129.807"
            x2="136.367"
            y2="129.807"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint199_linear_311_2"
            x1="137.243"
            y1="126.705"
            x2="138.782"
            y2="126.705"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint200_linear_311_2"
            x1="139.315"
            y1="123.406"
            x2="140.911"
            y2="123.406"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint201_linear_311_2"
            x1="141.094"
            y1="119.941"
            x2="142.742"
            y2="119.941"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint202_linear_311_2"
            x1="142.569"
            y1="116.326"
            x2="144.26"
            y2="116.326"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint203_linear_311_2"
            x1="143.729"
            y1="112.599"
            x2="145.451"
            y2="112.599"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint204_linear_311_2"
            x1="144.562"
            y1="108.78"
            x2="146.31"
            y2="108.78"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint205_linear_311_2"
            x1="145.066"
            y1="104.904"
            x2="146.827"
            y2="104.904"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint206_linear_311_2"
            x1="145.234"
            y1="100.999"
            x2="147"
            y2="100.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint207_linear_311_2"
            x1="145.066"
            y1="97.0951"
            x2="146.827"
            y2="97.0951"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint208_linear_311_2"
            x1="144.562"
            y1="93.2154"
            x2="146.31"
            y2="93.2154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint209_linear_311_2"
            x1="143.729"
            y1="89.4009"
            x2="145.451"
            y2="89.4009"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint210_linear_311_2"
            x1="142.569"
            y1="85.6713"
            x2="144.26"
            y2="85.6713"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint211_linear_311_2"
            x1="141.094"
            y1="82.0571"
            x2="142.742"
            y2="82.0571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint212_linear_311_2"
            x1="139.315"
            y1="78.5897"
            x2="140.911"
            y2="78.5897"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint213_linear_311_2"
            x1="137.243"
            y1="75.2948"
            x2="138.782"
            y2="75.2948"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint214_linear_311_2"
            x1="134.897"
            y1="72.1934"
            x2="136.367"
            y2="72.1934"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint215_linear_311_2"
            x1="132.293"
            y1="69.3087"
            x2="133.688"
            y2="69.3087"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint216_linear_311_2"
            x1="129.452"
            y1="66.6683"
            x2="130.765"
            y2="66.6683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint217_linear_311_2"
            x1="126.393"
            y1="64.2879"
            x2="127.62"
            y2="64.2879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint218_linear_311_2"
            x1="123.142"
            y1="62.1864"
            x2="124.275"
            y2="62.1864"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint219_linear_311_2"
            x1="119.723"
            y1="60.3806"
            x2="120.759"
            y2="60.3806"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint220_linear_311_2"
            x1="116.162"
            y1="58.8869"
            x2="117.096"
            y2="58.8869"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint221_linear_311_2"
            x1="112.487"
            y1="57.7101"
            x2="113.314"
            y2="57.7101"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint222_linear_311_2"
            x1="108.723"
            y1="56.8641"
            x2="109.443"
            y2="56.8641"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint223_linear_311_2"
            x1="104.902"
            y1="56.3533"
            x2="105.513"
            y2="56.3533"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint224_linear_311_2"
            x1="99.0685"
            y1="56.2272"
            x2="99.6244"
            y2="56.2272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint225_linear_311_2"
            x1="95.1185"
            y1="56.5662"
            x2="95.7842"
            y2="56.5662"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint226_linear_311_2"
            x1="91.2139"
            y1="57.2485"
            x2="91.9884"
            y2="57.2485"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint227_linear_311_2"
            x1="87.3841"
            y1="58.2609"
            x2="88.2653"
            y2="58.2609"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint228_linear_311_2"
            x1="83.6587"
            y1="59.5971"
            x2="84.6431"
            y2="59.5971"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint229_linear_311_2"
            x1="80.0652"
            y1="61.2479"
            x2="81.1498"
            y2="61.2479"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint230_linear_311_2"
            x1="76.6313"
            y1="63.2054"
            x2="77.8119"
            y2="63.2054"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint231_linear_311_2"
            x1="73.3834"
            y1="65.4451"
            x2="74.6543"
            y2="65.4451"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint232_linear_311_2"
            x1="70.3465"
            y1="67.9598"
            x2="71.7016"
            y2="67.9598"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint233_linear_311_2"
            x1="67.5429"
            y1="70.7239"
            x2="68.9758"
            y2="70.7239"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint234_linear_311_2"
            x1="64.9941"
            y1="73.7199"
            x2="66.4986"
            y2="73.7199"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint235_linear_311_2"
            x1="62.7195"
            y1="76.9229"
            x2="64.2879"
            y2="76.9229"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint236_linear_311_2"
            x1="60.7372"
            y1="80.3058"
            x2="62.3607"
            y2="80.3058"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint237_linear_311_2"
            x1="59.0617"
            y1="83.8505"
            x2="60.7314"
            y2="83.8505"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint238_linear_311_2"
            x1="57.7056"
            y1="87.5251"
            x2="59.4134"
            y2="87.5251"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint239_linear_311_2"
            x1="56.6791"
            y1="91.3026"
            x2="58.4155"
            y2="91.3026"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint240_linear_311_2"
            x1="55.9907"
            y1="95.1509"
            x2="57.7463"
            y2="95.1509"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint241_linear_311_2"
            x1="55.6453"
            y1="99.0437"
            x2="57.4107"
            y2="99.0437"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint242_linear_311_2"
            x1="55.6453"
            y1="102.956"
            x2="57.4107"
            y2="102.956"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint243_linear_311_2"
            x1="55.9907"
            y1="106.849"
            x2="57.7463"
            y2="106.849"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint244_linear_311_2"
            x1="56.6791"
            y1="110.701"
            x2="58.4155"
            y2="110.701"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint245_linear_311_2"
            x1="57.7055"
            y1="114.477"
            x2="59.4133"
            y2="114.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint246_linear_311_2"
            x1="59.0617"
            y1="118.15"
            x2="60.7314"
            y2="118.15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint247_linear_311_2"
            x1="60.7372"
            y1="121.695"
            x2="62.3607"
            y2="121.695"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint248_linear_311_2"
            x1="62.7195"
            y1="125.08"
            x2="64.2879"
            y2="125.08"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint249_linear_311_2"
            x1="64.9941"
            y1="128.284"
            x2="66.4986"
            y2="128.284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint250_linear_311_2"
            x1="67.5427"
            y1="131.279"
            x2="68.9761"
            y2="131.279"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint251_linear_311_2"
            x1="70.3465"
            y1="134.041"
            x2="71.7016"
            y2="134.041"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint252_linear_311_2"
            x1="73.3834"
            y1="136.556"
            x2="74.6543"
            y2="136.556"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint253_linear_311_2"
            x1="76.6313"
            y1="138.797"
            x2="77.8119"
            y2="138.797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint254_linear_311_2"
            x1="80.0652"
            y1="140.752"
            x2="81.1498"
            y2="140.752"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint255_linear_311_2"
            x1="83.6587"
            y1="142.404"
            x2="84.6431"
            y2="142.404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint256_linear_311_2"
            x1="87.384"
            y1="143.744"
            x2="88.2653"
            y2="143.744"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint257_linear_311_2"
            x1="91.2139"
            y1="144.756"
            x2="91.9884"
            y2="144.756"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint258_linear_311_2"
            x1="95.1185"
            y1="145.433"
            x2="95.7842"
            y2="145.433"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint259_linear_311_2"
            x1="99.0685"
            y1="145.775"
            x2="99.6244"
            y2="145.775"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint260_linear_311_2"
            x1="102.978"
            y1="145.775"
            x2="103.534"
            y2="145.775"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint261_linear_311_2"
            x1="106.818"
            y1="145.433"
            x2="107.483"
            y2="145.433"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint262_linear_311_2"
            x1="110.613"
            y1="144.756"
            x2="111.389"
            y2="144.756"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint263_linear_311_2"
            x1="114.337"
            y1="143.744"
            x2="115.219"
            y2="143.744"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint264_linear_311_2"
            x1="117.959"
            y1="142.406"
            x2="118.944"
            y2="142.406"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint265_linear_311_2"
            x1="121.453"
            y1="140.752"
            x2="122.537"
            y2="140.752"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint266_linear_311_2"
            x1="124.79"
            y1="138.797"
            x2="125.971"
            y2="138.797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint267_linear_311_2"
            x1="127.948"
            y1="136.556"
            x2="129.219"
            y2="136.556"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint268_linear_311_2"
            x1="130.901"
            y1="134.041"
            x2="132.256"
            y2="134.041"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint269_linear_311_2"
            x1="133.627"
            y1="131.279"
            x2="135.06"
            y2="131.279"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint270_linear_311_2"
            x1="136.103"
            y1="128.284"
            x2="137.608"
            y2="128.284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint271_linear_311_2"
            x1="138.314"
            y1="125.081"
            x2="139.883"
            y2="125.081"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint272_linear_311_2"
            x1="140.242"
            y1="121.695"
            x2="141.865"
            y2="121.695"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint273_linear_311_2"
            x1="141.871"
            y1="118.151"
            x2="143.541"
            y2="118.151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint274_linear_311_2"
            x1="143.188"
            y1="114.477"
            x2="144.897"
            y2="114.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint275_linear_311_2"
            x1="144.186"
            y1="110.7"
            x2="145.923"
            y2="110.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint276_linear_311_2"
            x1="144.856"
            y1="106.849"
            x2="146.611"
            y2="106.849"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint277_linear_311_2"
            x1="145.191"
            y1="102.956"
            x2="146.957"
            y2="102.956"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint278_linear_311_2"
            x1="145.191"
            y1="99.0444"
            x2="146.957"
            y2="99.0444"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint279_linear_311_2"
            x1="144.856"
            y1="95.1509"
            x2="146.611"
            y2="95.1509"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint280_linear_311_2"
            x1="144.186"
            y1="91.3023"
            x2="145.923"
            y2="91.3023"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint281_linear_311_2"
            x1="143.188"
            y1="87.5253"
            x2="144.897"
            y2="87.5253"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint282_linear_311_2"
            x1="141.87"
            y1="83.8489"
            x2="143.541"
            y2="83.8489"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint283_linear_311_2"
            x1="140.242"
            y1="80.3056"
            x2="141.865"
            y2="80.3056"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint284_linear_311_2"
            x1="138.314"
            y1="76.9212"
            x2="139.883"
            y2="76.9212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint285_linear_311_2"
            x1="136.103"
            y1="73.7203"
            x2="137.608"
            y2="73.7203"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint286_linear_311_2"
            x1="133.627"
            y1="70.7239"
            x2="135.06"
            y2="70.7239"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint287_linear_311_2"
            x1="130.901"
            y1="67.96"
            x2="132.256"
            y2="67.96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint288_linear_311_2"
            x1="127.948"
            y1="65.4449"
            x2="129.219"
            y2="65.4449"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint289_linear_311_2"
            x1="124.79"
            y1="63.2026"
            x2="125.971"
            y2="63.2026"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint290_linear_311_2"
            x1="121.453"
            y1="61.2482"
            x2="122.537"
            y2="61.2482"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint291_linear_311_2"
            x1="117.959"
            y1="59.5944"
            x2="118.944"
            y2="59.5944"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint292_linear_311_2"
            x1="114.337"
            y1="58.2607"
            x2="115.219"
            y2="58.2607"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint293_linear_311_2"
            x1="110.613"
            y1="57.2489"
            x2="111.389"
            y2="57.2489"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint294_linear_311_2"
            x1="106.818"
            y1="56.5685"
            x2="107.483"
            y2="56.5685"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
          <linearGradient
            id="paint295_linear_311_2"
            x1="102.978"
            y1="56.2276"
            x2="103.534"
            y2="56.2276"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#36B0FF" />
            <stop offset="1" stop-color="#FF68FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimateElement;
