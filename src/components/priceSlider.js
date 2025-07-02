export default function PriceSlider() {
  return (
    <div className="flex gap-6 max-sm:flex-col">
      <div className="flex-1 my-auto text-lg border border-[#4f46e5]/30 bg-[#eef2ff] p-10 w-full">
        <div className="text-[#4d66e5]">Пакет 1</div>
        <div className="text-5xl my-5 font-light">500 МКД</div>
        <div>
          Short description
        </div>
        <ul className="my-5">
          <li>First feature</li>
          <li>Second feature</li>
        </ul>
        <button className="w-full p-3 bg-[#6366f1] hover:bg-[#4f46e5] transition-all text-white">
          Purchase
        </button>
      </div>
      <div className="flex-1 my-auto text-lg border border-[#2563eb]/30 bg-[#eff6ff] p-10 w-full">
        <div className="text-[#4d66e5]">Пакет 2</div>
        <div className="text-5xl my-5 font-light">500 МКД</div>
        <div>
          Short description
        </div>
        <ul className="my-5">
          <li>First feature</li>
          <li>Second feature</li>
        </ul>
        <button className="w-full p-3 bg-[#3b82f6] hover:bg-[#2563eb] transition-all text-white">
          Purchase
        </button>
      </div>
      <div className="flex-1 my-auto text-lg border border-[#7c3aed]/30 bg-[#f5f3ff] p-10 w-full">
        <div className="text-[#4d66e5]">Пакет 3</div>
        <div className="text-5xl my-5 font-light">500 МКД</div>
        <div>
          Short description
        </div>
        <ul className="my-5">
          <li>First feature</li>
          <li>Second feature</li>
        </ul>
        <button className="w-full p-3 bg-[#8b5cf6] hover:bg-[#7c3aed] transition-all text-white">
          Purchase
        </button>
      </div>
    </div>
  );
}