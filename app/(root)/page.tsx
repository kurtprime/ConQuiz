"use client";

import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

export default function page() {
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
                CONVERT PDF TO QUIZ
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
                CONVERT PDF TO QUIZ
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
    </div>
  );
}
