import { Image } from "Base"

const SecondSection = ({
    bigAdAlt,
    bigAddLink,
    bigAdImage,
    firstSmallAdAlt,
    firstSmallAdImage,
    firstSmallAdLink,
    secondSmallAdAlt,
    secondSmallAdImage,
    secondSmallAdLink,
}) => {

    return <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-5 lg:mt-20 gap-2 px-4 2xl:px-0">
        <a
            href={bigAddLink}>
            <Image
                containerClass="w-full aspect-[5/6]"
                imageClass="object-contain w-full h-full"
                src={bigAdImage}
                priority
                alt={bigAdAlt}
            />
        </a>
        <div class="h-full w-full flex flex-col items-between justify-center gap-y-2">
            <a
                class="flex-1"
                href={firstSmallAdLink}>
                <Image
                    containerClass="h-full w-full"
                    imageClass="object-contain w-full h-full"
                    src={firstSmallAdImage}
                    alt={firstSmallAdAlt}
                />
            </a>
            <a
                class="flex-1"
                href={secondSmallAdLink}>
                <Image
                    containerClass="h-full w-full"
                    imageClass="object-contain w-full h-full"
                    src={secondSmallAdImage}
                    alt={secondSmallAdAlt}
                />
            </a>
        </div>
    </section>
}

export default SecondSection
