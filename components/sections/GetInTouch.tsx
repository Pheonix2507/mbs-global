"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const countryCodes = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
];

const inputClass =
  "w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Two-split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* -------- Split 1: Form -------- */}
          <div className="rounded-3xl p-8 md:p-1 shadow-sm">
            <h3 className="font-zalando font-semibold text-xl text-foreground mb-6">
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className={inputClass}
                />
              </div>

              {/* Phone with country code */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className="shrink-0 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200 cursor-pointer"
                    style={{ minWidth: "95px" }}
                  >
                    {countryCodes.map((c) => (
                      <option key={`${c.flag}-${c.code}`} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* How can we help */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] mt-1"
                style={{
                  background:
                    "linear-gradient(135deg, #AF33FF 0%, #6450FF 100%)",
                }}
              >
                {submitted ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* -------- Split 2: Contact Details -------- */}
          <div className="flex flex-col gap-8 lg:pt-4">
            {/* Decorative heading */}
            <div>
              <h3 className="font-zalando font-semibold text-xl text-foreground mb-2">
                Contact Information
              </h3>
              <p className="text-muted-foreground text-sm">
                Prefer to reach us directly? Here&apos;s how you can find us.
              </p>
            </div>

            {/* Cards — Phone+Email top row, Location full-width below */}
            <div className="grid grid-cols-2 gap-4">
              {/* Phone */}
              <div className="flex flex-col items-center p-5 py-10 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm group hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200">
                <Phone className="w-12 h-12 text-purple-500" />
                <div className="flex items-center justify-center w-auto h-auto mt-5">
                  <p className="text-foreground font-semibold text-base">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center p-5 py-10 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm group hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200">
                <Mail className="w-12 h-12 text-purple-500" />
                <div className="flex items-center justify-center w-auto h-auto mt-5">
                  <p className="text-foreground font-semibold text-base">
                    hello@gmail.com
                  </p>
                </div>
              </div>

              {/* Location — spans full width */}
              <div className="col-span-2 flex items-start gap-5 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm group hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200">
                <MapPin className="w-20 h-20 text-purple-500" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Visit Us
                  </p>
                  <p className="text-foreground font-semibold text-base leading-snug">
                    B/1205 Empire Business Hub,
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                    Science City Road, Sola,
                    <br />
                    Ahmedabad GJ 380060, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
