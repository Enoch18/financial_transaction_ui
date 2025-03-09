"use client";
import CustomLogo from "@components/CustomLogo";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { MdAdd, MdHome, MdLogout, MdReceipt, MdSend } from "react-icons/md";

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
    const links = [
        {name: "Home", href: "/wallet/", icon: <MdHome className="text-2xl" />},
        {name: "Deposit", href: "/wallet/deposit", icon: <MdAdd className="text-2xl" />},
        {name: "Withdraw", href: "/wallet/withdraw", icon: <MdReceipt className="text-2xl" />},
        {name: "Transfer", href: "/wallet/transfer", icon: <MdSend className="text-2xl" />}
    ];
    return (
        <motion.div
            className={`h-full bg-gray-900 text-white ${isOpen ? 'p-4' : 'p-0'} fixed z-20 md:static transition-all duration-100 ${
                isOpen ? "w-64" : "w-0 md:w-64"
            }`}
            initial={{ width: "16rem" }} // Default width
            animate={{ width: isOpen ? "16rem" : "0rem" }} // Animate width change
        >
            {/* Close Button (Mobile) */}
            <button
                className="absolute top-4 right-4 text-white md:hidden"
                onClick={toggleSidebar}
            >
                <X size={24} />
            </button>

            {/* Sidebar Content (Only show when open) */}
            {isOpen && (
                <div >
                    <CustomLogo />

                    <nav className="mt-4">
                        <ul className="space-y-3">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="p-2 rounded hover:bg-gray-700 flex flex-row items-center gap-2 cursor-pointer"
                                    >
                                        {link.icon} {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}

            <div className="absolute bottom-12 left-4 right-4">
                <button className="flex flex-row items-center gap-2 cursor-pointer">
                    <MdLogout size={24} /> Logout
                </button>
            </div>
        </motion.div>
    );
}
