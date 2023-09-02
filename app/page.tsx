import {
  About,
  Contact,
  Divider,
  Experience,
  Intro,
  Projects,
  Skills,
} from "@/components/sections/";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider animate />
      <About />
      {/* Below sections aren't animated on page load */}
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
