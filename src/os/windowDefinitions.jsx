// src/os/windowDefinitions.jsx

import DashboardView from "../features/dashboard/DashboardView";
import AnimalCatalogueView from "../features/animal-centre/views/AnimalCatalogueView";
import RegisterAnimalView from "../features/animal-centre/views/RegisterAnimalView";
import OrganizerView from "../features/organizer/OrganizerView";
import OtherProjectsView from "../features/projects/OtherProjectsView";

export const windowDefinitions = {
  dashboard: {
    id: "dashboard",
    title: "dashboard.sys",
    Component: DashboardView,
  },

  animalCatalogue: {
    id: "animalCatalogue",
    title: "animal_Catalogue.exe",
    Component: AnimalCatalogueView,
  },

  registerAnimal: {
    id: "registerAnimal",
    title: "register_Animal.exe",
    Component: RegisterAnimalView,
  },

  organizer: {
    id: "organizer",
    title: "organizer.exe",
    Component: OrganizerView,
  },

  otherProjects: {
    id: "otherProjects",
    title: "other_Projects.dir",
    Component: OtherProjectsView,
  },
};
