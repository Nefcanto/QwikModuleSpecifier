import {
    Paginate,
    PerPage,
    Sort,
} from "ProductsParts"

const TopTools = ({
    isRtl,
    metadata,
    productsStatics,
}) => {

    return <div class="flex md:items-end lg:items-center gap-x-4 sm:my-4 hidden md:flex font-bold">
        <Paginate
            class={`hidden lg:flex ${isRtl ? "flex-row" : "flex-row-reverse"}`}
            statics={productsStatics}
            metadata={metadata}
        />
        <PerPage
            class="hidden md:flex flex-col-reverse lg:flex-row gap-y-2 items-center"
            statics={productsStatics}
        />
        <Sort
            showTitle
            class="ms-auto hidden md:flex flex-col lg:flex-row gap-y-2 items-center gap-x-2"
            statics={productsStatics}
        />
    </div>
}

export default TopTools
