//import { useState } from "react";
import "./App.css";
import Card from "./Cards.jsx";
import movies from "../data/data.js";

function App() {
  return (
    <div className="cards-container">
      {movies.map((movie) => (
        <Card
          title={movie.title}
          producer={movie.producer}
          rating={movie.rating}
          imageSrc={movie.imageSrc}
          imageAlt={movie.imageAlt}
        />
      ))}
    </div>
  );
}

export default App;
