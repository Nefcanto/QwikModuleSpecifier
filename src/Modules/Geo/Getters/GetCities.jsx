import { get } from "Base"

const getCities = async (administrativeDivisionId, countryId) => {
    const { cities } = await get(`/administrativeDivision/getCities?administrativeDivisionId=${administrativeDivisionId}&countryId=${countryId}`)
    return cities
}

export default getCities
