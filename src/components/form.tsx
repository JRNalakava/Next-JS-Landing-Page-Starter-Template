'use client';

import type { FormEvent } from 'react';
import React, { useState } from 'react';
import Confetti from 'react-confetti';

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
      if (res.status === 200) {
        setSubmitted(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Err', err);
    }
  };

  return isSubmitted ? (
    <div>
      <h1
        className="text-center text-3xl font-semibold
      "
      >
        Thank you for your message!
      </h1>
      <Confetti />
    </div>
  ) : (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="">
        <label className="label font-semibold">
          <span className="label-text">Full Name</span>
        </label>
        <input
          className="input input-bordered input-primary w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="label font-semibold">
          <span className="label-text">Email</span>
        </label>
        <input
          className="input input-bordered input-primary w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label className="label font-semibold">
          <span className="label-text">Message</span>
        </label>
        <textarea
          className="textarea textarea-primary w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
