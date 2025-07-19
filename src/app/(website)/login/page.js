import HeroForm from "@/components/forms/heroForm";
import LoginGoogle from "@/components/buttons/LoginGoogle";
import Image from "next/image";
import SignInForm from "@/components/forms/signInForm";
import RegisterForm from "@/components/forms/registerForm";

export default function Login() {
  return (
    <section className="max-w-6xl my-40 flex flex-row md:justify-between items-center md:gap-20 md:flex-nowrap flex-wrap justify-center items-start">
      <div className="my-auto">
        <Image src="/login_hero.webp" alt="picture" width={450} height={450} />
      </div>
      <div className="flex flex-col items-center justify-center max-md:mt-4">
        <div>
          <h1 className="text-4xl text-[#111827] font-bold text-center mb-2">Добредојде во Конекта!</h1>
          <h2  className="text-lg text-[#4b5563] text-center mb-2">Најави се во твојот профил.</h2>
          <LoginGoogle />
          <SignInForm />
        </div>
        <div className="mt-8">
          <p className="text-md text-[#4b5563] text-center mb-2">Немаш профил?<br />Одбери корисничко име и креирај.</p>
          <HeroForm />
          
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
