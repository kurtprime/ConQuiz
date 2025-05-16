import FileDrop from "@/components/FileDrop";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();
  if (!user) redirect("sign-in");
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)] ">
      <FileDrop userId={user.id} />
    </div>
  );
}

export default page;
