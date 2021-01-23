import Router from "next/router";
import NProgress from "nprogress";
import MainLayout from "@/components//layouts/main/index.js";
import Store from "../hooks/store";
import "../assets/css/index.css";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

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
