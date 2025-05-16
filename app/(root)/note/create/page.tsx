import CreateNote from "@/components/CreateNote";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return (
    <div className="w-full flex justify-center items-center">
      <CreateNote userId={user.id} title="" content="" />
    </div>
  );
}

export default page;
