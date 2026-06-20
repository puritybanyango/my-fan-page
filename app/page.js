
// app/page.js
import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
       <main>
      <Hero
        title="My Biggest Flex."
        tagline="Favorite Concept That Raises My Dopamine ."
     
      />
      <CardGrid items={items} />
      </main>

 
  );
}

 