import type { Contact } from "@/types";
import { FaGlobe, FaLinkedin, FaPaperclip } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export const contacts: Contact[] = [
  {
    id: "contact-1",
    name: "Email",
    link: "mailto:vajutar@gmail.com",
    icon: MdOutlineAlternateEmail
  },
  {
    id: "contact-2",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vonn-adrian-jutar/",
    icon: FaLinkedin
  },
  {
    id: "contact-3",
    name: "GitHub",
    link: "https://github.com/v-adrian",
    icon: SiGithub
  },
  {
    id: "contact-4",
    name: "Website",
    link: "https://v-adrian.github.io/portfolio-website/",
    icon: FaGlobe
  },
  {
    id: "contact-5",
    name: "Resume",
    link: "resume-2026.pdf",
    icon: FaPaperclip
  },
];