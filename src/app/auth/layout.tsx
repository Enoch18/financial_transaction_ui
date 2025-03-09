import MainNavbar from "@components/MainNavbar";
import { PropsWithChildren } from "react";

const AuthLayout = ({children}: PropsWithChildren) => {
    return (
        <div className="w-full h-[100vh] bg-orange-700">
            <MainNavbar hideActions={true} />

            <div className="h-[100vh] w-full flex items-center justify-center">
                <div className="max-w-[500px] w-[100%] bg-white rounded p-4 shadow">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;