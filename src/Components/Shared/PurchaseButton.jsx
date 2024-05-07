import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { merge } from "Base"
import {
    AdvancedAddToCartButton,
    SimpleAddToCardButton,
} from "Shared"

const PurchaseButton = component$(({
    addOrIncreaseHandler,
    commonStatics,
    containerClass,
    deleteOrDecreaseHandler,
    product,
    productItem,
    updateHandler,
}) => {

    return <div class={merge("mx-auto flex justify-center items-center", containerClass)}>
        {
            productItem ?
                <AdvancedAddToCartButton
                    commonStatics={commonStatics}
                    addOrIncreaseHandler={addOrIncreaseHandler}
                    deleteOrDecreaseHandler={deleteOrDecreaseHandler}
                    updateHandler={updateHandler}
                    product={product}
                    productItem={productItem}
                />
                :
                <SimpleAddToCardButton
                    addOrIncreaseHandler={addOrIncreaseHandler}
                    commonStatics={commonStatics}
                />
        }
    </div>
})

export default PurchaseButton

