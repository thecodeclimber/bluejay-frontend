import "../assets/css/index.css";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import MainLayout from "@/components//layouts/main/index.js";

const wrapper = createWrapper(store);

function MyApp({ Component, pageProps }) {
  return <MainLayout><Component {...pageProps} /></MainLayout>;
}

export default wrapper.withRedux(MyApp);
