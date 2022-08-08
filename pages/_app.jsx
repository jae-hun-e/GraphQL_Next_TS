import '../styles/globals.css'
import  {Component} from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({ctx, Component}) => {

    const pageProps = await Component.getInitialProps?.(ctx);

    return{pageProps}
}

export default MyApp
