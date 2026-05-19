// src/os/startMenuItems.js

export const startMenuItems = [
  {
    type: "window",
    label: "Dashboard",
    windowId: "dashboard",
  },

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
  },
  {
    type: "window",
    label: "Organizer",
    windowId: "organizer",
  },
  {
    type: "window",
    label: "Mood Tracker",
    windowId: "moodTracker",
  },
  {
    type: "window",
    label: "PawMail",
    windowId: "pawMail",
  },
  {
    type: "window",
    label: "Milestones",
    windowId: "milestones",
  },
  {
    type: "window",
    label: "Other Projects",
    windowId: "otherProjects",
  },
];
