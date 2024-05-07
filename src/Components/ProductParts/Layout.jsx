import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Breadcrumb } from "Shared"
import {
    Actions,
    Details,
    FixedActions,
    Gallery,
    MoreDetails,
    PricesDrawer,
    RelatedProducts,
    Summary,
    Tabs,
    TopFixedActions,
} from "ProductParts"

const Layout = component$(({
    breadcrumb,
    tabItems,
    commentsTexts,
    ...rest
}) => {

    const openPricesTab = useSignal(null)
    const activeTabName = useSignal(tabItems?.specificationKey)
    const handleTabClick = $(name => {
        activeTabName.value = name
    })

    return <div class="max-w-6xl mx-auto px-4 2xl:px-0">
        <Breadcrumb items={breadcrumb} />
        <div class="border border-custom-color3 shadow-xl grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 grid-rows-auto gap-6 p-4 md:p-10 bg-white">
            <Gallery {...rest} />
            <Details
                {...rest}
                handleTabClick={handleTabClick}
                tabItems={tabItems}
            />
            <Actions
                {...rest}
                openPricesTab={openPricesTab}
            />
            <TopFixedActions
                {...rest}
                openPricesTab={openPricesTab}
            />
            <FixedActions
                {...rest}
                openPricesTab={openPricesTab}
            />
        </div>
        <Summary {...rest} />
        <div class="flex flex-col gap-y-2 gap-x-4 mb-10 mt-5">
            <RelatedProducts
                {...rest}
                related={RelatedProducts}
            />
            <Tabs
                {...rest}
                activeTabName={activeTabName}
                commentsTexts={commentsTexts}
                handleTabClick={handleTabClick}
                tabItems={tabItems}
            />
        </div>
        <PricesDrawer
            {...rest}
            click={$(() => openPricesTab.value = null)}
            openPricesTab={openPricesTab}
        />
    </div>
})

export default Layout
