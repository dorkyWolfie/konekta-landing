import { useFormStatus } from "react-dom";

export default function SubmitButton({children, className=''}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={"button-1 disabled:bg-[#93c5fd] text-white disabled:text-[#e5e7eb] w-full flex gap-2 items-center justify-center" + className}>
      {pending && (
        <span>Се зачувува...</span>
      )}
      {!pending && children}
    </button>
  );
}