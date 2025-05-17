import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUserQuizzes } from "@/utils/action/user.action";
import { QuizDocument } from "@/utils/interface/quiz.inter";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
export async function TableQuiz() {
  const user = await currentUser();

  if (!user) redirect("sign-in");
  const res: any = await getUserQuizzes(user.id);
  const quizzes = res.quizCreated;
  console.log("LIst of QUIZ ", quizzes);
  if (!quizzes) return <div>Create a Quiz first</div>;
  return (
    <Table>
      {quizzes.length === 0 ? (
        <TableCaption>Create your Quiz first</TableCaption>
      ) : (
        <TableCaption>List of your recent Quiz</TableCaption>
      )}
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead className="text-right">Your Score</TableHead>
          <TableHead className="text-right">Total Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quizzes.map((quiz: QuizDocument) => (
          <TableRow key={quiz._id}>
            <TableCell>
              <Link
                href={`/quiz/${quiz.id}`}
                className="block hover:bg-gray-100"
              >
                {quiz.title}
              </Link>
            </TableCell>
            <TableCell className="text-right">
              <Link
                href={`/quiz/${quiz.id}`}
                className="block hover:bg-gray-100"
              >
                {quiz.score || quiz.score === 0 ? quiz.score : "not taken yet"}
              </Link>
            </TableCell>
            <TableCell className="text-right">
              <Link
                href={`/quiz/${quiz.id}`}
                className="block hover:bg-gray-100"
              >
                {quiz.quizzes.length}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
