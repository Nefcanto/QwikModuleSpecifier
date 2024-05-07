import { component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    ArrowLeftFill,
    ArrowRightFill,
} from "Svg"

const Paginate = component$(({
    class: internalClass,
    metadata,
    statics,
}) => {

    const { url } = useLocation()
    const { pathname, searchParams } = url

    const getLink = newPageNumber => {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("pageNumber", newPageNumber)
        return `${pathname}${newSearchParams.size > 0 ? `?${newSearchParams.toString()}` : ""}`
    }

    return <div class={`gap-x-1 items-center px-2 ${internalClass}`}>
        <a
            href={getLink(+metadata.pageNumber - 1)}
            title="prev"
            class={`best-seller-prev aspect-square border border-gray-600 rounded-md bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all ${metadata.pageNumber < 2 ? "pointer-events-none opacity-50" : ""}`}>
            <ArrowRightFill class="w-6 cursor-pointer" />
        </a>
        <div class="text-custom-color14 text-sm">
            <div class="flex items-center gap-0.5">
                <span>
                    {statics.page}
                </span>
                {metadata.pageNumber}
                <span>{statics.of}</span>
                <span>{metadata.to}</span>
            </div>
        </div>
        <a
            href={getLink(+metadata.pageNumber + 1)}
            title="next"
            class={`best-seller-next aspect-square border rounded bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all ${metadata.pageNumber > metadata.totalCount ? "pointer-events-none opacity-50" : ""}`}>
            <ArrowLeftFill class="w-6 cursor-pointer" />
        </a>

    </div>
})

export default Paginate
