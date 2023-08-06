import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar/NavBar';
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    </>
  
  );
}
