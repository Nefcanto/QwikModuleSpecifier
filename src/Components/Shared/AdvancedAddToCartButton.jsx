import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { CountInput } from "Shared"
import { Remove } from "Svg"

const AdvancedAddToCartButton = component$(({
    addOrIncreaseHandler,
    commonStatics,
    deleteOrDecreaseHandler,
    product,
    productItem,
    updateHandler,

}) => {

    const isUpdateMode = useSignal(false)
    const count = useSignal(product.count || 1)

    const changeHandler = $((e) => {
        count.value = e.target.value
    })

    const onFocus = $(() => {

        isUpdateMode.value = true
    })

    const onBlur = $(() => {

        isUpdateMode.value = false
    })

    const update = $(() => {

        updateHandler(count.value)
    })

    return <div class="flex items-center justify-between max-w-[400px] lg:max-w-fit rounded-md mb-2 px-3 text-gray-800">
        <button
            class={`self-stretch bg-green-500 rounded-sm w-fit ${isUpdateMode.value ? "max-w-full px-2 transition-all duration-300" : "max-w-0 overflow-hidden"}`}
            onClick$={update}
        >
            {commonStatics.update}
        </button>
        <div
            class={`self-stretch bg-green-400 w-10 text-center flex items-center justify-center ${isUpdateMode.value ? "max-w-0 overflow-hidden opacity-0" : "w-10 max-w-full transition-all duration-300 opacity-100"}`}
            onClick$={addOrIncreaseHandler}
        >
            <span class="font-bold text-2xl md:text-xl hover:scale-110 cursor-pointer select-none">+</span>
        </div>

        <CountInput
            onFocus={onFocus}
            onBlur={onBlur}
            value={productItem?.quantity}
            onChange={changeHandler}
        />
        <div
            class={`w-10 text-center self-stretch flex items-center justify-center
            ${isUpdateMode.value ? "max-w-0 overflow-hidden opacity-0" : "max-w-full transition-all duration-300 opacity-100"}
            ${productItem?.quantity > 1 ? "bg-green-500" : "bg-red-200"}
            `}
            onClick$={deleteOrDecreaseHandler}>
            {productItem?.quantity > 1 ? <span class="font-bold text-2xl md:text-xl hover:scale-110 cursor-pointer select-none">-</span> : <Remove class="w-6 md:w-5 cursor-pointer fill-white select-none" />}
        </div>

    </div >

})

export default AdvancedAddToCartButton
