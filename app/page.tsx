'use client';
import { LoginForm } from '@/components/login/login-form';

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-100 dark:bg-black">
      <main className="w-full max-w-md">
        <LoginForm />
      </main>
    </div>
  );
}
