import { getFromCacheOrApi } from "Base"

const getBrands = async (props) => {
    const { query } = props
    const locale = query?.get("locale")

    const products = await getFromCacheOrApi(`/products/getBrands`)
    return products
}

export default getBrands
