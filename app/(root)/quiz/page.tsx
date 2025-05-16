import { TableQuiz } from "@/components/TableQuiz";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import Link from "next/link";
async function page() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-start gap-10 justify-center px-20">
      <Link href="quiz/create">
        <Button className="justify-self-start" variant="outline">
          <FilePlus color="#b7cede" strokeWidth={1.75} /> Create Quiz
        </Button>
      </Link>
      <TableQuiz />
    </div>
  );
}

export default page;
