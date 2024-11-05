"use client"
import {AppWrapper} from '../context/state';
import {useEffect, useState} from "react";
import "./../app/globals.css";
import Menu from "@/app/layout/menu";
import Footer from "@/app/layout/footer";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
  const [hasFooter, setHasFooter] = useState(false);
  const router = useRouter()

  useEffect((e) => {
    setHasFooter(!router.pathname.includes('editor'))
  }, [router]);


  return (
    <AppWrapper>
      <div>
        <div className='bg-galaxy bg-cover pb-3'>
          <Menu/>
        </div>
        <div onLoadStart={() => console.log(' load body')}>
          <Component {...pageProps} />
        </div>
        {hasFooter && <footer>
          <Footer/>
        </footer>}
      </div>
    </AppWrapper>
  );
}

export default MyApp;
