import TextInput from "@components/FormInput/TextInput";
import Link from "next/link";

const Login = () => {
    return (
        <div>
            <h4 className="text-2xl font-semibold">Login</h4><hr className="border-gray-300 mt-1" />
            <p className="text-sm mt-4">Login in order to transact!</p>

            <form>
                <TextInput label="Email Address*" />
                <TextInput label="Password*" />

                <p className="mt-4">Don't have an account? <Link href="/auth/register" className="text-orange-600 font-semibold underline">Register</Link></p>

                <button type="button" className="bg-orange-700 hover:bg-orange-900 p-2 px-4 rounded text-white font-semibold mt-4 cursor-pointer">Register</button>
            </form>
        </div>
    )
}

export default Login;