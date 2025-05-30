import { SignIn } from "@clerk/nextjs";
import Head from "next/head";

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>
          Sign In to CONQUIZ - Engage, Learn, and Challenge Yourself
        </title>
        <meta
          name="description"
          content="Join CONQUIZ to access thousands of educational quizzes. Sign in to track your progress, earn achievements, and challenge your knowledge."
        />
        <meta
          name="keywords"
          content="quiz app, knowledge challenge, educational quizzes, learning platform, trivia games"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://con-quiz.vercel.app/sign-in" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta
          property="og:title"
          content="Sign In to CONQUIZ - The Ultimate Quiz Learning Platform"
        />
        <meta
          property="og:description"
          content="Access your personalized learning dashboard on CONQUIZ. Track progress, unlock achievements, and challenge your knowledge."
        />
        <meta
          property="og:image"
          content="https://con-quiz.vercel.app/og-signin.jpg"
        />
        <meta property="og:url" content="https://con-quiz.vercel.app/sign-in" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CONQUIZ Sign In",
            description: "Sign in page for CONQUIZ educational quiz platform",
            url: "https://con-quiz.vercel.app/sign-in",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://con-quiz.vercel.app/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Sign In",
                },
              ],
            },
          })}
        </script>
      </Head>

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Welcome Back to <span className="text-indigo-600">CONQUIZ</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sign in to continue your knowledge journey. Track your progress,
              unlock achievements, and challenge yourself with new quizzes
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Sign In to Your Account
                  </h2>
                  <p className="text-gray-600">
                    Continue your learning journey where you left off. Access
                    your personalized dashboard.
                  </p>
                </div>
                <SignIn
                  forceRedirectUrl="/quiz/create"
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "w-full shadow-none border-0 p-0",
                      headerTitle: "text-xl font-bold text-gray-900",
                      headerSubtitle: "text-gray-600",
                      formFieldLabel: "text-gray-700 font-medium",
                      formButtonPrimary:
                        "bg-indigo-600 hover:bg-indigo-700 transition-colors",
                      footerActionText: "text-gray-600",
                      footerActionLink: "text-indigo-600 hover:text-indigo-800",
                    },
                  }}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="space-y-8">
                <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Track Your Progress
                      </h3>
                      <p className="text-gray-600">
                        Review your quiz history, see your scores improve over
                        time, and identify areas to focus on.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-amber-100 p-3 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Challenge Friends
                      </h3>
                      <p className="text-gray-600">
                        Compete with others and share your quiz challenge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="/sign-up"
                className="font-medium text-indigo-600 hover:text-indigo-800"
              >
                Create one now
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
