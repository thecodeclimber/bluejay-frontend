import Head from "next/head";
import GoogleFonts from "next-google-fonts";

const Base = ({ children }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" />
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>Bluejay Fasteners</title>
    </Head>
    {children}
  </>
);

export default Base;
