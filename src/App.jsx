// src/App.jsx

import { useState } from "react";
import "./App.css";

// Static data (starting point)
// This is our data (like a mini database)
const initialFighters = [
  { id: 1, name: "Ryu", price: 12, strength: 6, agility: 4 },
  { id: 2, name: "Ken", price: 10, strength: 5, agility: 5 },
  { id: 3, name: "Chun-Li", price: 14, strength: 4, agility: 7 },
  { id: 4, name: "Guile", price: 11, strength: 5, agility: 4 },
];

const App = () => {
  // STATE = app memory

  const [fighters, setFighters] = useState(initialFighters);
  // fighters available to pick from

  const [team, setTeam] = useState([]);
  // selected fighters

  const [money, setMoney] = useState(100);
  // starting money

  // Handles adding a fighter to the team
  const handleAddFighter = (fighter) => {
    // Prevent buying if not enough money
    if (money < fighter.price) return;

    // Add fighter to team
    setTeam([...team, fighter]);
    // WHY → create a NEW array (immutability)

    // Remove fighter from available list
    setFighters(fighters.filter((f) => f.id !== fighter.id));
    // WHY → cannot pick same fighter twice

    // Decrease money
    setMoney(money - fighter.price);
  };

  const totalStrength = team.reduce((sum, fighter) => {
    return sum + fighter.strength;
  }, 0);

  return (
    <>
      <h1>Reactville Fighters</h1>

      <h2>Money: {money}</h2>

      <h2>Available Fighters</h2>
      {/* We loop through fighters and display each one */}
      <ul>
        {fighters.map((fighter) => (
          <li key={fighter.id}>
            <h2>{fighter.name}</h2>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>

            {/* Button to add fighter */}
            <button onClick={() => handleAddFighter(fighter)}>Add</button>

          </li>
        ))}
      </ul>

      <h2>Team</h2>
      <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <h2>{fighter.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};;

export default App;


