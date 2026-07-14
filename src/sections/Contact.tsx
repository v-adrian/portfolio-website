import { contacts } from "@/data/contacts";
import Chip from "@/components/Chip";

function Contact() {
  return (
    <section
      id="contact"
      className="mb-32 grid grid-cols-1 gap-8 sm:grid-cols-[12rem_1fr]"
    >
      <h2 className="font-heading text-lg font-bold">Contact</h2>
      <div className="flex flex-col">
        <h3 className="mb-3 text-lg font-semibold">Want to work with me?</h3>
        <div className="flex flex-wrap gap-3">
          {contacts.map((item) => {
            return (
              <div key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Chip Icon={item.icon}>{item.name}</Chip>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
