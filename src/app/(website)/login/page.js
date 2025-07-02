import HeroForm from "@/components/forms/heroForm";
import LoginGoogle from "@/components/buttons/LoginGoogle";
import Image from "next/image";

export default function Login() {
  return (
    <section className="section flex flex-row md:justify-between items-center md:gap-20 md:flex-nowrap flex-wrap justify-center items-start mb-10">
      <div>
        <Image src="/Artboard 1.svg" alt="picture" width={400} height={400} />
      </div>
      <div className="flex flex-col items-center justify-center my-auto">
        <div>
          <h1 className="text-4xl text-[#111827] font-bold text-center mb-2">Добредојде во Конекта!</h1>
          <h2  className="text-lg text-[#4b5563] text-center mb-2">Најави се во твојот профил.</h2>
          <LoginGoogle />
        </div>
        <div className="mt-8">
          <p className="text-md text-[#4b5563] text-center mb-2">Немаш профил?<br />Одбери корисничко име и креирај.</p>
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
