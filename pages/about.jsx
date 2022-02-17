import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import { FaBootstrap, FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiHeroku, SiTailwindcss, SiNextdotjs, SiVercel, SiMaterialui, SiJavascript } from "react-icons/si";
import Link from "next/link";

const about = () => {
  return (
    <>
      <Navigation />
      <Head>
        <title>About | DevNotes</title>
      </Head>
      <div className="md:max-w-7xl w-full mx-auto text-center">
        <h1 className="font-header mt-40 font-bold text-4xl md:text-6xl md:leading-14 leading-12 text-black my-auto mb-8">
          The Modern <span className={styles.secondBtn}>Blog of</span> <br />
          Promise Ghosh Chowdhury
        </h1>
        <p className="md:max-w-3xl w-full mx-auto text-xl font-normal mb-8">
          CSE Student | Android Developer | Web Developer - I believe,
          simplicity is a prerequisite to reliability.
        </p>
        <div className="mb-24">
          <button className="text-white drop-shadow-2xl border-2 font-links font-bold text-xl bg-black px-4 py-2 rounded-lg mr-4 hover:text-black hover:bg-white hover:border-2 border-black">
            <a href="#projects">My Projects</a>
          </button>
        </div>
        <hr className=" border-black" />
      </div>
      <div className="md:max-w-4xl w-full mx-auto text-center">
        <div>
          <h1 className="mt-24 font-header font-bold text-3xl text-black mb-10">
            Personal Project Experience
          </h1>
        </div>
        {/* First project */}
        <Link href="https://design-world-official.web.app/" passHref>
        <div className="cursor-pointer flex justify-around items-center text-center ml-auto drop-shadow-2xl shadow-2xl py-8 px-4 mb-10">
          <Image
            className="rounded-2xl"
            src="/design-world.png"
            alt="Picture of the author"
            width={550}
            height={320}
          />
          <div className="w-1/2 px-4">
            <h1 className="text-2xl mb-4 font-bold font-title">Design World</h1>
            <h1 className="flex justify-center items-center font-semibold">
              Front-End Technologies: &nbsp; <FaReact />
              &nbsp; <FaBootstrap />
              &nbsp; <FaHtml5 /> &nbsp; <FaCss3 />
            </h1>
            <h1 className="flex justify-center items-center font-semibold">
              Back-End Technologies: &nbsp; <FaNodeJs />
              &nbsp; <SiMongodb /> &nbsp; <SiFirebase />
              &nbsp; <SiExpress /> &nbsp; <SiHeroku />
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                Achieved a platform where artisans share their art and should
                gain a massive 40% uplift for their professional careers.
              </li>
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                Accomplished 89% at performance, 92% at accessibility, 93% at
                best practices and 100% at SEO in Lighthouse automated tool.
              </li>
            </h1>
          </div>
        </div>
        </Link>
        {/* Second project */}
        <Link href="https://dev-notes-pro-official.vercel.app/" passHref>
        <div className="cursor-pointer flex px-4 justify-around items-center text-center ml-auto drop-shadow-2xl shadow-2xl py-8 mb-10">
          <Image
            className="rounded-2xl"
            src="/dev-notes.png"
            alt="Picture of the author"
            width={550}
            height={320}
          />
          <div className="w-1/2 px-4">
            <h1 className="text-2xl mb-4 font-bold font-title">DevNotes</h1>
            <h1 className="flex justify-center items-center font-semibold">
              Front-End Technologies: &nbsp; <SiNextdotjs />
              &nbsp; <SiTailwindcss />
              &nbsp; <FaHtml5 /> &nbsp; <FaCss3 />
            </h1>
            <h1 className="flex justify-center items-center font-semibold">
              Back-End Technologies: &nbsp; <FaNodeJs />
              &nbsp; <SiMongodb /> &nbsp; <SiVercel />
              &nbsp; <SiExpress />
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                We&apos;ve got a modern notepad where successful developers tell about their journey. 
 Informs everyone about how to achieve success. 
 This gives 100% success chances to a new developer
              </li>
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
              Accomplished 100% at performance, 93% at accessibility, 93% at best practices and 100% at 
SEO in Chrome dev-tool.
              </li>
            </h1>
          </div>
        </div></Link>
        {/* Third Project */}
        <Link href="https://cycle-pro-client-server.web.app/" passHref>
        <div className="cursor-pointer flex px-4 justify-around items-center text-center ml-auto drop-shadow-2xl shadow-2xl py-8 mb-10">
          <Image
            className="rounded-2xl"
            src="/cycle-pro.png"
            alt="Picture of the author"
            width={550}
            height={320}
          />
          <div className="w-1/2 px-4">
            <h1 className="text-2xl mb-4 font-bold font-title">Cycle of Pros</h1>
            <h1 className="flex justify-center items-center font-semibold">
              Front-End Technologies: &nbsp; <FaReact />
              &nbsp; <SiMaterialui />
              &nbsp; <FaHtml5 /> &nbsp; <FaCss3 />
            </h1>
            <h1 className="flex justify-center items-center font-semibold">
              Back-End Technologies: &nbsp; <FaNodeJs />
              &nbsp; <SiMongodb /> &nbsp; <SiFirebase />
              &nbsp; <SiExpress /> &nbsp; <SiHeroku />
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
              Company has the access to create new product, showcase them, update and delete them.
 This digitalization of this Bicycle brand would boost their business at a huge rate. 
 New customer is expected to boost 2 fold.
              </li>
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                Accomplished 89% at performance, 92% at accessibility, 93% at
                best practices and 100% at SEO in Lighthouse automated tool.
              </li>
            </h1>
          </div>
        </div></Link>
        {/* Fourth Project */}
        <Link href="https://travel-pro-react-node.web.app/" passHref>
        <div className="cursor-pointer flex px-4 justify-around items-center text-center ml-auto drop-shadow-2xl shadow-2xl py-8 mb-10">
          <Image
            className="rounded-2xl"
            src="/travel-pro.png"
            alt="Picture of the author"
            width={550}
            height={320}
          />
          <div className="w-1/2 px-4">
            <h1 className="text-2xl mb-4 font-bold font-title">Pro Travels</h1>
            <h1 className="flex justify-center items-center font-semibold">
              Front-End Technologies: &nbsp; <FaReact />
              &nbsp; <FaBootstrap />
              &nbsp; <FaHtml5 /> &nbsp; <FaCss3 />
            </h1>
            <h1 className="flex justify-center items-center font-semibold">
              Back-End Technologies: &nbsp; <FaNodeJs />
              &nbsp; <SiMongodb /> &nbsp; <SiFirebase />
              &nbsp; <SiExpress /> &nbsp; <SiHeroku />
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                Achieved a platform where artisans share their art and should
                gain a massive 40% uplift for their professional careers.
              </li>
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                Accomplished 89% at performance, 92% at accessibility, 93% at
                best practices and 100% at SEO in Lighthouse automated tool.
              </li>
            </h1>
          </div>
        </div></Link>
        {/* Fifth Project */}
        <Link href='https://pro-official.github.io/Intrans/' passHref>
        <div className="cursor-pointer flex px-4 justify-around items-center text-center ml-auto drop-shadow-2xl shadow-2xl py-8 mb-10">
          <Image
            className="rounded-2xl"
            src="/intrans.png"
            alt="Picture of the author"
            width={550}
            height={320}
          />
          <div className="w-1/2 px-4">
            <h1 className="text-2xl mb-4 font-bold font-title">Intrans</h1>
            <h1 className="flex justify-center items-center font-semibold">
              Technologies: &nbsp; <SiJavascript />
              &nbsp; <SiTailwindcss />
              &nbsp; <FaHtml5 /> &nbsp; <FaCss3 />
            </h1>
            <h1 className="flex justify-center items-center font-semibold">
              Back-End Technologies: &nbsp; <FaNodeJs />
              &nbsp; <SiMongodb /> &nbsp; <SiFirebase />
              &nbsp; <SiExpress /> &nbsp; <SiHeroku />
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                Achieved a platform where artisans share their art and should
                gain a massive 40% uplift for their professional careers.
              </li>
            </h1>
            <h1 className="text-left mt-4 ml-2 font-base">
              <li>
                Accomplished 89% at performance, 92% at accessibility, 93% at
                best practices and 100% at SEO in Lighthouse automated tool.
              </li>
            </h1>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default about;
