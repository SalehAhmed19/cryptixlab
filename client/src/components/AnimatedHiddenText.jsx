import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Loader from "./Loader";

export default function AnimatedHiddenText() {
  const [hidden, setHidden] = useState(false);
  const [delay, setDelay] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 4000);

    setTimeout(() => {
      setLoading(false);
    }, 3500);

    setTimeout(() => {
      setHidden(true);
    }, 6000);
  }, []);

  return (
    <div>
      <div>
        <div
          className={`${
            hidden && "transition-opacity duration-500 ease-in-out opacity-0"
          }`}
        >
          {loading && (
            <div className="flex justify-center items-center h-screen">
              <Loader />
            </div>
          )}
          {/*  */}
          {delay && (
            <h1 className="text-2xl md:text-4xl text-center text-[#AA1F29]">
              <Typewriter
                words={["CryptixLab is Launching..."]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
