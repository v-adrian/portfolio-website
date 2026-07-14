import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Portfolio Website",
    description:
      "Built this portfolio website to showcase my skills and experience.",
    techStack: [
      "TypeScript",
      "ReactJS",
      "TailwindCSS",
      "Vite",
      "GitHub Actions",
      "Docker",
    ],
    githubUrl: "https://github.com/v-adrian/portfolio-website",
    liveUrl: "https://v-adrian.github.io/portfolio-website/",
    imageUrl: "/images/portfolio-website.png",
  },
  {
    id: "proj-2",
    title:
      "Crime Hotspot Prediction with Graph Attention Network and K-Means Clustering for Resource Allocation",
    description:
      "Built a website to assist Davao City police with crime prevention by predicting crime hotspots on a live interactive map based on a trained model with historical data.",
    techStack: [
      "Django",
      "TailwindCSS",
      "JavaScript",
      "Python",
      "PyTorch",
      "Leaflet",
    ],
    githubUrl: "https://github.com/v-adrian/THESIS-24-CS-003",
    imageUrl: "#",
  },
  {
    id: "proj-3",
    title: "Sentinel",
    description:
      "Built a criminal face recognition prototype for Davao City checkpoints with ~95% accuracy in matching faces against a watchlist of 10+ persons of interest.",
    techStack: [
      "Python",
      "Django",
      "OpenCV",
      "JavaScript",
      "HTML",
      "CSS",
      "SQLite",
    ],
    githubUrl: "https://github.com/Sentinel-Eyes/Sentinel",
    liveUrl: "https://sentinel-eyes.github.io/Sentinel-Client/",
    imageUrl: "/images/sentinel.png",
  },
];
