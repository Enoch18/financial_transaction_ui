import { Menu } from "lucide-react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdMoney, MdOutlineNotifications } from "react-icons/md";

export default function Navbar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
    return (
      <nav
        className={`p-4 sticky top-0 z-10 transition-all duration-300 ${
          isOpen ? "md:ml-0" : "ml-0"
        }`}
      >
        <div className="flex items-center justify-between">
            {/* Sidebar Toggle Button (Mobile) */}
            <button onClick={toggleSidebar}>
                <Menu size={24} />
            </button>

            {!isOpen && <h2 className="text-xl font-bold flex flex-row items-center ml-2"><MdMoney className="text-orange-500 text-3xl" /> <i>EdsoFin</i></h2>}

            <div className="flex flex-row flex-1">
                {/* <h1 className="text-lg font-bold mx-auto md:mx-2">My App</h1> */}
                <div className="flex flex-1 flex-row items-center justify-end gap-2">
                    <button className="cursor-pointer">
                        <MdOutlineNotifications size={26} />
                    </button>

                    <Link href="/wallet/profile" className="p-2 flex flex-row items-center gap-2 font-semibold">
                        <FaUserCircle size={24} />
                        Enock Soko
                    </Link>
                </div>
            </div>
        </div>
      </nav>
    );
  }
  