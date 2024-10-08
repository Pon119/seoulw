import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuTapBar from "@/components/MenuTapBar";
import "@/styles/globals.scss";
import "@/styles/reset.scss";
import { Suspense } from "react";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Seoul W</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Seoul Culture Website" />
      <meta name="copyright" content="© 2024 Seoul W Website" />
    </Head>
    <div className="app">
      <Header />
      <Suspense fallback={<main><div>로딩중</div></main>}>
        <main>
          <Component {...pageProps} />
        </main>
      </Suspense>
      <Footer />
      <MenuTapBar />
    </div>
    </>
  )
}
