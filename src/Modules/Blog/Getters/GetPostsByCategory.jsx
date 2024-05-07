import { getFromCacheOrApi } from "Base"

const getPostsByCategory = async (categorySlug, props) => {
    const { url } = props
    const categories = await getFromCacheOrApi(`/blog/data?category=${categorySlug}&tenantDomain=${url?.hostname}`)
    return categories
}

export default getPostsByCategory
