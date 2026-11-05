// TODO 3: Read theme and toggleTheme with useContext(ThemeContext).
export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <a href="#search">Recipe Finder</a>
      <a href="#recipes">Recipes</a>
      <a href="#contact">Contact</a>
      {/* TODO 3: Enable this button, connect onClick, and derive its label. */}
      <button disabled>Theme toggle: coming next</button>
    </nav>
  );
}
