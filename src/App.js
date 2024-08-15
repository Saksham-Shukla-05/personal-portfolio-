import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import profileImg from "./Images/profile-img.jpg";
import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";

function App() {
  const [isDark, setIsDark] = useState(false);
  function handleIsDark() {
    setIsDark(!isDark);
  }
  return (
    <div className="w-full  h-screen">
      <NavBar isDark={isDark} handleIsDark={handleIsDark} />
      <HeroSection isDark={isDark} handleIsDark={handleIsDark} />
      {/* <HeroSection /> */}
    </div>
  );
}

function NavBar({ isDark, handleIsDark }) {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenuOpen() {
    setOpenMenu(!openMenu);
  }
  useEffect(function () {
    function handleResize() {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav
        className={
          isDark
            ? "tracking-widest bg-black text-white px-4 py-5 md:px-8 md:py-5 flex justify-between items-center w-full h-auto"
            : "tracking-widest px-4 py-5 md:px-8 md:py-5 flex justify-between items-center w-full h-auto"
        }
      >
        <div className="cursor-pointer transition-colors duration-300 hover:text-purple-600 flex gap-4 justify-between items-center ">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-[50%] overflow-hidden ">
            <img
              className="cursor-pointer w-full h-full"
              src={profileImg}
              alt=""
            />
          </div>
          <div className="">
            <p className="font-bold cursor-pointer text-sm uppercase md:text-[15px]">
              Saksham Shukla
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-4">
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              HOME
            </li>
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              ABOUT
            </li>
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              PROJECT
            </li>
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              CONTACT
            </li>
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              {!isDark ? (
                <IoMoon onClick={() => handleIsDark()} size={18} />
              ) : (
                <IoMdSunny onClick={() => handleIsDark()} size={18} />
              )}
            </li>
          </ul>
        </div>

        <div className="relative flex flex-col justify-center items-center  md:hidden">
          <GiHamburgerMenu onClick={() => handleMenuOpen()} size={20} />
        </div>
      </nav>

      <div
        className={
          openMenu
            ? "opacity-100 w-full z-50 absolute visible transition-opacity duration-500"
            : "opacity-0  w-full z-50 absolute invisible transition-invisible duration-500"
        }
      >
        <ul
          className={
            isDark ? "bg-black text-white text-right" : "bg-white text-right"
          }
        >
          <li className="flex justify-end border-t-2 border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]">
            {!isDark ? (
              <IoMoon onClick={() => handleIsDark()} size={18} />
            ) : (
              <IoMdSunny onClick={() => handleIsDark()} size={18} />
            )}
          </li>
          <li className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]">
            HOME
          </li>
          <li className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]">
            ABOUT
          </li>
          <li className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]">
            PROJECT
          </li>
          <li className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]">
            CONTACT
          </li>
        </ul>
      </div>
    </>
  );
}

function HeroSection({ isDark, handleIsDark }) {
  return (
    <div className="relative  h-[80%] text-black">
      <svg xmlns="http://www.w3.org/2000/svg" height={"100%"} width="100%">
        <defs>
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            gradientTransform="rotate(240)"
          >
            <stop offset="0" stop-color="#ffffff" />
            <stop offset="1" stop-color="#ffffff" />
          </linearGradient>
          <pattern
            patternUnits="userSpaceOnUse"
            id="b"
            width="540"
            height="450"
            x="0"
            y="0"
            viewBox="0 0 1080 900"
          >
            <g fill-opacity="0.1">
              <polygon fill="#444" points="90 150 0 300 180 300" />
              <polygon points="90 150 180 0 0 0" />
              <polygon fill="#AAA" points="270 150 360 0 180 0" />
              <polygon fill="#DDD" points="450 150 360 300 540 300" />
              <polygon fill="#999" points="450 150 540 0 360 0" />
              <polygon points="630 150 540 300 720 300" />
              <polygon fill="#DDD" points="630 150 720 0 540 0" />
              <polygon fill="#444" points="810 150 720 300 900 300" />
              <polygon fill="#FFF" points="810 150 900 0 720 0" />
              <polygon fill="#DDD" points="990 150 900 300 1080 300" />
              <polygon fill="#444" points="990 150 1080 0 900 0" />
              <polygon fill="#DDD" points="90 450 0 600 180 600" />
              <polygon points="90 450 180 300 0 300" />
              <polygon fill="#666" points="270 450 180 600 360 600" />
              <polygon fill="#AAA" points="270 450 360 300 180 300" />
              <polygon fill="#DDD" points="450 450 360 600 540 600" />
              <polygon fill="#999" points="450 450 540 300 360 300" />
              <polygon fill="#999" points="630 450 540 600 720 600" />
              <polygon fill="#FFF" points="630 450 720 300 540 300" />
              <polygon points="810 450 720 600 900 600" />
              <polygon fill="#DDD" points="810 450 900 300 720 300" />
              <polygon fill="#AAA" points="990 450 900 600 1080 600" />
              <polygon fill="#444" points="990 450 1080 300 900 300" />
              <polygon fill="#222" points="90 750 0 900 180 900" />
              <polygon points="270 750 180 900 360 900" />
              <polygon fill="#DDD" points="270 750 360 600 180 600" />
              <polygon points="450 750 540 600 360 600" />
              <polygon points="630 750 540 900 720 900" />
              <polygon fill="#444" points="630 750 720 600 540 600" />
              <polygon fill="#AAA" points="810 750 720 900 900 900" />
              <polygon fill="#666" points="810 750 900 600 720 600" />
              <polygon fill="#999" points="990 750 900 900 1080 900" />
              <polygon fill="#999" points="180 0 90 150 270 150" />
              <polygon fill="#444" points="360 0 270 150 450 150" />
              <polygon fill="#FFF" points="540 0 450 150 630 150" />
              <polygon points="900 0 810 150 990 150" />
              <polygon fill="#222" points="0 300 -90 450 90 450" />
              <polygon fill="#FFF" points="0 300 90 150 -90 150" />
              <polygon fill="#FFF" points="180 300 90 450 270 450" />
              <polygon fill="#666" points="180 300 270 150 90 150" />
              <polygon fill="#222" points="360 300 270 450 450 450" />
              <polygon fill="#FFF" points="360 300 450 150 270 150" />
              <polygon fill="#444" points="540 300 450 450 630 450" />
              <polygon fill="#222" points="540 300 630 150 450 150" />
              <polygon fill="#AAA" points="720 300 630 450 810 450" />
              <polygon fill="#666" points="720 300 810 150 630 150" />
              <polygon fill="#FFF" points="900 300 810 450 990 450" />
              <polygon fill="#999" points="900 300 990 150 810 150" />
              <polygon points="0 600 -90 750 90 750" />
              <polygon fill="#666" points="0 600 90 450 -90 450" />
              <polygon fill="#AAA" points="180 600 90 750 270 750" />
              <polygon fill="#444" points="180 600 270 450 90 450" />
              <polygon fill="#444" points="360 600 270 750 450 750" />
              <polygon fill="#999" points="360 600 450 450 270 450" />
              <polygon fill="#666" points="540 600 630 450 450 450" />
              <polygon fill="#222" points="720 600 630 750 810 750" />
              <polygon fill="#FFF" points="900 600 810 750 990 750" />
              <polygon fill="#222" points="900 600 990 450 810 450" />
              <polygon fill="#DDD" points="0 900 90 750 -90 750" />
              <polygon fill="#444" points="180 900 270 750 90 750" />
              <polygon fill="#FFF" points="360 900 450 750 270 750" />
              <polygon fill="#AAA" points="540 900 630 750 450 750" />
              <polygon fill="#FFF" points="720 900 810 750 630 750" />
              <polygon fill="#222" points="900 900 990 750 810 750" />
              <polygon fill="#222" points="1080 300 990 450 1170 450" />
              <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
              <polygon points="1080 600 990 750 1170 750" />
              <polygon fill="#666" points="1080 600 1170 450 990 450" />
              <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
        <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
      </svg>
      <div
        className={
          isDark
            ? "tracking-widest flex flex-col justify-center items-center absolute top-0 h-full w-full text-white bg-black bg-opacity-90"
            : "tracking-widest flex flex-col justify-center items-center absolute top-0 h-full w-full bg-gray-200 bg-opacity-80"
        }
      >
        <div
          className={
            "h-full w-full gap-8 md:gap-12 flex flex-col justify-center items-center"
          }
        >
          <div className="p-2">
            <p className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
              Hey, I'm Saksham Shukla
            </p>
          </div>
          <div className="p-2 w-full lg:w-[80%] text-center">
            <p className="text-[15px] md:leading-10 md:text-[18px] font-semibold">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="hover:-translate-y-3 transition-transform duration-500 ease-in-out p-2 w-56 opacity-100">
            <button className="font-semibold w-full p-3 rounded text-sm md:text-xl text-white shadow-sm shadow-black bg-purple-500">
              PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
