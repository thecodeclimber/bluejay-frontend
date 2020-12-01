import Head from "next/head";
// import MainLayout from "@/components/layouts/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>BlueJay Fasteners | Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h3 className="text-blue-500">Header</h3>
        <h3 className="font-body">Ubuntu</h3>
        <h3>Not Ubuntu</h3>
      </header>
      <main>
        <h1>Bluejay Fasteners</h1>
      </main>

      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
}
