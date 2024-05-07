import { merge } from "Base"

const Video = ({
    containerClass,
    link,
    playerClass,
    poster,
}) => {

    return <div class={containerClass}>
        <video
            class={merge("w-full aspect-video object-cover", playerClass)}
            controls
            poster={poster}
            src={link}
        >
        </video>
    </div>
}

export default Video
