import {
    $,
    component$,
} from "@builder.io/qwik"
import { ProductCard } from "ProductsParts"

const List = component$(({
    addOrIncreaseHandler,
    cart,
    commonStatics,
    deleteOrDecreaseHandler,
    localePathPrefix,
    products,
    states,
}) => {

    return <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 my-4 sm:my-0">
        {
            products?.length > 0 &&
            products?.map(product => <ProductCard
                addOrIncreaseHandler={$(() => addOrIncreaseHandler(product))}
                cart={cart}
                commonStatics={commonStatics}
                deleteOrDecreaseHandler={$(() => deleteOrDecreaseHandler(product))}
                key={product.id}
                localePathPrefix={localePathPrefix}
                product={product}
                states={states}

            />)}
    </div>
})

export default List
