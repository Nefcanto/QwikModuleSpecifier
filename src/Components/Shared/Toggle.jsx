import { component$ } from "@builder.io/qwik"
import { merge } from "Base"

const Toggle = component$(({
    checked,
    class: internalClass,
    id,
    onChange,
}) => {

    return <label
        for={id}
        class={merge("relative inline-flex items-center cursor-pointer", internalClass)} >
        <input
            id={id}
            type="checkbox"
            checked={checked}
            onInput$={onChange}
            aria-label="toggle"
            class="sr-only peer"
        />
        <div class={`w-11 h-6 bg-[#004587] shadow-[inset_0_2px_5px_#000] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004587]`}>
        </div>
    </label >
})

export default Toggle
