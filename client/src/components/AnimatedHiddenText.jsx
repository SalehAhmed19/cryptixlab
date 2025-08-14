import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function AnimatedHiddenText() {
  const [complete, setComplete] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setComplete(true);
    }, 5500);

    setTimeout(() => {
      setDelay(true);
    }, 1500);

    setTimeout(() => {
      setHidden(true);
    }, 5000);
  }, []);

  return (
    <div>
      <div className={`${complete && "hidden"}`}>
        <div
          className={`${
            hidden && "transition-opacity duration-500 ease-in-out opacity-0"
          }`}
        >
          <p className="text-2xl text-center mb-6 text-[#787878]">
            <Typewriter
              words={["3.. 2.. 1.. 0"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          {delay && (
            <h1 className="text-2xl md:text-4xl text-center">
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
