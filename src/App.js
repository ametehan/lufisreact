import React from "react";
import { FooterContainer } from "./containers/footer";
import Header from "./components/header/Header";
import Card from "./components/Cards/Card";
import SauerstoffCard from "./components/Sauerstoff/SauerstoffCard";
import Lautstaerke from "./components/Lautstaerke/Lautstaerke";

function App() {
  return (
    <>
      <Header />
      <SauerstoffCard />
      <Card />
      <Lautstaerke />
      <FooterContainer />
    </>
  );
}

export default App;
