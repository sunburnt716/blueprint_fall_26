import { useState } from "react";

type Status = { type: "success" | "error"; text: string } | null;

// Segment 5 (stretch): ContactForm as its own component.
// Inputs are still uncontrolled (read with FormData); week 5 makes them controlled.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the page from reloading

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name")).trim();
    const message = String(formData.get("message")).trim();

    if (message.length < 10) {
      setStatus({ type: "error", text: "Your message should be at least 10 characters." });
      return;
    }

    setStatus({ type: "success", text: `Thanks, ${name}! Your message was received.` });
    form.reset();
  }

  return (
    <form className="contact-form" aria-describedby="form-note" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={4} placeholder="Say hello!" required />
      <button type="submit">Submit</button>
      <p id="formStatus" className={status?.type} aria-live="polite">
        {status?.text}
      </p>
    </form>
  );
}
