import Head from "next/head";
import Dashboard from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Dashboard Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}
