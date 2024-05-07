import { getFromCacheOrApi } from "Base"

const getMenu = async props => {
    const { query } = props
    const locale = query?.get("locale")
    const data = await getFromCacheOrApi(`/menu/data?locale=${locale}`)
    console.log("getMenu => getFromCacheOrApi => data: ", data)
    return data
}

export default getMenu
