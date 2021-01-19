import Head from "next/head";
import ProductCategories from "@/components/categories";

export default function ProductCategoriesPage(query) {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | ProductCategories Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductCategories query={query} />
    </>
  );
}

ProductCategoriesPage.getInitialProps = async ({ query }) => {
  return query;
};
