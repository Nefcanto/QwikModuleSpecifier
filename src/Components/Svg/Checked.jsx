const Checked = props => {

    return <>
        <svg
            {...props}
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    </>
}

export default Checked
