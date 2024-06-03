import React,{ useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "../context/Context.jsx";
import { Route, Routes } from "react-router-dom";
import Documentation from "./components/Pages/Documentation"
import PageCalculator from "./components/Pages/PageCalculator";
import Footer from './components/Footer'

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main  className={`Theme ${theme}`}>
      <Header/>
      <Routes>
        <Route path="/" element={<PageCalculator></PageCalculator>} />
        <Route path="/documentation" element={<Documentation></Documentation>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
