import {
    Image,
    LocalizedDate,
} from "Base"
import {
    useCategoryUrl,
    usePostUrl,
} from "Blog"
import {
    Calendar,
    Text,
} from "Svg"

const PostCard = ({
    class: internalClass,
    item,
    localePathPrefix,
}) => {

    return <div class={`max-w-[260px] sm:max-w-[500px] mx-auto ${internalClass}`}>

        <a
            href={usePostUrl(item?.slug, localePathPrefix)}
            class={"relative w-full block"}
            aria-label={item?.title}
        >
            <Image
                containerClass="w-full xs:max-w-[260px] sm:w-2/3 mx-auto w-full aspect-square overflow-hidden mb-2"
                imageClass="group-hover:scale-110 transition-all duration-500"
                src={item?.relatedItems?.imageUrl}
                alt={item?.title}
            />
        </a>

        <a href={usePostUrl(item?.slug, localePathPrefix)}>
            <p class="text-xs xs:text-sm md:text-base text-start font-bold line-clamp-2 xs:h-[46px] mb-2 group-hover:text-custom-color1 transition-all">{item?.title}</p>
        </a>
        <p class="text-sm md:text-base text-start line-clamp-2 text-custom-color22 text-center">{item?.summary}</p>

        <div class="text-start flex gap-4 justify-center items-center text-sm py-3 text-custom-color32 text-xs">
            {item?.relatedItems?.hierarchies.length > 0 ?
                <a
                    href={useCategoryUrl(item?.relatedItems?.hierarchies[0]?.slug, localePathPrefix)}
                    class="max-w-[60%] flex items-center gap-1 line-clamp-1 text-custom-color32 hover:text-custom-color1 transition-all"
                    aria-label={item?.relatedItems?.hierarchies[0]?.title}
                >
                    <Text class="w-5 aspect-square fill-custom-color32" />
                    <span>{item?.relatedItems?.hierarchies[0]?.title}</span>
                </a>
                : <div></div>
            }
            <div class="flex items-center gap-1 fill-custom-color32">
                <Calendar class="w-5 aspect-square" />
                <LocalizedDate utcDate={item.utcDate} />
            </div>
        </div>
    </div>
}

export default PostCard
