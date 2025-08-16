// import React from "react";
// import styled from "styled-components";

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <div className="loading">
//         <div className="loading-wide">
//           <div className="l1 color" />
//           <div className="l2 color" />
//           <div className="e1 color animation-effect-light" />
//           <div className="e2 color animation-effect-light-d" />
//           <div className="e3 animation-effect-rot">X</div>
//           <div className="e4 color animation-effect-light" />
//           <div className="e5 color animation-effect-light-d" />
//           <div className="e6 animation-effect-scale">*</div>
//           <div className="e7 color" />
//           <div className="e8 color" />
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .loading {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .loading-wide {
//     width: 150px;
//     height: 150px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//   }
//   .color {
//     background-color: #aa1f29;
//   }

//   .l1 {
//     width: 15px;
//     height: 65px;
//     position: absolute;
//     animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
//   }

//   .l2 {
//     width: 15px;
//     height: 60px;
//     position: absolute;
//     transform: rotate(90deg);
//     animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
//   }

//   @keyframes move-h {
//     0% {
//       top: 0;
//       opacity: 0;
//     }
//     25% {
//       opacity: 1;
//     }
//     50% {
//       top: 30%;
//       opacity: 1;
//     }
//     75% {
//       opacity: 1;
//     }
//     100% {
//       top: 100%;
//       opacity: 0;
//     }
//   }
//   @keyframes move-v {
//     0% {
//       left: 0;
//       opacity: 0;
//     }
//     25% {
//       opacity: 1;
//     }
//     50% {
//       left: 45%;
//       opacity: 1;
//     }
//     75% {
//       opacity: 1;
//     }
//     100% {
//       left: 100%;
//       opacity: 0;
//     }
//   }

//   .animation-effect-light {
//     animation: effect 0.2s 0.1s infinite linear;
//   }
//   .animation-effect-light-d {
//     animation: effect 0.3s 0.2s infinite linear;
//   }
//   .animation-effect-rot {
//     animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
//   }
//   .animation-effect-scale {
//     animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
//   }

//   @keyframes effect {
//     0% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }
//   @keyframes rot {
//     0% {
//       transform: rotate(0deg);
//     }
//     50% {
//       transform: rotate(180deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
//   @keyframes scale {
//     0% {
//       scale: 1;
//     }
//     50% {
//       scale: 1.9;
//     }
//     100% {
//       scale: 1;
//     }
//   }
//   .e1 {
//     width: 1px;
//     height: 40px;
//     opacity: 0.3;
//     position: absolute;
//     top: 0;
//     left: 8%;
//   }
//   .e2 {
//     width: 60px;
//     height: 1px;
//     opacity: 0.8;
//     position: absolute;
//     top: 8%;
//     left: 0;
//   }
//   .e3 {
//     position: absolute;
//     top: 10%;
//     left: 12%;
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//     font-weight: 900;
//     font-size: 18px;
//     color: #aa1f29;
//   }
//   .e4 {
//     width: 1px;
//     height: 40px;
//     opacity: 0.3;
//     position: absolute;
//     top: 90%;
//     right: 10%;
//   }
//   .e5 {
//     width: 40px;
//     height: 1px;
//     opacity: 0.3;
//     position: absolute;
//     top: 100%;
//     right: 0;
//   }
//   .e6 {
//     position: absolute;
//     top: 100%;
//     right: 0;
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//     font-size: 32px;
//     color: #aa1f29;
//   }
//   .e7 {
//     width: 1px;
//     height: 20px;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     transform: rotate(45deg);
//     animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
//   }
//   @keyframes height {
//     0% {
//       bottom: 0%;
//       left: 0%;
//       height: 0px;
//     }
//     25% {
//       height: 90px;
//     }
//     50% {
//       bottom: 100%;
//       left: 100%;
//       height: 90px;
//     }
//     75% {
//       height: 0px;
//     }
//     100% {
//       bottom: 0%;
//       left: 0%;
//       height: 0px;
//     }
//   }
//   .e8 {
//     width: 20px;
//     height: 1px;
//     position: absolute;
//     bottom: 50%;
//     left: 0;
//     animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
//   }
//   @keyframes width {
//     0% {
//       left: 0%;
//       width: 0px;
//     }
//     50% {
//       left: 100%;
//       width: 90px;
//     }
//     100% {
//       left: 0%;
//       width: 0px;
//     }
//   }
// `;

// export default Loader;
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinnerContainer">
        <div className="spinner" />
        <div className="loader">
          {/* <p>loading</p> */}
          <div className="words">
            <span className="word">Hey!</span>
            <span className="word">Get ready</span>
            <span className="word">We're almost there</span>
            <span className="word">Something amazing is on the way.</span>
            {/* <span className="word">hashtags</span>
            <span className="word">posts</span> */}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .spinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .spinner {
    width: 56px;
    height: 56px;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-right-color: #aa1f29;
    animation: tri-spinner 1s infinite linear;
  }

  .spinner::before,
  .spinner::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: tri-spinner 2s infinite;
  }

  .spinner::after {
    margin: 8px;
    animation-duration: 3s;
  }

  @keyframes tri-spinner {
    100% {
      transform: rotate(1turn);
    }
  }

  .loader {
    color: #aa1f29;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #aa1f29;
    animation: cycle-words 5s infinite;
  }

  @keyframes cycle-words {
    10% {
      -webkit-transform: translateY(-105%);
      transform: translateY(-105%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-205%);
      transform: translateY(-205%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-305%);
      transform: translateY(-305%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-405%);
      transform: translateY(-405%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }
`;

export default Loader;
