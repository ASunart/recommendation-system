// Eslint
/* eslint-disable react/prop-types */  

import { useState } from "react"

export function Checkbox({ label, onChange, name, image }) {

    const [checked, setChecked] = useState(false)

    const handleCheck = (e) => {
        setChecked(e.target.checked);
        onChange(e)
    }
    return (
        <>
            <input
                type="checkbox"
                name={name}
                id={label}
                value={label}
                onChange={handleCheck}
                checked={checked}
                className="hidden peer" />
            <label
                htmlFor={label}
                className={`relative border-[2.5px] p-1 rounded-lg cursor-pointer ${checked ? 'border-action-color' : 'border-transparent'} transition-all`}>
                <p
                    className="absolute flex justify-center items-center text-white text-2xl font-semibold shadow-md h-full w-full">
                    {label}
                </p>
                <img
                    src={image}
                    alt={`image-${label}`}
                    className="w-full h-full object-cover rounded-md brightness-[.65] relative -z-10" />
            </label>
        </>

    )
}