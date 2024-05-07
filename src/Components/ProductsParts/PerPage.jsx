import { component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"

const PerPage = component$(({
    class: internalClass,
    metadata,
    statics,
}) => {

    const { url } = useLocation()
    const { pathname, searchParams } = url
    const pageSize = +searchParams.get("pageSize") || 10

    const getLink = size => {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("pageSize", size)
        return `${pathname}${newSearchParams.size > 0 ? `?${newSearchParams.toString()}` : ""}`
    }

    const perPages = [10, 20]

    return <div class={internalClass}>
        <div class="flex gap-x-2 items-center">

            {perPages.map(perPage => <a
                class={[
                    `p-1 px-2 rounded-md flex items-center justify-center cursor-pointer`,
                    `${pageSize === perPage ? "bg-custom-color14 text-white" : "hover:text-custom-color11"}`
                ]}
                href={getLink(perPage)}
                key={perPage.id}
            >

                {perPage}
            </a>
            )}
        </div>
        <span class="text-custom-color14 text-md text-sm mx-2">{statics.resultPerPage} </span>
    </div >
})

export default PerPage
