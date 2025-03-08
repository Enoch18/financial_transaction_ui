"use client";
import React, { PropsWithChildren, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const WalletLayout = ({ children }: PropsWithChildren) => { 
    const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 flex flex-col transition-all duration-300`}>
                <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <main className="p-3">{children}</main>
            </div>
        </div>
    );
}

export default WalletLayout;