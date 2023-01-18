import Head from "next/head";
import Image from "next/image";
import { jsPDF } from "jspdf";
import Link from "next/link";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Compiler, { ApiGenerator } from "./compiler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [saving, setSaving] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const mover = document.getElementById("movingItem");

    document.onmousemove = function (e) {
      mover.style.left = e.pageX - 170 + "px";
      mover.style.top = e.pageY - 170 + "px";
      mover.style.display = "block";
      mover.style.opacity = 0.5;
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.005]);

  function saveResume() {
    setSaving(true);
    var doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage("https://i.ibb.co/YTyMhCF/resume.png", "PNG", 0, 0, 417, 653);
    doc.save("resume.pdf");
    setSaving(false);
  }

  return (
    <div className="flex flex-1 flex-col place-content-center">
      <Head>
        <title>Faahem</title>
        <meta name="description" content="MERN Stack Developer" />
        <link rel="icon" href="https://i.ibb.co/2hVHJFt/Covdffer.png" />
      </Head>

      <div
        id="movingItem"
        style={{
          zIndex: 1,
        }}
        className="w-96 h-96 mobile:fixed hidden laptop:absolute bg-pink-900/10 rounded-full"
      />
      <div
        id="Navheader"
        className="bg-black/40 z-50  laptop:flex mobile:hidden place-items-center justify-between sticky top-0"
      >
        <div className="flex space-x-1 p-4 place-items-center">
          <span>
            <Image
              src="https://i.ibb.co/4PbPVhF/Covdffer.png"
              height="60"
              width="60"
            />
          </span>
          <pre className="text-2xl text-white">Faahem</pre>
        </div>
        <div className="mr-6 space-x-3 flex place-items-center">
          <Link href="#introduction">
            <h1 className="font-bold p-4 rounded-xl hover:bg-slate-500/50 text-red-100">
              Introduction
            </h1>
          </Link>
          <Link href="#skills">
            <h1 className="font-bold p-4 rounded-xl hover:bg-slate-500/50 text-red-100">
              Skills
            </h1>
          </Link>
          <Link href="#insp">
            <h1 className="font-bold p-4 rounded-xl hover:bg-slate-500/50 text-red-100">
              Instant Projects
            </h1>
          </Link>
        </div>
      </div>
      <div>
        <button
          id="navIcon"
          className="fill-white laptop:hidden mobile:flex p-2 mt-1 place-self-end"
          onClick={() => setShow(!show)}
        >
          <FontAwesomeIcon icon={faBars} height="30" width="30" color="white" />
        </button>
      </div>
      {show ? (
        <div
          id="NavheaderForphone"
          className="bg-white/40 transition-all duration-500 w-full place-self-center z-50 flex-col place-content-center place-items-center justify-between static top-0"
        >
          <div className="flex transition-all duration-500 space-x-3 my-2 place-content-end mx-3 place-items-center">
            <Link href="#introduction">
              <h1 className="font-bold p-2 bg-white hover:bg-slate-500/50 text-black">
                Introduction
              </h1>
            </Link>
            <Link href="#skills">
              <h1 className="font-bold p-2 bg-white hover:bg-slate-500/50 text-black">
                Skills
              </h1>
            </Link>
          </div>
        </div>
      ) : null}
      <div
        style={{
          zIndex: 10,
        }}
        className="flex mobile:flex-col-reverse laptop:flex-row justify-between place-content-center place-items-center p-16"
      >
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <motion.h1
            initial={{ scale: 0, translateX: "-800px" }}
            animate={{ scale: 1, translateX: "0px" }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 10,
            }}
            id="animate-ping"
            className="mobile:text-4xl laptop:text-8xl font-fav mobile:text-center laptop:text-left font-bold"
          >
            Faahem Bro
          </motion.h1>
          <motion.h1
            initial={{ scale: 0, translateX: "-800px" }}
            animate={{ scale: 1, translateX: "0px" }}
            transition={{
              type: "spring",
              stiffness: 440,
              damping: 10,
            }}
            className="laptop:text-3xl mobile:text-xl text-red-200 font-fav mobile:ml-4 laptop:ml-1 text-left font-thin"
          >
            MERN Stack Developer
          </motion.h1>
          {!saving ? (
            <motion.button
              whileHover={{
                scale: 1.2,
                translateX: "30px",
              }}
              whileTap={{
                scale: 0.8,
                borderRadius: "100%",
              }}
              id="allButtons"
              onClick={saveResume}
              className="p-4 z-10 rounded-xl mt-8 bg-white mobile:text-xl text-black laptop:text-2xl font-bold"
            >
              Download My Resume
            </motion.button>
          ) : (
            <motion.button
              whileHover={{
                scale: 1.2,
                translateX: "30px",
              }}
              whileTap={{
                scale: 0.8,
                borderRadius: "100%",
              }}
              onClick={saveResume}
              className="p-4 rounded-xl mt-8 bg-white mobile:text-xl laptop:text-2xl font-bold"
            >
              Downloading
            </motion.button>
          )}
        </motion.div>
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <div className="z-30" id="imageOfMe">
            <Image
              src="https://i.ibb.co/4PbPVhF/Covdffer.png"
              height="600"
              width="600"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        id="skills"
        style={{
          zIndex: 20,
        }}
        className="p-10"
      >
        <h1 className="text-center font-bold mobile:text-4xl laptop:text-7xl text-white mb-12">
          My Skills
        </h1>
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="bg-slate-200 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl"
        >
          <motion.div
            initial={{ translateX: "-1200px" }}
            animate={{ translateX: "0px" }}
            transition={{ duration: 2 }}
            className="h-full w-10/12 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
          <h1 className="mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10">
            Next JS
          </h1>
          <h1 className="mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10">
            <span className="mobile:hidden laptop:flex mr-2">Level:</span>Expert
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl"
        >
          <motion.div
            initial={{ translateX: "-1200px" }}
            animate={{ translateX: "0px" }}
            transition={{ duration: 2 }}
            className="h-full w-2/5 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
          <h1 className="mobile:text-xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10">
            React Native
          </h1>
          <h1 className="mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10">
            <span className="mobile:hidden laptop:flex mr-2">Level:</span>
            Beginner
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl"
        >
          <motion.div
            initial={{ translateX: "-1200px" }}
            animate={{ translateX: "0px" }}
            transition={{ duration: 2 }}
            className="h-full w-2/3 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
          <h1 className="mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10">
            Node JS
          </h1>
          <h1 className="mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10">
            <span className="mobile:hidden laptop:flex mr-2">Level:</span>
            Intermediate
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl"
        >
          <motion.div
            initial={{ translateX: "-1200px" }}
            animate={{ translateX: "0px" }}
            transition={{ duration: 2 }}
            className="h-full w-2/5 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
          <h1 className="mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10">
            Redux
          </h1>
          <h1 className="mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10">
            <span className="mobile:hidden laptop:flex mr-2">Level:</span>
            Extending
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="bg-slate-200 mt-6 overflow-hidden relative place-items-center justify-between flex flex-row rounded-2xl"
        >
          <motion.div
            initial={{ translateX: "-1200px" }}
            animate={{ translateX: "0px" }}
            transition={{ duration: 2 }}
            className="h-full w-10/12 rounded-2xl absolute z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
          <h1 className="mobile:text-2xl laptop:text-4xl text-white font-bold mobile:p-5 laptop:p-10 z-10">
            MongoBD
          </h1>
          <h1 className="mobile:text-xl laptop:text-2xl text-black flex font-bold mobile:p-5 laptop:p-10 z-10">
            <span className="mobile:hidden laptop:flex mr-2">Level:</span>Expert
          </h1>
        </motion.div>
      </motion.div>
      <div
        className="p-10 flex flex-col place-items-center"
        style={{
          zIndex: 30,
        }}
      >
        <h1 className="text-center font-bold mobile:text-4xl laptop:text-7xl text-white mb-12">
          Introduction
        </h1>
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          id="introduction"
          className="relative laptop:w-1/2 z-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-5"
        >
          <h1 className="text-white selection:bg-black font-bold laptop:text-3xl mobile:text-lg text-center">
            I am 17 years old. I have about 1 year experience in web
            development. I am constantly trying to learn deeper topics. Web
            development seems like an addiction to me now. Currently I am not
            working for any company but I am doing some local project.
          </h1>
          <div
            id="movingItem2"
            style={{
              zIndex: -1,
            }}
            className="w-2/3 h-96 hidden absolute bg-pink-900 rounded-full"
          />
        </motion.div>
      </div>
      <div
        style={{
          zIndex: 90,
        }}
      >
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          id="insp"
        >
          <h1 className="text-center mt-10 font-bold mobile:text-4xl laptop:text-7xl text-white mb-6">
            <h1>Instant Projects</h1>
          </h1>

          <div className="bg-pink-700/20 rounded-2xl p-10 m-16">
            <div className="flex font-bold place-items-center">
              <h1 className="text-2xl mt-4 mb-4">JavaScript</h1>
              <h1 className="bg-yellow-400 ml-4 text-black p-3 text-3xl">JS</h1>
            </div>
            <Compiler />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          id="insp"
        >
          <div className="bg-white/20 rounded-2xl p-10 m-16">
            <div className="flex mobile:justify-center laptop:justify-start font-bold place-items-center">
              <h1 className="text-2xl mt-4 mb-4">NextJS</h1>
              <h1 className="bg-black ml-4 text-white p-3 text-3xl">N</h1>
            </div>
            <ApiGenerator />
          </div>
        </motion.div>
      </div>
      <div
        style={{
          zIndex: 90,
        }}
        className="m-16"
      >
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          id="mernp"
        >
          <h1 className="text-center mobile:w-96 laptop:w-full laptop:inline-block mobile:flex content-center mt-10 font-bold mobile:text-4xl laptop:text-7xl text-white mb-6">
            <h1>MERN Projects</h1>
          </h1>
          <motion.div
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            style={{
              height: "520px",
            }}
            className="bg-blue-400/60 mt-10 relative overflow-hidden rounded-2xl w-full mobile:p-7 laptop:p-16 flex flex-row justify-start mobile:items-end laptop:items-center"
          >
            <div>
              <h1 className="mobile:text-2xl laptop:mt-0 mobile:mt-10 laptop:text-6xl text-orange-300 font-bold">
                IMEI Web
              </h1>
              <p className="mobile:text-sm laptop:text-2xl mobile:mt-2 laptop:mt-7 mobile:w-full laptop:w-1/2">
                Using this web tool, you can check your phone&apos;s info. Also
                you can Unlock, Bypass and Remove including IOS or IPhone.{" "}
                <span>
                  <a
                    className="pt-10 mobile:text-sm laptop:text-xl text-orange-200"
                    href="https://imeichecker.vercel.app"
                  >
                    Click To Visit
                  </a>
                </span>
              </p>
            </div>

            <div
              style={{
                width: "600px",
              }}
              className="laptop:flex mobile:hidden right-0 top-0 absolute"
            >
              <img
                src="https://i.ibb.co/KLypYN7/imeichecker-vercel-app-Nest-Hub-Max.png"
                className="h-full hover:-translate-y-64 rounded-2xl transition-all duration-700 w-auto "
              />
            </div>
            <div
              style={{
                width: "100%",
              }}
              className="laptop:hidden mobile:flex left-0 top-0 absolute"
            >
              <img
                src="https://i.ibb.co/KLypYN7/imeichecker-vercel-app-Nest-Hub-Max.png"
                className="h-full shadow-lg rounded-2xl shadow-white hover:-translate-y-64 transition-all duration-700 w-full "
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            style={{
              height: "520px",
            }}
            className="bg-blue-400/60 mt-10 relative overflow-hidden rounded-2xl w-full mobile:p-7 laptop:p-16 flex flex-row justify-end mobile:items-end laptop:items-center"
          >
            <div className="flex flex-col laptop:place-items-end">
              <h1 className="mobile:text-2xl laptop:mt-0 mobile:mt-10 laptop:text-6xl text-orange-300 font-bold">
                Kinbo Product
              </h1>
              <p className="mobile:text-sm laptop:text-end laptop:text-2xl mobile:mt-2 laptop:mt-7 mobile:w-full laptop:w-2/5">
                Using this E-Commerce Platform you can sell your business items.
                You can post unlimited advertisement for your products{" "}
                <span>
                  <a
                    className="pt-10 mobile:text-sm laptop:text-xl text-orange-200"
                    href="https://kinbo.vercel.app/"
                  >
                    Click To Visit
                  </a>
                </span>
              </p>
            </div>

            <div
              style={{
                width: "600px",
              }}
              className="laptop:flex mobile:hidden left-0 top-0 absolute"
            >
              <img
                src="https://i.ibb.co/6bspVF2/kinbo-vercel-app-Nest-Hub-Max-1.png"
                className="h-full hover:-translate-y-96 rounded-2xl transition-all duration-700 w-auto "
              />
            </div>
            <div
              style={{
                width: "100%",
              }}
              className="laptop:hidden h-80 mobile:flex left-0 top-0 absolute"
            >
              <img
                src="https://i.ibb.co/6bspVF2/kinbo-vercel-app-Nest-Hub-Max-1.png"
                className="h-full shadow-lg rounded-2xl shadow-white hover:-translate-y-64 transition-all duration-700 w-full "
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
  1;
}
