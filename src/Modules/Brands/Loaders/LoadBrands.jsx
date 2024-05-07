import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadBrands = routeLoader$(async props => {

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/brands/data`),
        getLayout("brands", props),
        getGlobalization(props)
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadBrands
