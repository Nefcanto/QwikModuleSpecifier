import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { FilterAttributesList } from "ProductsParts"
import { Toggle } from "Shared"

const DesktopFilters = component$(({
    attributes,
    onlyShowInStockProducts,
    statics,
    toggleOnlyInStockProducts,
}) => {

    const { url } = useLocation()
    const { searchParams } = url

    useVisibleTask$(() => {
        const url = new URL(window.location.href)
        if (url.searchParams.has("availability")) {
            const value = url.searchParams.get("availability")
            onlyShowInStockProducts.value = value == "inStock"
        }
    })

    const AddFilterHandler = $((title, optionValue) => {
        const url = new URL(window.location.href)
        if (url.searchParams.has(title) && url.searchParams.get(title) === optionValue) {
            url.searchParams.delete(title)
        } else {

            url.searchParams.set(title, optionValue)
        }

        window.location.href = url.toString()
    })

    const deleteFilterHandler = $(() => {

        window.location.href = window.location.pathname
    })

    return <div class="hidden md:block w-full bg-white border border-custom-color3 shadow-md py-6 px-4">
        <div class="w-full flex justify-between">
            <div
                onClick$={deleteFilterHandler}
                class="underline text-custom-color14 text-xs cursor-pointer hover:text-red-500">{statics.clearAll}</div>
            <strong class="text-custom-color14">{statics.filters}</strong>
        </div>
        <div class="flex flex-col mt-6">
            <div class="flex items-center justify-around py-2">
                <p class="text-black text-sm">
                    {statics?.onlyInStockProducts}
                </p>
                <Toggle
                    class="w-fit"
                    checked={onlyShowInStockProducts.value}
                    id="onlyInStockProducts"
                    onChange={toggleOnlyInStockProducts}
                />
            </div>
            <FilterAttributesList attributes={attributes} />
        </div>

    </div>
})

export default DesktopFilters
