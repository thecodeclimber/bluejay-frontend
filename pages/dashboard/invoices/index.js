import Head from "next/head";
import Invoices from "@/components/dashboard/invoices";

export default function InvoicesPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Profile Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Invoices />
    </>
  );
}
