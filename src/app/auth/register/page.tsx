'use client'
import TextInput from "@components/FormInput/TextInput";
import Link from "next/link";

const Register = () => {
    return (
        <div>
            <h4 className="text-2xl font-semibold">Register</h4><hr className="border-gray-300 mt-1" />
            <p className="text-sm mt-4">Create an account in order to transact!</p>

            <form>
                <TextInput id="name" onChange={() => {}} label="Name*" />
                <TextInput id="email" onChange={() => {}} label="Email Address*" />
                <TextInput id="password" onChange={() => {}} label="Password*" />
                <TextInput id="confirm_password" onChange={() => {}} label="Confirm Password*" />

                <p className="mt-4">Already have an account? <Link href="/auth/login" className="text-orange-600 font-semibold underline">Login</Link></p>

                <button type="button" className="bg-orange-700 hover:bg-orange-900 p-2 px-4 rounded text-white font-semibold mt-4 cursor-pointer">Register</button>
            </form>
        </div>
    )
}

export default Register;