import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="main-container">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);

export default SignInPage;
