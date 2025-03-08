interface TransactionProps{
    transactions: {
        name: string;
        amount: number;
        type: string;
    }[]
}

const Transactions = ({transactions}: TransactionProps) => {
    return (
        <div className="mt-10">
            <div className="flex flex-row items-center">
                <h4 className="text-lg font-semibold">Transactions</h4>
                <div className="flex flex-row flex-1 justify-end">
                    <button className="text-orange-700 font-bold underline cursor-pointer">See All</button>
                </div>
            </div>

            {transactions.length > 0 && <p>No transactions on this account!</p>}

            <div className="flex flex-row items-center border border-gray-200 p-3 rounded mt-4">
                <div>
                    <p className="font-semibold">Fund Transfer</p>
                    <p className="text-sm mt-1 italic">2025-10-10 12:00</p>
                </div>
                
                <div className="flex flex-row items-center justify-end flex-1">
                    <p className="text-orange-700">Transfer</p>
                </div>
            </div>

            <div className="flex flex-row items-center border border-gray-200 p-3 rounded mt-4">
                <div>
                    <p className="font-semibold">Fund Deposit</p>
                    <p className="text-sm mt-1 italic">2025-10-10 12:00</p>
                </div>
                
                <div className="flex flex-row items-center justify-end flex-1">
                    <p className="text-green-700">Deposit</p>
                </div>
            </div>
        </div>
    )
}

export default Transactions;