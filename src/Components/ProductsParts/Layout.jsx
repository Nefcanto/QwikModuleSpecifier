import {
    $,
    component$,
    useContext,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { AppContext } from "Base"
import { useOrderActions } from "Orders"
import {
    BottomTools,
    Compare,
    DesktopFilters,
    List,
    MobileFilters,
    ProductBrand,
    Sort,
    TopTools,
} from "ProductsParts"
import {
    AsideCategoryDetails,
    Breadcrumb,
    ShoppingModal,
} from "Shared"

const Layout = component$(({
    attributes,
    brands,
    breadcrumb,
    categories,
    commonStatics,
    isRtl,
    localePathPrefix,
    parent,
    products,
    productsStatics,
    states,
}) => {

    const onlyShowInStockProducts = useSignal(false)
    const shoppingItem = useSignal()

    const {
        addOrIncreaseHandler,
        app,
        deleteOrDecreaseHandler,
    } = useOrderActions()

    const toggleOnlyInStockProducts = $((e) => {
        const url = new URL(window.location.href)
        if (e.target.checked) {
            url.searchParams.set("availability", "inStock")
        } else {
            url.searchParams.delete("availability")
        }

        window.location.href = url.toString()
    })

    return <section class="max-w-6xl mx-auto px-4 2xl:px-0 relative">
        <ShoppingModal
            click={$(() => shoppingItem.value = "")}
            isOpen={shoppingItem.value}
            product={shoppingItem.value}
            productsStatics={productsStatics}
            localePathPrefix={localePathPrefix}
        />
        <Breadcrumb items={breadcrumb} />
        <ProductBrand
            class="flex lg:hidden flex-col gap-y-4 mb-6"
            brands={brands}
            productsStatics={productsStatics}
            localePathPrefix={localePathPrefix}
        />
        <div class="grid grid-cols-1 md:grid-cols-[30%,66%] xl:grid-cols-[22%,76%] justify-between pb-10">
            <div class="flex flex-col gap-y-4">
                <AsideCategoryDetails
                    statics={productsStatics}
                    categories={categories}
                    parent={parent}
                    localePathPrefix={localePathPrefix}
                />
                <DesktopFilters
                    attributes={attributes}
                    statics={productsStatics}
                    onlyShowInStockProducts={onlyShowInStockProducts}
                    toggleOnlyInStockProducts={toggleOnlyInStockProducts}
                />
                <div class="flex md:hidden justify-between items-center py-4">
                    <MobileFilters
                        attributes={attributes}
                        toggleOnlyInStockProducts={toggleOnlyInStockProducts}
                        statics={productsStatics}
                        onlyShowInStockProducts={onlyShowInStockProducts}
                    />
                    <span class="block h-[80%] w-0.5 bg-gray-500"></span>
                    <Sort statics={productsStatics} />
                </div>
            </div>
            <div class="w-full">
                <ProductBrand
                    class="hidden lg:flex flex-col gap-y-4 mb-6"
                    brands={brands}
                    productsStatics={productsStatics}
                    localePathPrefix={localePathPrefix}
                />
                <div class="product side border-y border-custom-color3 pb-2">
                    <TopTools
                        metadata={products?.metadata}
                        productsStatics={productsStatics}
                        isRtl={isRtl}
                    />
                    <List
                        states={states}
                        commonStatics={commonStatics}
                        products={products?.data}
                        addOrIncreaseHandler={addOrIncreaseHandler}
                        deleteOrDecreaseHandler={deleteOrDecreaseHandler}
                        cart={app.cart}
                        localePathPrefix={localePathPrefix}
                    />
                    <BottomTools
                        metadata={products?.metadata}
                        productsStatics={productsStatics}
                        isRtl={isRtl}
                    />
                </div>
            </div>
        </div>
        <Compare productsStatics={productsStatics} />
    </section>
})

export default Layout
