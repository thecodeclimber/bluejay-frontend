import "../assets/css/index.css";
import { createWrapper } from 'next-redux-wrapper';
import store from "../redux/store";

const wrapper = createWrapper(store);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
