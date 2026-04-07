
# Reactville Fighters

A simple React app where you build a team of fighters using a budget.

## React State Management Lab

A React lab focused on learning how to manage and update state through user interactions.

## What it does

- You start with a fixed amount of money
- You can add fighters to your team
- Each fighter has:
  - price
  - strength
  - agility
- Your team stats update automatically
- You can remove fighters and get your money back

## Objective

Build a small React app where users can:
- add fighters to a team
- remove fighters from a team
- track available money
- display total team strength
- display total team agility

## Features

- useState for managing data
- Dynamic UI updates
- Conditional rendering (empty team message)
- Simple, clean UI with a glass-style design

## How to run

- ```npm install```
- ```npm run dev```

## Tech Used

- React
- Vite
- JavaScript
- CSS
- ESLint


## Progress Log

### Step 1 🐣
- Created the React app with Vite
- Installed project dependencies
- Started the development server

**Why it matters**
- Sets up the project foundation so the app can run locally

**Engineering principle**
- Project setup

---

### Step 2 🐢
- Removed the default Vite starter code
- Updated ESLint rules for the lab
- Replaced the starter UI with a simple `Hello world!`
- Added the lab starter CSS

**Why it matters**
- Creates a clean starting point for building the app
- Reduces unnecessary warnings during development

**Engineering principle**
- Codebase cleanup
- Linting
- Clean project setup

---

## Step 3 🦊

- Replaced `App.css` with the lab starter styles
- Added spacing around the app with `#root`
- Set up `ul` and `li` styles for future fighter cards

**Why it matters**
- Prepares the layout before rendering the real app content
- Makes future fighter cards easier to display cleanly

**Engineering principle**
- UI foundation
- Separation of structure and styling

---

## Step 4 🐼

- Created a `fighters` array with sample data
- Used `.map()` to render each fighter in a list
- Displayed fighter name, price, strength, and agility

**Why it matters**
- Allows the UI to display dynamic data instead of static text
- Prepares the app for user interaction in later steps

**Engineering principle**
- Rendering lists
- Data-driven UI

---

## Step 5 🐯

- Added `useState` to manage app data
- Created state for:
  - fighters
  - team
  - money
- Rendered money and team sections

**Why it matters**
- Allows the app to respond to user actions
- Enables dynamic updates in the UI

**Engineering principle**
- State management
- Single source of truth

---

## Step 6 🐙

- Added `handleAddFighter` function
- Added "Add" button for each fighter
- Updated state when user clicks:
  - adds fighter to team
  - removes fighter from available list
  - decreases money

**Why it matters**
- Enables user interaction
- Connects UI actions to state updates

**Engineering principle**
- Event handling
- State updates
- Immutability

---

## Step 7 🦁

- Added a `totalStrength` variable using `reduce()`
- Displayed total team strength in the UI
- Set the default total to `0` when the team is empty

**Why it matters**
- Shows a live calculated value based on current state
- Helps users understand the team’s current power

**Engineering principle**
- Derived data
- State-based UI

---

## Step 8 🛠️

- Cleared default Vite styles from `index.css`
- Kept only a simple body reset

**Why it matters**
- Prevents starter template styles from interfering with the lab layout
- Makes the app layout behave more predictably

**Engineering principle**
- Debugging CSS conflicts
- Clean global styles

---

## Step 9 🐼

- Added `totalAgility` using `reduce()`
- Displayed total agility in the UI

**Why it matters**
- Shows additional derived data from state
- Improves visibility of team stats

**Engineering principle**
- Derived data
- State-driven UI

---

## Step 10 🐸

- Added `handleRemoveFighter` function
- Added "Remove" button in team section
- Updated state when removing:
  - removes fighter from team
  - adds fighter back to available list
  - refunds money

**Why it matters**
- Allows reversing user actions
- Completes full interaction cycle

**Engineering principle**
- CRUD (Delete)
- State synchronization
- Event handling

---

## Step 11 🐢

- Replaced the sample fighter data with the official GA `zombieFighters` data
- Updated the fighters state to use `zombieFighters`

**Why it matters**
- Aligns the project with the official lab requirements
- Keeps the logic the same while using the correct dataset

**Engineering principle**
- Spec alignment
- Data-driven UI

---

## Step 12 🐢

- Added fighter images to the Available Fighters section
- Added fighter images to the Team section

**Why it matters**
- Matches the official lab requirement for character display
- Makes each fighter card more complete and visually clear

**Engineering principle**
- Data-driven UI
- Spec alignment

---

## Step 13 🐣

- Added conditional rendering for the empty team state
- Displayed `Pick some team members` when no fighters are selected
- Cleaned the component ending syntax

**Why it matters**
- Matches the final GA lab requirement
- Improves clarity when the team is empty

**Engineering principle**
- Conditional rendering
- UI state feedback

---

## Key Takeaways

- React apps often start from a template, but real work begins after cleanup
- ESLint helps maintain code quality and consistency
- Clean setup makes future steps easier and less confusing