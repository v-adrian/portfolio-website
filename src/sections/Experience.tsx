import { experience } from "@/data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="grid grid-cols-1 gap-8 sm:grid-cols-[12rem_1fr]"
    >
      <h2 className="font-heading text-lg font-bold">Experience</h2>
      <div className="divide-y space-y-8">
        {experience.map((item) => (
          <div className="pb-8 space-y-4">
            <div key={item.id} className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-md italic">{item.company}</p>
              </div>
              <p className="text-sm">{item.duration}</p>
            </div>
            <ul>
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
