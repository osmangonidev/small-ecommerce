import "bootstrap/dist/css/bootstrap.css";
import { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

export const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  });

  const [cart, setCart] = useState(0);
  const [isLogged, setIsLogged] = useState("")


  return (
    <AppContext.Provider value={[isLogged, setIsLogged, cart, setCart]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
