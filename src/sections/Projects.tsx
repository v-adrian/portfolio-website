import { projects } from "@/data/projects";
import Card from "@/components/Card";

function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 gap-8 sm:grid-cols-[12rem_1fr]"
    >
      <h2 className="font-heading text-lg font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => {
          return <Card project={item}></Card>;
        })}
      </div>
    </section>
  );
}

export default Projects;
