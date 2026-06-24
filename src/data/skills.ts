import type { Skill } from "@/types";
import { FaCss3, FaJava } from "react-icons/fa6";
import {
  SiDjango,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiPython,
  SiPytorch,
  SiReact,
  SiSvelte,
  SiTailwindcss,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    id: "skill-1",
    name: "JavaScript",
    type: "language",
    icon: SiJavascript,
  },
  {
    id: "skill-2",
    name: "Python",
    type: "language",
    icon: SiPython,
  },
  {
    id: "skill-3",
    name: "Java",
    type: "language",
    icon: FaJava,
  },
  {
    id: "skill-4",
    name: "HTML",
    type: "language",
    icon: SiHtml5,
  },
  {
    id: "skill-5",
    name: "CSS",
    type: "language",
    icon: FaCss3,
  },
  {
    id: "skill-6",
    name: "SQL",
    type: "language",
    icon: SiMysql,
  },
  {
    id: "skill-7",
    name: "Django",
    type: "framework",
    icon: SiDjango,
  },
  {
    id: "skill-8",
    name: "ReactJS",
    type: "library",
    icon: SiReact,
  },
  {
    id: "skill-9",
    name: "TailwindCSS",
    type: "library",
    icon: SiTailwindcss,
  },
  {
    id: "skill-10",
    name: "Svelte",
    type: "framework",
    icon: SiSvelte,
  },
  {
    id: "skill-11",
    name: "PyTorch",
    type: "framework",
    icon: SiPytorch,
  },
  {
    id: "skill-12",
    name: "Git",
    type: "tool",
    icon: SiGit,
  },
  {
    id: "skill-13",
    name: "GitHub",
    type: "platform",
    icon: SiGithub,
  },
  {
    id: "skill-14",
    name: "Linux",
    type: "platform",
    icon: SiLinux,
  },
];
