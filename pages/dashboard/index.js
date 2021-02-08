import Head from "next/head";
import { useRouter } from "next/router";

export default function DashboardPage() {
  const router = useRouter();
  router.push("/dashboard/profile");
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Dashboard Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
