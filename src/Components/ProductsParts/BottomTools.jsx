import {
    Paginate,
    PerPage,
    Sort,
} from "ProductsParts"

const BottomTools = ({
    isRtl,
    metadata,
    productsStatics,
}) => {

    return <div class="flex items-end lg:items-center gap-x-4 my-4">
        <Paginate
            class={`flex items-center mx-auto md:mx-0 ${isRtl ? "flex-row" : "flex-row-reverse"}`}
            statics={productsStatics}
            metadata={metadata}

        />
        <PerPage
            class="hidden md:flex md:flex-col-reverse gap-y-2 lg:flex-row items-center gap-x-1"
            statics={productsStatics}
        />
        <Sort
            showTitle
            class="hidden md:flex items-center gap-x-2 md:ms-auto"
            statics={productsStatics}
        />
    </div>
}

export default BottomTools
