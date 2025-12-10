import { Link, useLocation } from "react-router";
import { useState } from "react";
import Logo from "./../assets/icons/logo.svg";
const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = (to: string) => pathname === to;
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        marginTop:  -170,
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
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
              <span
                className={`${isActive("/about") ? "bg-emerald-600" : "bg-transparent"} h-0.5 w-6 rounded-full mt-1`}
              ></span>
            </div>
            <div className="flex flex-col items-center">
              <Link
                to="/features"
                className="text-gray-700 hover:text-gray-900"
              >
                Features
              </Link>
              <span
                className={`${isActive("/features") ? "bg-emerald-600" : "bg-transparent"} h-0.5 w-6 rounded-full mt-1`}
              ></span>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
              <span
                className={`${isActive("/contact") ? "bg-emerald-600" : "bg-transparent"} h-0.5 w-6 rounded-full mt-1`}
              ></span>
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full text-white px-4 py-2 font-semibold transition-colors shadow-sm"
              style={{
                backgroundColor: "#197C2C",
                fontSize: 14,
              }}
            >
              JOIN WAITLIST
            </Link>
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
                    className="text-gray-900 text-base"
                  >
                    About
                  </Link>
                  <span
                    className={`${isActive("/about") ? "bg-emerald-600" : "bg-transparent"} h-0.5 w-8 rounded-full mt-1`}
                  ></span>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    to="/features"
                    onClick={() => setOpen(false)}
                    className="text-gray-900 text-base"
                  >
                    Features
                  </Link>
                  <span
                    className={`${isActive("/features") ? "bg-emerald-600" : "bg-transparent"} h-0.5 w-8 rounded-full mt-1`}
                  ></span>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="text-gray-900 text-base"
                  >
                    Contact
                  </Link>
                  <span
                    className={`${isActive("/contact") ? "bg-emerald-600" : "bg-transparent"} h-0.5 w-8 rounded-full mt-1`}
                  ></span>
                </div>
                <Link
                  to="/get-started"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full text-white px-4 py-2 font-semibold"
                  style={{ backgroundColor: "#197C2C", fontSize: 14 }}
                >
                  JOIN WAITLIST
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
