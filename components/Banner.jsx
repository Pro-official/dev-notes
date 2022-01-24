import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Banner = () => {
  return (
    <div className="md:max-w-7xl w-full mx-auto text-center ">
      <h1 className="font-header mt-40 font-bold text-6xl md:text-8xl leading-15 text-black my-auto mb-8">
        The Modern <span className={styles.secondBtn}>Blog</span> <br /> For
        Developers
      </h1>
      <p className="md:max-w-3xl w-full mx-auto text-xl font-normal mb-8">
        DevNotes gives you access to the best resources for learning and
        becoming of what you desire. Make it your personal blog, share your
        knowledge with the world, and learn from the best.
      </p>
      <div className="mb-24">
        <Link href="/explore" passHref>
          <button className="text-white drop-shadow-2xl border-2 font-links font-bold text-xl bg-black px-4 py-2 rounded-lg mr-4 hover:text-black hover:bg-white hover:border-2 border-black">
            Explore More
          </button>
        </Link>
        <Link href="/learn" passHref>
          <button className="text-black drop-shadow-2xl font-links font-bold text-xl bg-transparent border-2 border-black px-4 py-2 rounded-lg hover:text-white hover:bg-black ">
            Learn More
          </button>
        </Link>
      </div>
      <hr className=" border-black" />
    </div>
  );
};

export default Banner;
