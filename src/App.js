import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import profileImg from "./Images/profile-img.jpg";
import Netflix from "./Images/Netflix.jpg";
import TacoBell from "./Images/TacoBell.jpg";
import commonBg from "./svgs/common-bg.svg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [isDark, setIsDark] = useState(false);
  function handleIsDark() {
    setIsDark(!isDark);
  }
  return (
    <div className="w-full  h-screen">
      <div
        className={
          isDark
            ? `flex flex-col gap-2  bg-black`
            : `flex flex-col gap-2  bg-white`
        }
      >
        <NavBar isDark={isDark} handleIsDark={handleIsDark} />
        <HeroSection isDark={isDark} />
        <AboutMe isDark={isDark} />
        <Project isDark={isDark} />
        <ContactUs isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
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
  function CloseMenuOnLiClicks() {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <nav
        className={
          isDark
            ? "tracking-widest sticky top-0 z-50  bg-black text-white px-2 py-5 md:px-6 md:py-5 flex justify-between items-center w-full h-auto"
            : "tracking-widest sticky top-0 z-50 bg-white  px-2 py-5 md:px-6 md:py-5 flex justify-between items-center w-full h-auto"
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
              <a href="#">HOME</a>
            </li>
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              <a href="#About">ABOUT</a>
            </li>
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              <a href="#Project">PROJECT</a>
            </li>
            <li className="px-3 cursor-pointer transition-colors duration-300 font-bold hover:text-purple-600 text-sm md:text-[14px]">
              <a href="#Contact">CONTACT</a>
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
          {openMenu ? (
            <RxCross2 size={20} onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <GiHamburgerMenu onClick={() => handleMenuOpen()} size={20} />
          )}
        </div>
      </nav>

      <div
        className={
          openMenu
            ? "opacity-100 w-full z-50 fixed top-20 visible transition-opacity duration-500"
            : "opacity-0  w-full z-50 fixed top-20 invisible transition-invisible duration-500"
        }
      >
        <ul
          className={
            isDark ? "bg-black text-white text-right" : "bg-white text-right"
          }
        >
          <li
            onClick={() => CloseMenuOnLiClicks()}
            className="flex justify-end border-t-2 border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]"
          >
            {!isDark ? (
              <IoMoon onClick={() => handleIsDark()} size={18} />
            ) : (
              <IoMdSunny onClick={() => handleIsDark()} size={18} />
            )}
          </li>
          <a href="#">
            <li
              onClick={() => CloseMenuOnLiClicks()}
              className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]"
            >
              HOME
            </li>
          </a>
          <a href="#About">
            <li
              onClick={() => CloseMenuOnLiClicks()}
              className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]"
            >
              ABOUT
            </li>
          </a>
          <a href="#Project">
            <li
              onClick={() => CloseMenuOnLiClicks()}
              className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]"
            >
              PROJECT
            </li>
          </a>
          <a href="#Contact">
            <li
              onClick={() => CloseMenuOnLiClicks()}
              className="border-b-2 py-5 px-4 cursor-pointer transition-colors duration-300 font-medium hover:text-purple-600 text-sm md:text-[14px]"
            >
              CONTACT
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

function HeroSection({ isDark }) {
  return (
    <div
      style={{ backgroundImage: `url(${commonBg})` }}
      className="h-[30rem] md:h-full relative  bg-cover bg-center  border-black w-full"
    >
      <div className="absolute  pointer-events-none h-full w-full inset-0 z-0 bg-gray-300 bg-opacity-0 "></div>

      <div
        className={
          isDark
            ? "tracking-widest  flex flex-col justify-center items-center p-0 md:p-12 h-[100%] w-full text-white bg-black bg-opacity-90"
            : "tracking-widest  flex flex-col justify-center items-center p-0 md:p-12 h-[100%] w-full bg-gray-200 bg-opacity-80"
        }
      >
        <div
          className={
            "h-full w-full -mt-5 md:mt-0 gap-8 md:gap-12 flex flex-col justify-center items-center"
          }
        >
          <div className="p-2">
            <p className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
              Hey, I'm Saksham Shukla
            </p>
          </div>
          <div className="p-2 w-full lg:w-[80%] text-center ">
            <p className="text-[13px] leading-6 md:leading-10 md:text-[18px] font-semibold">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="hover:-translate-y-3 transition-transform duration-500 ease-in-out p-2 w-56 opacity-100">
            <a className="" href="#Project">
              <button className="font-semibold w-full p-3 rounded text-sm md:text-xl text-white  bg-purple-600">
                PROJECTS
              </button>
            </a>
          </div>
          <div className="absolute h-64  w-12 py-3 bottom-50 left-0">
            <div
              className={
                isDark
                  ? "hidden lg:flex flex-col h-full w-full  justify-evenly items-center gap-4 bg-black text-white"
                  : "hidden lg:flex flex-col h-full w-full  justify-evenly items-center gap-4 bg-white text-black"
              }
            >
              <div className="w-full flex justify-center  hover:-translate-y-2 transition-transform transition-delay-500 ease-in-out cursor-pointer">
                <a href="https://github.com/Saksham-Shukla-05" target="_blank">
                  <FaGithub
                    size={30}
                    className="hover:text-purple-600 transition-colors trasition-delay-300"
                  />
                </a>
              </div>
              <div className="w-full flex justify-center hover:-translate-y-2 transition-transform transition-delay-300 ease-in cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/saksham-shukla-9758602a6/"
                  target="_blank"
                >
                  <FaLinkedin
                    size={30}
                    className="hover:text-purple-600 transition-colors trasition-delay-300"
                  />
                </a>
              </div>
              <div className="w-full flex justify-center hover:-translate-y-2 transition-transform transition-delay-300 ease-in cursor-pointer">
                <a
                  href="https://www.instagram.com/saksham_shukla_03/"
                  target="_blank"
                >
                  <FaInstagram
                    size={30}
                    className="hover:text-purple-600 transition-colors trasition-delay-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="h-12 w-7 absolute bottom-0 rounded-xl border-solid border-2 border-black">
            <div className="relative animation-dotMove ">
              <span className="text-4xl absolute top-0 left-1.5 ">.</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function AboutMe({ isDark }) {
  return (
    <div
      id="About"
      className={
        isDark
          ? `mt-16 md:mt-20 tracking-widest h-fit w-full gap-5 md:gap-0 flex flex-col items-center bg-black text-white`
          : `mt-16 md:mt-20 tracking-widest h-fit w-full gap-5 md:gap-0 flex flex-col items-center`
      }
    >
      <div className="mb-2 md:mb-12 flex flex-col items-center gap-5">
        <h2 className="text-2xl md:text-3xl uppercase font-bold">about me</h2>
        <div className="border-solid border-2 rounded-2xl border-purple-700 w-10"></div>
        <p className="text-[15px] md:text-lg w-[90%] lg:w-[70%] text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="mt-5 gap-4 md:gap-5 w-full  flex flex-col xl:flex-row justify-between">
        <div className="p-2 md:p-2 flex flex-col gap-5 flex-1">
          <div className="p-2 md:p-5 font-bold text-[19px] md:text-xl">
            Get to know me!
          </div>
          <div className="px-1 md:px-5 w-full lg:w-[95%] text-justify  flex-col flex gap-4 text-[15px]  ">
            <p className="text-[15px] md:font-normal md:text-[15px] leading-7 md:leading-8">
              I'm a{" "}
              <span className="text-gray-400 font-medium">
                <strong>Frontend Focused Web Developer</strong>
              </span>{" "}
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the{" "}
              <span className="text-gray-400 font-medium">
                <strong>Projects</strong>
              </span>{" "}
              section.
            </p>
            <p className="text-[15px] md:text-[15px] leading-7">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my{" "}
              <a href="#" className="text-purple-700 font-semibold">
                Linkedin
              </a>{" "}
              and{" "}
              <a href="#" className="text-purple-700 font-semibold">
                Instagram
              </a>{" "}
              where I post useful content related to Web Development and
              Programming
            </p>

            <p className="text-[15px] md:text-[15px] leading-7">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
          <div className="px-2 md:px-5">
            <a href="#Contact">
              <button className="mt-3 text-sm hover:-translate-y-2 transition-transform ease-in trasition-delay-300 bg-purple-700 text-white p-2 rounded">
                CONTACT
              </button>
            </a>
          </div>
        </div>

        <div className="p-2  flex flex-col flex-1">
          <div className="p-2 md:p-5 font-bold text-[19px] md:text-xl">
            My Skils
          </div>
          <div className="px-1 md:px-5 py-7 w-full md:w-[85%] flex gap-5 md:gap-10 flex-wrap">
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-orange-500 bg-yellow-400"
              }
            >
              HTMl
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-blue-600 bg-gray-200"
              }
            >
              CSS
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-yellow-500 bg-gray-800"
              }
            >
              javaScript
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-blue-300 bg-gray-700"
              }
            >
              Tailwind CSS
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-blue-700 bg-gray-700"
              }
            >
              React
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-red-500 bg-gray-200"
              }
            >
              GIt
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-black bg-gray-200"
              }
            >
              Github
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-teal-500 bg-gray-100"
              }
            >
              Responsive Design
            </Skills>
            <Skills
              customeClass={
                "w-fit h-12 flex items-center text-green-500 bg-gray-100"
              }
            >
              SEO
            </Skills>
          </div>
        </div>
      </div>
    </div>
  );
}
function Project({ isDark }) {
  return (
    <div
      id="Project"
      className={
        isDark
          ? `mt-16 md:mt-20 tracking-widest h-fit w-full gap-5 md:gap-0 flex flex-col items-center bg-black text-white`
          : `mt-16 md:mt-20 tracking-widest h-fit w-full gap-5 md:gap-0 flex flex-col items-center`
      }
    >
      <div className="mb-2 md:mb-12 flex flex-col items-center gap-5">
        <h2 className="text-2xl md:text-3xl uppercase font-bold"> Projects</h2>
        <div className="border-solid border-2 rounded-2xl border-purple-700 w-10"></div>
        <p className="text-[15px] md:text-lg w-[90%] lg:w-[70%] text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>

      <ProjectSubSec
        Image={Netflix}
        heading={"Netflix UI Clone"}
        linkToCs={"https://netflix-landing-page-lovat-eight.vercel.app/"}
      >
        A static UI clone of the Netflix platform created using Vanilla
        JavaScript, CSS, and HTML. This project highlights my ability to
        replicate complex user interfaces, with attention to detail in layout,
        styling, and responsiveness.
      </ProjectSubSec>
      <ProjectSubSec Image={TacoBell} heading={"TacoBell UI Clone"}>
        A static UI clone of the Taco Bell website built with React and Tailwind
        CSS. It highlights my ability to replicate brand interfaces with precise
        layouts and responsive design, closely mirroring Taco Bell's modern
        aesthetics.
      </ProjectSubSec>
    </div>
  );
}
function ProjectSubSec({ Image, heading, children, linkToCs = "#" }) {
  return (
    <>
      <div className="mt-5 gap-4 md:gap-8 w-full  flex flex-col lg:flex-row justify-between">
        <div className="p-0 md:p-6 md:items-start items-center flex flex-col gap-7 flex-1">
          <img
            src={Image}
            className="rounded-lg object-cover size-[95%] md:size-full"
            alt=""
          />
        </div>

        <div className="p-4 flex flex-col flex-1 lg:items-start items-center ">
          <div className="p-2 md:p-5 px-2 font-bold text-[19px] md:text-xl">
            <h3 className="text-[16px] text-center md:text-left md:text-lg">
              {heading}
            </h3>
          </div>
          <div className="text-[15px] md:text-[17px] px-2  md:text-center text-justify lg:text-left md:px-5 py-5 w-[90%] lg:w-full flex gap-6 md:gap-10 flex-wrap">
            {children}
          </div>
          <div className="md:ml-5 ml-0 mt-3 hover:-translate-y-3 transition-transform duration-500 ease-in-out w-40 opacity-100">
            <a href={linkToCs} target="_blank">
              <button className="uppercase font-medium w-full p-2 rounded text-sm md:text-[17px] text-white  bg-purple-600">
                Case Study
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
function Skills({ children, customeClass }) {
  return (
    <div
      className={`shadow-sm shadow-white font-bold text-sm md:text-[15px] rounded uppercase p-2 ${customeClass}`}
    >
      {children}
    </div>
  );
}
function ContactUs({ isDark }) {
  return (
    <div
      id="Contact"
      style={{ backgroundImage: `url(${commonBg})` }}
      className="mt-16 md:mt-20 h-full md:h-fit relative  bg-cover bg-center w-full"
    >
      <div className="absolute  pointer-events-none h-full w-full inset-0 z-0 bg-gray-300 bg-opacity-0 "></div>

      <div
        className={
          isDark
            ? "tracking-widest  flex flex-col gap-9  h-full w-full text-white bg-black bg-opacity-90"
            : "tracking-widest  flex flex-col gap-9  h-full w-full bg-gray-200 bg-opacity-80"
        }
      >
        <div
          className={"mt-5  h-full w-full flex flex-col items-center gap-10"}
        >
          <div className="flex flex-col gap-5 items-center">
            <p className="text-2xl md:text-3xl uppercase font-bold">Contact</p>
            <div className="border-solid border-2 rounded-2xl border-purple-700 w-10"></div>
            <p className="text-[15px] md:text-lg w-[90%] lg:w-[70%] text-center">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div
            className={`${
              isDark
                ? "mb-5 rounded text-white bg-black flex items-center   w-[90%] md:w-[60%] lg:w-[50%]  h-full"
                : "mb-5 rounded text-black bg-white flex items-center   w-[90%] md:w-[60%] lg:w-[50%]  h-full"
            }`}
          >
            <div className="p-3 flex flex-col gap-6 items-center  w-full ">
              <div className="p-3 gap-3 flex flex-col items-start w-full ">
                <label
                  className="px-2 text-[14px] md:text-[16px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  placeholder="Enter Your Name"
                  className={`${
                    isDark
                      ? "placeholder:text-[12px] md:placeholder:text-[15px] text-[13px] md:text-[15px] outline-none border-none  text-black bg-gray-200 p-3 rounded min-w-[100%]"
                      : "placeholder:text-[12px] md:placeholder:text-[15px] text-[13px] md:text-[15px] outline-none border-none bg-gray-200 p-3 rounded min-w-[100%]"
                  }`}
                  type="text"
                  name=""
                  id="name"
                />
              </div>
              <div className="p-3 gap-3 flex flex-col items-start w-full ">
                <label
                  className="px-2 text-[14px] md:text-[16px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  placeholder="Enter Your Email"
                  className={`${
                    isDark
                      ? "placeholder:text-[12px] md:placeholder:text-[15px] text-[13px] md:text-[15px] outline-none border-none  text-black bg-gray-200 p-3 rounded min-w-[100%]"
                      : "placeholder:text-[12px] md:placeholder:text-[15px] text-[13px] md:text-[15px] outline-none border-none bg-gray-200 p-3 rounded min-w-[100%]"
                  }`}
                  type="email"
                  name=""
                  id="email"
                />
              </div>
              <div className="p-3 gap-3 flex flex-col items-start w-full ">
                <label
                  className="px-2 text-[14px] md:text-[16px]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  className={`${
                    isDark
                      ? "resize-none placeholder:text-[12px] md:placeholder:text-[15px] text-[13px] md:text-[15px] outline-none border-none h-40  text-black bg-gray-200 p-3 rounded min-w-[100%]"
                      : "resize-none placeholder:text-[12px] md:placeholder:text-[15px] text-[13px] md:text-[15px] outline-none border-none h-40 bg-gray-200 p-3 rounded min-w-[100%]"
                  }`}
                  name=""
                  id="message"
                ></textarea>
              </div>
              <div className=" flex flex-col items-stretch md:items-end w-full">
                <button className="rounded py-3 px-12  text-sm md:text-lg text-white  bg-purple-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ isDark }) {
  return (
    <footer
      className={
        "bg-black md:py-12 py-12 p-3 md:p-6 text-white  flex flex-col gap-12  w-full h-full border-2 border-black border-solid"
      }
    >
      <div className="mt-3 md:mt-12 w-full h-full gap-7 lg:gap-0  flex flex-col lg:flex-row ">
        <div className=" flex-1 flex flex-col gap-5">
          <div className="md:text-xl text-[16px]  uppercase">
            Saksham Shukla
          </div>
          <div className="md:text-[15px] text-[15px] ">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </div>
        </div>

        <div className="flex-1 flex flex-col  gap-3">
          <div className=" w-full flex gap-5 flex-col h-full  lg:items-end items-start">
            <div className="md:text-xl text-[16px]  mr-0 lg:mr-9 pr-12 flex  uppercase ">
              Social
            </div>
            <div className=" flex gap-9">
              <a
                href="https://github.com/Saksham-Shukla-05"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  size={30}
                  className="hover:text-purple-600 transition-colors trasition-delay-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/saksham-shukla-9758602a6/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="hover:text-purple-600 transition-colors trasition-delay-300"
                />
              </a>
              <a
                href="https://www.instagram.com/saksham_shukla_03/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  size={30}
                  className="hover:text-purple-600 transition-colors trasition-delay-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] w-full flex flex-col items-center">
        <div className=" border-white border-solid  ">
          <p className="mt-5 md:mt-16 text-[11px] -mb-5">
            © Copyright 2024 . Made by{" "}
            <a
              href="https://www.linkedin.com/in/saksham-shukla-9758602a6/"
              className="underline"
            >
              Saksham Shukla
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default App;
