import Head from "next/head";
import React from "react";
import Navigation from "../components/Navigation";

const signin = () => {
  return (
    <>
      <Navigation />
      <Head>
        <title>Sign In | DevNotes</title>
      </Head>
      <div>
        <h1 className="text-center font-header font-bold text-6xl mt-40">
          Sign In section coming soon...
        </h1>
      </div>
    </>
  );
};

export default signin;
