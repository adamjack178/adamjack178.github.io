import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Games from "./components/games";
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
              <Hero /> <Games />
            </>
          }
        />
        <Route path="/consoles" element={<></>} />
        <Route path="/games" element={<></>} />
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
