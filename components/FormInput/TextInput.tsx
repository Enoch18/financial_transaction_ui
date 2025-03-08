interface InputProps{
    label: string;
}

const TextInput = ({label}: InputProps) => {
    return (
        <div className="mt-4">
            <label className="font-semibold">{label}</label>
            <input type="text" className="w-full outline-0 border border-gray-400 p-2 rounded" />
        </div>
    )
}

export default TextInput;