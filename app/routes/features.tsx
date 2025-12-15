import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Streak Tracking</h3>
              <p className="text-gray-600">
                Keep your study streak alive and earn rewards for consistency.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Leaderboards</h3>
              <p className="text-gray-600">
                Compete with friends and classmates to see who stays the most
                consistent.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
              <p className="text-gray-600">
                Get timely notifications to ensure you never miss a study
                session.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
