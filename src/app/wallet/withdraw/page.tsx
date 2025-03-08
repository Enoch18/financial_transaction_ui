import TextInput from "@components/FormInput/TextInput";

const Withdraw = () => {
    return (
        <div className="max-w-[800px] w-[100%] mx-auto">
            <h4 className="text-3xl text-center">Withdraw Money</h4>

            <div className="border border-gray-200 p-8 rounded mt-5">
                <TextInput label="Bank Name*" />
                <TextInput label="Account Name*" />
                <TextInput label="Account Number*" />
                <TextInput label="Swift Code*" />
                <TextInput label="Transfer Amount*" />
                <TextInput label="Transfer Purpose (Optional)" />
            </div>

            <div className="mt-5 flex flex-row justify-center">
                <button className="bg-orange-700 text-white p-3 rounded cursor-pointer px-10">Withdraw</button>
            </div>
        </div>
    )
}

export default Withdraw;