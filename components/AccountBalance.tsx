import Link from "next/link";
import { MdAdd, MdSend } from "react-icons/md";

const AccountBalance = () => {
    return (
        <div className="bg-gray-100 p-5 rounded py-6">
            <h4 className="text-xl font-semibold">Account Balance</h4>

            <div className="mt-12 flex flex-row">
                <div>
                    <p className="font-semibold text-gray-500">USD</p>
                    <h4 className="text-2xl text-black font-bold">$10.00</h4>
                </div>

                <div className="flex flex-1 flex-row items-center justify-end gap-5 ml-4">
                    <Link href="/wallet/deposit">
                        <div className="flex flex-col items-center justify-center gap-1 w-20 h-20">
                            <button className="bg-orange-700 text-white w-16 h-16 flex items-center justify-center rounded cursor-pointer">
                                <MdAdd className="text-white" size={30} />
                            </button>
                            <p className="text-sm text-orange-700 font-semibold">Deposit</p>
                        </div>
                    </Link>

                    <Link href="/wallet/transfer">
                        <div className="flex flex-col items-center justify-center gap-1 w-20 h-20">
                            <button className="bg-orange-700 text-white w-16 h-16 flex items-center justify-center rounded cursor-pointer">
                                <MdSend className="text-white" size={30} />
                            </button>
                            <p className="text-sm text-orange-700 font-semibold">Transfer</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AccountBalance;