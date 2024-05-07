import { getFromCacheOrApi } from "Base"

const getAllCityDivisions = async ({
    query,
    url,
}) => {
    const locale = query?.get("locale")

    return await getFromCacheOrApi(`/cityDivision/all?locale=${locale}`)
}

export default getAllCityDivisions
