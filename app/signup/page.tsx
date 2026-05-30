'use client';

import { SignUpForm } from '@/components/login/sign-up-form';

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-100 dark:bg-black">
      <main className="w-full max-w-md">
        <SignUpForm />
      </main>
    </div>
  );
}
