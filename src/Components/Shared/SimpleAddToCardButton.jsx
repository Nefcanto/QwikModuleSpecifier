import { merge } from "Base"
import { Delivery } from "Svg"

const SimpleAddToCardButton = ({
    addOrIncreaseHandler,
    class: internalClass,
    commonStatics,
}) => {

    return < button
        type="button"
        onClick$={addOrIncreaseHandler}
        class={merge("flex items-center justify-center gap-x-3 border w-full max-w-[200px] px-2 md:px-4 rounded-md py-3 mb-2 text-gray-800 bg-gray-100 hover:bg-[linear-gradient(0deg,#D7D7D7,#f7eded_49%,#f7eded_52%,#F4F4F4)]", internalClass)}
    >
        <span class="text-sm">{commonStatics?.addToBasket}</span>
        <Delivery class="w-5 fill-gray-600" />
    </button >
}

export default SimpleAddToCardButton
