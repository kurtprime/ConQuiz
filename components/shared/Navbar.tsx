"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function LeftNav({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className="flex flex-row">
            <Image
              alt="Conquiz Logo"
              src="/assets/Logo.png"
              width={70}
              height={80}
              className="object-fill"
            />
            <span>ConQuiz</span>
          </div>
        </div>
        <div className="flex-none">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton showName={true} />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default LeftNav;
