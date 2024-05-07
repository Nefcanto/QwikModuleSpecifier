import {
    Delivery,
    Remove,
} from "Svg"

const AddToCartButton = ({
    addOrIncreaseHandler,
    commonStatics,
    deleteOrDecreaseHandler,
    product,
    productItem,
    simple,
}) => {

    return <>
        {(!productItem || simple) ? <button
            type="button"
            onClick$={addOrIncreaseHandler}
            class="flex items-center justify-center gap-x-3 border min-w-[30%] px-6 md:px-4 rounded-md py-3 mb-2 text-gray-800 bg-gray-100 hover:bg-[linear-gradient(0deg,#D7D7D7,#f7eded_49%,#f7eded_52%,#F4F4F4)]"
        >
            <span class="text-sm">{commonStatics?.addToBasket}</span>
            <Delivery class="w-5 fill-gray-600" />
        </button> :
            <div class="flex items-center justify-between gap-x-5 md:gap-x-3 border min-w-[30%] px-4 rounded-md py-3 md:py-2 mb-2 text-gray-800 bg-gray-100 hover:bg-[linear-gradient(0deg,#D7D7D7,#f7eded_49%,#f7eded_52%,#F4F4F4)]">
                <div
                    onClick$={addOrIncreaseHandler}
                >
                    <span class="font-bold text-2xl md:text-xl hover:scale-110 cursor-pointer select-none">+</span>
                </div>
                <span class="font-bold text-md px-2 md:px-0 select-none">{productItem?.quantity}</span>
                <div onClick$={deleteOrDecreaseHandler}>
                    {productItem?.quantity > 1 ? <span class="font-bold text-2xl md:text-xl hover:scale-110 cursor-pointer select-none">-</span> : <Remove class="w-6 md:w-5 cursor-pointer fill-red-500 select-none" />}
                </div>
            </div>
        }
    </>

}

export default AddToCartButton
