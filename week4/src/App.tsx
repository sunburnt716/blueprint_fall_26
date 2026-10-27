import { useState } from "react";
import Nav from "./components/Nav";
import SkillCard from "./components/SkillCard";
import ServiceItem from "./components/ServiceItem";
import EventCard from "./components/EventCard";
import ContactForm from "./components/ContactForm";
import portfolio from "./data/portfolio.json";
import events from "./data/events.json";
import type { ClubData, PortfolioData } from "./types";

// Segment 3: static import (no fetching until week 5).
// Annotating with our interfaces makes TS check the JSON matches the shape.
const data: PortfolioData = portfolio;
const clubData: ClubData = events;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export default function App() {
  // Segment 4: first taste of state (week 3's greeting button, no getElementById)
  const [greeting, setGreeting] = useState("");

  async function handleGreet() {
    setGreeting("...");
    await wait(1000);
    setGreeting("Hello, welcome to my portfolio!");
  }

  // Segment 1: week 3's HTML pasted in and fixed up for JSX
  return (
    <>
      <Nav />
      <header>
        <h1>Hi, I'm Om!</h1>
        <p>CS and Math student at Rutgers • Learning frontend development</p>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>{data.about}</p>
          <button type="button" onClick={handleGreet}>
            Say hello
          </button>
          <p aria-live="polite">{greeting}</p>
        </section>
        <section id="skills">
          <h2>Skills I'm Learning</h2>
          <div className="skills-container">
            {data.skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </section>
        <section id="services">
          <h2>What I Want to Build</h2>
          <div className="services-grid">
            {data.services.map((service) => (
              <ServiceItem key={service.title} {...service} />
            ))}
          </div>
        </section>
        <section id="events">
          <h2>Upcoming {clubData.clubName} Events</h2>
          <div className="services-grid">
            {clubData.events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p id="form-note">Practice form: no message will be delivered yet.</p>
          <ContactForm />
        </section>
      </main>
      <footer>
        <p>Built at Rutgers Blueprint • Week 4</p>
      </footer>
    </>
  );
}
