// app/[id]/page.tsx

import QuizPage from "@/components/QuizPage";
import { getQuizById } from "@/utils/action/quiz.action";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = await params;
  const quiz = await getQuizById(id);

  return {
    title: `${quiz?.title} | ConQuiz`,
  };
}

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>loading quiz...</div>}>
      <QuizPage params={params} />
    </Suspense>
  );
};

export default Page;
