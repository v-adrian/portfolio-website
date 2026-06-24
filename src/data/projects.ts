import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Portfolio Website",
    description:
      "Built this portfolio website to showcase my skills and experience.",
    techStack: ["ReactJS", "TailwindCSS", "Vite"],
    githubUrl: "TBA",
    liveUrl: "TBA",
    imageUrl: "TBA",
  },
  {
    id: "proj-2",
    title:
      "Crime Hotspot Prediction with Graph Attention Network and K-Means Clustering for Resource Allocation",
    description:
      "Built a website to assist Davao City police with crime prevention by predicting crime hotspots on a live interactive map based on a trained model with historical data.",
    techStack: [
      "Django",
      "Tailwind CSS",
      "Javascript",
      "Python",
      "PyTorch",
      "Folium",
    ],
    githubUrl: "https://github.com/v-adrian/THESIS-24-CS-003",
    imageUrl: "TBA",
  },
  {
    id: "proj-3",
    title: "Sentinel",
    description:
      "Built a criminal face recognition prototype for Davao City checkpoints with ~95% accuracy in matching faces against a watchlist of 10+ persons of interest.",
    techStack: ["Django", "CSS", "Python", "JavaScript"],
    githubUrl: "https://github.com/Sentinel-Eyes/Sentinel",
    imageUrl: "TBA",
  },
];
