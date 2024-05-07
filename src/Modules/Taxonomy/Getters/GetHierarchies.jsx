import { getFromCacheOrApi } from "Base"

const getHierarchies = async (entityType, props) => {
    const { query } = props
    const locale = query?.get("locale")
    const hierarchies = await getFromCacheOrApi(`/hierarchyCommon/tree?entityType=${entityType}&locale=${locale}`)
    return hierarchies
}

export default getHierarchies
