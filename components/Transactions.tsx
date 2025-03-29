interface TransactionProps{
    transactions: any[];
}

const Transactions = ({transactions}: TransactionProps) => {
    const transactionColor = (type:string) => {
        switch(type){
            case 'withdrawal':
                return 'orange-700';
            case 'deposit':
                return 'green-500'; 
            case 'transfer':
                return 'red-500';  
            default:
                return 'black';
        }
    }

    return (
        <div className="mt-10 max-h-[65vh] overflow-scroll">
            <div className="flex flex-row items-center">
                <h4 className="text-lg font-semibold">Transactions</h4>
                <div className="flex flex-row flex-1 justify-end">
                    <button className="text-orange-700 font-bold underline cursor-pointer">See All</button>
                </div>
            </div>

            {transactions.length === 0 && <p>No transactions on this account!</p>}

            {transactions?.length > 0 && transactions?.map((item:any, index:number) => (
                <div className="flex flex-row items-center border border-gray-200 p-3 rounded mt-4" key={index}>
                    <div>
                        <p className="font-semibold capitalize">Fund {item.type}</p>
                        <p className={`font-semibold text-${transactionColor(item.type)}`}>${item.amount}</p>
                        
                    </div>
                    
                    <div className="flex flex-row items-center justify-end flex-1">
                        <p className="text-sm mt-1 italic">{item.created_at}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Transactions;