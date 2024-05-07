import { component$ } from "@builder.io/qwik"
import { merge } from "Base"

const Backdrop = component$(({
    class: internalClass,
    click,
    special
}) => {
    return (
        <div
            onClick$={click}
            class={merge([
                "w-screen h-screen bg-black opacity-[0.5]",
                `${special ? "absolute -z-10 top-0 start-0" : "fixed z-40 top-0 start-0"}`,
                internalClass
            ]
            )}
        />
    )
})

export default Backdrop
