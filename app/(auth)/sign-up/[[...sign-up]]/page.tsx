import { SignUp } from "@clerk/nextjs";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Join CONQUIZ - Create and Take Educational Quizzes</title>
        <meta
          name="description"
          content="Sign up for CONQUIZ to create custom quizzes, challenge your knowledge, and track your learning progress. Start your educational journey today."
        />
        <meta
          name="keywords"
          content="quiz creator, knowledge challenge, educational quizzes, learning platform, trivia maker"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://con-quiz.vercel.app/sign-up" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Join CONQUIZ - Create and Take Educational Quizzes"
        />
        <meta
          property="og:description"
          content="Create custom quizzes or challenge yourself with our library. Sign up for CONQUIZ to start your learning journey."
        />
        <meta
          property="og:image"
          content="https://con-quiz.vercel.app/og-signup.jpg"
        />
        <meta property="og:url" content="https://con-quiz.vercel.app/sign-up" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CONQUIZ Sign Up",
            description: "Sign up page for CONQUIZ educational quiz platform",
            url: "https://con-quiz.vercel.app/sign-up",
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
                  name: "Sign Up",
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
              Join <span className="text-indigo-600">CONQUIZ</span> Today
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create custom quizzes, challenge your knowledge, and track your
              learning progress. Start your educational journey with us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Create Your Account
                  </h2>
                  <p className="text-gray-600">
                    Join thousands of learners and quiz creators. Start in less
                    than a minute.
                  </p>
                </div>
                <SignUp
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
                        Create Custom Quizzes
                      </h3>
                      <p className="text-gray-600">
                        Build your own quizzes on any topic and share them with
                        the community.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Track Your Learning
                      </h3>
                      <p className="text-gray-600">
                        Monitor your quiz performance and see your knowledge
                        grow over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/sign-in"
                className="font-medium text-indigo-600 hover:text-indigo-800"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
