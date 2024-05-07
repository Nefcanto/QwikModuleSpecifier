import { Image } from "Base"

const ThirdSection = ({
    firstAdImage,
    firstAdImageAlt,
    firstAdLink,
    secondAdImage,
    secondAdImageAlt,
    secondAdLink,
}) => {

    return <section class="max-w-6xl mx-auto mt-5 lg:mt-20 flex flex-col md:flex-row gap-4 w-full px-4 2xl:px-0">
        <a
            class="flex-1"
            href={firstAdLink}
            aria-label={firstAdImageAlt}
        >
            <Image
                containerClass="w-full aspect-[2/1] overflow-hidden"
                src={firstAdImage}
                alt={firstAdImageAlt}
            />
        </a>
        <a
            class="flex-1"
            href={secondAdLink}
            aria-label={secondAdImageAlt}
        >
            <Image
                containerClass="w-full aspect-[2/1] overflow-hidden"
                src={secondAdImage}
                alt={secondAdImageAlt}
            />
        </a>
    </section>
}

export default ThirdSection
