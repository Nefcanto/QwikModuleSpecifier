import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { AsideCategoryRows } from "Shared"

const AsideCategoryDetails = component$(({
    categories,
    localePathPrefix,
    parent,
    statics,
}) => {

    const isOpen = useSignal(false)

    return <div>
        {
            (parent ||
                categories?.length > 0) &&
            <div class={`category w-full border border-custom-color3 shadow-sm bg-white pt-6 pb-3 px-4 ${!parent && "hidden md:block"}`}>
                {
                    parent?.title
                        ?
                        <strong class="text-custom-color14">{parent?.title}</strong>
                        :
                        <strong class="text-custom-color14">{statics.categories}</strong>
                }
                {
                    parent?.description && <div class="relative mb-10">
                        <p class={`my-4 text-sm ${isOpen.value ? "" : "line-clamp-1 sm:line-clamp-3"}`}>
                            {parent?.description}
                            <span
                                class="absolute top-[100%] z-20 mx-auto underline text-custom-color14 text-sm block mt-1 line-clamp-4 cursor-pointer"
                                onClick$={() => isOpen.value = !isOpen.value}
                            >
                                {isOpen.value ? statics.readLess : statics.readMore}
                            </span>
                        </p>
                    </div>
                }
                {
                    categories?.length > 0 &&
                    <AsideCategoryRows
                        categories={categories}
                        localePathPrefix={localePathPrefix}
                    />
                }
            </div>
        }
    </div>
})

export default AsideCategoryDetails
