import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Reel from "./components/reel";
import Games from "./pages/games";
import Publishers from "./pages/publishers";
import Roadmap from "./pages/roadmap";
import "./App.css";

function App() {
  return (
    <>
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
