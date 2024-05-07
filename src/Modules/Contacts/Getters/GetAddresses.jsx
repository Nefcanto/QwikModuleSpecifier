import { getWithAuthentication } from "Base"

const getAddresses = async props => {
    const { sharedMap } = props
    const session = sharedMap.get("session")
    const result = await getWithAuthentication("/address/all", session)

    return result

}

export default getAddresses
