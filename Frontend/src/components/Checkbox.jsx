// Eslint
/* eslint-disable react/prop-types */

export function Checkbox({ label, onChange, name }) {
    return (
        <>
            <input
                type="checkbox"
                name={name}
                id={label}
                value={label}
                onChange={onChange}
                className="hidden peer" />
            <label
                htmlFor={label}
                className="relative border-[2.5px] border-transparent p-1 rounded-lg cursor-pointer peer-checked:border-action-color transition-all">
                <p
                    className="absolute flex justify-center items-center text-white text-2xl font-semibold shadow-md h-full w-full">
                    {label}
                </p>
                <img
                    src="../src/assets/images/checkbox/adventure.webp"
                    className="object-cover rounded-md brightness-[.60] relative -z-10" />
            </label>
        </>

    )
}