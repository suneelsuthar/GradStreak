import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarIcon from "../assets/icons/star.svg";
import FocusIcon from "../assets/icons/focus.svg";
import ReportImg1 from "../assets/icons/about1.jpg";
import ReportImg2 from "../assets/icons/about2.jpg";
import ReportImg3 from "../assets/icons/about3.jpg";
import ReportImg4 from "../assets/icons/about4.jpg";
import BoostIcon from "../assets/icons/boost.svg";
import Solution1 from "../assets/icons/solution1.jpg";
import Solution2 from "../assets/icons/solution2.jpg";
import Solution3 from "../assets/icons/solution3.jpg";
import Solution4 from "../assets/icons/solution4.jpg";
import Motivated from "../assets/icons/motivated.svg";
import Org from "../assets/icons/org.svg";
import Arrow from "../assets/icons/about-arrow.svg";
import { useWaitlist } from "../context/WaitlistContext";

const About = () => {
  const { openWaitlistModal } = useWaitlist();
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      <Navbar />

      <main className="flex-grow">
        <section
          className=" mx-auto px-4 pt-32 md:pt-40 pb-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(240, 249, 246, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(232, 245, 241, 1)",
          }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full   px-3 py-2 text-sm font-regular mt-20"
              style={{
                border: "1px solid rgba(45, 157, 120, 0.2)",
                color: "#111827", // gray-900
              }}
            >
              <img src={StarIcon} />
              Transforming Student Success
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              About{" "}
              <span className="text-emerald-600" style={{ color: "#197C2C" }}>
                GradStreak
              </span>
            </h1>
            <p
              className="mt-4   text-lg"
              style={{ color: "#787878", fontWeight: "400" }}
            >
              We're on a mission to revolutionize how students stay motivated,
              organized, and successful in their academic journey.
            </p>
          </div>
        </section>

        <section>
          <div
            className="p-6 sm:p-8 md:p-20 "
            style={{
              backgroundColor: "#FB2C3614",
            }}
          >
            <div
              className=" flex gap-2 font-semibold text-sm sm:mt-20"
              style={{
                alignSelf: "center",
                margin: "auto",
                width: 223,
                backgroundColor: "#FEF2F2",
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                color: "#E5454D",
                fontSize: 20,
                borderRadius: 100,
                marginBottom: 40,
              }}
            >
              <img
                src={FocusIcon}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              THE PROBLEM
            </div>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left: Image grid in rounded container */}
              <div className="rounded-[22px] bg-white/80 border border-rose-100 p-4 md:p-4 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-5">
                  <div
                    className="relative overflow-hidden rounded-2xl ring-1 ring-rose-100
                  h-44 md:h-62
                  "
                  >
                    <img
                      src={ReportImg1}
                      alt="Overwhelmed"
                      className="h-44 md:h-62 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute bottom-3 left-3 rounded bg-rose-600 text-white text-sm font-regular px-3 py-1 shadow z-10"
                      style={{
                        backgroundColor: "#E5454D",
                        borderRadius: 11,
                        marginBottom: 10,
                      }}
                    >
                      Overwhelmed
                    </span>
                  </div>
                  <div
                    className="relative overflow-hidden rounded-2xl ring-1 ring-rose-100
                    h-44 md:h-62

                    "
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)",
                    }}
                  >
                    <img
                      src={ReportImg2}
                      alt="Overwhelmed"
                      className="h-44 md:h-62 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute bottom-3 left-3 rounded bg-rose-600 text-white text-sm font-regular px-3 py-1 shadow z-10"
                      style={{
                        backgroundColor: "#E5454D",
                        borderRadius: 11,
                        marginBottom: 10,
                      }}
                    >
                      Disorganized
                    </span>
                  </div>
                  <div
                    className="relative overflow-hidden rounded-2xl ring-1 ring-rose-100
                    h-44 md:h-62

                    "
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)",
                    }}
                  >
                    <img
                      src={ReportImg3}
                      alt="Overwhelmed"
                      className="h-44 md:h-62 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute bottom-3 left-3  bg-rose-600 text-white text-sm font-regular px-3 py-1 shadow z-10"
                      style={{
                        backgroundColor: "#E5454D",
                        borderRadius: 11,
                        marginBottom: 10,
                      }}
                    >
                      Unmotivated
                    </span>
                  </div>
                  <div
                    className="relative overflow-hidden rounded-2xl ring-1 ring-rose-100
                    h-44 md:h-62

                    "
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)",
                    }}
                  >
                    <img
                      src={ReportImg4}
                      alt="Overwhelmed"
                      className="h-44 md:h-72 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute bottom-3 left-3 rounded bg-rose-600 text-white text-sm font-regular px-3 py-1 shadow z-10"
                      style={{
                        backgroundColor: "#E5454D",
                        borderRadius: 11,
                        marginBottom: 10,
                      }}
                    >
                      Missed Deadlines
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Headline, paragraphs, checklist card */}
              <div>
                <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 leading-tight pt-4">
                  Lack of{" "}
                  <span className="text-rose-600" style={{ color: "#E5454D" }}>
                    Organization
                  </span>
                  <br />
                  Lack of{" "}
                  <span className="text-rose-600" style={{ color: "#E5454D" }}>
                    Motivation
                  </span>
                </h2>
                <p
                  className="mt-5 text-gray-500 text-lg"
                  style={{ color: "#787878" }}
                >
                  Students everywhere are facing a growing challenge in their
                  academic lives:
                </p>
                <p
                  className="mt-5 text-gray-500 text-lg"
                  style={{ color: "#787878" }}
                >
                  Staying organized isn’t enough when motivation fades and
                  consistency breaks down. Assignments pile up, deadlines slip,
                  and effort doesn’t always translate into results.
                </p>
                <div className="mt-6 rounded-2xl bg-white border border-rose-100 shadow-sm p-4 md:p-5 w-full max-w-xl">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded bg-rose-100 text-rose-600"
                      style={{
                        backgroundColor: "#FFE2E2",
                        color: "#E5454D",
                      }}
                    >
                      ✕
                    </span>
                    <span style={{ color: "#374151" }}>
                      Hard work ≠ recognition.
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-gray-700">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded bg-rose-100 text-rose-600"
                      style={{
                        backgroundColor: "#FFE2E2",
                        color: "#E5454D",
                      }}
                    >
                      ✕
                    </span>
                    <span style={{ color: "#374151" }}>
                      Productivity ≠ motivation.
                    </span>
                  </div>
                </div>
                <p
                  className="mt-6 font-medium text-lg text-gray-900"
                  style={{ color: "#111827" }}
                >
                  Academic effort needs a better system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          style={{ backgroundColor: "#197C2C14", margin: 0 }}
          className="p-2 sm:p-8 md:p-10 "
        >
          <section className="container mx-auto px-4 pb-14">
            <div className="rounded-3xl p-0 md:p-0 overflow-hidden">
              <div className="md:pt-6">
                <div
                  className="flex gap-2 font-semibold text-sm"
                  style={{
                    alignSelf: "center",
                    margin: "auto",
                    width: 223,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#197C2C",
                    fontSize: 20,
                    borderRadius: 100,
                    marginBottom: 40,
                    background: "linear-gradient(180deg, #2D9D7833, #1B5E6F33",
                    marginTop: 20,
                  }}
                >
                  <img
                    src={BoostIcon}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                  THE SOLUTION
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left: Text content on dark bg */}
                <div className="order-2 lg:order-1 text-white">
                  <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                    <span className="text-black">Boosting</span>{" "}
                    <span className="" style={{ color: "#197C2C" }}>
                      Academic Performance
                    </span>{" "}
                    <span className="text-black">Through</span>{" "}
                    <span className="text-white" style={{ color: "#197C2C" }}>
                      Gamification
                    </span>
                  </h2>
                  <p className="mt-5 text-xl" style={{ color: "#787878" }}>
                    GradStreak turns academic effort into something students can
                    see, track, and earn from. Assignments become streaks.
                    Consistency becomes points. Progress becomes rewards.
                  </p>
                  <p className="mt-4 text-xl" style={{ color: "#787878" }}>
                    By gamifying coursework, GradStreak keeps students engaged,
                    motivated, and accountable. Productivity rises, deadlines
                    stop slipping, and effort finally feels rewarding.
                  </p>
                  <div
                    className="mt-6 rounded-2xl px-5 py-4 text-white/90 max-w-xl text-lg"
                    style={{
                      border: "1px solid #2D9D7833",
                      color: "#197C2C",
                      background:
                        "linear-gradient(180deg, #2D9D780D, #1B5E6F0D",
                      fontWeight: "500",
                    }}
                  >
                    GradStreak helps students stay on track, compete with peers,
                    and take pride in being great scholars.
                  </div>
                </div>

                {/* Right: Image grid inside white rounded container */}
                <div className="order-1 lg:order-2">
                  <div
                    className="rounded-[22px] bg-white  p-4 "
                    style={{ border: "0.65px solid #2D9D7833" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-emerald-100">
                        <img
                          src={Solution1}
                          alt="Organized"
                          className="h-44 md:h-60 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span
                          className="absolute bottom-3 left-3 bg-[#197C2C] text-white text-sm font-regular px-3 py-1 shadow z-10"
                          style={{
                            borderRadius: 11,
                            marginBottom: 10,
                          }}
                        >
                          Organized
                        </span>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-emerald-100">
                        <img
                          src={Solution2}
                          alt="Motivated"
                          className="h-44 md:h-60 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span
                          className="absolute bottom-3 left-3 bg-[#197C2C] text-white text-sm font-regular px-3 py-1 shadow z-10"
                          style={{
                            borderRadius: 11,
                            marginBottom: 10,
                          }}
                        >
                          Motivated
                        </span>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-emerald-100">
                        <img
                          src={Solution3}
                          alt="Winning"
                          className="h-44 md:h-60 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span
                          className="absolute bottom-3 left-3 bg-[#197C2C] text-white text-sm font-regular px-3 py-1 shadow z-10"
                          style={{
                            borderRadius: 11,
                            marginBottom: 10,
                          }}
                        >
                          Winning
                        </span>
                      </div>
                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-emerald-100">
                        <img
                          src={Solution4}
                          alt="Rewarded"
                          className="h-44 md:h-60 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span
                          className="absolute bottom-3 left-3 bg-[#197C2C] text-white text-sm font-regular px-3 py-1 shadow z-10"
                          style={{
                            borderRadius: 11,
                            marginBottom: 10,
                          }}
                        >
                          Rewarded
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div style={{ backgroundColor: "#fff" }}>
          <section className="container mx-auto px-4 pb-20 pt-20">
            <div className="rounded-[32px] bg-[#197C2C] text-white p-6 md:p-10 shadow-lg relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, #fff, transparent 40%), radial-gradient(circle at 80% 0%, #fff, transparent 40%)",
                }}
              ></div>
              <div className="relative">
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF33] px-3 py-2 text-xs font-regular">
                    The Impact
                  </span>
                </div>
                <h3 className="mt-3 text-center text-2xl md:text-3xl font-regular">
                  Academic Excellence, Gamified
                </h3>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:px-15">
                  <div className="rounded-2xl bg-[#FFFFFF1A] backdrop-blur px-6 py-5 border border-[#FFFFFF33] text-center">
                    <img
                      src={Arrow}
                      className="mx-auto"
                      style={{
                        height: 40,
                        marginBottom: 5,
                      }}
                    />
                    <div className="text-2xl font-regular">85%</div>
                    <div className="text-sm opacity-90">
                      Higher Productivity
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur px-6 py-5 border border-white/20 text-center">
                    <img
                      src={Org}
                      className="mx-auto"
                      style={{
                        height: 37,
                        width: 37,
                        marginBottom: 5,
                      }}
                    />
                    <div className="text-3xl font-regular">92%</div>
                    <div className="text-sm opacity-90">
                      Better Organization
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur px-6 py-5 border border-white/20 text-center">
                    <img
                      src={Motivated}
                      className="mx-auto"
                      style={{
                        height: 37,
                        width: 37,
                        marginBottom: 5,
                      }}
                    />
                    <div className="text-3xl font-regular">96%</div>
                    <div className="text-sm opacity-90">More Motivated</div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={openWaitlistModal}
                    className="inline-flex items-center justify-center rounded-full bg-white text-[#197C2C] font-regular px-6 py-3 shadow-sm hover:shadow-md transition"
                    style={{ fontSize: 15 }}
                  >
                    Join the Movement
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
