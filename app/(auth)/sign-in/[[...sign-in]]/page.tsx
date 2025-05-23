import { SignIn } from "@clerk/nextjs";

function page() {
  return <SignIn forceRedirectUrl="/quiz/create" />;
}

export default page;
