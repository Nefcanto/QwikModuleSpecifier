import { component$ } from "@builder.io/qwik"
import {
    HierarchiesLayout,
    loadHierarchies,
} from "Taxonomy"
import { Layout as RunnableLayout } from "HierarchiesParts"

const BaseHierarchies = component$(() => {

    const data = loadHierarchies().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <HierarchiesLayout {...data} />
})

export default BaseHierarchies

export { loadHierarchies }

export { RunnableLayout }
