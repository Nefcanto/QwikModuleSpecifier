import { getFromCacheOrApi } from "Base"

const getForm = async (key, props) => {

    const { query } = props
    const locale = query?.get("locale")
    const form = await getFromCacheOrApi(`/form/get?key=${key}&locale=${locale}&withoutSeo=true`)
    return form
}

export default getForm
