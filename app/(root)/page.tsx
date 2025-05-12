import FileDrop from "@/components/FileDrop";
import { currentUser } from "@clerk/nextjs/server";

export default function Home() {
  const user = currentUser();
  console.log(user);
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)] ">
      <FileDrop />
    </div>
  );
}
