import Head from "next/head";
import React from "react";
import Navigation from "../components/Navigation";

const videos = () => {
  return (
    <>
      <Navigation></Navigation>
      <Head>
        <title>Videos | DevNotes</title>
      </Head>
      <div className="text-center font-header font-bold text-6xl mt-40">
        <h1>Videos Section Comming Soon...</h1>
      </div>
    </>
  );
};

export default videos;
