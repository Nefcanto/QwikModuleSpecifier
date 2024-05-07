import {
    $,
    component$,
} from "@builder.io/qwik"

const VariantAttributes = component$(({
    attributes,
    hasVariants,
    product,
    productStatics,
    variants,
    variantSlug,
}) => {

    const getVariantProductSlug = $(attribute => {
        const filterVariant = variants.find(
            variant => variant.relatedItems.entityAttributes.some(
                entityAttribute => entityAttribute.guid === attribute.guid))
        window.location.href = `/product/${product.slug}/${filterVariant.slug}`
    })

    return <div class="flex flex-col items-center justify-center gap-4 shrink-0">
        {
            hasVariants && <a
                class="text-custom-color14 text-sm"
                href={`/product/${product.slug}/variants`}
            >
                {productStatics?.viewAllVariants}
            </a>
        }
        {
            attributes?.variationCreators?.map(item => <div
                class="flex flex-col gap-2"
                key={item.id}
            >
                <p>{item.title}</p>
                <div class="py-4 flex grid grid-cols-2 gap-2">
                    {
                        item?.relatedItems.values.map(attribute => <div
                            class={`p-1 border border-black cursor-pointer rounded-md overflow-hidden w-20 aspect-square flex items-center justify-center text-center
                            ${variants.find(v => v.slug === variantSlug)?.relatedItems?.entityAttributes?.some(variant => variant?.id === attribute.id) ? "[&>*]:opacity-100 border-solid border-black"
                                    :
                                    "[&>*]:opacity-50 border-black/30 border-dashed"}`}
                            key={attribute.id}
                            onClick$={() => getVariantProductSlug(attribute)}

                        >
                            <span class="block">{attribute.value}</span>
                        </div>
                        )}
                </div>
            </div>
            )}
    </div>
})

export default VariantAttributes
