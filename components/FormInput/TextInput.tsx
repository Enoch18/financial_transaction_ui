'use client'
import { useState } from "react";

interface InputProps{
    label: string;
    id: string;
    onChange?: (e:any) => void;
    value?: string;
    type?: string;
}

const TextInput = ({label, id, onChange, value, type}: InputProps) => {
    const [valueChanges, setValueChanges] = useState("");

    const handleChange = (e:any) => {
        onChange && onChange(e);
        setValueChanges(e.target.value);
    }

    return (
        <div className="mt-4">
            <label className="font-semibold">{label}</label>
            <input type={type ?? "text"} id={id} name={id} onChange={handleChange} value={value ?? valueChanges} className="w-full outline-0 border border-gray-400 p-2 rounded" />
        </div>
    )
}

export default TextInput;