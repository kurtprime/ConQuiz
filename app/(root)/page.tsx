"use client";

import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { BrainCircuit, Trophy, BarChart, Users } from "lucide-react";

export default function page() {
  const features = [
    {
      icon: <BrainCircuit className="w-10 h-10 text-blue-600" />,
      title: "Expand Your Knowledge",
      description:
        "Challenge yourself with our diverse quiz library across countless topics. CONQUIZ helps you discover new facts and retain information through engaging, bite-sized learning experiences.",
      bgColor: "bg-blue-50",
    },
    {
      icon: <BarChart className="w-10 h-10 text-green-600" />,
      title: "Track Your Progress",
      description:
        "See your learning journey visualized. CONQUIZ provides detailed analytics to help you identify strengths, track improvements, and focus on areas that need more attention.",
      bgColor: "bg-green-50",
    },
    {
      icon: <Trophy className="w-10 h-10 text-amber-600" />,
      title: "Achieve Mastery",
      description:
        "Earn badges and climb leaderboards as you master topics. CONQUIZ turns learning into a rewarding experience with milestones that celebrate your educational achievements.",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600" />,
      title: "Connect & Compete",
      description:
        "Challenge friends. CONQUIZ makes education social and fun through friendly competitions and shared learning experiences.",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="flex flex-col gap-20 items-center justify-items-center min-h-screen win-w-[1366px] bg-[#FAFCFB]">
      <Element name="hero">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src="/assets/Hero_Image.webp"
              className="rounded-lg object-cover max-sm:h-[200px] max-sm:w-[200px]"
              width={300}
              height={600}
              alt="Hero Image"
            />
            <div className="flex flex-col  gap-10">
              <h1 className="text-5xl font-bold max-sm:text-2xl">
                CONVERT PDF TO QUIZ WITHOUT DOING THE HASTLE
              </h1>
              <ul className="list-none space-y-4 max-w-md max-sm:mx-auto text-[#293a47]">
                <li className="py-4 ">
                  <div className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold sm:text-xl">
                      Study Smarter, Not Longer
                    </h3>
                  </div>
                </li>

                <li className="py-4 ">
                  <div className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold sm:text-xl">
                      Active {">"} Passive Learning
                    </h3>
                  </div>
                </li>
              </ul>
              <Link
                href="/sign-up"
                className="btn h-15 w-50 rounded-3xl max-sm:mx-auto text-[#fafcfb] bg-[#5e8ad1]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Element>
      <Element name="feature">
        <section className="py-24 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Why You Love ConQuiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lightning Fast */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                <p className="text-gray-600">
                  Create comprehensive quizzes in seconds, not hours. Our
                  intelligent system does the heavy lifting for you.
                </p>
              </div>

              {/* Works Everywhere */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Works Everywhere</h3>
                <p className="text-gray-600">
                  Access your quizzes on any device. Study on your phone,
                  tablet, or computer - anytime, anywhere.
                </p>
              </div>

              {/* Repeat similar blocks for other features */}
              {/* Add remaining 4 features following the same pattern */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 14l2 2m-2-2l-2 2m4-4l-2-2m2 2l2-2"
                      className="text-purple-500"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Note-to-Quiz Conversion
                </h3>
                <p className="text-gray-600">
                  Transform your study notes into interactive quizzes with one
                  click. Our AI analyzes your notes and creates targeted
                  questions to test your understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element className="min-h-[calc(100vh-200px)] py-20" name="about-us">
        <section className="py-16 px-4 ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How CONQUIZ Helps You Grow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform transforms learning into an engaging, rewarding
                journey that helps you expand knowledge and track progress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="mb-5">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link
                  href={"/sign-up"}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Start Learning Journey
                </Link>
              </div>
              <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
                Join thousands of learners who use CONQUIZ daily to expand their
                knowledge, track progress, and turn learning into an engaging
                adventure.
              </p>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}
