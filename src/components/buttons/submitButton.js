import { useFormStatus } from "react-dom";

export default function SubmitButton({children, className=''}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={"bg-[#3b82f6] disabled:bg-[#93c5fd] text-white disabled:text-[#e5e7eb] py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center hover:bg-transparent hover:text-[#2563eb] border-2 border-[#3b82f6] cursor-pointer" + className}>
      {pending && (
        <span>Се зачувува...</span>
      )}
      {!pending && children}
    </button>
  );
}