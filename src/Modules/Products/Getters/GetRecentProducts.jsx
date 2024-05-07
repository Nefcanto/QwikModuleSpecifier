import { getFromCacheOrApi } from "Base"

const getRecentProducts = async (count, props) => {
    const { query } = props
    const locale = query?.get("locale")
    const products = await getFromCacheOrApi(`/products/latestProducts?locale=${locale}&count=${count}`)
    return products
}

export default getRecentProducts
