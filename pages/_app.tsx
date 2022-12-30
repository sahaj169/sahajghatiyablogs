import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/ui/loading/loading";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return (
      <Layout>
        <Head>
          <title>Sahaj Ghatiya Blogs</title>
          <meta
            name="description"
            content="Sahaj Ghatiya Blog Website built on NextJs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{ paddingTop: "4.5rem", minHeight: "100vh" }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Sahaj Ghatiya Blogs</title>
        <meta
          name="description"
          content="Sahaj Ghatiya Blog Website built on NextJs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ paddingTop: "4.5rem", minHeight: "100vh" }}>
        <Component {...pageProps} />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
}
