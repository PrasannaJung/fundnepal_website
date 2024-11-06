import { QuoteComponent } from "@/components/custom/Quote";
import AuthLogin from "@/components/custom/AuthLogin";

function LoginPage() {
  return (
    <main className='grid lg:grid-cols-2 medium:px-24 px-8 min-h-screen items-center bg-gray-100'>
      <AuthLogin />
      <QuoteComponent />
    </main>
  );
}

export default LoginPage;
