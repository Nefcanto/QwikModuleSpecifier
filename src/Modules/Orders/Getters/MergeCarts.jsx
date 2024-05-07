import { post } from "Base"

const mergeCarts = async (session, localCart) => {

    const stringifiedCart = JSON.stringify(localCart)
    const result = await post("/order/mergeCarts", {
        userGuid: session.value?.user?.guid,
        localCart: stringifiedCart
    })
    return result?.cart
}

export default mergeCarts
