const provideStateStyles = stateKey => {
    switch (stateKey) {
        case "InStock":
            return "text-green-700 bg-green-100"
        case "OutOfStock":
            return "text-red-700 bg-red-100"
        case "Replenishing":
            return "text-yellow-700 bg-yellow-100"
        case "Upcoming":
            return "text-blue-700 bg-blue-100"
        case "Discontinued":
            return "text-gray-700 bg-gray-100"
        default:
            break
    }
}

export default provideStateStyles
