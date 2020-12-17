import Head from "next/head";
import ProductDetail from "@/components/product/productDetail";

export default function ProductDetailPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Product Detail Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDetail />
    </>
  );
}
