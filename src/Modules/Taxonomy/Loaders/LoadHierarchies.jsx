import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getGlobalization } from "Globalization"
import { getLayout } from "Contents"

const loadHierarchies = routeLoader$(async props => {
    const { params } = props
    const { entityType } = params

    const [
        data,
        globalization,
        layout
    ] = await useAsync([
        getFromCacheOrApi(`/hierarchy/tree?entityType=${entityType}`),
        getGlobalization(props),
        getLayout("hierarchies", props),
    ])

    return {
        categories: data,
        ...globalization,
        ...layout
    }
})

export default loadHierarchies
