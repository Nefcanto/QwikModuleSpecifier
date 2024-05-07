import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"

const GradientButton = component$(({
    class: internalClass,
    href,
    onClick$: _onClick$,
    ...rest
}) => {
    return <>
        {
            href && <a
                href={href}
                class={merge("select-none border border-green-800 mx-auto rounded-md text-white fill-white flex items-center justify-between hover:border-green-600 transition-all px-4 py-3 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)]", internalClass)}
                {...rest}
            >
                <Slot />
            </a>
        }
        {
            _onClick$ &&
            <button
                onClick$={_onClick$}
                class={merge("select-none border border-green-800 mx-auto rounded-md text-white fill-white flex items-center justify-between hover:border-green-600 transition-all px-4 py-3 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)]", internalClass)}
                {...rest}
            >
                <Slot />
            </button>
        }
    </>
})

export default GradientButton
