import Head from "next/head";
import ProductCategories from "@/components/product/categories";

export default function ProductCategoriesPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | ProductCategories Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductCategories />
    </>
  );
};
