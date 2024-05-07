import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"

const Brand = component$(({ class: internalClass }) => {

    return <div class={
        merge(
            `h-10 w-fit ms-auto p-4 mb-6`,
            internalClass)}
    >
        <Slot />
    </div>
})

export default Brand
