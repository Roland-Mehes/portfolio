'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [form, setForm] = useState({
    type: '',
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      setResponseMsg('Please fill every space');
      return;
    }
    setLoading(true);
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setResponseMsg(data.error || 'Something went wrong');
      } else {
        setResponseMsg('Message sent successfully!');
        setForm({
          type: 'ContactForm',
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      }
    } catch (error) {
      setResponseMsg('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.firstname &&
    form.lastname &&
    form.email &&
    form.subject &&
    form.message;

  return (
    <section className="bg-[var(--bg-color-1)] text-[var(--color-1)] py-16 px-4 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="relative">
              <input
                id="firstname"
                type="text"
                placeholder=" "
                required
                value={form.firstname}
                onChange={handleChange}
                className="peer bg-[var(--bg-color-2)] border border-[var(--main-blue)] text-[var(--color-1)] px-3 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--main-blue)] w-full"
              />
              <label
                htmlFor="firstname"
                className={`absolute left-3 transition-all duration-200 ${
                  form.firstname
                    ? '-top-3 text-xs text-[var(--main-blue)] bg-[var(--bg-color-1)] p-1 pb-0 rounded'
                    : 'top-5 text-base text-[var(--color-1)]'
                } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--main-blue)] peer-focus:bg-[var(--bg-color-1)] peer-focus:p-1 peer-focus:pb-0 peer-focus:rounded`}
              >
                First Name
              </label>
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                id="lastname"
                type="text"
                placeholder=" "
                value={form.lastname}
                onChange={handleChange}
                className="peer bg-[var(--bg-color-2)] border border-[var(--main-blue)] text-[var(--color-1)] px-3 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--main-blue)] w-full"
              />
              <label
                htmlFor="lastname"
                className={`absolute left-3 transition-all duration-200 ${
                  form.lastname
                    ? '-top-3 text-xs text-[var(--main-blue)] bg-[var(--bg-color-1)] p-1 pb-0 rounded'
                    : 'top-5 text-base text-[var(--color-1)]'
                } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--main-blue)] peer-focus:bg-[var(--bg-color-1)] peer-focus:p-1 peer-focus:pb-0 peer-focus:rounded`}
              >
                Last Name
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              className="peer py-5 w-full bg-[var(--bg-color-2)] border border-[var(--main-blue)] text-[var(--color-1)] px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--main-blue)]"
            />
            <label
              htmlFor="email"
              className={`absolute left-3 transition-all duration-200  ${
                form.email
                  ? '-top-3 text-xs text-[var(--main-blue)] bg-[var(--bg-color-1)] p-1 pb-0 rounded'
                  : 'top-5 text-base text-[var(--color-1)]'
              } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--main-blue)] peer-focus:bg-[var(--bg-color-1)] peer-focus:p-1 peer-focus:pb-0 peer-focus:rounded`}
            >
              Email
            </label>
          </div>

          {/* Subject */}
          <div className="relative">
            <input
              type="text"
              id="subject"
              placeholder=" "
              value={form.subject}
              onChange={handleChange}
              className="peer py-5 w-full bg-[var(--bg-color-2)] border border-[var(--main-blue)] text-[var(--color-1)] px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--main-blue)]"
            />
            <label
              htmlFor="subject"
              className={`absolute left-3 transition-all duration-200  ${
                form.subject
                  ? '-top-3 text-xs text-[var(--main-blue)] bg-[var(--bg-color-1)] p-1 pb-0 rounded'
                  : 'top-5 text-base text-[var(--color-1)]'
              } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--main-blue)] peer-focus:bg-[var(--bg-color-1)] peer-focus:p-1 peer-focus:pb-0 peer-focus:rounded`}
            >
              Subject
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              rows={5}
              placeholder=" "
              value={form.message}
              onChange={handleChange}
              className="peer w-full bg-[var(--bg-color-2)] border border-[var(--main-blue)] text-[var(--color-1)] px-3 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--main-blue)] resize-none"
            />
            <label
              htmlFor="message"
              className={`absolute left-3 transition-all duration-200 ${
                form.message
                  ? '-top-3 text-xs text-[var(--main-blue)] bg-[var(--bg-color-1)] p-1 pb-0 rounded'
                  : 'top-5 text-base text-[var(--color-1)]'
              } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[var(--main-blue)] peer-focus:bg-[var(--bg-color-1)] peer-focus:p-1 peer-focus:pb-0 peer-focus:rounded`}
            >
              Your Message...
            </label>
          </div>
          {/* Honeypot vs Spamms */}
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={form.honeypot}
            autoComplete="off"
            aria-hidden="true"
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
          />

          {/* Submit Button */}
          <button
            type="submit"
            // disabled={loading || !isFormValid}
            className="custom-button-wrapper "
          >
            <span className="custom-button">
              {loading ? 'Sending...' : 'Send Message'}
            </span>
          </button>

          {/*  After submit */}

          {responseMsg && (
            <p
              className={`mt-4 flex justify-self-center ${
                responseMsg.includes('success')
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {responseMsg}
            </p>
          )}
        </form>

        {/* Contact Info Section */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-[var(--color-2)]">
            Contact Information
          </h2>
          <p className="text-[var(--color-1)]">
            Feel free to reach out via the form or through the contact details
            below.
          </p>
          <ul className="space-y-2 text-[var(--color-2)]">
            <li>📧 mehesroli@gmail.com</li>
            <li>📞 +40 756 437 115</li>
            <li>📍 Oradea, Romania</li>
          </ul>
          <Image
            src="/images/profile-anime-working.png"
            alt="Contact Illustration"
            width={100}
            height={100}
            loading="lazy"
            className="w-full max-w-sm rounded-2xl shadow-lg border border-[var(--main-blue)]"
          />
        </div>
      </div>
    </section>
  );
}
