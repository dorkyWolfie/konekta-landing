'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import LoadingButton from "@/components/buttons/loadingButton";

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Профилот е успешно креиран! Ве молиме најавете се.');
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        toast.error(data.error || 'Профилот не е креиран. Ве молиме обидете се повторно.');
      }
    } catch (error) {
      toast.error('Се појави грешка. Ве молиме обидете се повторно.');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Име
          </label>
          <input
            id="name" name="name" type="text"
            required disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Е-пошта
          </label>
          <input
            id="email" name="email" type="email"
            required disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Лозинка
          </label>
          <input
            id="password" name="password" type="password"
            required disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>
        <LoadingButton type="submit" isLoading={isLoading} loadingText="Се креира профилот...">
          Регистрирај се
        </LoadingButton>
      </form>
    </div>
  );
}
