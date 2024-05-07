import {
    $,
    component$,
} from "@builder.io/qwik"
import { merge } from "Base"

const CountInput = component$(({
    class: internalClass,
    commonStatics,
    disabled,
    hasTitle,
    onBlur,
    onChange,
    onFocus,
    value,
}) => {

    return <div class={merge("text-xl text-custom-color14 font-bold flex justify-center items-center gap-x-0.5 lg:gap-x-2", `${internalClass}`)}>
        {hasTitle && <span class="text-sm lg:text-lg">{commonStatics.qty}</span>}
        <label
            class="w-12 h-8 border flex [&:has(:focus-visible)]:border-blue-500"
            for="count"
        >
            <input
                class="h-full w-full block peer border-none outline-none text-center text-sm text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                dir="ltr"
                disabled={disabled}
                id="count"
                onBlur$={onBlur}
                onFocus$={onFocus}
                onInput$={onChange}
                type="number"
                value={value}
            />
        </label>
    </div>
})

export default CountInput
