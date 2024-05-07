import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    CheckoutLayout,
    loadCheckout,
} from "Sales"
import { Layout as RunnableLayout } from "CheckoutParts"

export const onRequest = (event) => {
    const session = event.sharedMap.get("session")
    if (!session || new Date(session.expires) < new Date()) {
        throw event.redirect(302, `/api/auth/signin?providerId=keycloak&callbackUrl=${event.url.pathname}`)
    }
}

export default component$(() => {

    const data = loadCheckout().value

    // useVisibleTask$(() => {TODO
    //     on("cartChanged", async () => {
    //         console.log("cart changed!")
    //         cart = await getCart(session)
    //     })
    // })
    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
        />
        :
        <CheckoutLayout
            paymentOnly
            {...data}
        />
})

export { loadCheckout }

const head = ({ resolveValue }) => {
    return useSeo(loadCheckout, resolveValue)
}

export { head }
