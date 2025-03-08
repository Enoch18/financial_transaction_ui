import React, { PropsWithChildren } from "react";
import WalletLayout from "./ui/WalletLayout";

const MainWalletLayout: React.FC = ({ children }: PropsWithChildren) => { 
    return (
        <WalletLayout>
            {children}
        </WalletLayout>
    );
}

export default MainWalletLayout;