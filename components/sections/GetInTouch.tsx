"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

import { getCountries, getCountryCallingCode } from "libphonenumber-js";

const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });

const countryCodes = getCountries()
  .map((country) => ({
    code: `+${getCountryCallingCode(country)}`,
    flag: country.toUpperCase().replace(/./g, (char) => 
      String.fromCodePoint(char.charCodeAt(0) + 127397)
    ),
    name: displayNames.of(country) || country,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const inputClass =
  "w-full h-[46px] bg-white dark:bg-[#1A1A1A] border border-zinc-300 dark:border-[#333333] rounded-[4px] px-4 py-3 font-sans text-[14px] text-zinc-700 dark:text-zinc-400 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition-all duration-200 leading-none";

const GetInTouch = () => {
  const [selectedCode, setSelectedCode] = useState("+91");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 px-[26px] bg-zinc-50 dark:bg-[#1F2123] flex justify-center w-full">
      <div className="w-[360px] md:max-w-6xl md:w-full mx-auto flex flex-col gap-[40px]">
        {/* Mobile Title */}
        <h2 className="md:hidden font-zalando font-bold text-4xl leading-tight text-zinc-900 dark:text-white text-left tracking-tight m-0">
          Get in touch
        </h2>

        {/* Two-split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start w-full">
          {/* -------- Split 1: Form -------- */}
          <div className="w-full relative">
            {/* Desktop Title */}
            <h2 className="hidden md:block font-zalando font-bold text-5xl leading-tight text-zinc-900 dark:text-white mb-10 text-left">
              Get in touch
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[20px] w-full"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-[8px]">
                <label className="font-sans font-medium text-[16px] leading-[120%] tracking-[0%] text-zinc-900 dark:text-white">
                  Your Full name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <label className="font-sans font-medium text-[16px] leading-[120%] tracking-[0%] text-zinc-900 dark:text-white">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email id"
                  required
                  className={inputClass}
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-[8px]">
                <label className="font-sans font-medium text-[16px] leading-[120%] tracking-[0%] text-zinc-900 dark:text-white">
                  Mobile number
                </label>
                <div className="flex w-full h-[46px] bg-white dark:bg-[#1A1A1A] border border-zinc-300 dark:border-[#333333] rounded-[4px] focus-within:border-purple-500 transition-all duration-200">
                  <div className="relative shrink-0 flex items-center border-r border-zinc-300 dark:border-[#333333]">
                    <select
                      value={selectedCode}
                      onChange={(e) => setSelectedCode(e.target.value)}
                      className="h-full bg-transparent pl-4 pr-[32px] font-sans text-[14px] text-zinc-700 dark:text-zinc-400 focus:outline-none appearance-none cursor-pointer leading-none"
                    >
                      {countryCodes.map((c) => (
                        <option
                          key={`${c.flag}-${c.code}`}
                          value={c.code}
                          className="text-zinc-600"
                        >
                          {c.code}
                        </option>
                      ))}
                    </select>
                    {/* Caret Down Icon */}
                    <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none w-[20px] h-[20px]">
                      <Image
                        src="/Arrow/Caret_Down_MD.svg"
                        alt="Dropdown"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="12345 67890"
                    className="flex-1 bg-transparent px-4 py-3 font-sans text-[14px] text-zinc-700 dark:text-zinc-400 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none leading-none w-full"
                  />
                </div>
              </div>

              {/* How can we help */}
              <div className="flex flex-col gap-[8px]">
                <label className="font-sans font-medium text-[16px] leading-[120%] tracking-[0%] text-zinc-900 dark:text-white">
                  How can we help you ?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your project or inquiry..."
                  rows={4}
                  required
                  className={`w-full bg-white dark:bg-[#1A1A1A] border border-zinc-300 dark:border-[#333333] rounded-[4px] px-4 py-3 font-sans text-[14px] text-zinc-700 dark:text-zinc-400 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition-all duration-200 resize-none`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full h-[46px] rounded-[4px] border border-zinc-900 dark:border-white bg-transparent hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-black font-zalando font-normal text-[16px] leading-[100%] tracking-[0.04em] text-center text-zinc-900 dark:text-white transition-all duration-300 flex items-center justify-center mt-2"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>

          {/* -------- Split 2: Contact Details -------- */}
          <div className="flex flex-col gap-[20px] w-full md:mt-[96px]">
            {/* Phone */}
            <div className="flex flex-col items-center justify-center py-10 rounded-[4px] bg-white dark:bg-[#292929] gap-4 transition-all duration-300 hover:border-[#D699FF] border border-zinc-200 dark:border-transparent">
              <Phone
                className="w-[32px] h-[32px] text-[#D699FF]"
                strokeWidth={2}
              />
              <p className="text-zinc-900 dark:text-white font-sans font-medium text-[14px] tracking-wide">
                +079-46003852
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center justify-center py-10 rounded-[4px] bg-white dark:bg-[#292929] gap-4 transition-all duration-300 hover:border-[#D699FF] border border-zinc-200 dark:border-transparent">
              <Mail
                className="w-[38px] h-[38px] text-[#D699FF]"
                strokeWidth={2}
              />
              <p className="text-zinc-900 dark:text-white font-sans font-medium text-[14px] tracking-wide">
                hr@mbsglobal.io
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center justify-center py-[28px] px-4 rounded-[4px] bg-white dark:bg-[#292929] gap-4 transition-all duration-300 hover:border-[#D699FF] border border-zinc-200 dark:border-transparent">
              <MapPin
                className="w-[38px] h-[38px] text-[#D699FF]"
                strokeWidth={2}
              />
              <div className="text-center font-sans font-normal text-[14px] leading-relaxed tracking-wide text-zinc-900 dark:text-white">
                <p className="font-semibold mb-1">
                  The head office of Mbs Global
                </p>
                <p>A-1202 , The Capital, Science City Road,</p>
                <p>Sola, Ahmedabad-380060, Gujarat,</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
