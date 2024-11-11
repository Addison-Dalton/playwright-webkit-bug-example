import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    // fetch request to our internal API that returns a list of manufacturers
  }, []);

  return (
    <>
      <h1>Manufacturers</h1>
      {manufacturers.length === 0 && <p>Loading manufactuers...</p>}
      <ul>
        {manufacturers.map((manufacturer) => (
          <li key={manufacturer.id}>{manufacturer.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
