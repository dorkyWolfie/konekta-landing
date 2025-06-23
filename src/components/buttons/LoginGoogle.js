'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

export default function LoginGoogle() {
    return (
        <button 
        onClick={() => signIn('google')}
        className="bg-white shadow-sm shadow-gray-700/20 text-center w-full py-4 flex gap-3 items-center justify-center hover:bg-blue-500 hover:text-white">
                <FontAwesomeIcon icon={faGoogle} className="h-6" />
                <span>Најава со Google</span>
            </button>
    );
}