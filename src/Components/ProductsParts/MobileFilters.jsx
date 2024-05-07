import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { FilterModal } from "ProductsParts"
import { ArrowRightFill } from "Svg"

const MobileFilters = component$(({
    attributes,
    onlyShowInStockProducts,
    statics,
    toggleOnlyInStockProducts,
}) => {

    const isOpenFilter = useSignal(false)

    return <div>
        <span
            onClick$={() => isOpenFilter.value = true}
            class="px-2 block flex items-center gap-2">

            <ArrowRightFill class="w-5 fill-gray-600" />
            <span>{statics.filters}</span>
        </span>
        <FilterModal
            toggleOnlyInStockProducts={toggleOnlyInStockProducts}
            click={$(() => isOpenFilter.value = false)}
            isOpen={isOpenFilter.value}
            onlyShowInStockProducts={onlyShowInStockProducts}
            statics={statics}
            attributes={attributes}
        />
    </div>
})

export default MobileFilters
