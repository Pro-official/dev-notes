import Head from "next/head";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevNotes || Home</title>
        <meta name="description" content="DevNote - Developers Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <Banner></Banner>
    </>
  );
}
