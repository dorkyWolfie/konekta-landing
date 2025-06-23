'use client';
import grabUsername from "@/actions/grabUsername";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UsernameForm({desiredUsername}) {
  const [taken,setTaken] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const result = await grabUsername(formData);
  if (result === false) {
    setTaken(true);
  } else {
    setTaken(false);
    router.push('/account?created='+formData.get('username'));
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">Потврди го твоето корисничко име!</h1>
      <p className="text-center mb-6 text-gray-500">Одбери корисничко име.</p>
      <div className="max-w-xs mx-auto">
        <input 
          name="username"
          className="block p-2 mx-auto text-center border w-full mb-2" 
          defaultValue={desiredUsername}
          type="text" placeholder="username / корисничко име" />
        {taken && (
          <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
            Ова корисничко име е зафатено.
          </div>
        )}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full hover:bg-transparent hover:text-blue-600 hover:border-2 border-blue-500">Зачувај</button>
      </div>
    </form>
  )
}