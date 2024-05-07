import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { usePrice } from "Attributes"
import {
    AddToCartButton,
    CountInput,
} from "Shared"

const FixedActions = component$(({
    addOrIncreaseHandler,
    cart,
    commonStatics,
    deleteOrDecreaseHandler,
    openPricesTab,
    product,
    productItem,
    updateHandler,
    variants,
    variantSlug,
}) => {

    const productCount = useSignal(1)

    const countChangeHandler = $((e) => {
        productCount.value = e.target.value
    })

    return <div class={`w-full bg-custom-color4 drop-shadow text-white fixed z-40 bottom-0 start-0 end-0 py-2 shadow-xl shadow-black transition-all lg:hidden border`}>
        <div class="max-w-6xl mx-auto px-2 lg:px-4">
            <div class="flex-1 flex-wrap sm:flex-nowrap flex items-center justify-between px-2 gap-2">

                <p class="text-sm md:text-base w-full sm:w-auto max-w-xs line-clamp-1">{product.title}</p>
                <p class="text-center flex gap-0.5 items-center ms-auto">

                    <span class="text-base font-black">
                        {
                            usePrice(product, variants, variantSlug)?.amount?.toLocaleString()
                        }
                    </span>
                    <span class="text-xs">{product?.relatedItems?.price?.currenciesCurrencySuperUnitName}</span>
                </p>

                {
                    <div class="ms-auto">
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
                        <div class="flex items-center gap-2">
                            <CountInput
                                commonStatics={commonStatics}
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
            <p
                class="text-xs cursor-pointer hover:text-blue-500 text-center my-1"
                onClick$={() => openPricesTab.value = variants[0].title}
            >
                {commonStatics.allPrices}
            </p>
        </div>
    </div>
})

export default FixedActions
