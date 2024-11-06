import AuthSignup from "@/components/custom/AuthSignup";
import { QuoteComponent } from "@/components/custom/Quote";

function SignupPage() {
  return (
    <main className='grid lg:grid-cols-2 medium:px-24 px-8 min-h-screen items-center bg-gray-100'>
      <AuthSignup />
      <QuoteComponent />
    </main>
  );
}

export default SignupPage;
