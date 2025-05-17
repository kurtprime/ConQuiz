import { TableQuiz } from "@/components/TableQuiz";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import Link from "next/link";
import Loading from "../loading";
async function page() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-start gap-10 justify-center px-20">
      <Link href="quiz/create">
        <Button className="justify-self-start" variant="outline">
          <FilePlus color="#b7cede" strokeWidth={1.75} /> Create Quiz
        </Button>
      </Link>
      <Suspense fallback={<div>Loading table</div>}>
        <TableQuiz />
      </Suspense>
    </div>
  );
}

export default page;
