import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getSystemConfig } from "Configuration"
import { getGlobalization } from "Globalization"

const loadCompare = routeLoader$(async props => {

    const { url } = props

    const { search } = url

    let newUrl = `/compare/data?${search.replace("?", "")}`

    const searchParams = new URLSearchParams(search)
    const entityType = searchParams.get("entityType")
    const ids = searchParams.get("ids").split(",")

    const [
        layout,
        globalization,
        systemConfigs,
        comparisonData
    ] = await useAsync([
        getLayout("compare", props),
        getGlobalization(props),
        getSystemConfig(props),
        getFromCacheOrApi(newUrl),
    ])
    return {
        ...globalization,
        ...layout,
        ...systemConfigs,
        ...comparisonData,
    }
})

export default loadCompare
