import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="mx-4">
      <div className="mt-16 text-2xl">
        Hello, I'm <br />
        <span className="text-6xl font-bold">Vonn Adrian Jutar</span>
      </div>
      <TypeAnimation
        sequence={[
          "Software Developer",
          1000,
          "Software Engineer",
          1000,
          "Full-Stack Developer",
          1000,
        ]}
        repeat={Infinity}
        className="text-4xl font-semibold"
      />
    </section>
  );
}

export default Hero;
