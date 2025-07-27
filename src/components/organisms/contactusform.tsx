"use client"
import React, { useState } from "react";
import { Button } from "../atoms/Button";
import Text from "../atoms/Text";

const whatsappLink = "https://wa.me/919087411480";
const emailAddress = "buildmyproject@mvprockets.com";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const validate = (fields: typeof initialState) => {
  const errors: Partial<typeof initialState> = {};
  if (!fields.name.trim()) errors.name = "The field is required.";
  if (!fields.email.trim()) errors.email = "The field is required.";
  if (!fields.subject.trim()) errors.subject = "The field is required.";
  return errors;
};

const ContactUsForm = () => {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setSubmitError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setSubmitError("One or more fields have an error. Please check and try again.");
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitError("");
    setSubmitted(true);
    // Submit logic here
  };

  return (
    <section className="w-full bg-white py-6 md:py-12 px-1 md:px-0 flex items-center justify-center min-h-[80vh]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0">
        {/* Left: Form */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center px-4 md:px-12 py-8 md:py-0">
          <form onSubmit={handleSubmit} className="w-full min-w-sm max-w-3xl mx-auto md:max-w-lg bg-white rounded-xl md:rounded-2xl shadow-md p-3 md:p-10 flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="i.e. John Doe"
                value={fields.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40 text-gray-700 bg-white text-sm md:text-base"
                autoComplete="name"
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="i.e. john@mail.com"
                value={fields.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40 text-gray-700 bg-white text-sm md:text-base"
                autoComplete="email"
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base">Contact Number (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="i.e. +91 959 105 9927"
                value={fields.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40 text-gray-700 bg-white text-sm md:text-base"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                value={fields.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40 text-gray-700 bg-white text-sm md:text-base"
              />
              {errors.subject && <div className="text-red-500 text-sm mt-1">{errors.subject}</div>}
            </div>
            <div>
              <label htmlFor="message" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base">Your message</label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                value={fields.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40 text-gray-700 bg-white min-h-[80px] text-sm md:text-base"
              />
            </div>
            <div className="mt-2">
              <Button
                primary
                label="Submit"
                backgroundColor="#E74177"
                size="medium"
                // @ts-ignore
                type="submit"
                style={{ width: '100%', color: 'white', fontFamily: 'Montserrat, sans-serif', backgroundColor: '#E74177' }}
              />
            </div>
            {submitError && (
              <div className="mt-4 p-3 border-2 border-yellow-400 bg-yellow-50 text-gray-800 rounded-md text-base">
                {submitError}
              </div>
            )}
            {submitted && !submitError && (
              <div className="mt-4 p-3 border-2 border-green-400 bg-green-50 text-green-800 rounded-md text-base">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </div>
        {/* Right: Contact Info */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center px-4 md:px-12 py-8 md:py-0 gap-6 w-full">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full max-w-md bg-white px-6 py-4 mb-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E74177]/10">
              <img src="/design/icons/whatsapp-pink.svg" alt="WhatsApp" className="w-7 h-7" />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-bold text-[#3A0E6D]">WhatsApp</span>
              <span className="text-base font-medium text-gray-500">Send a message</span>
            </span>
          </a>
          {/* Email */}
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-4 w-full max-w-md bg-white  px-6 py-4 mb-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E74177]/10">
              <img src="/design/icons/email-pink.svg" alt="Email" className="w-7 h-7" />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-bold text-[#3A0E6D]">Email Us</span>
              <span className="text-base font-medium text-gray-500">{emailAddress}</span>
            </span>
          </a>
          {/* Location */}
          <div className="flex items-center gap-4 w-full max-w-md bg-white px-6 py-4 group" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E74177]/10">
              <img src="/design/icons/pink-doc.svg" alt="Location" className="w-7 h-7" />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-bold text-[#3A0E6D]">Locate Us</span>
              <span className="text-base font-medium text-gray-500">Wyoming, USA<br />Bangalore, India</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm; 