import React from "react";
import { FooterContainer } from "./containers/footer";
import Card from "./components/Cards/Card";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Card />
      <FooterContainer />
    </Router>
  );
}

export default App;
