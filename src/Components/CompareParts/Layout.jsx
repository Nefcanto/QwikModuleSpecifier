import { component$ } from "@builder.io/qwik"
import { CompareTable } from "CompareParts"
import {
    Breadcrumb,
} from "Shared"

const Layout = component$(({
    breadcrumb,
    compareStatics,
    entitiesToBeCompared,
}) => {

    return <section class="max-w-6xl mx-auto px-4 2xl:px-0 min-h-[50vh]">
        <Breadcrumb items={breadcrumb} />
        <h1 class="font-bold text-4xl text-center my-10 mb-5">{compareStatics?.title}</h1>
        <CompareTable
            entitiesToBeCompared={entitiesToBeCompared}
            compareStatics={compareStatics}
        />
    </section>
})

export default Layout
