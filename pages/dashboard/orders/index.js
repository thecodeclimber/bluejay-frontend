import Head from "next/head";
import Orders from "@/components/dashboard/orders";

export default function OrdersPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Orders />
    </>
  );
}
