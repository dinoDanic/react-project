import type { AppProps } from "next/app";
import { Normalize } from "styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
