import TextInput from "@components/FormInput/TextInput";

const Transfer = () => {
    return (
        <div className="max-w-[800px] w-[100%] mx-auto">
            <h4 className="text-3xl text-center">Transfer Money</h4>

            <div className="border border-gray-200 p-8 rounded mt-5">
                <TextInput label="Receiptient Email" />
                <TextInput label="Transfer Amount*" />
                <TextInput label="Transfer Purpose (Optional)" />
            </div>

            <div className="mt-5 flex flex-row justify-center">
                <button className="bg-orange-700 text-white p-3 rounded cursor-pointer px-10">Transfer</button>
            </div>
        </div>
    )
}

export default Transfer;