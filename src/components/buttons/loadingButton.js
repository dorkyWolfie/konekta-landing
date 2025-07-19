export default function LoadingButton({ isLoading, children, loadingText, className = "", type = "button", ...props }) {
  return (
    <button
      type={type} disabled={isLoading} {...props}
      className={`button-1 disabled:bg-[#93c5fd] w-full flex gap-2 items-center justify-center ${className}`}
    >
      {isLoading ? loadingText : children}
    </button>
  );
}