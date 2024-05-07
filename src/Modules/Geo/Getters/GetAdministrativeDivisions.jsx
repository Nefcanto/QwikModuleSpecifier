import { get } from "Base"

const getAdministrativeDivisions = async (countryId) => {
    const { administrativeDivisions } = await get(`/country/GetAdministrativeDivisions?countryId=${countryId}`)
    return administrativeDivisions
}

export default getAdministrativeDivisions
