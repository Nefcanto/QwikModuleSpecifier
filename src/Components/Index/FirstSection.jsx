import { Image } from "Base"

const FirstSection = ({
    alt,
    desktopImage,
    link,
    mobileImage,
}) => {

    return <section class="max-w-6xl mx-auto px-4 2xl:px-0">
        <a
            href={link}
            aria-label={link}
        >
            <Image
                alt={alt}
                containerClass="block md:hidden w-full aspect-[4/1]"
                priority
                src={mobileImage}
            />
            <Image
                alt={alt}
                containerClass="hidden md:block w-full aspect-[4/1]"
                priority
                src={desktopImage}
            />
        </a>
    </section>
}

export default FirstSection
