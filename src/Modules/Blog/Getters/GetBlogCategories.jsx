import { getFromCacheOrApi } from "Base"

const getBlogCategories = async props => {
    const {
        query,
        url
    } = props
    const locale = query?.get("locale")
    const categories = await getFromCacheOrApi(`/hierarchycommon/tree/?entityType=blogpost&locale=${locale}&tenantDomain=${url?.hostname}`)
    return categories
}

export default getBlogCategories
