import {
    $,
    useSignal
} from "@builder.io/qwik"
import {
    post,
    upload,
    useMessage,
} from "Base"

const useForm = ({
    fields,
    form,
}) => {

    const model = useSignal({})
    const progress = useSignal(false)
    const fileFields = useSignal({})
    const hasFile = useSignal(false)

    const {
        isMessageShown,
        isSuccess,
    } = useMessage()

    fields?.map((field, index) => {
        if (field?.type == "file") {
            hasFile.value = true
            fileFields.value[field.key] = ""
        }
        else {
            model.value[field.key] = ""
        }
    })

    const resetFields = $(() => {
        model.value = {}
    })

    const handleSubmit = $(async () => {
        progress.value = true
        let url = form.ctaLink
        let data = hasFile.value ? new FormData() : {}
        if (!url) {
            url = `/form/save?key=${form.key}`
        }
        Object.keys(fileFields.value).map(key => {
            data.append(key, window[key][0])
        })

        Object.keys(model.value).map(key => {
            if (hasFile.value) {
                data.append(key, model.value[key])
            } else {
                data[key] = model.value[key]
            }
        })
        const method = hasFile.value ? upload : post
        await method(url, data).then(data => {
            isMessageShown.value = true
            isSuccess.value = true
            resetFields()
            progress.value = false
        }, e => {
            isMessageShown.value = true
            isSuccess.value = false
            progress.value = false
        })
    })

    return {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    }
}

export default useForm
