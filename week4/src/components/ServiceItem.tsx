import type { Service } from "../types";

// Segment 2: first typed component.
// Live-code version declares its own props first:
//   interface ServiceItemProps { title: string; description: string; }
// then swap to the shared `Service` type so types.ts stays the one source of truth.
export default function ServiceItem({ title, description }: Service) {
  return (
    <div className="service-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
