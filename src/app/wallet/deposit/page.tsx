const Deposit = () => {
    return (
        <div className="max-w-[800px] w-[100%] mx-auto">
            <h4 className="text-3xl text-center">Deposit Money</h4>

            <div className="border border-gray-200 p-8 rounded mt-5">
                <p className="font-semibold text-center">Enter Amount</p>

                <div className="flex flex-row items-center justify-center mt-5 gap-2">
                    <h4 className="text-2xl">$</h4>
                    <input type="text" className="p-2 w-20 outline-0 border-0 text-xl border-b border-b-gray-400" placeholder="5.00" maxLength={5} autoFocus={true} />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="mt-10">
                        <div className="bg-gray-200 p-2 rounded max-w-[300px] w-[100%] px-5">
                            <p className="text-sm">Minimum - $5.00</p>
                        </div>

                        <div className="bg-gray-200 p-2 rounded max-w-[300px] w-[100%] mt-3 px-5">
                            <p className="text-sm">Maximum - $10,000.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-row justify-center">
                <button className="bg-orange-700 text-white p-3 rounded px-10 cursor-pointer">Continue</button>
            </div>
        </div>
    )
}

export default Deposit;