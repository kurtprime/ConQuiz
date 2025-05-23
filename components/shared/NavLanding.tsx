"use client";

import React, { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Link,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useState } from "react"; // Native React hook

function NavLanding() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");

  // Initialize scroll spy
  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkClass = (section: string) =>
    `text-sm font-medium transition-colors hover:text-primary text-[#48578e] ${
      activeSection === section
        ? "border-b-2 border-blue-500 text-blue-600"
        : ""
    }`;
  return (
    <nav className="sticky top-0 z-50 w-full shadow-sm bg-background ">
      <div className="flex h-16 items-center">
        {/* Logo section with full-left background */}
        <div className="h-full bg-[#b7cede] flex items-center pl-4 pr-8 rounded-r-lg">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center">
              <Image
                alt="Conquiz Logo"
                src="/assets/Logo.png"
                width={40}
                height={40}
                className="object-contain p-1"
              />
            </div>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className={linkClass("hero")}
              onSetActive={() => handleSetActive("hero")}
            >
              ConQuiz
            </Link>
          </div>
        </div>

        {/* Rest of the navigation content */}
        <div className="flex-1 flex items-center justify-between px-4 max-sm:hidden sm:px-8">
          {" "}
          <div className="flex flex-1 justify-center gap-10 items-center cursor-default space-x-6 tab tabs-border">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className={linkClass("hero")}
              onSetActive={() => handleSetActive("hero")}
            >
              Home
            </Link>
            <Link
              to="feature"
              spy={true}
              smooth={true}
              duration={500}
              className={linkClass("feature")}
              onSetActive={() => handleSetActive("feature")}
            >
              Features
            </Link>
            <Link
              to="about-us"
              spy={true}
              smooth={true}
              duration={500}
              className={linkClass("about-us")}
              onSetActive={() => handleSetActive("about-us")}
            >
              About Us
            </Link>
          </div>
          {/* Auth Section */}
          <div className="flex items-center justify-center text-[#48578e] space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="rounded-md px-4 py-2 cursor-pointer text-sm font-medium hover:bg-accent">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <UserButton
              appearance={{
                elements: {
                  userButtonBox: "flex-row-reverse gap-2",
                  avatarBox: "h-8 w-8",
                },
              }}
              showName={true}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-self-end! justify-around sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b">
              <div className="flex flex-col gap-4 p-4">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={linkClass("hero")}
                  onSetActive={() => handleSetActive("hero")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="feature"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={linkClass("feature")}
                  onSetActive={() => handleSetActive("feature")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="about-us"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={linkClass("about-us")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </div>
            </div>
          )}

          <SignedIn>
            <UserButton
              appearance={{ elements: { userButtonBox: "h-8 w-8" } }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="rounded-md px-3 py-1.5 text-sm cursor-pointer font-medium hover:bg-accent">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default NavLanding;
