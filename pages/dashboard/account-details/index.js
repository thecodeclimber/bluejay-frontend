import Head from "next/head";
import AccountDetails from "@/components/dashboard/accountDetails";

export default function InvoicesPage() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | account-details Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountDetails />
    </>
  );
}
