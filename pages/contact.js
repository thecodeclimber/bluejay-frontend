import Head from "next/head";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Contact Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
}
