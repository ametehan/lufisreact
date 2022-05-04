import React from "react";
import { FooterContainer } from "./containers/footer";
import Header from "./components/header/Header";
import Card from "./components/Cards/Card";
import SauerstoffCard from "./components/Sauerstoff/SauerstoffCard";

function App() {
  return (
    <>
      <Header />
      <SauerstoffCard />
      <Card />
      <FooterContainer />
    </>
  );
}

export default App;
