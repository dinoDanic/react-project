import { ApolloProvider } from "@apollo/client";
import { client } from "apolloClient";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Normalize } from "styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Normalize />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
