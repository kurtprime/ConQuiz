// app/[id]/page.tsx
import QuizFlow from "@/components/QuizFlow";
import { getQuizById } from "@/utils/action/quiz.action";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  
  const quiz = await getQuizById(id);
  if (!quiz) return null;

  // Sanitize data to remove circular references
  const sanitizedQuiz = JSON.parse(JSON.stringify(quiz));

  return (
    <div className="flex flex-col items-center mx-[15%] justify-items-center min-h-screen">
        <QuizFlow  quiz={sanitizedQuiz} /> 
    </div>
  );
};

export default Page;