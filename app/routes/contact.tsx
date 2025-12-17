import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    if (!email || !message) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, type: "contact" }),
      });
      if (response.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-left">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                    rows={4}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full text-white py-3.5 rounded-xl font-bold hover:bg-emerald-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#197C2C" }}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="mt-4 text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
