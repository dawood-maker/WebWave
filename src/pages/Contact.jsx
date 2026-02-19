import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "../components/Contact/InputField";
import InfoCard from "../components/Contact/InfoCard";
import InfoRow from "../components/Contact/InfoRow";
import {
  MailIcon,
  PhoneIcon,
  LocationIcon,
  CheckIcon,
} from "../components/Contact/Icons";
import { stats } from "../components/Contact/stats";
import { socials } from "../components/Contact/socials";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);

  // Component mount effect
  useEffect(() => {
    console.log("Contact component mounted");
    const timer = setTimeout(() => {
      setVisible(true);
      console.log("Form became visible");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle input field changes
  const handleChange = (e) => {
    console.log("Field changed:", e.target.name, "Value:", e.target.value);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", form);

    // Validation
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in Name, Email, and Message.");
      setStatus("error");
      console.log("Form validation failed");
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    console.log("Sending request to API...");

    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await axios.post(`${API_URL}/api/contact`, form);
      console.log("Server response:", response.data);

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      console.log("Form reset and status set to success");
    } catch (err) {
      console.error("Error sending message:", err.response?.data || err);
      setErrorMsg(
        err.response?.data?.message || "Server error. Please try again.",
      );
      setStatus("error");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        background:
          "linear-gradient(135deg, #0D0D2B 0%, #1a1060 50%, #0D0D2B 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7C3AED, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none fixed bottom-0 left-0 w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4F8EF7, transparent 70%)",
        }}
      />

      {/* Main card */}
      <div
        className="relative w-full max-w-3xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(13,13,43,0.85)",
            border: "1px solid rgba(79,142,247,0.2)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Top gradient bar */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(90deg, #4F8EF7, #7C3AED, #00D4FF)",
            }}
          />

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                  style={{
                    background: "linear-gradient(135deg, #4F8EF7, #7C3AED)",
                  }}
                >
                  W
                </div>
                <span className="text-white font-semibold text-sm tracking-wide">
                  WebWave
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Contact Us
              </h1>
              <p className="text-blue-300 text-base mt-1 font-light">
                Get in Touch With Us
              </p>
            </div>

            {/* Main grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Form */}
              <div>
                <h2
                  className="text-lg font-bold text-white mb-5"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Get in Touch
                </h2>

                {/* Success state */}
                {status === "success" ? (
                  <div
                    className="flex flex-col items-center justify-center py-12 rounded-2xl text-center"
                    style={{
                      background: "rgba(79,142,247,0.08)",
                      border: "1px solid rgba(79,142,247,0.25)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{
                        background: "linear-gradient(135deg, #4F8EF7, #7C3AED)",
                      }}
                    >
                      <CheckIcon />
                    </div>
                    <h3
                      className="text-white text-xl font-bold mb-2"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-blue-300 text-sm">
                      We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 px-6 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:opacity-80"
                      style={{
                        background: "linear-gradient(135deg, #4F8EF7, #7C3AED)",
                      }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                      name="name"
                      placeholder="Name *"
                      value={form.name}
                      onChange={handleChange}
                    />
                    <InputField
                      name="email"
                      placeholder="Email *"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                    />
                    <InputField
                      name="phone"
                      placeholder="Phone (Optional)"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                    />
                    <textarea
                      name="message"
                      placeholder="Message *"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-blue-400 resize-none outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      style={{
                        background: "rgba(26,26,74,0.6)",
                        border: "1px solid rgba(79,142,247,0.25)",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(79,142,247,0.7)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(79,142,247,0.25)")
                      }
                    />
                    {status === "error" && (
                      <p className="text-red-400 text-xs px-1">{errorMsg}</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        background:
                          status === "loading"
                            ? "rgba(79,142,247,0.5)"
                            : "linear-gradient(90deg, #4F8EF7 0%, #7C3AED 100%)",
                        boxShadow: "0 4px 20px rgba(79,142,247,0.35)",
                      }}
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Right: Info */}
              <div className="space-y-6">
                <InfoCard>
                  <h3
                    className="text-white font-bold text-base mb-4 flex items-center gap-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    <MailIcon /> Get in Touch
                  </h3>
                  <InfoRow icon={<MailIcon />} text="info@webwave.com" />
                  <InfoRow icon={<PhoneIcon />} text="+123 456 7890" />
                </InfoCard>

                <InfoCard>
                  <h3
                    className="text-white font-bold text-base mb-4 flex items-center gap-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    <LocationIcon /> Our Office
                  </h3>
                  <InfoRow
                    icon={<LocationIcon />}
                    text="123 WebWave St, Tech City, TX 56001"
                  />
                  <div className="flex gap-2 mt-4">
                    {socials.map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-200 hover:scale-110 hover:opacity-90 ${s.color}`}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </InfoCard>
              </div>
            </div>

            {/* Stats */}
            <div
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              style={{ borderTop: "1px solid rgba(79,142,247,0.15)" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-xl font-extrabold"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      background: "linear-gradient(135deg, #4F8EF7, #00D4FF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-blue-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom gradient bar */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(90deg, #7C3AED, #4F8EF7, #00D4FF)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
