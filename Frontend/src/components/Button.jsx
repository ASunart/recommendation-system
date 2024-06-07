// Eslint
/* eslint-disable react/prop-types */

export function Button({ label, action, variant}) {

    const classes = {
        primary: `text-primary-color bg-action-color`,
        secondary: `text-action-color bg-transparent border border-action-color hover:bg-action-color hover:text-primary-color transition-all`,
        card : ' text-primary-color bg-action-color w-full text-base'
    }

    return (
        <button
            type="button"
            onClick={action}
            className={`flex justify-center items-center text-xl font-semibold px-11 py-2 rounded-lg ${classes[variant]}`}
        >
            {label}
        </button>
    )
}
