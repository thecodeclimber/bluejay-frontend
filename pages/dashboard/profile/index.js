import Head from "next/head";
import Profile from "@/components/dashboard/profile";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
    </>
  );
}
