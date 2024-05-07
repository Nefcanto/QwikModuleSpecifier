import {
    $,
    useSignal,
    useTask$,
} from "@builder.io/qwik"
import { isServer } from "@builder.io/qwik/build"
import {
    get,
    post,
} from "Base"

const useClickCount = ({
    entity,
    entityGuid,
    entityType,
}) => {
    const count = useSignal(0)

    useTask$(async () => {
        if (isServer) {
            if (entity?.relatedItems?.clickCount) {
                count.value = entity?.relatedItems?.clickCount
            } else {
                await get(`/clickCount/get?entityType=${entityType}&entityGuid=${entityGuid}`)
                    .then(data => {
                        console.log(data)
                        count.value = data
                    }, e => {
                        console.error(e)
                    })
            }
        }
    })

    const handleClick = $(async () => {
        await post(`/clickCount/increaseClickCount?entityType=${entityType}&entityGuid=${entityGuid}`)
            .then(data => {
                count.value = data
            }, e => {
                console.log(e)
            })
    })

    return {
        count,
        handleClick,
    }
}

export default useClickCount
