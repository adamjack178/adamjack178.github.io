import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Games from "./pages/games";
import Publishers from "./pages/publishers";
import Roadmap from "./pages/roadmap";
import "./App.css";
import Leaderboard from "./pages/leaderboard";

import { Station } from "./startWeb3.js"

function App() {

  const station = new Station();

   useEffect(() => {
    async function fetchData() {
     await station.loadContract();
   }
   fetchData();
  }, [station]);

  return (
    <>
      <Header stations={station}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero stations={station}/>
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
        <Route
          path="/leaderboard"
          element={
            <>
              {" "}
              <Leaderboard />{" "}
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
