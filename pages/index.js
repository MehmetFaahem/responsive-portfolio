import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import Pic from "../public/pic.jpg";
import Pic2 from "../public/pictwo.jpg";
import Skills from "../components/Skills";
import project_one from "../public/1.png";
import project_two from "../public/2.png";
import project_three from "../public/3.png";
import project_four from "../public/4.png";
import SphereView from "../components/Sphere";

const NoSSRCompiler = dynamic(() => import("./compiler"), { ssr: false });

export default function Home() {
  const [saving, setSaving] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [downloading, setDownloading] = useState("Download Resume");

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const mover = document.getElementById("movingItem");

    if (mover) {
      document.onmousemove = function (e) {
        mover.style.left = e.pageX - 170 + "px";
        mover.style.top = e.pageY - 170 + "px";
        mover.style.display = "block";
        mover.style.opacity = 0.5;
      };
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function TimeOut() {
    setDownloading("Downloading...");
    setTimeout(() => {
      setSaving(true);
    }, 3000);
  }

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col place-content-center">
      <Head>
        <title>Muhammad Fahim</title>
        <meta name="description" content="Full Stack Software Engineer" />
        <link rel="icon" href="https://i.ibb.co/2hVHJFt/Covdffer.png" />
      </Head>
      <SphereView />
      <div
        id="movingItem"
        style={{
          zIndex: 1,
        }}
        className="w-96 h-96 mobile:fixed hidden laptop:absolute bg-pink-900/10 rounded-full"
      />
      <div
        id="Navheader"
        className="bg-gradient-to-r from-black/60 via-purple-900/60 to-black/60 backdrop-blur-md z-50 laptop:flex mobile:hidden place-items-center justify-between sticky top-0 border-b border-white/10"
      >
        <div className="flex space-x-3 p-4 place-items-center group">
          <span className="transition-transform duration-300 group-hover:scale-110">
            <Image
              src="https://i.ibb.co/4PbPVhF/Covdffer.png"
              height="60"
              width="60"
              className="rounded-full shadow-lg shadow-purple-500/20"
            />
          </span>
          <pre className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-bold">
            Fahim
          </pre>
        </div>
        <div className="mr-6 space-x-4 flex place-items-center">
          <Link
            className="transform hover:scale-110 transition-all duration-300"
            href="https://github.com/MehmetFaahem"
          >
            <FontAwesomeIcon
              icon={faGithub}
              height="30"
              width="30"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            />
          </Link>
          {["Introduction", "Skills", "JS Projects", "Full Stack Projects"].map(
            (item, i) => (
              <Link key={i} href={`#${item.toLowerCase().replace(" ", "")}`}>
                <h1 className="font-medium px-4 py-2 rounded-xl hover:bg-white/10 text-blue-200 hover:text-purple-300 transition-all duration-300 border border-transparent hover:border-white/20">
                  {item}
                </h1>
              </Link>
            )
          )}
        </div>
      </div>

      {visible ? (
        <div
          id="NavheaderForphone"
          className="backdrop-blur-md bg-gradient-to-r from-black/40 via-purple-900/40 to-black/40 mobile:flex laptop:hidden transition-all duration-500 w-full place-self-center z-50 flex-col place-content-center place-items-center justify-between static top-0 border-b border-white/10"
        >
          <div className="flex justify-between w-full p-4">
            <Link
              className="transform hover:scale-110 transition-all duration-300"
              href="https://github.com/MehmetFaahem"
            >
              <FontAwesomeIcon
                icon={faGithub}
                height="35"
                width="35"
                className="text-white hover:text-purple-400 transition-colors duration-300"
              />
            </Link>
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              className="!bg-white/10 hover:!bg-white/20 border border-white/20"
            />
          </div>
          <Drawer
            title="Menu"
            placement="right"
            onClose={closeDrawer}
            visible={drawerVisible}
            className="!bg-gradient-to-b from-slate-900 to-purple-900"
          >
            {["Intro", "Skills", "Projects", "Full Stack Projects"].map(
              (item, i) => (
                <Link key={i} href={`#${item.toLowerCase().replace(" ", "")}`}>
                  <h1 className="font-medium my-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 text-blue-200 hover:text-purple-300 transition-all duration-300 border border-white/10">
                    {item}
                  </h1>
                </Link>
              )
            )}
          </Drawer>
        </div>
      ) : null}
      <div
        onScroll={() => setShow(false)}
        style={{
          zIndex: 10,
        }}
        className="flex mobile:flex-col-reverse laptop:flex-row justify-between place-content-center place-items-center p-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="mobile:place-items-center laptop:place-items-start flex flex-col relative z-10">
          <h1 className=" mobile:mt-[50px] laptop:mt-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mobile:text-[25px] laptop:text-6xl font-fav mobile:text-center laptop:text-left font-bold animate-gradient">
            Muhammad Fahim
          </h1>
          <h1 className="laptop:text-3xl mt-[9px] mobile:text-[13px] text-blue-200 font-fav text-left font-light">
            Full Stack Software Engineer
          </h1>

          <div className="mt-[60px]">
            <a
              href="https://drive.google.com/uc?export=download&id=1TbUvuYbsrjaERSibU6PpEpOMAhLBwTNN"
              onClick={TimeOut}
              className="mobile:px-4 mobile:py-2 laptop:px-6 laptop:py-3 z-10 relative group overflow-hidden rounded-lg
                bg-gradient-to-r from-blue-500 to-purple-500 mobile:text-[16px] text-white laptop:text-2xl font-bold
                transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">
                {saving ? "Downloaded" : downloading}
              </span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="z-30 rounded-full laptop:mt-0 mobile:mt-6 transform hover:scale-105 transition-all duration-500"
            id="imageOfMe"
          >
            <Image
              src={Pic}
              height="400"
              width="400"
              className="rounded-full shadow-lg shadow-purple-500/50 ring-2 ring-white/20 hover:ring-purple-500/50 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <Skills />
      <div
        className="p-10 flex flex-col place-items-center relative"
        style={{
          zIndex: 30,
        }}
      >
        <h1 className="text-center font-bold mobile:text-4xl laptop:text-7xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-12 animate-pulse">
          Introduction
        </h1>

        <div className="absolute w-full h-full">
          <div className="animate-pulse-slow absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
          <div className="animate-pulse-slow absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
        </div>

        <div
          id="introduction"
          className="relative flex flex-row items-center overflow-hidden mt-[30px] w-[69%] mobile:h-[auto] laptop:h-[280px] z-40 backdrop-blur-lg bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-[1.02] shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            height={"320"}
            width={"320"}
            className="absolute mobile:hidden laptop:flex rounded-full mobile:top-[-50px] mobile:left-[0px] laptop:top-[-40px] laptop:left-[-45px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl ring-2 ring-white/20 group-hover:ring-white/40"
            src={Pic2}
          />

          <h1 className="text-white/90 group-hover:text-white text-right laptop:ml-[40%] mobile:bottom-[30px] laptop:bottom-[26%] right-[40px] mobile:w-[100%] laptop:w-[70%] selection:bg-purple-900/50 font-light laptop:text-[20px] mobile:text-[12px] mobile:text-center laptop:text-right transition-all duration-500 leading-relaxed">
            Skilled Full Stack Developer with over 3 Years of experience in
            building responsive, user-friendly web applications using React,
            Node.js, and modern CSS frameworks as like TailwindCSS. Strong
            problem-solving abilities, with a focus on performance optimization,
            scalability, and clean, maintainable code. Experienced in
            collaborating with cross-functional teams to deliver high-quality
            solutions. Passionate about continuous learning and staying up to
            date with the latest web development trends and technologies.
          </h1>

          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
        </div>
      </div>
      <div
        style={{
          zIndex: 90,
        }}
        className="relative py-20 px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent pointer-events-none" />

        <div id="mernp" className="max-w-7xl mx-auto">
          <h1 className="text-center font-extrabold mobile:text-5xl laptop:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-16 animate-pulse">
            Projects
          </h1>

          {[
            {
              title: "Geno AI",
              description:
                "It&apos;s a AI based content generator. You can generate image and articles using this tool. You can generate for blog, or any other purpose.",
              link: "https://genooai.vercel.app/",
              image: project_four,
              gradient: "from-indigo-900/40 via-purple-900/40 to-pink-900/40",
              justify: "justify-start",
              textAlign: "laptop:w-1/2 laptop:text-left",
              hoverTranslate: "hover:-translate-y-[0%]",
              duration: "duration-[1000ms]",
              imagePosition: "right-0 top-0 scale-[1.1]",
            },
            {
              title: "ERP Software",
              description:
                "This ERP software streamlines business processes by integrating various functions such as accounting, inventory management, and human resources into a single system. ",
              image: project_three,
              gradient: "from-pink-900/40 via-purple-900/40 to-indigo-900/40",
              justify: "justify-end",
              textAlign:
                "laptop:place-items-end laptop:w-[50%] laptop:text-right",
              hoverTranslate: "hover:-translate-y-[17%]",
              duration: "duration-[1000ms]",
              imagePosition: "left-0 top-0 ",
            },

            {
              title: "IMEI Web",
              description:
                "Using this web tool, you can check your phone&apos;s info. Also you can Unlock, Bypass and Remove including IOS or IPhone.",
              link: "https://www.imeiweb.com/",
              image: project_two,
              gradient: "from-indigo-900/40 via-purple-900/40 to-pink-900/40",
              justify: "justify-start",
              textAlign: "laptop:w-1/2 laptop:text-left",
              hoverTranslate: "hover:-translate-y-[10%]",
              duration: "duration-[1000ms]",
              imagePosition: "right-0 top-0 ",
            },
          ].map((project, index) => (
            <div key={index} className="group mb-16 last:mb-0">
              <div
                className={`
                relative overflow-hidden rounded-3xl
                backdrop-blur-sm bg-gradient-to-r ${project.gradient}
                border border-white/10 hover:border-white/20
                transition-all duration-500 ease-out
                mobile:p-7 laptop:p-16
                transform hover:scale-[1.02]
                hover:shadow-2xl hover:shadow-purple-500/20 h-auto
              `}
              >
                <div
                  className={`flex flex-row ${project.justify} mobile:items-end laptop:items-center min-h-[470px]`}
                >
                  <div
                    className={`flex flex-col ${project.textAlign} relative z-10`}
                  >
                    <h1 className="text-xl laptop:text-6xl font-bold laptop:mt-0 mobile:mt-[40px] mb-4">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300">
                        {project.title}
                      </span>
                    </h1>
                    <p className="mobile:text-sm laptop:text-2xl mobile:mt-2 laptop:mt-7 text-blue-100/90 leading-relaxed">
                      {project.description}{" "}
                      {project.link && (
                        <a
                          className="w-fit block mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg
                          text-orange-200 hover:text-orange-100 transition-all duration-300
                          mobile:text-sm laptop:text-xl "
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project →
                        </a>
                      )}
                    </p>
                  </div>

                  <div
                    className={`laptop:flex mobile:hidden absolute ${project.imagePosition} w-[600px]`}
                  >
                    <Image
                      src={project.image}
                      className={`
                        h-full w-[600px] object-cover rounded-2xl
                        ${project.hoverTranslate} 
                        transition-all ${project.duration}
                        shadow-lg shadow-black/20
                        group-hover:shadow-xl group-hover:shadow-purple-500/20
                      `}
                    />
                  </div>
                  <div className="laptop:hidden mobile:flex absolute left-0 top-0 w-full h-80 mb-[30px]">
                    <Image
                      src={project.image}
                      className="h-[300px] w-full object-cover rounded-2xl shadow-lg transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          zIndex: 90,
        }}
      >
        <div id="insp" className="py-10">
          <h1 className="text-center mt-10 font-bold mobile:text-4xl laptop:text-7xl text-white mb-6">
            <h1>JS Project</h1>
          </h1>

          <NoSSRCompiler />
        </div>
      </div>
    </div>
  );
}
