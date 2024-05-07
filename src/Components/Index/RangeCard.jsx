import { Image } from "Base"

const RangeCard = ({
    image,
    link,
    title,
}) => {

    return <a
        class="flex flex-col group"
        href={link}
        aria-label={title}
    >
        <Image
            containerClass="w-full max-w-[300px] mx-auto aspect-square rounded-full overflow-hidden border border-custom-color3"
            src={image}
            alt={title}
        />
        <p class="text-center mt-4 font-bold">{title}</p>
    </a>
}

export default RangeCard
