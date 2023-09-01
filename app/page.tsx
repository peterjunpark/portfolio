import { About, Divider, Intro, Projects } from "@/components/sections/";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider animate />
      <About />
      <Divider animate />
      {/* Below sections aren't animated on page load */}
      <Projects />
    </main>
  );
}
