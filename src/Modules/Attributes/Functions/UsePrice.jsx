const usePrice = (entity, variants, variantSlug) => {

    let price

    if (variantSlug) {
        price = variants?.find(item => item.slug === variantSlug)?.relatedItems.price
    } else {
        price = entity?.relatedItems.price
    }

    return price
}

export default usePrice
