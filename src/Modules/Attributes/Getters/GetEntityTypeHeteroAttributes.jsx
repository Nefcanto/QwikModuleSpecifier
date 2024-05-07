import { getFromCacheOrApi } from "Base"

const getEntityTypeHeteroAttributes = async ({
    module,
    entityType,
    ...rest
}) => {
    const { query } = rest
    const locale = query?.get("locale")
    const { attributes } = await getFromCacheOrApi(`/entityTypeHeteroAttribute/list?module=${module}&entityType=${entityType}&locale=${locale}`)
    return attributes
}

export default getEntityTypeHeteroAttributes
