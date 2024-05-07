import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { FilterAttributesList } from "ProductsParts"
import {
    Backdrop,
    Toggle,
} from "Shared"

const FilterModal = component$(({
    attributes,
    click,
    isOpen,
    onlyShowInStockProducts,
    statics,
    toggleOnlyInStockProducts,
}) => {

    const { url } = useLocation()
    const { searchParams } = url
    const renderFilter = useSignal()

    const AddFilterHandler = $((title, optionValue) => {
        const url = new URL(window.location.href)
        if (url.searchParams.has(title) && url.searchParams.get(title) === optionValue) {
            url.searchParams.delete(title)
        } else {

            url.searchParams.set(title, optionValue)
        }

        window.location.href = url.toString()
    })

    return <>
        {
            isOpen && <Backdrop click={$(() => {
                click()
                renderFilter.value = ""
            })} />
        }
        <div class={`w-[90vw] min-h-screen fixed z-40 top-0 start-0 text-custom-color14 bg-white ${isOpen ? "block visible" : "hidden invisible"}`}>
            <>
                <div class="p-4 flex justify-between items-center gap-x-2 text-custom-color14">
                    <span>{statics.filters}</span>
                    <span
                        onClick$={click}
                        class="text-lg px-2 cursor-pointer"
                    >
                        X
                    </span>
                </div>
                {renderFilter.value ? <div>
                    {renderFilter.value.items.map(filterItem => <p
                        class="p-1"
                        key={filterItem.id}
                        onClick$={() => AddFilterHandler(renderFilter.value.title, filterItem)}
                    >
                        {filterItem}
                    </p>
                    )}
                </div> :
                    <div class="flex flex-col mt-6 px-4 max-h-[80vh] overflow-y-auto">
                        <div class="flex items-center justify-between">
                            <p class="text-black text-sm">
                                {statics?.onlyInStockProducts}
                            </p>
                            <div class="w-fit">
                                <Toggle
                                    checked={onlyShowInStockProducts.value}
                                    id="onlyInStockProducts"
                                    onChange={toggleOnlyInStockProducts}
                                />
                            </div>
                        </div>
                        <FilterAttributesList attributes={attributes} />
                    </div>
                }
            </>
        </div>
    </>
})

export default FilterModal
