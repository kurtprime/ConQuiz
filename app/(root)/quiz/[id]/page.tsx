// app/[id]/page.tsx
import QuizFlow from "@/components/QuizFlow";
import { getQuizById } from "@/utils/action/quiz.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const quiz = await getQuizById(params.id);

  return {
    title: `${quiz?.title} | ConQuiz`,
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user: any = currentUser();
  if (!user) redirect("/sign-in");
  const quiz = await getQuizById(id);

  // Sanitize data to remove circular references
  const sanitizedQuiz = JSON.parse(JSON.stringify(quiz));

  return (
    <div className="flex flex-col items-center mx-[15%] justify-items-center min-h-[80vh]">
      {!quiz ? (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Cannot fine Quiz</span>
        </div>
      ) : (
        <QuizFlow userId={user.id} quiz={sanitizedQuiz} />
      )}
    </div>
  );
};

export default Page;
