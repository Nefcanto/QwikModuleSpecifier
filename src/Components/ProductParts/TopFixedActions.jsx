import {
    $,
    component$,
    useOnWindow,
    useSignal,
} from "@builder.io/qwik"
import { usePrice } from "Attributes"
import {
    AddToCartButton,
    CountInput,
} from "Shared"

const TopFixedActions = component$(({
    commonStatics,
    product,
    variants,
    variantSlug,
}) => {

    const isShown = useSignal(false)
    const productCount = useSignal(1)

    useOnWindow(
        "scroll",
        $(event => {
            if (window.scrollY > 400) {
                isShown.value = true
            } else if (window.scrollY <= 400 && isShown.value !== false) {
                isShown.value = false
            }
        })
    )

    const countChangeHandler = $((e) => {
        productCount.value = e.target.value
    })

    return <div class={`w-full bg-white fixed z-50 top-0 start-0 py-2 shadow-md transition-all hidden lg:block ${isShown.value ? "translate-y-0" : "translate-y-[-100%]"}`}>
        <div class="max-w-6xl mx-auto flex items-center px-2 lg:px-4">
            <div class="w-2/3 flex justify-between items-center border-e py-4">
                <p class="text-lg text-custom-color14 font-bold py-4 line-clamp-2 max-w-sm">{product?.title}</p>
                <p class="px-4 flex items-center gap-0.5">
                    <span class="text-2xl font-black text-black/60">
                        {
                            usePrice(product, variants, variantSlug)?.amount?.toLocaleString()
                        }
                    </span>
                    <span class="text-xs text-black/60">{product?.relatedItems?.price?.currenciesCurrencySuperUnitName}</span>
                </p>
            </div>

            {
                <div class="w-1/3 flex flex items-center justify-between px-2">
                    {/* if has product in basket
                     <PurchaseButton
                            commonStatics={commonStatics}
                            addOrIncreaseHandler={addOrIncreaseHandler}
                            deleteOrDecreaseHandler={deleteOrDecreaseHandler}
                            product={product}
                            updateHandler={updateHandler}
                            productItem={productItem}
                            containerClass="mx-0 ms-auto"
                        />
                    else */}
                    <div class="w-full flex items-center gap-2">
                        <CountInput
                            commonStatics={commonStatics}
                            hasTitle
                            onChange={countChangeHandler}
                            value={productCount.value}
                        />
                        <AddToCartButton
                            class="mx-0 ms-auto"
                            commonStatics={commonStatics}
                            product={product}
                            simple
                        />
                    </div>
                </div>
            }
        </div>
    </div>
})

export default TopFixedActions
