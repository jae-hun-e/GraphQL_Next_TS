import '../styles/globals.css'
import  {Component} from "react";
import {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
