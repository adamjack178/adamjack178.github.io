import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Reel from "./components/reel";
import Games from "./pages/games";
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
        <Route path="/publishers" element={<></>} />
        <Route path="/roadmap" element={<></>} />
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
