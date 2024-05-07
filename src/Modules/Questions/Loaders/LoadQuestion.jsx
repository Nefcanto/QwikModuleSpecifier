import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"
import { getForm } from "Forms"

const loadQuestion = routeLoader$(async props => {
    const {
        params,
        status,
        query
    } = props
    const { slug } = params || {}
    const locale = query?.get("locale")
    const [
        data,
        layout,
        globalization,
        form,
    ] = await useAsync([
        getFromCacheOrApi(`/question/get?slug=${slug}&locale=${locale}`),
        getLayout("question", props),
        getGlobalization(props),
        getForm(`comment`, props)
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    const { content, ...contentLessForm } = form
    return {
        ...data,
        ...layout,
        ...globalization,
        ...contentLessForm,
    }
})

export default loadQuestion
