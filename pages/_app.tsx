import store from "@redux/store";
import "@styles/global.scss";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
