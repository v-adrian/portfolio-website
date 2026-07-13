import { experience } from "@/data/experience";

function Experience() {
  return (
    <section id="experience" className="grid grid-cols-1 gap-8 sm:grid-cols-[12rem_1fr]">
      <h2 className="mb-4 text-lg font-bold">EXPERIENCE</h2>
      <div className="space-y-8">
        {experience.map((item) => (
          <div key={item.id}>
            <div>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-lg">{item.company}</p>
            </div>
            <p className="text-md">{item.duration}</p>
            {/* <ul>
            {item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
              ))}
              </ul> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
