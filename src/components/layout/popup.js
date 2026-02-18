export default function PopUp({ children }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-white m-4 p-10 max-w-2xl w-full relative h-auto overflow-y-auto">
        {children}
      </div>
    </div>
  )
}