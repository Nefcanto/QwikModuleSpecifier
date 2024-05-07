import { get } from "Base"

const getCountries = async () => {
    const { countries } = await get(`/country/getall`)
    return countries
}

export default getCountries
