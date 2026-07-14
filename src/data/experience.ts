import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Freelance",
    company: "Self-employed",
    location: "Davao City, Philippines",
    duration: "January 2026 — Present",
    description: [
      "Built and deployed responsive client websites using React, TypeScript, and TailwindCSS, handling full lifecycle from requirements to deployment.",
      "Maintained and extended an existing POS codebase, implementing feature requests and bug fixes.",
      "Managed client communication end-to-end, including requirements gathering, timeline estimates, progress updates, and demo presentations to ensure alignment and timely delivery.",
    ],
  },
  {
    id: "exp-2",
    role: "Backend Developer Intern",
    company: "AgriDOM",
    location: "Davao City, Philippines",
    duration: "January 2025 — March 2025",
    description: [
      "Designed and deployed Django backend for a DTR system, handling 50+ time entries per day with zero data loss.",
      "Developed RESTful APIs for core functions, reducing manual reporting time by ~2 hours/week for end users.",
      "Collaborated using Git and weekly sprints, maintaining a 90%+ feature completion rate across 12 sprints.",
    ],
  },
];
