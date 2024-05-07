const VirtualTour = ({ url }) => {
    return <iframe
        class="my-8 w-full h-[500px]"
        src={url}
    >
    </iframe>
}

export default VirtualTour
