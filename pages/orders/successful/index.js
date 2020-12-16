import Head from "next/head";
import Successful from "@/components/orders/orderSuccessful";

export default function SuccessfulPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Order Successful Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Successful />
    </>
  );
}
