import { useAuthSession } from "Accounts"

const useAccounts = () => {
    const session = useAuthSession()
    const isSignedIn =
        session &&
        session.value &&
        session.value.expires &&
        new Date(session.value.expires) > new Date()

    return {
        isSignedIn: isSignedIn === true ? true : false,
        user: session?.value?.user
    }
}

export default useAccounts
