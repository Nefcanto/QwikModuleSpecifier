import { useCartUrl } from "Orders"
import { Bill } from "CheckoutParts"
import { Delivery } from "Svg"

const Products = ({
    cart,
    checkoutStatics,
}) => {

    return <div class="py-4">
        <div class="bg-gray-100 p-6">

            <div class="flex gap-2 items-center">
                <Delivery class="w-8 fill-gray-500" />
                <span class="text-xl text-custom-color14">{checkoutStatics.forDelivery}</span>
            </div>
            <div class="my-4 border-y border-gray-700">
                <Bill cart={cart} />

            </div>
        </div>
        <div class="my-4 w-full md:w-1/2 ms-auto">
            <div class="w-full py-2 flex justify-between text-lg px-5 font-bold border-y border-dotted">
                <p>{checkoutStatics.total}</p>
                <p>{cart?.order?.totalPrice?.toLocaleString()}</p>
            </div>
            <a
                href={useCartUrl()}
                class="my-4 flex w-fit px-2 py-1 border rounded-md shadow ms-auto hover:text-custom-color14 duration-300"
            >
                {checkoutStatics.editBasket}
            </a>
        </div>
    </div>
}

export default Products
