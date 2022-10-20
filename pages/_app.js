import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className='content'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
