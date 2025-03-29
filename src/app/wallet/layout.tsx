import React from "react";
import WalletLayout from "./ui/WalletLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getData } from "@lib/getData";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const MainWalletLayout = async({ children }: {children: React.ReactNode}) => { 
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