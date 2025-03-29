import React, { PropsWithChildren } from "react";
import WalletLayout from "./ui/WalletLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getData } from "@lib/getData";

const MainWalletLayout: React.FC = async({ children }: PropsWithChildren) => { 
    const session = await getServerSession(authOptions);
    const user:{
        name: string
    } = await getData('/user');

    if(!session){
        redirect('/auth/login');
    }

    return (
        <WalletLayout user={user}>
            {children}
        </WalletLayout>
    );
}

export default MainWalletLayout;