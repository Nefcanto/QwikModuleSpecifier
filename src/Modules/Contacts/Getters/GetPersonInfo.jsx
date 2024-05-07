import { post } from "Base"

const getPersonInfo = async props => {
    const { sharedMap } = props
    const session = sharedMap.get("session")
    if (session?.value?.user && session?.value?.user?.guid) {
        try {
            const personInfo = await post("/person/get", {
                "userGuid": session.value.user.guid
            })
            return personInfo
        } catch (error) {
            console.log(error)
        }
    } else if (session?.user && session?.user?.guid) {
        try {
            const personInfo = await post("/person/get", {
                "userGuid": session.user.guid
            })
            return personInfo
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("NOT SIGNEd IN OR NO USER GUID!")
    }
}

export default getPersonInfo
