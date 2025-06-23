import LoginGoogle from "@/components/buttons/LoginGoogle";

export default function Login() {
    return (
        <div>
            <div className="p-4 max-w-xs mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">Најава</h1>
                <p className="text-center mb-6 text-gray-500">Најави се во твојот профил</p>
            <LoginGoogle />
            </div>
        </div>
    );
}