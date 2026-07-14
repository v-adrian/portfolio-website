import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

const CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Databases",
  "AI & Machine Learning",
  "DevOps & Tools",
];

function Skills() {
  return (
    <section
      id="skills"
      className="grid grid-cols-1 gap-8 sm:grid-cols-[12rem_1fr]"
    >
      <h2 className="font-heading text-lg font-bold">Skills</h2>
      <div className="space-y-10">
        {CATEGORIES.map((category) => {
          const items = skills.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <h3 className="mb-3 text-lg font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill.id}
                    className="inline-flex items-center gap-2 border px-3 py-1.5"
                  >
                    <skill.icon className="text-lg" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
