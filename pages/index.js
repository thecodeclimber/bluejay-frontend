import Head from "next/head";
import Home from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
