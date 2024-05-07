import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadBrand = routeLoader$(async props => {

    const {
        params,
        query
    } = props
    const { slug } = params || {}
    const locale = query?.get("locale")

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/brand/get?slug=${slug}&locale=${locale}`),
        getLayout("brand", props),
        getGlobalization(props)
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadBrand
