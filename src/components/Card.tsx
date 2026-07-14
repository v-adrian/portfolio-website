import type { Project } from "@/types";
import Chip from "@/components/Chip";
import { SiGithub } from "react-icons/si";
import { CgExternal } from "react-icons/cg";
import { FaRegImage } from "react-icons/fa6";

interface CardProps {
  project: Project;
}

function Card({ project }: CardProps) {
  return (
    <div className="flex flex-col gap-4 overflow-visible border p-4">
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="italic">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 text-sm">
          {project.techStack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-end gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-auto"
            >
              <CgExternal size={24} />
            </a>
          )}
          {project.imageUrl && (
            <a
              href={project.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegImage size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
