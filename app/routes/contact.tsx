import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-left">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                rows={4}
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              className="w-full text-white py-3.5 rounded-xl font-bold hover:bg-emerald-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
              style={{ backgroundColor: "#197C2C" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
