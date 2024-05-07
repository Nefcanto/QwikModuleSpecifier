const Star = ({ class: internalClass }) => {

    return <svg class={internalClass}>
        <g>
            <path
                d="M0 0h24v24H0V0z"
                fill="none"
            />
            <path
                d="M0 0h24v24H0V0z"
                fill="none"
            />
        </g>
        <g>
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </g>
    </svg>
}

export default Star
