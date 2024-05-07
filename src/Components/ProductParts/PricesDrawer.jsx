import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    AddToCartButton,
    Backdrop,
    CountInput,
    PurchaseButton,
} from "Shared"

const PricesDrawer = component$(({
    class: internalClass,
    click,
    commonStatics,
    openPricesTab,
    variants,
    product,
    productItem,
}) => {

    const productCount = useSignal(1)
    const changeHandler = $(event => {
        productCount.value = event.target.value
    })

    return <>
        {
            openPricesTab.value
            &&
            <Backdrop click={click} />
        }
        <div class={`fixed z-50 bottom-0 start-0 end-0 bg-white w-full bg-whiter border rounded-md overflow-hidden shadow shadow-lg transition-all duration-300 py-4 px-4 max-w-6xl mx-auto 2xl:px-0 pb-20 ${openPricesTab.value ? "translate-y-0" : "translate-y-full"} ${internalClass}`}>

            <div class="w-full flex item-center max-w-3xl mx-auto gap-1 my-2">
                {
                    variants?.slice(0, 3).map(variant => <div
                        class={`w-1/3 text-center lg:bg-black/20 cursor-pointer ${openPricesTab.value === variant.title ? "bg-black/20" : "bg-white"} `}
                        key={variant.id}
                        onClick$={() => openPricesTab.value = variant.title}
                    >
                        {variant.title}
                    </div>)
                }
            </div>
            <div class="lg:hidden p-2 max-w-2xl mx-auto flex gap-1 items-center bg-black/10">
                <p class="h-3">

                    {variants?.slice(0, 3).find(el => el.title === openPricesTab.value)?.relatedItems?.price?.amount?.toLocaleString()}
                </p>

                <div class="grow max-w-[50%] sm:max-w-[40%] ms-auto flex items-center gap-1">
                    {
                        true ?
                            <>
                                <CountInput
                                    commonStatics={commonStatics}
                                    onChange={changeHandler}
                                    value={productCount.value}
                                />
                                <AddToCartButton
                                    class="py-1.5 max-w-none mx-0"
                                    commonStatics={commonStatics}
                                    product={product}
                                    simple
                                />
                            </>
                            :
                            <PurchaseButton
                                commonStatics={commonStatics}
                                containerClass="mx-0 ms-auto"
                                product={product}
                            />
                    }
                </div>
            </div>
            <div class="hidden lg:flex gap-1 p-2 max-w-3xl mx-auto items-center justify-between text-center">
                {
                    variants?.slice(0, 3).map(item => <div
                        class="w-1/3 flex flex-col gap-4 pt-8"
                        key={item.id}
                    >
                        <p class="h-5">
                            {item?.relatedItems?.price?.amount?.toLocaleString()}
                        </p>
                        {
                            true ?
                                <>
                                    <CountInput
                                        commonStatics={commonStatics}
                                        onChange={changeHandler}
                                        value={productCount.value}
                                    />

                                    <AddToCartButton
                                        class="py-1.5"
                                        commonStatics={commonStatics}
                                        productItem={productItem}
                                        simple
                                    />

                                </> :
                                <PurchaseButton
                                    commonStatics={commonStatics}
                                    containerClass="mx-0 ms-auto"
                                    product={product}
                                />
                        }
                    </div>
                    )}
            </div>
        </div >
    </>
})

export default PricesDrawer
