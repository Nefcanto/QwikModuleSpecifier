import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadChildrenData = routeLoader$(async props => {

    const { params } = props

    const {
        entityType,
        parentSlug,
    } = params

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/hierarchy/get?entityType=${entityType}&slug=${parentSlug}`),
        getLayout("hierarchyChildren", props),
        getGlobalization(props)
    ])
    return {
        ...data,
        ...layout,
        ...globalization,
        entityType,

    }
})

export default loadChildrenData
