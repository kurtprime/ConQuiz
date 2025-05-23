import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";

function NavSkeleton() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              href="/"
              className="hidden text-xl font-semibold md:block text-[#2c3e50]"
            >
              ConQuiz
            </Link>
          </div>
        </div>

        {/* Rest of the navigation content */}
        <div className="flex-1 flex items-center justify-between px-4 max-sm:hidden sm:px-8">
          {" "}
          <div className="flex flex-1 justify-center gap-10 items-center space-x-6 tab tabs-border">
            <Skeleton className="h-6 w-20" />

            <Skeleton className="h-6 w-20" />

            <Skeleton className="h-6 w-20" />
          </div>
          {/* Auth Section */}
          <div className="flex items-center justify-center text-[#48578e] space-x-4">
            <Skeleton className="h-6 w-20" />
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
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-12 w-12" />
              </div>
            </div>
          )}

          <Skeleton className="h-12 w-12" />
        </div>
      </div>
    </nav>
  );
}

export default NavSkeleton;
