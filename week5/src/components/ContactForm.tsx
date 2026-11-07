import { useState } from 'react';
import type React from 'react';

type FormValues = { name: string; email: string; message: string };
const emptyForm: FormValues = { name: '', email: '', message: '' };

export default function ContactForm() {
  // Editable fields and the last submission are separate: reset does not erase the preview.
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    // Copy the object, then replace only the field named by this input.
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted({ ...form });
    setForm(emptyForm);
  }

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name}
          onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email}
          onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message}
          onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      <h3>Live state</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>

      {submitted && (
        <div role="status">
          <h3>Submitted values</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p className="message">Message: {submitted.message}</p>
          <p>Demo only: no email was sent.</p>
        </div>
      )}
    </section>
  );
}
