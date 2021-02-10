import Router from "next/router";
import NProgress from "nprogress";
import Store from "../hooks/store";
import Layout from "@/components//layouts";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
