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
        <title>Fahim Fahrey</title>
        <meta name="description" content="MERN Stack Developer" />
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
          <Link className="mr-2" href="https://github.com/MehmetFaahem">
            <FontAwesomeIcon
              icon={faGithub}
              height="30"
              width="30"
              color="white"
            />
          </Link>
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
              JS Projects
            </h1>
          </Link>
          <Link href="#mernp">
            <h1 className="font-bold p-4 rounded-xl hover:bg-slate-500/50 text-red-100">
              MERN Projects
            </h1>
          </Link>
        </div>
      </div>

      {visible ? (
        <div
          id="NavheaderForphone"
          className="bg-white/40 mobile:flex laptop:hidden transition-all duration-500 w-full place-self-center z-50 flex-col place-content-center place-items-center justify-between static top-0"
        >
          <div className="flex justify-between w-full p-4">
            <Link className="mr-2" href="https://github.com/MehmetFaahem">
              <FontAwesomeIcon
                icon={faGithub}
                height="35"
                width="35"
                color="white"
              />
            </Link>
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
          </div>
          <Drawer
            title="Menu"
            placement="right"
            onClose={closeDrawer}
            visible={drawerVisible}
          >
            <Link href="#introduction">
              <h1 className="font-bold rounded-3xl p-2 bg-white hover:bg-slate-500/50 text-black">
                Intro
              </h1>
            </Link>
            <Link href="#skills">
              <h1 className="font-bold rounded-3xl p-2 bg-white hover:bg-slate-500/50 text-black">
                Skills
              </h1>
            </Link>
            <Link href="#insp">
              <h1 className="font-bold rounded-3xl p-2 bg-white hover:bg-slate-500/50 text-black">
                Projects
              </h1>
            </Link>
            <Link href="#mernp">
              <h1 className="font-bold rounded-3xl p-2 bg-white hover:bg-slate-500/50 text-black">
                MERN
              </h1>
            </Link>
          </Drawer>
        </div>
      ) : null}
      <div
        onScroll={() => setShow(false)}
        style={{
          zIndex: 10,
        }}
        className="flex mobile:flex-col-reverse laptop:flex-row justify-between place-content-center place-items-center p-16"
      >
        <div className="mobile:place-items-center laptop:place-items-start flex flex-col">
          <h1 className="p-2 mobile:mt-[50px] laptop:mt-0 text-blue-900 bg-gradient-to-r from-blue-200 to-cyan-200 mobile:text-[25px] laptop:text-6xl font-fav mobile:text-center laptop:text-left font-bold">
            Fahim Fahrey
          </h1>
          <h1 className="laptop:text-3xl mt-[9px] mobile:text-[13px] text-blue-200 font-fav text-left font-thin">
            Full Stack Developer (MERN)
          </h1>

          <div className="mt-[60px]">
            <a
              href="https://drive.google.com/uc?export=download&id=1O8W3FMYkVukmVnm0Rp2dxgiGi7bk7yb4"
              onClick={TimeOut}
              className="mobile:p-2 laptop:p-4 z-10 t-[20px] hover:bg-blue-200 bg-white mobile:text-[16px] text-black laptop:text-2xl font-bold"
            >
              {saving ? "Downloaded" : downloading}
            </a>
          </div>
        </div>
        <div className="relative rounded-full">
          <div
            className="z-30 rounded-full laptop:mt-0 mobile:mt-6 "
            id="imageOfMe"
          >
            <Image
              src={Pic}
              height="400"
              width="400"
              className="rounded-full shadow-lg shadow-blue-500 outline-1 "
            />
          </div>
        </div>
      </div>
      <Skills />
      <div
        className="p-10 flex flex-col place-items-center"
        style={{
          zIndex: 30,
        }}
      >
        <h1 className="text-center font-bold mobile:text-4xl laptop:text-7xl text-white mb-12">
          Introduction
        </h1>
        <div
          id="introduction"
          className="relative flex flex-row items-center overflow-hidden mt-[30px] w-[93%] mobile:h-[auto] laptop:h-[280px] z-40 bg-gradient-to-r from-sky-900 via-rose-900/20 to-slate-900 rounded-2xl p-5"
        >
          <Image
            height={"320"}
            width={"320"}
            className="absolute mobile:hidden laptop:flex outline-4 outline-double outline-blue-50 rounded-full mobile:top-[-50px] mobile:left-[0px] laptop:top-[-40px] laptop:left-[-45px]"
            src={Pic2}
          />
          <h1 className="text-white text-right laptop:ml-[40%] mobile:bottom-[30px] laptop:bottom-[26%] right-[40px] mobile:w-[100%] laptop:w-[70%] selection:bg-black font-light laptop:text-[20px] mobile:text-[12px] mobile:text-center laptop:text-right">
            As a dedicated React JS & React Native Developer, I am Fahey,
            bringing over 2 years of hands-on experience in crafting efficient
            and scalable solutions. Passionate about staying at the forefront of
            technology trends, I am committed to delivering high-quality code
            and innovative solutions to drive project success. Ready to
            contribute my expertise to dynamic and challenging projects, I
            thrive in collaborative environments where my skills in React
            development can make a significant impact.
          </h1>
          <div
            id="movingItem2"
            style={{
              zIndex: -1,
            }}
            className="w-2/3 h-96 hidden absolute bg-pink-900 rounded-full"
          />
        </div>
      </div>
      <div
        style={{
          zIndex: 90,
        }}
        className="m-16"
      >
        <div id="mernp" className="flex flex-col place-items-center">
          <h1 className="text-center laptop:w-full laptop:inline-block mobile:flex content-center font-bold mobile:text-4xl laptop:text-7xl text-white mb-6">
            <h1>MERN Projects</h1>
          </h1>
          {[
            {
              title: "ERP Software",
              description:
                "This ERP software streamlines business processes by integrating various functions such as accounting, inventory management, and human resources into a single system. It enhances efficiency, accuracy, and productivity by providing real-time data and analytics, enabling informed decision-making and improved overall performance.",

              image: project_three,
              gradient: "from-sky-900/30 to-rose-900/50",
              justify: "justify-start",
              textAlign: "laptop:w-1/2 laptop:text-left",
              hoverTranslate: "hover:-translate-y-[37%]",
              duration: "duration-[5000ms]",
              imagePosition: "right-0 top-0",
            },
            {
              title: "Softex Solution",
              description:
                "This is a Software Service Provider Agency. People can take services from this site as like schedule a meeting. And anyone can apply for a job from here.",
              link: "https://softexsolution.com/",
              image: project_one,
              gradient: "from-rose-900/50 to-sky-900/30",
              justify: "justify-end",
              textAlign:
                "laptop:place-items-end laptop:w-[50%] laptop:text-right",
              hoverTranslate: "hover:-translate-y-[83%]",
              duration: "duration-[10000ms]",
              imagePosition: "left-0 top-0",
            },
            {
              title: "IMEI Web",
              description:
                "Using this web tool, you can check your phone's info. Also you can Unlock, Bypass and Remove including IOS or IPhone.",
              link: "https://www.imeiweb.com/",
              image: project_two,
              gradient: "from-sky-900/30 to-rose-900/50",
              justify: "justify-start",
              textAlign: "laptop:w-1/2 laptop:text-left",
              hoverTranslate: "hover:-translate-y-[40%]",
              duration: "duration-[5000ms]",
              imagePosition: "right-0 top-0",
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`h-[470px] backdrop-blur-[1px] bg-gradient-to-r ${project.gradient} mt-10 relative overflow-hidden rounded-2xl w-full mobile:p-7 laptop:p-16 flex flex-row ${project.justify} mobile:items-end laptop:items-center`}
            >
              <div className={`flex flex-col ${project.textAlign}`}>
                <h1 className="text-xl laptop:text-6xl text-orange-300 font-bold laptop:mt-0 mobile:mt-[40px]">
                  {project.title}
                </h1>
                <p className="mobile:text-sm text-blue-200 laptop:text-2xl mobile:mt-2 laptop:mt-7">
                  {project.description}{" "}
                  {project.link && (
                    <span>
                      <a
                        className="pt-10 mobile:text-sm laptop:text-xl text-orange-200"
                        href={project.link}
                      >
                        Click To Visit
                      </a>
                    </span>
                  )}
                </p>
              </div>

              <div
                style={{
                  width: "600px",
                }}
                className={`laptop:flex mobile:hidden absolute ${project.imagePosition}`}
              >
                <Image
                  src={project.image}
                  className={`h-full ${project.hoverTranslate} rounded-2xl transition-all ${project.duration} w-[600px] object-cover`}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  marginBottom: "30px",
                }}
                className="laptop:hidden h-80 mobile:flex left-0 top-0 absolute"
              >
                <Image
                  src={project.image}
                  className="h-[300px] shadow-lg rounded-2xl shadow-white transition-all duration-700 w-full object-cover"
                />
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
        <div id="insp">
          <h1 className="text-center mt-10 font-bold mobile:text-4xl laptop:text-7xl text-white mb-6">
            <h1>JS Projects</h1>
          </h1>

          <div className="bg-gradient-to-r from-rose-900/25 to-slate-900 rounded-2xl p-10 m-16">
            <div className="flex font-bold place-items-center">
              <h1 className="text-2xl mt-4 mb-4">JavaScript</h1>
              <h1 className="bg-yellow-400 ml-4 text-black p-3 text-3xl">JS</h1>
            </div>
            <NoSSRCompiler />
          </div>
        </div>
      </div>
    </div>
  );
}
