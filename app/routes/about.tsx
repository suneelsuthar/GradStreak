import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About GradStreak
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            GradStreak is dedicated to helping students achieve their academic
            goals through gamification and consistency. We believe that small,
            consistent actions lead to big results. Join our community of
            motivated learners today!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
