# Animal Adoption Centre

# What the project is

A themed animal rescue/adoption dashboard where a user can add animals, view them as cards, mark them as adopted, search/filter them, and save the data in the browser.

This is a “practical management app.”

# What did I learn:

- how to store structured data in arrays of objects
- how to render that data into the DOM
- how to listen for user interactions
- how to update the UI after actions
- how to save and restore data from localStorage
- ow to break a problem into reusable functions

# What it demonstrates in a portfolio:

- vanilla JS ability
- DOM manipulation
- CRUD operations
- event handling
- practical UI logic
- local persistence
- ability to make a project feel personal

# Core skills covered:

- variables
- functions
- objects
- arrays
- conditionals
- loops or array iteration
- map, filter, find
- event listeners
- form handling
- browser storage
- rendering
- state-like thinking without React

# Features:

- add animal
- delete animal
- mark as adopted
- search by name
- filter by species
- save animals in localStorage

- edit animal
- favorite animal
- featured animal section
- adoption stats
- personality field
- rescue story field
- empty state message
- simple validation

- species badges
- adoption counter
- “recently added” sorting
- theme toggle
- responsive card layout

# Example animal data structure

const animal = { id: 1,
name: "Matcha",
type: "Cat",
dateOfBirth: "2025-11-01",
status: "available",
liked: false,
favorited: false,
personality: "Curious", "Playful",
about: "Born into a long line of Maine Coons",
image: "Image of Matcha", <- an image file path
};

# Logic:

addAnimal()
renderAnimals()
deleteAnimal(id)
toggleAdopted(id)
toggleFavorite(id)
searchAnimals(query)
filterAnimals(type)
saveAnimals()
loadAnimals()
updateStats()

# Used:

- HTML
- CSS
- JavaScript
- browser localStorage
- VS Code
- browser DevTools
- Git and GitHub

# Concepts I have practiced:

- selecting elements
- handling submit events
- preventing default form submission
- getting values from inputs
- pushing new objects into arrays
- updating object properties
- re-rendering after changes
- saving arrays as JSON in localStorage
- parsing JSON back into data

# Plans for the APP

# Stage 1

Features:

- add animal with form
- display card
- like animal
- favorite animal
- adopt animal
- move adopted animals to Found Home
- disable adopt/favorite after adoption
- save everything in localStorage

# Stage 2 — app polish

Add:

- image preview
- search
- filter by species
- stats
- empty states
- theme toggle
- better confirm modal

# Stage 3 — real users

Move to React and Firebase/Supabase.

Add:

- login/signup
- only logged-in users can adopt
- adopted animals saved to user account
- animals shared across all users
- maybe admin role for adding animals

# Stage 4 — advanced features

Experiment with:

- adoption history
- user profile
- comments
- animal updates
- “evolving theme” or progress/growth features

# About the “evolving” idea

For example, once an animal is adopted:

- it can gain happiness points
- its card can visually change
- users can unlock badges
- animal profile can “grow”
