import Head from "next/head";
import InvoiceDetail from "@/components/dashboard/invoices/invoiceDetail";

export default function InvoiceDetailPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | InvoiceDetail Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InvoiceDetail />
    </>
  );
}
