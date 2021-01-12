import Head from "next/head";
import MoreDetails from "@/components/product/productDetail/moreDetails";

export default function ProductDetailPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | More Detail Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoreDetails />
    </>
  );
}
