# React State Management Lab

A React lab focused on learning how to manage and update state through user interactions.

## Objective

Build a small React app where users can:
- add fighters to a team
- remove fighters from a team
- track available money
- display total team strength
- display total team agility

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

## Key Takeaways

- React apps often start from a template, but real work begins after cleanup
- ESLint helps maintain code quality and consistency
- Clean setup makes future steps easier and less confusing