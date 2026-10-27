// Shapes of the JSON in src/data/. Components reuse these as their prop types.
export interface Skill {
  name: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface PortfolioData {
  about: string;
  skills: Skill[];
  services: Service[];
}

// Carried over from week 3's events section
export interface ClubEvent {
  title: string;
  date: string;
  location: string;
  description: string;
  rsvpLink?: string;
}

export interface ClubData {
  clubName: string;
  events: ClubEvent[];
}
