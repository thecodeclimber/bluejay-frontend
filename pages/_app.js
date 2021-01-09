import "../assets/css/index.css";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import MainLayout from "@/components//layouts/main/index.js";
import Store from "../hooks/store";

const wrapper = createWrapper(store);

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Store>
  );
}

export default wrapper.withRedux(MyApp);
