import { getUserQuizzes } from "@/utils/action/user.action";
import { QuizDocument } from "@/utils/interface/quiz.inter";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import QuizInfoUI from "./QuizInfoUI";

export async function TableQuiz() {
  const user = await currentUser();

  if (!user) redirect("sign-in");
  const res: any = await getUserQuizzes(user.id);
  const modifyQuiz = res.quizCreated;
  console.log("LIst of MODIFY QUIZ ", modifyQuiz[0]);

  const quizzes = modifyQuiz.map((quiz: any) => ({
    id: quiz.id.toString(),
    title: quiz.title,
    quizzes: quiz.quizzes.map((question: any) => {
      return { ...question, _id: question._id.toString() };
    }),
    score: quiz.score,
    createdAt: quiz.createdAt,
    updatedAt: quiz.updatedAt,
  }));
  console.log("LIst of QUIZ ", quizzes[0]);
  if (!quizzes) return <div>Create a Quiz first</div>;
  return (
    <div className="space-y-4 mx-auto">
      {quizzes.length === 0 ? (
        <div className="text-center py-4">Create your Quiz first</div>
      ) : (
        <div className="text-center py-2 text-sm text-gray-500">
          List of your recent Quiz
        </div>
      )}

      {quizzes.map((quiz: QuizDocument) => (
        <QuizInfoUI key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
