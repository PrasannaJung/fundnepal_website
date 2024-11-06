import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SVGProps, useState } from "react";
import api, { registerUserApi } from "../../api/api";
import toast from "react-hot-toast";
import { QuoteComponent } from "./Quote";

function AuthSignup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  function validatePasswordOnBlur() {
    setIsPasswordValid(password.length >= 8);
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const confirmValue = e.target.value;
    setConfirmPassword(confirmValue);
    setPasswordsMatch(confirmValue === password);
  };

  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("CALLED");
    if (!isPasswordValid) {
      return;
    }

    if (!passwordsMatch) {
      return;
    }

    const payload = {
      username,
      email,
      password,
      phone,
    };

    api
      .post("/api/user/register", payload)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='w-full min-h-screen grid lg:grid-cols-2 bg-background'>
      <div className='flex items-center justify-center p-6 xl:p-10'>
        <div className='mx-auto w-[350px] space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <p className='text-muted-foreground'>
              Enter your information to create an account.
            </p>
          </div>
          <form role='form' id='signup-form' onSubmit={handleSignup}>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='username'>Username</Label>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  id='username'
                  placeholder='JohnDoe'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone</Label>
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  id='phone'
                  type='text'
                  placeholder='9841362344'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id='email'
                  type='email'
                  placeholder='prasanna@example.com'
                  required
                />
              </div>
              <div className='relative space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input
                  onBlur={validatePasswordOnBlur}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder='password'
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  className='absolute bottom-1 right-1 h-7 w-7'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <EyeIcon className='h-4 w-4' />
                  <span className='sr-only'>Toggle password visibility</span>
                </Button>
              </div>
              <div>
                {isPasswordValid || (
                  <span className='text-red-500'>
                    Password must have 8 characters
                  </span>
                )}
              </div>
              <div className='relative space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='confirm-password'>Confirm Password</Label>
                </div>
                <Input
                  onChange={handleConfirmPasswordChange}
                  id='confirm-password'
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder='confirmpassword'
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  className='absolute bottom-1 right-1 h-7 w-7'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <EyeIcon className='h-4 w-4' />
                  <span className='sr-only'>Toggle password visibility</span>
                </Button>
              </div>
              <div>
                {passwordsMatch || (
                  <span className='text-red-500'>Password did not match</span>
                )}
              </div>
              <Button type='submit' className='w-full'>
                Sign Up
              </Button>
              <div className='text-sm text-muted-foreground'>
                Already have an account?{" "}
                <Link to='/login' className='underline'>
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <QuoteComponent />
    </div>
  );
}

function EyeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

export default AuthSignup;
