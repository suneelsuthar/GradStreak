import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Bell, Trophy, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Images
import AssignmentMockup from "../assets/images/automatic assignment tracking.png";
import GamificationMockup from "../assets/images/Gamification-mockup.png";

// Using the brand primary color #197C2C
const features = [
  {
    title: "Automatic Assignment Tracking",
    description:
      "Stop wasting time on data entry. GradStreak seamlessly syncs with your coursework to capture every assignment, exam, and deadline automatically—so your dashboard is always ready when you are.",
    icon: Calendar,
    color: "from-[#197C2C] to-[#4ade80]", // Brand Green to Light Green
    image: AssignmentMockup,
  },
  {
    title: "Smart Reminders",
    description:
      "Beat procrastination with AI-driven nudges. Unlike basic alarms, our smart reminders adapt to your schedule, alerting you at the optimal time to start working so you never miss a deadline.",
    icon: Bell,
    color: "from-[#197C2C] to-[#2dd4bf]", // Brand Green to Teal
    // Using AssignmentMockup as placeholder since no specific image was provided for Reminders yet.
    image: AssignmentMockup,
  },
  {
    title: "Gamification",
    description:
      "Level up your learning. Turn consistency into a game with daily streaks, XP rewards, and competitive leaderboards that make studying as addictive as scrolling.",
    icon: Trophy,
    color: "from-[#197C2C] to-[#a3e635]", // Brand Green to Lime
    image: GamificationMockup,
  },
];

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center justify-between mb-32 w-full ${
        isEven ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image Side (Opposite to Content) - Adjusted width constraint */}
      <div className="hidden md:flex w-1/2 justify-center items-center px-4">
        {feature.image && (
          <div className="relative group w-full flex justify-center">
            {/* Glow effect behind the transparent image */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-500 scale-90`}
            />

            {/* Transparent Image: Reduced max-w to 350px */}
            <img
              src={feature.image}
              alt={feature.title}
              className="relative z-10 w-full h-auto max-w-[250px] transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 drop-shadow-2xl"
            />
          </div>
        )}
      </div>

      {/* Center Point */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-gray-100 z-10 shadow-lg">
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.color}`}
        />
      </div>

      {/* Content Card */}
      <div className="w-full pl-16 md:pl-0 md:w-5/12">
        <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#197C2C]/30 transition-colors duration-300 shadow-xl overflow-hidden hover:shadow-2xl">
          {/* Hover Gradient Effect */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}
          />

          <div
            className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 text-white bg-gradient-to-br ${feature.color} shadow-lg shadow-gray-200`}
          >
            <feature.icon size={24} className="text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {feature.description}
          </p>

          {/* Mobile Image */}
          <div className="md:hidden mt-8 flex justify-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto max-w-[350px] drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#197C2C]/30">
      <Navbar />

      <main className="flex-grow">
        {/* Helper layout grid background - subtle for light mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 pt-48 pb-32 relative">
          <div className="text-center mb-32 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 text-gray-900"
            >
              Built for <span className="text-[#197C2C]">Consistency</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Everything you need to turn chaotic studying into a seamless
              streak of success.
            </motion.p>
          </div>

          <div
            ref={containerRef}
            className="relative max-w-7xl mx-auto min-h-[800px]"
          >
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform -translate-x-1/2">
              <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute top-0 left-0 w-full h-full bg-[#197C2C]"
              />
            </div>

            <div className="relative z-10 pt-10">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
