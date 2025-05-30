import Notes from "@/components/Notes";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="min-h-[80vh] my-10 w-full flex flex-col items-start gap-10 sm:px-20">
      <Link href="note/create">
        <Button className="justify-self-start" variant="outline">
          <SquarePen color="#b7cede" strokeWidth={1.75} /> Add Note
        </Button>
      </Link>
      <Notes />
    </div>
  );
}

export default page;
