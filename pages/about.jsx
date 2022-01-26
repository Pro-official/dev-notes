import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <>
      <Navigation />
      <Head>
        <title>About | DevNotes</title>
      </Head>
      <div className="md:max-w-7xl w-full mx-auto text-center ">
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
            <a href="/Resume.pdf" download={true}>
              My Resume
            </a>
          </button>
          {/* <Link href="/blogs" passHref>
            <button className="text-black drop-shadow-2xl font-links font-bold text-xl bg-transparent border-2 border-black px-4 py-2 rounded-lg hover:text-white hover:bg-black ">
              Learn More
            </button>
          </Link> */}
        </div>
        <hr className=" border-black" />
      </div>
    </>
  );
};

export default about;
