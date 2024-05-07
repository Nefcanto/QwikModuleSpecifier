import { component$ } from "@builder.io/qwik"
import { Pagination as DefaultPagination } from "Base"
import { useLocation } from "@builder.io/qwik-city"

const Pagination = component$(({ metadata }) => {

    const { url } = useLocation()

    return <div class="h-10">
        <DefaultPagination
            container="flex flex-wrap gap-2 max-w-6xl mx-auto px-5 xl:px-0 mt-5 mb-20"
            items="flex items-center justify-center w-8 sm:w-10 aspect-square border-0 rounded-lg text-custom-color1 text-xs sm:text-base bg-custom-color23 hover:bg-custom-color1 hover:text-custom-color23 transition-all"
            activeClass="bg-custom-color1 text-custom-color23"
            ellipses
            next="w-10 aspect-square p-1 sm:p-2 fill-custom-color1 hover:fill-custom-color23 transition-all"
            last="w-10 aspect-square p-1 sm:p-2 fill-custom-color1 hover:fill-custom-color23 transition-all"
            previous="w-10 aspect-square p-1 sm:p-2"
            first="w-10 aspect-square p-1 sm:p-2"
            metadata={metadata}
            url={url}
        />
    </div>
})

export default Pagination
