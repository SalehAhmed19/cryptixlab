import AnimatedHiddenText from "./components/AnimatedHiddenText";
import bg from "./assets/bg.png";
import logo from "./assets/logo-light.png";
import { Fade, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { FaArrowRightLong, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { PiMicrosoftOutlookLogo } from "react-icons/pi";

export default function App() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true);
    }, 5500);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen p-5 md:p-20"
    >
      <div className="bg-[#10101029] md:p-10 rounded-2xl backdrop-blur-md min-h-full flex flex-col justify-center">
        <AnimatedHiddenText />
        {showLogo && (
          <div className="text-center flex flex-col gap-10">
            <Zoom>
              <img
                src={logo}
                alt="logo"
                className="w-26 md:w-46 mx-auto animate-pulse"
              />
            </Zoom>
            <Fade delay={1500}>
              <p className="md:text-xl font-semibold text-[#787878] md:w-1/2 md:mx-auto px-10">
                Oh! Please wait — our developer is still perfecting his
                coffee-to-code ratio. Meanwhile, you can stalk us on
                <span className="text-[#CF2031] font-bold"> Facebook</span>.
              </p>
              <a href="https://www.facebook.com/cryptixlab" target="_blank">
                <button className="bg-[#AA1F29] hover:bg-[#9b1d25] hover:duration-500 hover:scale-105 rounded-full px-4 md:px-8 py-2 md:py-3 md:text-xl font-semibold cursor-pointer flex gap-2 items-center justify-center mx-auto">
                  Stay Connected <FaArrowRightLong />
                </button>
              </a>

              <div className="flex gap-3 justify-center">
                <a
                  href="https://www.linkedin.com/company/cryptixlab/"
                  target="_blank"
                  className="bg-white rounded-full text-[#AA1F29] p-2"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/cryptixlab/"
                  target="_blank"
                  className="bg-white rounded-full text-[#AA1F29] p-2"
                >
                  <FaInstagram />
                </a>
                <a
                  href="mailto:cryptixlab@outlook.com"
                  target="_blank"
                  className="bg-white rounded-full text-[#AA1F29] p-2"
                >
                  <PiMicrosoftOutlookLogo />
                </a>
              </div>
            </Fade>
          </div>
        )}
      </div>

      {/* Messnger */}
      <FacebookMessenger />
    </div>
  );
}
