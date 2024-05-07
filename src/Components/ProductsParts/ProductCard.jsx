import {
    $,
    component$,
    useContext,
    useSignal,
    useTask$,
} from "@builder.io/qwik"
import {
    AppContext,
    Image,
} from "Base"
import { Rating } from "Social"
import { useProductUrl } from "Products"
import {
    AddToCartButton,
    Attributes,
} from "ProductsParts"
import { DiscountPercent } from "Shared"
import { provideStateStyles } from "Functions"
import Branding from "../ProductParts/Branding"

const ProductCard = component$(({
    addOrIncreaseHandler,
    cart,
    commonStatics,
    deleteOrDecreaseHandler,
    localePathPrefix,
    product,
    states,
    notCompare,
}) => {

    const stateTranslation = useSignal("")

    useTask$(() => {
        const translationsArray = Object.entries(states)
        const [stateKey, stateValue] = translationsArray?.find(([key, value]) => key?.toLowerCase() == product?.relatedItems?.inventoryAvailabilityStateKey?.toLowerCase()) || ["EmptyState", ""]
        stateTranslation.value = stateValue || ""
    })

    const app = useContext(AppContext)

    const productItem = cart?.orderLines?.find(orderLine => orderLine?.entityGuid == product.guid)

    const selectHandler = $((e, product) => {

        const isChecked = e.target.checked
        const compareList = [...app.compare]
        if (isChecked) {
            app.compare = [...compareList, product]
        }
        else {
            app.compare = compareList.filter(p => p.id !== product.id)
        }
    })

    const productAttributes = product.relatedItems.entityAttributes

    return <div class="bg-white shadow-lg border border-custom-color3 p-4">
        <div class="grid grid-cols-[30%_minmax(100px,_1fr)_60px] gap-x-2 lg:pb-10 border-b">
            <div class="max-w-[80%] sm:max-w-full col-start-2 text-gray-600">
                <h3 class="font-bold text-sm sm:text-md line-clamp-4">
                    <a href={useProductUrl(product.slug, localePathPrefix)}>
                        {product.title}
                    </a>
                </h3>
                <strong class="text-xs">{product.code}</strong>
                <div class="py-2 flex items-center gap-0.5">
                    <Rating
                        containerClass="px-2"
                        readOnly
                        starClass="w-4"
                        value={product.relatedItems.ratingAverage}
                    />
                    {/* <span class="text-xs">(110)</span> */}
                </div>
            </div>
            <div class="col-start-1 row-start-1 row-end-3">
                <a href={useProductUrl(product.slug, localePathPrefix)}>
                    <Image
                        alt={product.title}
                        containerClass="w-full aspect-square"
                        src={product?.relatedItems?.imageUrl}
                    />
                </a>
                <div class="w-full flex items-center flex-col">
                    {
                        notCompare ?
                            <div></div>
                            :
                            <div class="flex gap-x-2 items-center justify-center border-y py-1 m-2">
                                <div class="w-4 aspect-square flex">
                                    <input
                                        class="h-full w-full block cursor-pointer border-none outline-none text-center text-sm text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        onInput$={(e) => selectHandler(e, product)}
                                        // value={[...app.compare].some(item => item.id == product.id)}
                                        type="checkbox"
                                    />
                                </div>
                                <span class="text-md sm:text-md text-gray-400">
                                    {commonStatics?.compare}
                                </span>
                            </div>}
                    <span class={`text-sm p-2 m-1 rounded-md ${provideStateStyles(product?.relatedItems?.inventoryAvailabilityStateKey)}`}>
                        {stateTranslation.value}
                    </span>
                </div>
            </div>
            <div class="col-start-2 col-end-4 my-3">
                <Attributes productAttributes={productAttributes} />
            </div>

            <div class="col-start-3 row-start-1 text-sm flex items-center justify-center aspect-square">
                {/* {product?.brandsBrandId &&
                    <Branding
                        {...product}
                        localePathPrefix={localePathPrefix}
                    />
                } */}
            </div>

        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="w-full flex items-center justify-between py-4">
                <label for="count">
                </label>
                <div class="flex gap-x-4 items-center">
                    <div class="when discount is exist font-bold flex items-center gap-x-0.5">
                        <span class="text-red-600 text-md">
                            {product.relatedItems?.price?.amount?.toLocaleString()}
                        </span>
                        <span class="text-xs text-black/60">
                            {product?.relatedItems?.price?.currenciesCurrencySuperUnitName}
                        </span>
                    </div>
                </div>
            </div>
            {
                product?.relatedItems?.inventoryAvailabilityStateKey == "InStock" ?
                    <AddToCartButton
                        addOrIncreaseHandler={addOrIncreaseHandler}
                        commonStatics={commonStatics}
                        deleteOrDecreaseHandler={deleteOrDecreaseHandler}
                        product={product}
                        productItem={productItem}
                    />
                    :
                    <span class="h-[54px] w-full" />
            }
        </div>
    </div>
})

export default ProductCard
