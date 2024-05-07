import { component$ } from "@builder.io/qwik"
import {
    BrandLayout,
    loadBrand,
} from "Brands"
import { useSeo } from "Seo"
import { Layout as RunnableLayout } from "BrandParts"

export default component$(() => {

    const data = loadBrand().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <BrandLayout {...data} />
})

export { loadBrand }

const head = ({ resolveValue }) => {
    return useSeo(loadBrand, resolveValue)
}

export { head }
