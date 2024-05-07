import { component$ } from "@builder.io/qwik"
import { Image } from "Base"
import { OrderLine } from "CartParts"

const OrderLines = component$(({
    addOrIncreaseHandler,
    cart,
    cartStatics,
    commonStatics,
    deleteOrDecreaseHandler,
    localePathPrefix,
}) => {
    return <>
        <div class="my-10 border p-2 sm:py-5 rounded-sm">
            <div class="flex flex-start items-center gap-2 py-2 sm:py-5">
                <p class="text-xl font-bold text-custom-color14 px-2">{cartStatics?.forDelivery}</p>
                <span
                    class="[&>svg]:w-10 [&>svg]:fill-gray-500"
                    dangerouslySetInnerHTML={cartStatics?.deliveryIcon} />
            </div>
            <div class="min-h-[200px]">
                {cart?.orderLines?.length === 0 ?
                    <div class="w-full p-4 flex flex-col gap-2 items-center justify-center text-lg text-center">
                        <Image
                            containerClass="w-28 h-28"
                            src={cartStatics.emptyBasketImage}
                        />
                        <p class="text-lg text-center">
                            {cartStatics.emptyBasket}
                        </p>

                    </div>
                    :
                    <div class="flex flex-col gap-2">
                        {
                            cart?.orderLines?.map(orderLine => <OrderLine
                                addOrIncreaseHandler={addOrIncreaseHandler}
                                cart={cart}
                                commonStatics={commonStatics}
                                deleteOrDecreaseHandler={deleteOrDecreaseHandler}
                                key={orderLine.id}
                                localePathPrefix={localePathPrefix}
                                orderLine={orderLine}
                            />)
                        }
                    </div>
                }
            </div>
        </div >
    </>
})

export default OrderLines
