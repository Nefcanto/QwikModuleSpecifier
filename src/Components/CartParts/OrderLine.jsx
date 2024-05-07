import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Image } from "Base"
import { useProductUrl } from "Products"
import {
    AddToCartButton,
    CountInput,
} from "Shared"

const OrderLine = component$(({
    commonStatics,
    localePathPrefix,
    orderLine,
}) => {

    const productCount = useSignal(1)
    const changeHandler = $(event => {
        productCount.value = event.target.value
    })

    return <>
        <div class="border p-2 sm:p-4 md:p-6 flex items-start rounded-md bg-gray-200 shadow shadow-md">
            <Image
                containerClass="w-20 md:w-32 aspect-square border border-1 border-gray-600 self-start"
                src={orderLine.relatedItems?.entity?.relatedItems?.imageUrl}
            />
            <div class="flex flex-1 flex-col lg:flex-row gap-y-10 mx-2 sm:mx-4 pb-5">
                <div class="flex-1 flex flex-col gap-y-5 items-start">
                    <a
                        class="font-bold text-sm sm:text-md line-clamp-2"
                        href={useProductUrl(orderLine.relatedItems?.entity?.slug, localePathPrefix)}
                    >
                        {orderLine.relatedItems?.entity?.title}
                    </a>
                    <p class="text-md font-gray-500">{orderLine.price?.toLocaleString()}</p>
                </div>
                <div class="flex-1 flex justify-between items-start ">
                    <AddToCartButton
                        product={orderLine.relatedItems.entity}
                        commonStatics={commonStatics}
                        class="mx-0"
                    />
                    <div class="flex flex-col justify-center items-center sm:flex-row gap-y-2">

                        <div class="flex flex-col me-auto">
                            <CountInput
                                value={productCount.value}
                                onChange={changeHandler}
                                commonStatics={commonStatics}
                            />
                        </div>
                        <p class="flex text-xl text-gray-500">
                            {
                                orderLine?.totalPrice?.toLocaleString()
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
})

export default OrderLine
