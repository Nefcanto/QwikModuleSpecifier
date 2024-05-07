import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getRecentProducts } from "Products"

const loadHierarchyChildren = routeLoader$(async props => {

    console.log("loadHierarchyChildren Runnable ......")

    const [
        Products,
    ] = await useAsync([
        getRecentProducts(10, props)
    ])

    return {
        ...Products,
    }
})

export default loadHierarchyChildren
