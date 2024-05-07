import { post } from "Base"

const useEntityVisitCounter = async (entityType, entityGuid) => {

    const countVisit = await post(`/visitCount/increaseVisitCount?entityType=${entityType}&entityGuid=${entityGuid}`)
    return countVisit
}

export default useEntityVisitCounter
