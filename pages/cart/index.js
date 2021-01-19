import Head from "next/head";
import Cart from "@/components/cart";

export default function CartPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Shopping Cart Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart />
    </>
  );
}
