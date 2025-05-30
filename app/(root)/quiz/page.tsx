import { TableQuiz } from "@/components/TableQuiz";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import Link from "next/link";
async function page() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col mt-10 items-start gap-10 justify-start sm:px-20">
      <Link href="quiz/create">
        <Button className="justify-self-start cursor-pointer  bg-[#355c7d]">
          <FilePlus color="white" strokeWidth={1.75} />{" "}
          <span className="text-white!">Create Quiz</span>
        </Button>
      </Link>
      <Suspense fallback={<div>Loading table</div>}>
        <TableQuiz />
      </Suspense>
    </div>
  );
}

export default page;
