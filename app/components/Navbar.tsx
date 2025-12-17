import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import Logo from "./../assets/icons/logo.svg";
import { useWaitlist } from "../context/WaitlistContext";
import ArrowIcon from "../assets/icons/join_arrow.svg";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = (to: string) => pathname === to;
  const { openWaitlistModal } = useWaitlist();
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastYRef.current;
      // Hide only after slight scroll and when menu is closed
      if (!open && y > 80 && goingDown) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
      lastYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);
  return (
    <nav
      className={`sticky top-0 z-50 transform transition-transform duration-300 ${hideOnScroll ? "-translate-y-full" : "translate-y-0"}`}
      style={{
        marginTop: -170,
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div
          className="relative z-50 flex items-center justify-between rounded-full bg-white border border-gray-200 px-5 md:px-8 py-3"
          style={{ zIndex: 100 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="GradStreak Logo"
              className="h-7 w-auto md:h-8"
            />
            <span className="text-lg md:text-xl font-semibold text-gray-900">
              GradStreak
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-center">
              <Link
                to="/about"
                className="hover:text-gray-900"
                style={{ color: isActive("/about") ? "#197C2C" : "#374151",fontWeight:
                  isActive("/about") ? "bold" : "normal"
                 }}
              >
                About
              </Link>
              {/* <span
                className={`h-0.5 w-6 rounded-full mt-1`}
                style={{ backgroundColor: isActive("/about") ? "#197C2C" : "transparent" }}
              ></span> */}
            </div>
            <div className="flex flex-col items-center">
              <Link
                to="/features"
                className="hover:text-gray-900"
                style={{ color: isActive("/features") ? "#197C2C" : "#374151",fontWeight:
                  isActive("/features") ? "bold" : "normal"
                 }}
              >
                Features
              </Link>
              {/* <span
                className={`h-0.5 w-6 rounded-full mt-1`}
                style={{ backgroundColor: isActive("/features") ? "#197C2C" : "transparent" }}
              ></span> */}
            </div>
            <div className="flex flex-col items-center">
              <Link
                to="/contact"
                className="hover:text-gray-900"
                style={{ color: isActive("/contact") ? "#197C2C" : "#374151",fontWeight:
                  isActive("/contact") ? "bold" : "normal"
                 }}
              >
                Contact
              </Link>
              {/* <span
                className={`h-0.5 w-6 rounded-full mt-1`}
                style={{ backgroundColor: isActive("/contact") ? "#197C2C" : "transparent" }}
              ></span> */}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={openWaitlistModal}
              className="inline-flex items-center gap-2 rounded-full text-white px-4 py-2 font-semibold transition-colors shadow-sm hover:bg-emerald-700"
              style={{
                backgroundColor: "#197C2C",
                fontSize: 14,
              }}
            >
              JOIN WAITLIST
              <img src={ArrowIcon} alt="" />
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-700"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Collapse Menu */}
        {open && (
          <div className="md:hidden px-1 pt-2 absolute w-85">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-5 py-4">
              <nav className="flex flex-col gap-4">
                <div className="flex flex-col items-start">
                  <Link
                    to="/about"
                    onClick={() => setOpen(false)}
                    className="text-base"
                    style={{ color: isActive("/about") ? "#197C2C" : "#111827" }}
                  >
                    About
                  </Link>
                  <span
                    className={`h-0.5 w-8 rounded-full mt-1`}
                    style={{ backgroundColor: isActive("/about") ? "#197C2C" : "transparent" }}
                  ></span>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    to="/features"
                    onClick={() => setOpen(false)}
                    className="text-base"
                    style={{ color: isActive("/features") ? "#197C2C" : "#111827" }}
                  >
                    Features
                  </Link>
                  <span
                    className={`h-0.5 w-8 rounded-full mt-1`}
                    style={{ backgroundColor: isActive("/features") ? "#197C2C" : "transparent" }}
                  ></span>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="text-base"
                    style={{ color: isActive("/contact") ? "#197C2C" : "#111827" }}
                  >
                    Contact
                  </Link>
                  <span
                    className={`h-0.5 w-8 rounded-full mt-1`}
                    style={{ backgroundColor: isActive("/contact") ? "#197C2C" : "transparent" }}
                  ></span>
                </div>
                <button
                  onClick={() => {
                    setOpen(false);
                    openWaitlistModal();
                  }}
                  className="mt-2 inline-flex items-center justify-center rounded-full text-white px-4 py-2 font-semibold"
                  style={{ backgroundColor: "#197C2C", fontSize: 14 }}
                >
                  JOIN WAITLIST
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
