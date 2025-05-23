import { SignUp } from "@clerk/nextjs";

function page() {
  return <SignUp forceRedirectUrl="/quiz/create" />;
}

export default page;
