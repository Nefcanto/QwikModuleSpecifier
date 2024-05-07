import {
    component$,
    useContext,
} from "@builder.io/qwik"
import { AppContext } from "Base"
import { HoverCart } from "Layout"
import { Basket } from "Svg"

const Checkout = component$(({
    actonItemsClass,
    headerItems,
    localePathPrefix,
}) => {

    const app = useContext(AppContext)

    return <div class={`relative z-0 col-start-9 col-end-13 md:col-start-11 md:col-end-13 xl:order-2 xl:col-start-11 xl:col-end-13 border-e-transparent xl:hover:border-e-transparent relative group ${actonItemsClass}`}>
        <a
            class="w-fit relative flex flex-col items-center justify-center"
            href={headerItems?.cartLink}
        >
            <Basket class="w-6 md:w-10 fill-custom-color1 md:mb-6" />
            {
                app.cart?.order?.relatedItems?.itemsCount > 0
                &&
                <span class="absolute block top-0 start-5 bg-red-500 h-4 flex items-center justify-center aspect-square rounded-full text-white text-xs">
                    {app.cart?.order?.relatedItems?.itemsCount}
                </span>}
        </a>
        <p class="text-xs md:text-base">{headerItems?.checkoutTitle}</p>
        <HoverCart
            orderLines={app.cart?.orderLines}
            localePathPrefix={localePathPrefix}
            headerItems={headerItems}
        />
    </div>
})

export default Checkout
