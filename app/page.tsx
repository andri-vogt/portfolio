import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Divider />
      <Work />
      <Divider />
      <Contact />
    </main>
  );
}
