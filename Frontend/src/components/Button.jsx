// Eslint
/* eslint-disable react/prop-types */

export function Button({ label, action }) {

    const btnClass = 'text-primary-color bg-action-color text-xl font-semibold px-11 py-2 rounded-lg'

    return (
        <button
            type="button"
            onClick={action}
            className={btnClass}
        >
            {label}
        </button>
    )
}
