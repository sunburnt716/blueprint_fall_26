import type { ClubEvent } from "../types";

// React version of week 3's createEventCard()
export default function EventCard({ title, date, location, description, rsvpLink }: ClubEvent) {
  return (
    <div className="service-item">
      <h3>{title}</h3>
      <p>
        {date} @ {location}
      </p>
      <p>{description}</p>
      {/* Optional prop: only render the link when it exists */}
      {rsvpLink && <a href={rsvpLink}>RSVP</a>}
    </div>
  );
}
