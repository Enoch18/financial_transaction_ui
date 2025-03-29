"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface WalletLayoutProps{
    user: {name: string};
    children: React.ReactNode;
}

const WalletLayout = ({ user, children }: WalletLayoutProps) => { 
    const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 flex flex-col transition-all duration-300`}>
                <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} user={user} />
                <main className="p-3">{children}</main>
            </div>
        </div>
    );
}

export default WalletLayout;