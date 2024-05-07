import {
    getSession,
    getWithAuthentication,
} from "Base"

const getPayment = async props => {

    const { query } = props

    const locale = query?.get("locale")
    const session = getSession(props)
    const data = await getWithAuthentication(`/payment/data?locale=${locale}`, session)

    return data
}

export default getPayment
