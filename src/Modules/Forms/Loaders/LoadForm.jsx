import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getGlobalization } from "Globalization"

const loadForm = routeLoader$(async (props) => {
    const {
        params,
        query,
        status,
    } = props
    const { slug } = params || {}
    const locale = query?.get("locale")

    const [
        data,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/form/get?slug=${slug}&locale=${locale}`),
        getGlobalization(props)
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    return {
        ...data,
        ...globalization
    }
})

export default loadForm
