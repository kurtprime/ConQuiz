"use client";

import { useFormStatus } from "react-dom";
import { deepseek } from "@/utils/action/deepseek.action";
import Form from "next/form";
import { createQuiz } from "@/utils/action/quiz.action";
import { useRouter } from "next/navigation";
import { CloudIcon, FileText, FileInput } from "lucide-react"; // Added new icons
import { useState } from "react";
import { upsertUserQuiz } from "@/utils/action/user.action";
import { FileTextExtractor } from "@/lib/fileParser";

export default function FileDrop({ userId }: { userId: string }) {
  const router = useRouter();
  const [error, setError]: any = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [maxQuestions, setMaxQuestions] = useState(5);
  const [progress, setProgress] = useState(20);
  const [currentStep, setCurrentStep] = useState("...");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputMode, setInputMode] = useState<"file" | "text">("file"); // New state for input mode

  async function onSubmit(formData: FormData) {
    try {
      setIsSubmitting(true);
      setError("");

      setProgress(20);
      setCurrentStep("Generating questions...");
      const difficulty = formData.get("difficulty");
      const numQuestions = formData.get("numberOfQuestions")!;

      // Use either extracted text or manually entered text
      const contentToUse =
        inputMode === "file"
          ? extractedText
          : (formData.get("textContent") as string);

      const res = await deepseek({
        content: contentToUse,
        difficulty: difficulty as string,
        maxQuestion: +numQuestions,
      });

      setProgress(60);
      if (!res) throw new Error("CANNOT MAKE QUIZ");
      // Step 3: Create quiz in DB (20% progress)
      setCurrentStep("Saving quiz...");
      const quiz = JSON.parse(res);
      const { id, _id } = await createQuiz(quiz, userId);
      await upsertUserQuiz(userId, _id);
      setProgress(80);

      // Step 4: Final redirect (100% progress)
      setCurrentStep("Redirecting...");
      router.push(`/quiz/${id}`);
      setProgress(100);
    } catch (error: any) {
      console.error("ERROR GENEARTING QUIZ ", error);
      setError(
        error instanceof Error ? error.message : "Failed to create quiz"
      );
      setProgress(0);
      throw new Error("ERROR GENEARTING QUIZ ", error);
    } finally {
      setIsSubmitting(false);
    }
  }
  function Submit() {
    const { pending } = useFormStatus();
    if (!pending)
      return (
        <button
          type="submit"
          disabled={pending || isLoading}
          className={`w-full bg-blue-500 py-3 rounded-lg transition-colors text-lg font-medium
    ${
      pending || isLoading
        ? "text-blue-200 cursor-not-allowed"
        : "text-white hover:bg-blue-600"
    }`}
        >
          Convert to Quiz ≫
        </button>
      );
    return (
      <>
        <div className="btn">
          <span className="loading loading-spinner"></span>
          {currentStep} {progress}%
        </div>
      </>
    );
  }

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setError("");
      const files = event.target.files;
      const MAX_SIZE_MB = 8;

      if (!files) return;

      if (files[0].size > MAX_SIZE_MB * 1024 * 1024) {
        alert(`File size exceeds ${MAX_SIZE_MB}MB limit`);
        return;
      }

      setIsLoading(true);
      setFile(files[0]);

      const arrayBuffer = await files[0].arrayBuffer();

      const extractedText = await FileTextExtractor(arrayBuffer);
      setExtractedText(extractedText);
    } catch (error: any) {
      setError(error);
      console.error("File processing error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleInputMode = () => {
    setInputMode((prev) => (prev === "file" ? "text" : "file"));
    setFile(null);
    setExtractedText("");
    setError("");
  };

  return (
    <Form
      action={onSubmit}
      className="w-full min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="flex justify-center mb-4">
        <button
          type="button"
          onClick={toggleInputMode}
          className="flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
        >
          {inputMode === "file" ? (
            <>
              <FileText className="w-5 h-5" />
              Switch to Text Input
            </>
          ) : (
            <>
              <FileInput className="w-5 h-5" />
              Switch to File Upload
            </>
          )}
        </button>
      </div>
      <div className="card bg-base-100 w-[96vw] sm:w-[600px] shadow-sm p-6">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* ... decorative elements ... */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-4 left-4 text-blue-200 text-2xl">
              ★
            </div>
            <div className="absolute top-8 right-12 text-blue-200 text-lg">
              ✦
            </div>
            <div className="absolute bottom-12 left-8 text-blue-200 text-xl">
              ✧
            </div>
            <div className="absolute top-20 right-4 text-blue-200 text-2xl">
              ★
            </div>
          </div>
        </div>

        {inputMode === "file" ? (
          <>
            <div className="w-full border-2 border-dashed border-blue-200 rounded-lg p-8 text-center bg-blue-50/50 relative">
              <input
                name="FileDrop"
                type="file"
                required
                onChange={handleFileChange}
                accept=".pdf,.docx,.doc, .txt"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isLoading}
              />
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-24">
                      <svg
                        className="animate-spin h-12 w-12 text-blue-500"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </div>
                  ) : file ? (
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
                <p className="text-blue-600 mb-2">
                  {isLoading ? "Processing..." : "Drop File"}
                </p>
                <p className="text-gray-400 text-sm">
                  {isLoading
                    ? "Parsing File..."
                    : file
                    ? file.name
                    : "No file chosen yet"}
                </p>
              </div>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  <strong>Error:</strong> {error.message}
                  {error.message.includes("large") && (
                    <p className="mt-2 text-sm">Try files under 8MB</p>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="w-full border-2 border-blue-200 rounded-lg p-6 bg-blue-50/50 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Enter Your Study Material
            </h3>
            <textarea
              name="textContent"
              value={extractedText}
              onChange={(e) => setExtractedText(e.target.value)}
              placeholder="Paste your textbook content, lecture notes, or study materials here..."
              className="w-full h-48 p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error.message}
            {error.message.includes("large") && (
              <p className="mt-2 text-sm">Try files under 8MB</p>
            )}
          </div>
        )}

        <div className="card-body items-center text-center p-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="sm:w-80 w-40">
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
            <div className="hidden">
              <label className="block text-blue-600 mb-2">
                Number of Questions:
              </label>
              <input
                type="number"
                value={maxQuestions}
                name="numberOfQuestions"
                min={1}
                max={5}
                onChange={(e) => setMaxQuestions(+e.target.value)}
                placeholder="5-20"
                className="w-full p-2 border border-blue-200 rounded-lg bg-blue-50 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          <Submit />
        </div>
      </div>
    </Form>
  );
}
