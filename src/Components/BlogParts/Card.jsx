import { component$ } from "@builder.io/qwik"
import {
    Image,
    useLocalizedDate,
} from "Base"
import {
    useCategoryUrl,
    usePostUrl,
} from "Blog"
import {
    ArrowLeft,
    Calendar,
    Text,
} from "Svg"

const Card = component$(({
    currentLocale,
    items,
    localePathPrefix,
    localesEnum,
    readMore,
}) => {

    return <>
        {
            items?.map(item => <div
                key={item.id}
                class="w-full max-w-[600px] flex flex-col gap-3 mx-auto px-3 md:px-2 group border border-custom-color3 p-2.5"
            >
                <a
                    class="w-full xs:w-1/2 sm:w-2/3 mx-auto"
                    href={usePostUrl(item?.slug, localePathPrefix)}
                    title={item?.title}
                >
                    <Image
                        src={item?.relatedItems?.imageUrl}
                        alt={item?.title}
                        containerClass="mx-auto w-full aspect-square overflow-hidden"
                        imageClass="group-hover:scale-110 duration-500 transition-all"
                    />
                </a>

                <div class="py-3 flex flex-col gap-3">

                    <h2 class="line-clamp-2">
                        <a
                            class="h-[40px] group-hover:text-custom-color14 font-bold text-sm md:text-base transition-all"
                            href={usePostUrl(item?.slug, localePathPrefix)}
                            title={item?.title}
                        >
                            {item?.title}
                        </a>
                    </h2>

                    <p class="line-clamp-2 lg:text-sm leading-6">
                        {item?.summary}
                    </p>

                    <div class="flex gap-1 justify-between text-sm text-custom-color32 text-xs">

                        {item?.relatedItems?.hierarchies.length > 0 &&
                            <a
                                href={useCategoryUrl(item?.relatedItems?.hierarchies[0]?.slug, localePathPrefix)}
                                class="flex gap-1 items-center"
                            >
                                <Text class="w-6 aspect-square" />
                                <span class="max-w-[calc(100%-20px)] line-clamp-1">
                                    {item?.relatedItems?.hierarchies[0]?.title}
                                </span>
                            </a>
                        }

                        <div class="flex gap-1 items-center">
                            <Calendar class="w-5 aspect-square" />
                            <span class="max-w-[calc(100%-20px)] line-clamp-1">
                                {useLocalizedDate({
                                    localeKey: currentLocale.key,
                                    localesEnum: localesEnum,
                                    utcDate: item?.lastUpdateUtcDate,
                                })}
                            </span>
                        </div>

                    </div>
                </div>

            </div>)
        }
    </>
})

export default Card
