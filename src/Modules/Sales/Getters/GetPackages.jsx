import { post } from "Base"

const getPackages = (async (props) => {
    const { sharedMap } = props
    const session = sharedMap?.get("session")
    if (session?.user && session?.user?.guid) {
        try {
            const { packages } = await post("sales/getAllPersonPackages", {
                "userGuid": session.user.guid
            })
            return packages
        } catch (error) {
            console.log(error)
        }
    }
})

export default getPackages
