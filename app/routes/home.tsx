import { Link } from "react-router";
import GridBg from "../assets/icons/grid_bg.png";
import Playstore from "../assets/icons/playstore.svg";
import Appstore from "../assets/icons/appstore.svg";
import HeroDesktop from "../assets/images/Hero-image-dekstop.png";
import HeroMobile from "../assets/images/Hero-images-mobile.png";
import Navbar from "../components/Navbar";
import StarIcon from "../assets/icons/star.svg";
import ArrowIcon from "../assets/icons/join_arrow.svg";
import { useWaitlist } from "../context/WaitlistContext";

const Home = () => {
  const { openWaitlistModal } = useWaitlist();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <section
          className="relative overflow-hidden min-h-screen pb-28 md:pb-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(16,185,129,0.10) 0%, rgba(16,185,129,0.04) 55%, rgba(255,255,255,0) 100%), url(${GridBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            paddingTop: 130,
          }}
        >
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              {/* Left content */}
              <div>
                <div
                  className="inline-flex items-center gap-2 bg-white border  rounded-full px-4 py-2 mb-6"
                  style={{ borderColor: "#2D9D7833" }}
                >
                  <img src={StarIcon} />
                  <span className="text-sm" style={{ color: "#000000" }}>
                    Join 4M+ Students Worldwide
                  </span>
                </div>

                <h1 className="text-5xl sm:text-5xl md:text-5xl font-bold leading-[1.2] tracking-[0.02em] text-gray-900 mb-6 ">
                  Motivate Yourself
                  <br />
                  To{" "}
                  <span
                    className="text-emerald-600"
                    style={{ color: "#197C2C" }}
                  >
                    Succeed In
                  </span>
                  <br />
                  <span
                    style={{ color: "#197C2C" }}
                    className="text-emerald-600"
                  >
                    School
                  </span>
                </h1>

                <p
                  className="text-lg md:text-xl max-w-xl mb-8"
                  style={{
                    fontSize: 18,
                    color: "#787878",
                    fontWeight: 400,
                  }}
                >
                  It's time to have fun when you get things done! Join over 4
                  million students and improve your life one task at a time.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openWaitlistModal}
                    className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
                    style={{
                      backgroundColor: "#197C2C",
                      fontFamily: "Space Grotesk",
                      fontWeight: "bold",
                    }}
                  >
                    Join Waitlist
                    <img src={ArrowIcon} />
                  </button>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontWeight: "400",
                      fontSize: 16,
                    }}
                  >
                    About Page
                  </Link>
                </div>

                {/* Stores (desktop/tablet) */}
                <div
                  className="mt-30 hidden lg:block
                sm:absolute
                "
                  // style={{top:100}}
                >
                  <div
                    className="text-gray-400 mb-3"
                    style={{ color: "#787878" }}
                  >
                    Available Soon
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={Playstore}
                      alt="Get it on Play Store"
                      className="h-11 w-auto bg-black rounded"
                      style={{ height: 51, width: 181, cursor: "pointer" }}
                    />
                    <img
                      src={Appstore}
                      alt="Download on the App Store"
                      className="h-11 w-auto bg-black rounded"
                      style={{ height: 51, width: 181, cursor: "pointer" }}
                    />
                  </div>
                </div>

                {/* Stores (mobile at bottom) */}
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-28 w-full max-w-[320px] text-center px-4 pt-14 pb-12 z-40">
                  <div
                    className="text-gray-400 mb-3"
                    style={{ color: "#787878" }}
                  >
                    Available Soon
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-5">
                    <img
                      src={Playstore}
                      alt="Get it on Play Store"
                      className="h-11 w-auto bg-black rounded"
                      style={{ height: 51, width: 150, cursor: "pointer" }}
                    />
                    <img
                      src={Appstore}
                      alt="Download on the App Store"
                      className="h-11 w-auto bg-black rounded"
                      style={{ height: 51, width: 150, cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>

              {/* Right mockups */}
              <div className="relative mt-10 lg:mt-0 flex items-center justify-center">
                {/* Desktop hero image */}
                <img
                  src={HeroDesktop}
                  alt="GradStreak App Preview"
                  className="hidden lg:block w-full max-w-[650px]"
                />
                {/* Mobile hero image */}
                <img
                  src={HeroMobile}
                  alt="GradStreak App Preview"
                  className="lg:hidden w-full max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
