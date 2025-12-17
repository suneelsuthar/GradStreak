import { Link } from "react-router";
import GridBg from "../assets/icons/grid_bg.png";
import Playstore from "../assets/icons/playstore.svg";
import Appstore from "../assets/icons/appstore.svg";
import Trophy from "../assets/icons/trophy.svg";
import Texas from "../assets/icons/texas.svg";
import TexasState from "../assets/icons/texas_state.svg";
import Uni1 from "../assets/icons/uni_1.svg";
import Uni2 from "../assets/icons/uni_2.svg";
import Uni3 from "../assets/icons/uni_3.svg";
import Rank1 from "../assets/icons/rank_1.png";
import Rank2 from "../assets/icons/rank_2.png";
import Rank3 from "../assets/icons/rank_3.png";
import CalendarIcon from "../assets/icons/calendar.svg";
import HistoryIcon from "../assets/icons/history.svg";
import NewBadgeIcon from "../assets/icons/new_badge.svg";
import Navbar from "../components/Navbar";
import PhoneImg from "../assets/icons/mobile_img.png";
import RankArrowIcon from "../assets/icons/rank_arrow.svg";
import StarIcon from "../assets/icons/star.svg";
import ArrowIcon from "../assets/icons/join_arrow.svg";

const Home = () => {
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

                <h1 className="text-5xl sm:text-5xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
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
                  <Link
                    to="/get-started"
                    className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
                    style={{
                      backgroundColor: "#197C2C",
                      fontFamily: "Space Grotesk",
                      fontWeight: "bold",
                    }}
                  >
                    Join Waitlist
                    <img src={ArrowIcon} />
                  </Link>
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
              <div className="relative mt-10 lg:mt-0 flex flex-col items-left">
                {/* Top 5 Ranking Card */}
                <div className="w-full max-w-[360px] rounded-2xl backdrop-blur-sm border border-gray-100 shadow-inner shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 ">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="round bg-primary"
                        style={{
                          backgroundColor: "#197C2C",
                          height: 33,
                          width: 33,
                          borderRadius: 11,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={Trophy} alt="trophy" />
                      </div>
                      <div>
                        <div className="text-sm font-regular text-black">
                          The Top 5
                        </div>
                        <div className="text-xs" style={{ color: "#787878" }}>
                          Texas Region
                        </div>
                      </div>
                    </div>
                    <img src={RankArrowIcon} />
                  </div>
                  <ul className="space-y-4 text-sm">
                    <li className=" items-center justify-between">
                      <div className="flex flex-column items-center gap-3">
                        <img src={Rank1} className="w-7 h-7" alt="1" />
                        <img src={Texas} alt="Texas A&M" />
                        <div>
                          <span className="text-gray-800">Texas A&M</span>
                          <div
                            className="font-regular"
                            style={{ color: "#197C2C", fontSize: 13 }}
                          >
                            12,450 pts
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className=" items-center justify-between">
                      <div className="flex flex-column items-center gap-3">
                        <img src={Rank2} className="w-7 h-7" alt="2" />
                        <img src={TexasState} alt="Texas State University" />
                        <div>
                          <span className="text-gray-800">
                            Texas State University
                          </span>
                          <div
                            className="font-regular"
                            style={{ color: "#197C2C", fontSize: 13 }}
                          >
                            11,230 pts
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={Rank3} className="w-7 h-7" alt="3" />
                        <img src={Uni1} alt="University of Oklahoma" />

                        <div>
                          <span className="text-gray-800">
                            University of Oklahoma
                          </span>
                          <div
                            className="font-regular"
                            style={{ color: "#197C2C", fontSize: 13 }}
                          >
                            10,890 pts
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 inline-flex items-center justify-center rounded-full text-gray-700 text-xs font-semibold">
                          4
                        </span>
                        <img src={Uni2} alt="University of North Texas" />

                        <div>
                          <span className="text-gray-800">
                            University of Oklahoma
                          </span>
                          <div
                            className="font-regular"
                            style={{ color: "#197C2C", fontSize: 13 }}
                          >
                            9,670 pts
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 inline-flex items-center justify-center rounded-full text-gray-700 text-xs font-semibold">
                          5
                        </span>
                        <img src={Uni3} alt="SMU" />

                        <div>
                          <span className="text-gray-800">
                            Southern Methodist University
                          </span>
                          <div
                            className="font-regular"
                            style={{ color: "#197C2C", fontSize: 13 }}
                          >
                            9,120 pts
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Phone mock */}
                <div className="mt-[200px] w-[260px] sm:w-[300px] lg:w-[500px] lg:h-[625px] mx-auto rotate-6 absolute -right-0 lg:mt-8 lg:-top-10 z-3">
                  <img src={PhoneImg} />
                </div>

                {/* Notification cards */}
                <div className="w-full max-w-[384px] space-y-3 mt-30 items-left">
                  <div className="flex items-start gap-3 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-inner shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 translate-y-0">
                    <div
                      className="rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#51A2FF",
                        height: 48,
                        width: 68,
                      }}
                    >
                      <img src={CalendarIcon} alt="calendar" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Heads Up for the Week Ahead
                      </div>
                      <div className="text-sm" style={{ color: "#787878" }}>
                        Heads up! 3 assignments due this week. Plan now, relax
                        later.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-inner shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 translate-y-1 md:-mt-6 md:ml-6">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#FF8904",
                        height: 48,
                        width: 58,
                      }}
                    >
                      <img src={HistoryIcon} alt="clock" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Math Homework due in 2 hours
                      </div>
                      <div className="text-sm" style={{ color: "#787878" }}>
                        Time's almost up — submit Math Homework soon.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-inner shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 translate-y-2 md:-mt-6 md:ml-10">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "#197C2C",
                        height: 48,
                        width: 48,
                      }}
                    >
                      <img src={NewBadgeIcon} alt="new badge" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        New Badge Unlocked!
                      </div>
                      <div className="text-sm" style={{ color: "#787878" }}>
                        You earned a new badge. Nice work!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
