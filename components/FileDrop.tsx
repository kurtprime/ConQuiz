"use client";

import { useFormStatus } from "react-dom";
import { deepseek } from "@/utils/action/deepseek.action";
import Form from "next/form";
import pdfToText from "react-pdftotext";
import { createQuiz } from "@/utils/action/quiz.action";
import { useRouter } from "next/navigation";
import { CloudIcon } from "lucide-react";
import { useState } from "react";
import { upsertUserQuiz } from "@/utils/action/user.action";

export default function FileDrop({ userId }: { userId: string }) {
  const router = useRouter();
  const [PdfText, setPdfText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [difficulty, setDifficulty] = useState("medium");
  const [maxQuestions, setMaxQuestions] = useState("");

  async function onSubmit(formData: FormData) {
    const difficulty = formData.get("difficulty") as string;
    const maxQuest = formData?.get("numberOfQuestions") as string;
    console.log(userId);

    const res: any = await deepseek({
      content: PdfText,
      difficulty: difficulty,
      maxQuestion: +maxQuest,
    });
    const quiz = JSON.parse(res);
    console.log("QUIZ", quiz);
    const { id, _id } = await createQuiz(quiz, userId);
    await upsertUserQuiz(userId, _id);
    router.push(`/quiz/${id}`);
  }
  function extractText(event: any) {
    const file = event.target.files[0];
    pdfToText(file)
      .then((text) => {
        setPdfText(text);
        console.log(text);
      })
      .catch((error) =>
        console.error("Failed to extract text from pdf ", error)
      );
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
      extractText(event);
    }
  };
  function Submit() {
    const { pending } = useFormStatus();
    if (!pending)
      return (
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
        >
          Convert to Quiz ≫
        </button>
      );
    return (
      <button disabled className="btn">
        <span className="loading loading-spinner"></span>
        Creating Quiz
      </button>
    );
  }
  return (
    <Form
      action={onSubmit}
      className="w-full min-h-[80vh] flex items-center justify-center "
    >
      <div className="card bg-base-100 w-150 shadow-sm">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-4 text-blue-200 text-2xl">★</div>
          <div className="absolute top-8 right-12 text-blue-200 text-lg">✦</div>
          <div className="absolute bottom-12 left-8 text-blue-200 text-xl">
            ✧
          </div>
          <div className="absolute top-20 right-4 text-blue-200 text-2xl">
            ★
          </div>
        </div>
        <div className="w-full border-2 border-dashed border-blue-200 rounded-lg p-8 text-center bg-blue-50/50 relative">
          <input
            type="file"
            required
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              {file ? (
                <div className="text-blue-500 flex items-center justify-center h-full">
                  <CloudIcon className="w-16 h-16" />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <CloudIcon className="w-full h-full text-blue-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-400 text-2xl">☺</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="text-blue-600 mb-2">Drop File</p>
            <p className="text-gray-400 text-sm">
              {file ? file.name : "No file chosen yet"}
            </p>
          </div>
        </div>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">File Drop</h2> */}
          {/* <input
            type="file"
            onChange={extractText}
            required
            className="file-input file-input-ghost"
          /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-blue-600 mb-2">Difficulty:</label>
              <select
                value={difficulty}
                name="difficulty"
                required
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-2 border border-blue-200 rounded-lg bg-blue-50 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <label className="block text-blue-600 mb-2">
                Maximum of Questions:
              </label>
              <input
                type="number"
                value={maxQuestions}
                name="numberOfQuestions"
                required
                onChange={(e) => setMaxQuestions(e.target.value)}
                placeholder="Enter number"
                className="w-full p-2 border border-blue-200 rounded-lg bg-blue-50 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
          <Submit />

          <div className="card-actions"></div>
        </div>
      </div>
    </Form>
  );
}
