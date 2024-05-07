import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    ChildrenLayout,
    loadChildrenData,
} from "Taxonomy"
import { Layout as RunnableLayout } from "HierarchyChildrenParts"
import { loadHierarchyChildren as runnableLoader } from "Loaders"

const BaseChildren = component$(() => {

    const data = loadChildrenData().value
    const extraData = runnableLoader().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} {...extraData} />
        :
        <ChildrenLayout {...data} {...extraData} />
})

export default BaseChildren

export { loadChildrenData }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadChildrenData, resolveValue)
}

export { head }

