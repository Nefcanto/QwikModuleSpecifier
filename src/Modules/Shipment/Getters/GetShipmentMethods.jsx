import { getFromCacheOrApi } from "Base"

const getShipmentMethods = async props => {

    const { query } = props
    const locale = query?.get("locale")

    const shipmentMethods = await getFromCacheOrApi(`/shipmentMethod/all?&locale=${locale}`)
    return shipmentMethods
}

export default getShipmentMethods
