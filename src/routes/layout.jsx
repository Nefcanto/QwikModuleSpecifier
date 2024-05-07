import {
    component$,
    Slot,
    useContext,
    useVisibleTask$,
} from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    AppContext,
    useAsync,
} from "Base"
import { getGlobalization } from "Globalization"
import { getSystemConfig } from "Configuration"
import { useLayoutSeo } from "Seo"
import { getLayout } from "Contents"
import { getLatestPosts } from "Blog"
import { getMenu } from "Navigation"
import { getHierarchies } from "Taxonomy"
import {
    syncUser,
    useAuthSession,
} from "Accounts"
import {
    getCart,
    getLocalCart,
    mergeCarts,
    removeLocalCart,
} from "Orders"
import {
    Footer,
    Header,
    Message,
} from "Layout"

const getData = routeLoader$(async props => {

    const [
        layout,
        globalization,
        menuItems,
        latestPosts,
        categories,
        systemConfigs,
    ] = await useAsync([
        getLayout("main", props),
        getGlobalization(props),
        getMenu(props),
        getLatestPosts(2),
        getHierarchies("product", props),
        getSystemConfig(props),
    ])

    return {
        ...globalization,
        ...systemConfigs,
        // ...latestPosts,
        ...layout,
        categories,
        // ...menuItems,
    }
})

const Layout = component$(() => {

    const session = useAuthSession()

    const app = useContext(AppContext)

    useVisibleTask$(async () => {
        app.cart = await getCart(session)
        app.isIncludeVat = false
        app.compare = []
    })

    useVisibleTask$(async () => {
        if (session?.value?.user?.guid) {
            await syncUser(session)
            const localCart = getLocalCart()
            if (localCart) {
                app.cart = await mergeCarts(session, localCart)
                removeLocalCart()
            }
        }
    })

    const data = getData().value
    const { isRtl } = data

    return <div
        dir={isRtl ? "rtl" : "ltr"}
        class="overflow-x-hidden"
    >
        <Message {...data} />
        <Header {...data} />
        <div class="bg-custom-color22 py-5">
            <Slot />
        </div>
        <Footer {...data} />
    </div>
})

export default Layout

const head = ({ resolveValue }) => {
    return useLayoutSeo(getData, resolveValue)
}

export { head }
