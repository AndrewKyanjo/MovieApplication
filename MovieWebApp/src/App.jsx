//import { useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

function App() {
  return (
    <div>
      < Card title="lion king" />
    </div>
  );
}

export default App;
