import DashboardView from "../features/dashboard/DashboardView";
import AnimalCatalogueView from "../features/animal-centre/views/AnimalCatalogueView";
import RegisterAnimalView from "../features/animal-centre/views/RegisterAnimalView";
import MilestonesView from "../features/milestones/MilestonesView";
import MoodLogView from "../features/mood-log/MoodLogView";
import OrganizerView from "../features/organizer/OrganizerView";
import PawMailView from "../features/pawmail/PawMailView";
import OtherProjectsView from "../features/other-projects/OtherProjectsView";

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

  moodLog: {
    id: "moodLog",
    title: "mood_Log.exe",
    Component: MoodLogView,
  },

  pawMail: {
    id: "pawMail",
    title: "pawMail.exe",
    Component: PawMailView,
  },

  milestones: {
    id: "milestones",
    title: "milestones.log",
    Component: MilestonesView,
  },

  projects: {
    id: "projects",
    title: "projects.dir",
    Component: OtherProjectsView,
  },
};
