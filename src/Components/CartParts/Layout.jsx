import {
    $,
    component$,
} from "@builder.io/qwik"
import {
    useCheckoutUrl,
    useOrderActions,
} from "Orders"
import { OrderLines } from "CartParts"
import {
    Breadcrumb,
    GradientButton,
    Loader,
} from "Shared"

const Layout = component$(({
    breadcrumb,
    cartStatics,
    commonStatics,
    localePathPrefix,
}) => {
    const {
        addOrIncreaseHandler,
        app,
        deleteOrDecreaseHandler,
    } = useOrderActions()

    return <section class="max-w-6xl mx-auto px-4 2xl:px-0 min-h-[50vh]">
        <Breadcrumb items={breadcrumb} />
        <div class="w-full py-2 sm:py-5 flex items-center justify-between border-b-2 border-gray-500">
            <h1 class="text-3xl font-bold text-gray-500">
                {commonStatics.orders}
            </h1>
            <GradientButton
                class="w-fit my-6 flex mx-0"
                href={useCheckoutUrl(localePathPrefix)}
            >
                <span>
                    {cartStatics.goToCheckoutText}
                </span>
            </GradientButton>
        </div>
        {app.cart ?
            <OrderLines
                cart={app.cart}
                cartStatics={cartStatics}
                localePathPrefix={localePathPrefix}
                addOrIncreaseHandler={addOrIncreaseHandler}
                deleteOrDecreaseHandler={deleteOrDecreaseHandler}
                commonStatics={commonStatics}
            />
            :
            <Loader
                title={cartStatics.loadingTitle}
            />
        }
    </section>
})

export default Layout
