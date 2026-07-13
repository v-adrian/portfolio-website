import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-dvh flex flex-col justify-center">
      <div className="text-2xl">
        Hello, I am <br />
        <h1 className="text-6xl font-bold">Vonn Adrian Jutar</h1>
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
