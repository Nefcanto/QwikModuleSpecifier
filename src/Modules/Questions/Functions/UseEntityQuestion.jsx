import {
    $,
    useSignal,
} from "@builder.io/qwik"
import {
    post,
    useMessage
} from "Base"

const useEntityQuestion = (entityType, entityGuid) => {

    const model = useSignal({
        title: "",
        content: "",
        entityGuid: entityGuid,
        entityType: entityType,
    })

    const progress = useSignal(false)

    const {
        isMessageShown,
        isSuccess,
    } = useMessage()

    const resetFields = $(() => {
        model.value = {
            title: "",
            content: "",
            entityGuid: entityGuid,
            entityType: entityType,
        }
    })

    const handleSubmit = $(async () => {
        progress.value = true
        await post("/entityQuestion/add", model.value).then(data => {
            progress.value = false
            isSuccess.value = isMessageShown.value = true
            resetFields()
        }, e => {
            progress.value = isSuccess.value = false
            isMessageShown.value = true
        })
    })

    return {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
        resetFields,
    }
}

export default useEntityQuestion
