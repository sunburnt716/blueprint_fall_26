// TODO 1: Add FormValues and one useState object for name/email/message.
// Add a submitted snapshot, typed change handler, and submit/reset handler.
export default function ContactForm() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <p>Today we will connect these fields to React state.</p>
      {/* This temporary handler only prevents navigation; it does not save values. */}
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        {/* TODO 1: Bind value and onChange on each field. */}
        <input id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <button type="submit">Submit</button>
      </form>

      {/* TODO 1: Show JSON.stringify(form, null, 2) and submitted values here. */}
      <p>Submission preview and reset will be added during live coding.</p>
    </section>
  );
}
