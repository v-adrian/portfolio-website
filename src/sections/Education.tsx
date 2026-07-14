import { education } from "@/data/education";

function Education() {
  return (
    <section
      id="education"
      className="grid grid-cols-1 gap-8 sm:grid-cols-[12rem_1fr]"
    >
      <h2 className="font-heading text-lg font-bold">Education</h2>
      <div className="space-y-8 divide-y">
        {education.map((item) => (
          <div key={item.id} className="space-y-4 pb-8">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">{item.degree}</h3>
                <p className="text-md italic">{item.institution}</p>
              </div>
              <p className="text-sm text-right">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
