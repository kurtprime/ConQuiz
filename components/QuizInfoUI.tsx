"use client";

import { QuizDocument } from "@/utils/interface/quiz.inter";
import { Check, Ellipsis } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { deleteQuiz } from "@/utils/action/quiz.action";

export default function QuizInfoUI({ quiz }: { quiz: QuizDocument }) {
  const [isCopied, setIsCopied] = useState(false);
  const quizLink = `https://con-quiz.vercel.app/quiz/${quiz.id}`;
  const route = useRouter();
  const [hideDiv, setHideDiv] = useState(false);

  const handleCopy = async () => {
    toast("Copied", {
      description: "Quiz link copied to clipboard",
      action: {
        label: "Okay",
        onClick: () => console.log("Okay"),
      },
    });
    try {
      await navigator.clipboard.writeText(quizLink);
      setIsCopied(true);

      // Reset after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast("Copy failed", {
        description: "Please copy the link manually",
      });
    }
  };

  const handleDelete = async () => {
    setHideDiv(true);
    toast("Quiz has been created", {
      description: "Quiz has been removed",
      action: {
        label: "Undo",
        onClick: () => setHideDiv(false),
      },
    });
    //deleteQuiz()
  };

  return (
    <div
      className={`border max-sm:w-[90vw] rounded-lg p-4 relative bg-white shadow-sm ${
        hideDiv && "hidden"
      }`}
    >
      <div className="flex justify-between items-start">
        <Link
          href={`/quiz/${quiz.id}`}
          className="font-medium flex-1 truncate mr-2"
        >
          {quiz.title}
        </Link>

        <div className="dropdown dropdown-left dropdown-end hover:bg-[#eeeeee] rounded-4xl cursor-pointer duration-150">
          <div tabIndex={0} role="button" className="p-1">
            <Ellipsis size={24} color="#48578e" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 cursor-pointer shadow-sm "
          >
            <li>
              <Link href={`/quiz/${quiz.id}`}>Take the Quiz</Link>
            </li>
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <a>Share</a>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                      Anyone who has this link will be able to view this.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        onClick={(e) => (e.target as HTMLInputElement).select()}
                        defaultValue={`https://con-quiz.vercel.app/quiz/${quiz.id}`}
                        readOnly
                      />
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      className="px-3"
                      onClick={handleCopy}
                    >
                      <span className="sr-only">Copy</span>
                      {isCopied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <button onClick={handleDelete}>Delete</button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-2 mt-3 cursor-pointer"
        onClick={() => route.push(`/quiz/${quiz.id}`)}
      >
        <div>
          <div className="text-xs text-gray-500">Your Score</div>
          <Link href={`/quiz/${quiz.id}`} className="font-medium">
            {quiz.score || quiz.score === 0 ? quiz.score : "not taken yet"}
          </Link>
        </div>

        <div>
          <div className="text-xs text-gray-500">Total Score</div>
          <Link href={`/quiz/${quiz.id}`} className="font-medium">
            {quiz.quizzes.length}
          </Link>
        </div>
      </div>
    </div>
  );
}
