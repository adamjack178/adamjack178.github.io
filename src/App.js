import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Web3Modal } from '@web3modal/react'
import { chains, providers } from '@web3modal/ethereum'

import Header from "./components/header";
import Hero from "./components/hero";
import Reel from "./components/reel";
import Games from "./pages/games";
import Publishers from "./pages/publishers";
import Roadmap from "./pages/roadmap";
import "./App.css";

const config = {
  projectId: 'f25a374e565e394d4a1943eca89d38b6',
  theme: 'dark',
  accentColor: 'green',
  cacheProvider: true,
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
      chains: [
      chains.mainnet,
      chains.avalanche,
      chains.polygon,
      chains.fantom
    ],
    providers: [providers.walletConnectProvider({ projectId:  'f25a374e565e394d4a1943eca89d38b6' })]
  }
}

function App() {
  return (
    <>
      <Web3Modal config={config} />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Reel />
            </>
          }
        />
        <Route
          path="/games"
          element={
            <>
              {" "}
              <Games />{" "}
            </>
          }
        />
        <Route
          path="/publishers"
          element={
            <>
              {" "}
              <Publishers />{" "}
            </>
          }
        />
        <Route
          path="/roadmap"
          element={
            <>
              {" "}
              <Roadmap />{" "}
            </>
          }
        />
      </Routes>
    </>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
