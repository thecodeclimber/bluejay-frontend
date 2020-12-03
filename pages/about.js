import Head from "next/head";
import About from "@/components/about";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}
