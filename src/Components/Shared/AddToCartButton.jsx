import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { merge } from "Base"
import { useOrderActions } from "Orders"
import { Remove } from "Svg"

const AddToCartButton = component$(({
    class: internalClass,
    commonStatics,
    product,
    simple,
}) => {
    const {
        addOrIncreaseHandler,
        app,
        deleteOrDecreaseHandler,
    } = useOrderActions()

    const productItem = useSignal(app.cart?.orderLines?.find(orderLine => orderLine?.entityGuid == product?.guid) || {})

    useVisibleTask$(({ track }) => {
        track(() => app.cart)
        productItem.value = app.cart?.orderLines?.find(orderLine => orderLine?.entityGuid == product?.guid)
    })

    return <>
        {(!productItem.value || simple) ? <button
            type="button"
            onClick$={$(props => addOrIncreaseHandler(product))}
            class={merge("select-none border border-green-800 mx-auto w-full max-w-fit rounded-md text-white fill-white flex items-center justify-center hover:border-green-600 transition-all px-2 lg:px-4 py-2 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)]", internalClass)}
        >
            <span class="font-bold text-xs sm:text-md md:text-base text-white">{commonStatics?.addToBasket}</span>
        </button> :
            <div class={merge("select-none border border-green-800 mx-auto w-full max-w-[100px] rounded-md text-white fill-white flex items-center justify-between hover:border-green-600 transition-all px-4 py-3 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)]", internalClass)}>
                <div
                    onClick$={$(props => addOrIncreaseHandler(product))}
                >
                    <span class="font-bold text-xl hover:scale-110 block cursor-pointer select-none">+</span>
                </div>
                <span class="font-bold select-none">{productItem.value?.quantity}</span>
                <div onClick$={deleteOrDecreaseHandler}>
                    {productItem.value?.quantity > 1 ? <span class="font-bold text-xl hover:scale-110 block cursor-pointer select-none">-</span> : <Remove class="w-5 cursor-pointer hover:scale-110 fill-red-500" />}
                </div>
            </div>
        }
    </>

})

export default AddToCartButton
