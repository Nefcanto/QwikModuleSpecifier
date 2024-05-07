import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { getPage } from "Contents"
import { useSeo } from "Seo"
import { useAsync } from "Base"
import { Layout } from "Faq"
import { Breadcrumb } from "Shared"

const getData = routeLoader$(async props => {

    const [
        page,
    ] = await useAsync([
        getPage("faq", props),
    ])

    return {
        ...page,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        breadcrumb,
        faq,
    } = data

    return <div class="max-w-6xl mx-auto px-4 2xl:px-0 pb-10">
        <Breadcrumb items={breadcrumb} />
        <Layout {...faq} />
    </div>
})

export default Index

const head = ({
    params,
    resolveValue,
}) => {
    return useSeo(getData, resolveValue)
}

export { head }
