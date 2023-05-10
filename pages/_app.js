import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import { AnimatePresence } from "framer-motion";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps, router }) {
  const renderProps = () => {
    const getLayout = Component.getLayout ?? ((page) => <Layout key={router.pathname}>{page}</Layout>);
    return getLayout(<Component key={router.pathname} {...pageProps} />);
  };

  return (
    <div className="font-latoBold relative h-screen overflow-hidden py-24 px-12 lg:px-48">
      <Navbar />
      <AnimatePresence initial={false} onExitComplete={() => console.log("exit complete")}>
        {renderProps()}
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
