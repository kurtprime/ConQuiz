import { Button } from "@/components/ui/button";
import UpdateNote from "@/components/UpdateNote";
import { getUserNote } from "@/utils/action/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const { title, content } = await getUserNote(user.id, id);
  return (
    <div className="w-full flex flex-col justify-center items-center min-sm:m-15">
      <div className="w-full flex flex-col items-center">
        <Link href="/note" className="w-full">
          <Button
            className="justify-self-start cursor-pointer bg-[#5f84a2] opacity-80"
            variant="outline"
          >
            <ChevronLeft size={32} color="#b7cede" /> Go back to notes
          </Button>
        </Link>
        <UpdateNote
          noteId={id}
          userId={user.id}
          title={title}
          content={content}
        />
      </div>
    </div>
  );
}

export default page;
