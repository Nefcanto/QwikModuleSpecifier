import { getFromCacheOrApi } from "Base"

const getAllSelectedCityDivisions = async () => {

    return await getFromCacheOrApi(`/selectedCityDivision/all`)
}

export default getAllSelectedCityDivisions
