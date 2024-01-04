import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card/Card";
import Work from "./Work.json";
import MainCard from "./components/mainCard";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <MainCard />

      {Work.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

export default App;
