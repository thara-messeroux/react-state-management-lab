// src/App.jsx

import { useState } from "react";
import "./App.css";

// Static data (starting point)
// In a real app, this might come from an API or database
// We use this as the initial list of fighters available to pick from
const zombieFighters = [
  {
    id: 1,
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
  },
  {
    id: 2,
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
  },
  {
    id: 3,
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
  },
  {
    id: 4,
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
  },
  {
    id: 5,
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
  },
  {
    id: 6,
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
  },
  {
    id: 7,
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
  },
  {
    id: 8,
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
  },
  {
    id: 9,
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
  },
  {
    id: 10,
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
  },
];

const App = () => {
  // STATE = app memory

  const [fighters, setFighters] = useState(zombieFighters);
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

  // Calculate total strength of the team
  const totalStrength = team.reduce((sum, fighter) => {
    return sum + fighter.strength;
  }, 0);

  // Calculate total agility of the team
  const totalAgility = team.reduce((sum, fighter) => {
    return sum + fighter.agility;
  }, 0);

  // Handles removing a fighter from the team
  const handleRemoveFighter = (fighter) => {
    // Remove from team
    setTeam(team.filter((f) => f.id !== fighter.id));

    // Add back to available fighters
    setFighters([...fighters, fighter]);

    // Refund money
    setMoney(money + fighter.price);
  };

  return (
    <>
      <h1>Reactville Fighters</h1>

      <h2>Money: {money}</h2>

      <h2>Team Strength: {totalStrength}</h2>

      <h2>Team Agility: {totalAgility}</h2>

      <h2>Available Fighters</h2>
      {/* We loop through fighters and display each one */}
      <ul>
        {fighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} width="150" />
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
      // If team is empty, show message. Otherwise, show team members
      {team.length === 0 ? (
        <p>Pick some team members</p>
      ) : (
        <ul>
          {team.map((fighter) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} width="150" />
              <h2>{fighter.name}</h2>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>

              {/* NEW */}
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;


