import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { useAuthSession } from "Accounts"
import { useSeo } from "Seo"
import {
    CartLayout,
    getCart,
    loadCart,
} from "Orders"
import { Layout as RunnableLayout } from "CartParts"

export default component$(() => {

    const data = loadCart().value

    const cart = useSignal()

    const session = useAuthSession()

    useVisibleTask$(async ({ track }) => {
        cart.value = await getCart(session)
    })

    useVisibleTask$(() => {
        on("cartChanged", async () => {
            console.log("cart changed!")
            cart.value = await getCart(session)
        })
    })

    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
            cart={cart}
        />
        :
        <CartLayout
            {...data}
            cart={cart}
        />
})

export { loadCart }

const head = ({ resolveValue }) => {
    return useSeo(loadCart, resolveValue)
}

export { head }
