export default function PriceSlider() {
  return (
    <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
      <div className="flex-1 text-lg mt-14 border border-[#4E67E5]/25 bg-indigo-50 p-10 w-full">
        <div className="text-[#4d66e5]">Пакет 1</div>
        <div className="text-5xl my-5 font-light">500 МКД</div>
        <div>
          Short description
        </div>
        <ul className="my-5">
          <li>First feature</li>
          <li>Second feature</li>
        </ul>
        <button className="w-full p-3 bg-indigo-500 hover:bg-indigo-600 transition-all text-white">
          Purchase
        </button>
      </div>
      <div className="flex-1 text-lg mt-14 border border-[#4E67E5]/25 bg-blue-50 p-10 w-full">
        <div className="text-[#4d66e5]">Пакет 2</div>
        <div className="text-5xl my-5 font-light">500 МКД</div>
        <div>
          Short description
        </div>
        <ul className="my-5">
          <li>First feature</li>
          <li>Second feature</li>
        </ul>
        <button className="w-full p-3 bg-blue-500 hover:bg-blue-600 transition-all text-white">
          Purchase
        </button>
      </div>
      <div className="flex-1 text-lg mt-14 border border-gray-300/60 bg-violet-50 p-10 w-full">
        <div className="text-[#4d66e5]">Пакет 3</div>
        <div className="text-5xl my-5 font-light">500 МКД</div>
        <div>
          Short description
        </div>
        <ul className="my-5">
          <li>First feature</li>
          <li>Second feature</li>
        </ul>
        <button className="w-full p-3 bg-violet-500 hover:bg-violet-600 transition-all text-white">
          Purchase
        </button>
      </div>
    </div>
  );
}