// import AnimatedHiddenText from "./components/AnimatedHiddenText";
// import bg from "./assets/bg-new.jpg";
// import logo from "./assets/logo-light.png";
// import avatar from "./assets/wp-logo.png";
// import { Zoom } from "react-awesome-reveal";
// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import {
//   FaArrowRightLong,
//   FaFacebook,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa6";

// import { PiMicrosoftOutlookLogo } from "react-icons/pi";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

// export default function App() {
//   const [showLogo, setShowLogo] = useState(false);
//   const schemaMarkup = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "CryptixLab",
//     url: "https://www.cryptixlab.com",
//     sameAs: [
//       "https://www.facebook.com/cryptixlab",
//       "https://www.instagram.com/cryptixlab",
//       "https://www.linkedin.com/company/cryptixlab",
//     ],
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setShowLogo(true);
//     }, 6500);
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//       className="h-screen"
//     >
//       {/* Helmet */}
//       <Helmet>
//         <script type="application/ld+json">
//           {JSON.stringify(schemaMarkup)}
//         </script>
//       </Helmet>
//       {/* Helmet */}
//       <div className="bg-[#10101029] md:p-10 rounded-2xl backdrop-blur-md min-h-full flex flex-col justify-center text-center">
//         <AnimatedHiddenText />

//         {showLogo && (
//           <div>
//             <Zoom>
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="w-20 md:w-36 mx-auto mb-5 animate-pulse"
//               />
//               <p className="md:text-xl">Welcome to</p>
//               <h1 className="md:text-[65px] text-3xl text-[#AA1F29] animate-pulse">
//                 Cryptix<span className="text-[#fff]">Lab</span>
//               </h1>

//               <div>
//                 <p className="md:text-xl font-semibold text-[#787878] md:w-1/2 md:mx-auto px-10 my-4">
//                   Oh! Please wait — our developer is still perfecting his
//                   coffee-to-code ratio. Meanwhile, you can stalk us on
//                   <span className="text-[#CF2031] font-bold"> Facebook</span>.
//                 </p>

//                 <a
//                   href="https://www.facebook.com/cryptixlab"
//                   target="_blank"
//                   className="inline-block bg-[#AA1F29] hover:bg-[#9b1d25] hover:duration-500 hover:scale-105 rounded-full px-4 md:px-8 py-2 md:py-3 md:text-xl my-4"
//                   rel="noopener noreferrer"
//                 >
//                   <span className="flex items-center gap-3">
//                     Stay Connected <FaArrowRightLong />
//                   </span>
//                 </a>

//                 <div className="flex gap-3 justify-center my-4">
//                   <a
//                     href="https://www.linkedin.com/company/cryptixlab/"
//                     target="_blank"
//                     className="bg-[#3333336e] rounded-full text-[#fff] p-4 border border-[#dedede2e]"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedinIn />
//                   </a>

//                   <a
//                     href="https://www.instagram.com/cryptixlab/"
//                     target="_blank"
//                     className="bg-[#3333336e] rounded-full text-[#fff] p-4 border border-[#dedede2e]"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagram />
//                   </a>
//                   <a
//                     href="mailto:cryptixlab@outlook.com"
//                     target="_blank"
//                     className="bg-[#3333336e] rounded-full text-[#fff] p-4 border border-[#dedede2e]"
//                     rel="noopener noreferrer"
//                   >
//                     <PiMicrosoftOutlookLogo />
//                   </a>
//                 </div>
//               </div>
//             </Zoom>
//           </div>
//         )}
//       </div>

//       {/* Messnger */}
//       <div>
//         <FloatingWhatsApp
//           phoneNumber={import.meta.env.VITE_PHONE}
//           accountName="CryptixLab"
//           avatar={avatar}
//           chatMessage="Hey, how can I help you today?"
//           placeholder="Write your queries..."
//           darkMode={true}
//           // notification="true"
//           // notificationSound="true"
//           // notificationDelay={1500}
//         />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Zoom } from "react-awesome-reveal";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FaArrowRightLong, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

// Component-specific imports
import AnimatedHiddenText from "./components/AnimatedHiddenText";
import bg from "./assets/bg-new.jpg";
import logo from "./assets/logo-light.png";
import avatar from "./assets/wp-logo.png";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CryptixLab",
  url: "https://www.cryptixlab.com",
  sameAs: [
    "https://www.facebook.com/cryptixlab",
    "https://www.instagram.com/cryptixlab",
    "https://www.linkedin.com/company/cryptixlab",
  ],
};

export default function App() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 6500); // Cleanup the timer to prevent memory leaks

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-screen"
      >
        <div className="bg-[#10101029] md:p-10 rounded-2xl backdrop-blur-md min-h-full flex flex-col justify-center text-center">
          <AnimatedHiddenText />
          {showLogo && (
            <div>
              <Zoom>
                <img
                  src={logo}
                  alt="CryptixLab Logo"
                  className="w-20 md:w-36 mx-auto mb-5 animate-pulse"
                />
                <p className="md:text-xl">Welcome to</p>

                <h1 className="md:text-[65px] text-3xl text-[#AA1F29] animate-pulse">
                  Cryptix
                  <span className="text-[#fff]">Lab</span>
                </h1>

                <div>
                  <p className="md:text-xl font-semibold text-[#787878] md:w-1/2 md:mx-auto px-10 my-4">
                    Oh! Please wait — our developer is still perfecting his
                    coffee-to-code ratio. Meanwhile, you can stalk us on{" "}
                    <span className="text-[#CF2031] font-bold">Facebook</span>.
                  </p>

                  <a
                    href="https://www.facebook.com/cryptixlab"
                    target="_blank"
                    className="inline-block bg-[#AA1F29] hover:bg-[#9b1d25] hover:duration-500 hover:scale-105 rounded-full px-4 md:px-8 py-2 md:py-3 md:text-xl my-4"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-3">
                      Stay Connected <FaArrowRightLong />
                    </span>
                  </a>

                  <div className="flex gap-3 justify-center my-4">
                    <a
                      href="https://www.linkedin.com/company/cryptixlab/"
                      target="_blank"
                      className="bg-[#3333336e] rounded-full text-[#fff] p-4 border border-[#dedede2e]"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href="https://www.instagram.com/cryptixlab/"
                      target="_blank"
                      className="bg-[#3333336e] rounded-full text-[#fff] p-4 border border-[#dedede2e]"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="mailto:cryptixlab@outlook.com"
                      target="_blank"
                      className="bg-[#3333336e] rounded-full text-[#fff] p-4 border border-[#dedede2e]"
                      rel="noopener noreferrer"
                    >
                      <PiMicrosoftOutlookLogo />
                    </a>
                  </div>
                </div>
              </Zoom>
            </div>
          )}
        </div>
      </div>

      <FloatingWhatsApp
        phoneNumber={import.meta.env.VITE_PHONE}
        accountName="CryptixLab"
        avatar={avatar}
        chatMessage="Hey, how can I help you today?"
        placeholder="Write your queries..."
        darkMode
      />
    </>
  );
}
