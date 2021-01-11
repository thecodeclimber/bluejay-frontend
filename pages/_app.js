import MainLayout from "@/components//layouts/main/index.js";
import Store from "../hooks/store";
import "../assets/css/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Store>
  );
}

export default MyApp;
