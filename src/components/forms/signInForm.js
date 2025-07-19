'use client';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import LoadingButton from "@/components/buttons/loadingButton";

export default function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: "/account",
      });

      if (res?.ok && res?.url) {
        toast.success('Успешно се најавивте!');
        // Small delay to show success message before redirect
        setTimeout(() => {
          window.location.href = res.url;
        }, 3000);
      } else if (res?.error) {
 
        toast.error('Погрешна е-пошта или лозинка.');
      }
    } catch (error) {
      // console.error('Sign in error:', error);
      toast.error('Се појави грешка. Ве молиме обидете се повторно.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Е-пошта</label>
          <input
            id="email" name="email" type="email"
            required disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">Лозинка</label>
          <input
            id="password" name="password" type="password" 
            required disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>
        <LoadingButton type="submit" isLoading={isLoading} loadingText="Ве најавува..." >Најави се</LoadingButton>
      </form>
    </div>
  );
}
