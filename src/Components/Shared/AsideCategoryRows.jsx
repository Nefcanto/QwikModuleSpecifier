import { component$ } from "@builder.io/qwik"
import { useHierarchyUrl } from "Taxonomy"
import { useCategoryUrl } from "Products"
import { ArrowLeftFill } from "Svg"

const AsideCategoryRows = component$(({
    categories,
    localePathPrefix,
}) => {
    return <div class="hidden md:block">
        <div class="pt-4 flex flex-col text-gray-500 fill-gray-500">
            {
                categories.map(item => <a
                    class="flex items-center justify-between group border-t border-t-custom-color3 py-4"
                    href={item?.ancestorsIdsCsv?.split(",")?.filter(item => item !== "")?.length > 1 ? useCategoryUrl(item?.slug, localePathPrefix) : useHierarchyUrl("product", item?.slug)}
                    key={item.id}
                >
                    <span class="flex items-center gap-x-1">
                        <span class="group-hover:underline text-sm font-bolder transition-all group-hover:text-custom-color14">
                            {item?.title}
                        </span>
                        {/* <span class="text-xs">(
                        {item?.relatedItems?.children?.length}
                        )</span> */}
                    </span>
                    <ArrowLeftFill class="w-5" />
                </a>
                )}
        </div>
    </div>
})

export default AsideCategoryRows
