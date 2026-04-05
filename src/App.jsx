// src/App.jsx

import "./App.css";

// This is our data (like a mini database)
const fighters = [
  { id: 1, name: "Ryu", price: 12, strength: 6, agility: 4 },
  { id: 2, name: "Ken", price: 10, strength: 5, agility: 5 },
  { id: 3, name: "Chun-Li", price: 14, strength: 4, agility: 7 },
  { id: 4, name: "Guile", price: 11, strength: 5, agility: 4 },
];

const App = () => {
  return (
    <>
      <h1>Reactville Fighters</h1>

      {/* We loop through fighters and display each one */}
      <ul>
        {fighters.map((fighter) => (
          <li key={fighter.id}>
            <h2>{fighter.name}</h2>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;


