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
import { Brand } from "ProductParts"

const Actions = component$(({
    commonStatics,
    openPricesTab,
    product,
    variants,
    variantSlug,
}) => {

    const productCount = useSignal(1)

    const countChangeHandler = $((e) => {
        productCount.value = e.target.value
    })

    return <div class="px-4 md:px-0 col-span-full lg:col-span-2 border-t lg:border-t-0">
        {/* <Brand class="mx-auto mb-0" /> */}
        <div class="flex flex-col gap-4 mb-4 items-center justify-center">
            <p class="text-center py-4 flex gap-0.5 items-center">

                <span class="text-2xl font-black text-black/60">
                    {
                        usePrice(product, variants, variantSlug)?.amount?.toLocaleString()
                    }
                </span>
                <span class="text-xs text-black/60">{product?.relatedItems?.price?.currenciesCurrencySuperUnitName}</span>
            </p>
            <CountInput
                commonStatics={commonStatics}
                hasTitle
                onChange={countChangeHandler}
                value={productCount.value}
            />
            <p
                class="text-xs cursor-pointer hover:text-blue-500"
                onClick$={() => openPricesTab.value = variants[0].title}
            >
                {commonStatics.allPrices}
            </p>
        </div>
        <AddToCartButton
            commonStatics={commonStatics}
            product={product}
            simple
        />
    </div>
})

export default Actions
