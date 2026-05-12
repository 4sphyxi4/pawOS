# pawOS

pawOS is a dreamy pixel-style desktop interface built with React.  
It presents an animal rescue/adoption management system as a fictional operating system, with a start menu, taskbar, draggable-style windows, and separate feature views such as Dashboard, Animal Centre, Organizer, Mood Log, PawMail, Milestones, and Projects.

The goal of this project is to combine practical React architecture with a highly personal visual style.

---

## Project Concept

pawOS is designed like a small custom operating system for managing animal rescue information.

Instead of using a traditional website layout, the user interacts with:

- a desktop environment
- a start menu
- floating windows
- feature views inside those windows
- shared animal data across different sections

The main domain of the project is animal rescue/adoption, but the interface is intentionally styled like a soft retro computer system.

---

## Current Features

- Pixel-inspired desktop UI
- Custom wallpaper and visual theme
- Start menu with grouped navigation
- Taskbar with clock/status area
- Window system for opening separate views
- Reusable `Window` component
- Feature-based project structure
- Shared animal domain folder
- Animal Centre views:
  - Animal Catalogue
  - Register Animal
- Dashboard view
- Organizer view
- Mood Log view
- PawMail view
- Milestones view
- Projects view

---

## Project Structure

```txt
src/
├─ assets/
│  ├─ assistant/
│  ├─ icons/
│  └─ wallpapers/
│
├─ components/
│  ├─ desktop/
│  │  ├─ Desktop.jsx
│  │  ├─ DesktopIcon.jsx
│  │  ├─ StartMenu.jsx
│  │  └─ Taskbar.jsx
│  │
│  ├─ ui/
│  │  ├─ Button.jsx
│  │  ├─ Modal.jsx
│  │  └─ Panel.jsx
│  │
│  └─ windows/
│     ├─ ErrorDialog.jsx
│     └─ Window.jsx
│
├─ domain/
│  └─ animals/
│     ├─ animalConstants.js
│     ├─ animalData.js
│     └─ animalHelpers.js
│
├─ features/
│  ├─ animal-centre/
│  │  └─ views/
│  │     ├─ AnimalCatalogueView.jsx
│  │     └─ RegisterAnimalView.jsx
│  │
│  ├─ dashboard/
│  │  └─ DashboardView.jsx
│  │
│  ├─ milestones/
│  │  └─ MilestonesView.jsx
│  │
│  ├─ mood-log/
│  │  └─ MoodLogView.jsx
│  │
│  ├─ organizer/
│  │  └─ OrganizerView.jsx
│  │
│  ├─ pawmail/
│  │  └─ PawMailView.jsx
│  │
│  └─ projects/
│     └─ ProjectsView.jsx
│
├─ hooks/
│  ├─ useLocalStorage.js
│  └─ useWindowManager.js
│
├─ os/
│  ├─ startMenuItems.js
│  └─ windowDefinitions.jsx
│
├─ styles/
│  ├─ components/
│  ├─ global/
│  └─ windows/
│
├─ utils/
├─ App.jsx
└─ Main.jsx

```

## Architecture

The project is organized around a few main ideas.

### Components

The components folder contains reusable UI and operating-system-style interface pieces.

Examples:

- Window
- StartMenu
- Taskbar
- Button
- Panel
- Modal

These components are not tied to one specific feature. They can be reused across the project.

### Features

The features folder contains user-facing sections of the app.

Examples:

- dashboard
- animal-centre
- pawmail
- organizer
- milestones

Each feature contains views that are rendered inside pawOS windows.

### Domain

The domain folder contains shared data and logic related to the main subject of the app.

For this project, the main domain is animals.

Animal data, constants, and helper functions live in:

```txt
src/domain/animals/
```

This allows multiple features, such as Dashboard, Animal Centre, and Milestones, to use the same animal logic without depending on each other.

### OS Config

The os folder contains configuration for the fictional operating system.

startMenuItems.js controls what appears in the start menu.
windowDefinitions.jsx controls which views can open as windows.

This separates navigation, window behavior, and feature content.

### Start Menu Structure

The start menu is data-driven.

Some start menu items open windows directly, while others act as groups.

Example:

```txt
{
type: "group",
label: "Animal Centre",
children: [
{
type: "window",
label: "Animal Catalogue",
windowId: "animalCatalogue",
},
{
type: "window",
label: "Register Animal",
windowId: "registerAnimal",
},
],
}
```

This keeps the start menu flexible and avoids hard-coding every click handler manually.

### Window System

pawOS uses a custom window manager hook to control open windows.

The window manager handles:

opening windows
closing windows
focusing windows
preventing duplicate windows
tracking which window is active

The reusable Window component provides the visual frame, while each feature view provides the content inside the window.

Example:

```txt
<Window title="animal_Catalogue.exe">
  <AnimalCatalogueView />
</Window>
```

The window controls the OS-style behavior.
The view controls the actual feature content.

### Animal Data Model

Animal data is shared through the animal domain folder.

Example animal object:

```txt
const animal = {
id: "matcha",
name: "Matcha",
species: "Cat",
dateOfBirth: "2025-11-01",
status: "available",
liked: false,
favorited: false,
personality: ["Curious", "Playful"],
about: "Born into a long line of Maine Coons.",
image: "/images/matcha.png",
};
```

## Planned animal-related functionality includes:

- adding animals
- editing animals
- deleting animals
- marking animals as adopted
- filtering by species
- searching by name
- favoriting animals
- showing adoption statistics
- displaying recently added animals
- saving animal data locally

## Skills Practiced

- React component structure
- custom hooks
- state management
- reusable UI components
- data-driven rendering
- feature-based architecture
- domain-based organization
- controlled forms
- conditional rendering
- array methods such as map, filter, and find
- localStorage
- CSS organization
- responsive layout
- project planning
- Git and GitHub workflow

## The project demonstrates that I can:

- build a React project from scratch
- organize a growing frontend codebase
- separate UI, features, hooks, and shared logic
- create reusable components
- manage state with custom hooks
- think in terms of product features and data domains
- create a personal but practical portfolio project
- design and implement a cohesive visual style

### Tech Stack

- React
- JavaScript
- CSS
- Vite
- localStorage
- Git
- GitHub
- VS Code
- Browser DevTools

## Planned Features

### Stage 1 — Core OS Interface

- Start menu
- Taskbar
- Clock
- Window opening and closing
- Focused and unfocused window states
- Feature views inside windows

### Stage 2 — Animal Centre

- Register animal form
- Animal catalogue cards
- Animal status system
- Favorite animals
- Adoption state
- Empty states
- Form validation
- Local persistence

### Stage 3 — Dashboard and Shared Data

- Animal statistics
- Recently added animals
- Adoption progress
- Urgent cases
- Shared animal data across multiple features

### Stage 4 — Feature Expansion

- Organizer tasks
- Mood Log entries
- PawMail messages
- Milestones timeline
- Project showcase area

### Stage 5 — Future Backend

#### Possible future additions:

- Firebase or Supabase
- authentication
- user accounts
- shared animal database
- admin-only animal management
- adoption history
- profile pages

## Design Direction

pawOS uses a soft retro desktop style inspired by:

- pixel art
- dreamy pastel interfaces
- old operating systems
- transparent glass panels
- lavender and pink color palettes
- cozy personal dashboards

The visual goal is to make the project feel personal and memorable while still being structured like a serious React application.

## Long-Term Vision

The long-term goal is to turn pawOS into a polished portfolio project that combines:

- practical animal rescue/adoption management features
- strong React architecture
- custom UI design
- playful operating-system-inspired interactions

The project is both a learning tool and a portfolio piece.
