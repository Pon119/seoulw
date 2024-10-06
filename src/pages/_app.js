import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuTapBar from "@/components/MenuTapBar";
import "@/styles/globals.scss";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
    
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
