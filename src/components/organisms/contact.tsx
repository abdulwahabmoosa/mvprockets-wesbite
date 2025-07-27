"use client"
import React, { useState } from "react";
import CustomDropdown from "../atoms/CustomDropdown";
import { Button } from "../atoms/Button";
import Text from "../atoms/Text";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "Product Development",
  "MVP Development",
  "Tech Stack Modernization",
  "GenAI Product Development"
];

const validate = (fields: typeof initialState) => {
  const errors: Partial<typeof initialState> = {};
  if (!fields.name.trim()) errors.name = "The field is required.";
  if (!fields.email.trim()) errors.email = "The field is required.";
  // Optionally add more validation (email format, phone, etc.)
  return errors;
};

interface ContactProps {
  variant?: 'default' | 'bgimg';
}

const Contact = ({ variant = 'default' }: ContactProps) => {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section
      className={`w-full py-6 md:py-12 px-1 md:px-0 flex items-center justify-center min-h-[100vh] relative bg-[#FCF3F6]`}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {variant === 'bgimg' && (
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `url('/design/cta-bg-1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: 1,
          pointerEvents: 'none',
        }} />
      )}
      <div className="max-w-6xl w-full bg-transparent flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0 relative z-10">
        {/* Left: Icon and Text */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center px-4 md:px-12 py-8 md:py-0">
          <div className="mb-8 md:mb-12">
            <div className="flex items-start justify-start mb-8">
              <div className="bg-[#E74177] rounded-full w-24 h-24 flex items-center justify-center">
                <img src="/design/icons/message.svg" alt="Message Icon" className="w-14 h-14" />
              </div>
            </div>
            <Text as="h2" size="text-3xl md:text-4xl" weight="font-extrabold" color="text-[#3A0E6D]" className="mb-4 text-center md:text-left">
              Get a Free Product Consultation Today!
            </Text>
            <Text as="p" size="text-lg" color="text-gray-700" className="mb-2 text-center md:text-left">
              Take the first step/scale your entrepreneur journey today. Talk to one of our experts about your vision and let us transform it into reality!
            </Text>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex items-center justify-center px-0 md:px-0">
          <form onSubmit={handleSubmit} className="w-full min-w-sm max-w-3xl mx-auto md:max-w-lg bg-white rounded-xl md:rounded-2xl shadow-md p-3 md:p-10 flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>First & Last Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="i.e. John Doe"
                value={fields.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40  text-gray-700 bg-white text-sm md:text-base"
                autoComplete="name"
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="i.e. john@mail.com"
                value={fields.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40  text-gray-700 bg-white text-sm md:text-base"
                autoComplete="email"
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="i.e. +91 959 105 9927"
                value={fields.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40  text-gray-700 bg-white text-sm md:text-base"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Which service do you need?</label>
              <CustomDropdown
                options={services}
                value={fields.service}
                onChange={val => setFields(f => ({ ...f, service: val }))}
                placeholder="Which service do you need?"
                className="mt-0"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#3A0E6D] font-bold mb-1 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>Your message</label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                value={fields.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E74177]/40  text-gray-700 bg-white min-h-[80px] text-sm md:text-base"
              />
            </div>
            <div className="mt-2">
              <Button
                primary
                label="Talk to an expert"
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
      </div>
    </section>
  );
};

export default Contact;