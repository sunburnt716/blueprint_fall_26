import type { Skill } from "../types";

// Segment 3: same pattern as ServiceItem
export default function SkillCard({ name, description }: Skill) {
  return (
    <div className="skill-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
