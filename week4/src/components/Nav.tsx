// Segment 5 (stretch): Nav as its own component
const links = ["About", "Skills", "Services", "Events", "Contact"];

export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      {links.map((link) => (
        <a key={link} href={`#${link.toLowerCase()}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}
