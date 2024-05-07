const useProductUrl = (slug, localePathPrefix, variantSlug) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    if (variantSlug) {
        return `${localePathPrefix}/product/${slug}/${variantSlug}`
    }
    return `${localePathPrefix}/product/${slug}`
}

export default useProductUrl
