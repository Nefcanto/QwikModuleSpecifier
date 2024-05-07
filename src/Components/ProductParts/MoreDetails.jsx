import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Attributes } from "ProductParts"

const MoreDetails = component$(({
    attributes,
    productStatics,
}) => {

    const moreInfoShown = useSignal(false)

    return <div class="md:max-w-[60%]">

        <div
            class="text-xs text-custom-color1 hover:underline inline-block cursor-pointer select-none"
            onClick$={() => moreInfoShown.value = !moreInfoShown.value}
        >
            {moreInfoShown.value ? productStatics.lessInfo : productStatics.moreInfo}
        </div>
        <div class={`my-2 overflow-hidden transition-all ${moreInfoShown.value ? "max-h-[100vh] duration-1000" : "max-h-28 duration-1000"}`}>
            <Attributes attributes={attributes?.displayOnly} />

        </div>
    </div>
})

export default MoreDetails
