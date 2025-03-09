import { BiMoney } from "react-icons/bi";
import CustomLogo from "./CustomLogo";
import Link from "next/link";

interface NavProps{
    hideActions?: boolean;
}

const MainNavbar = ({hideActions}: NavProps) => {
    return (
        <div className="fixed z-20 left-0 right-0 h-16 w-full bg-white shadow p-2 flex flex-row justify-between items-center">
            <Link href="/">
                <CustomLogo />
            </Link>

            <div className="flex flex-row justify-end items-center gap-2">
                {!hideActions && (
                    <>
                        <Link href="/auth/register" className="bg-orange-700 hover:bg-orange-900 p-2 px-4 rounded text-white font-semibold">Register</Link>
                        <Link href="/auth/login" className="border border-gray-400 hover:bg-black p-2 px-4 rounded text-black hover:text-white font-semibold">Login</Link>
                    </>
                )}

                {hideActions && (
                    <h4 className="flex flex-row items-center gap-2"><BiMoney className="text-xl" /> USD</h4>
                )}
            </div>
        </div>
    )
}

export default MainNavbar;