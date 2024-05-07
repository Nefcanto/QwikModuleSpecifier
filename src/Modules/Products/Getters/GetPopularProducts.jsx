import { getFromCacheOrApi } from "Base"

const getPopularProducts = async (count, props) => {
    const { query } = props
    const locale = query?.get("locale")
    const products = await getFromCacheOrApi(`/products/popularProducts?locale=${locale}&count=${count}`)
    return products
}

export default getPopularProducts
