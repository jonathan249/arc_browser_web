import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function ARC_BROWSER_WEB({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
