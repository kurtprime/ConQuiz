import Question from "@/components/Question";
import { getQuizById } from "@/utils/action/quiz.action";

const page = async ({params}: {params: {id: string;}}) => {
    const {id} = await params;

    
    const quiz: any = await getQuizById(id);
    console.log("QUIZ retrieve", (quiz.quizzes))
    if(!quiz) return null;
    const questions = quiz.quizzes;
  return (
    <div className="flex flex-col items-center mx-[15%] justify-items-center min-h-screen">
        <>
           {quiz.quizzes.map((quest:any, i:number) => (<Question quest={quest} i={i} />) )}

        </>
    </div>
  )
}

export default page