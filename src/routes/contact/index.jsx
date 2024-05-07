import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    Map,
    useAsync,
} from 'Base'
import { useSeo } from 'Seo'
import { getForm } from 'Forms'
import { getPage } from 'Contents'
import { Breadcrumb } from 'Shared'
import {
    Form,
    Info,
} from 'Contact'

const getData = routeLoader$(async props => {

    const [
        page,
        form,
    ] = await useAsync([
        getPage('contact', props),
        getForm('contact', props),
    ])

    return {
        ...page,
        ...form,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        breadcrumb,
        contactInfo,
        fields,
        form,
        page,
    } = data

    return <>
        <section class="max-w-6xl mx-auto px-4 2xl:px-0 pb-10">
            <Breadcrumb items={breadcrumb} />

            <h1 class="flex items-center w-full pb-2 border-b border-custom-color3 text-xl font-bold text-custom-color32">
                {page?.title}
            </h1>
            <Info
                {...contactInfo}
            />
            <Form
                fields={fields}
                form={form}
            />
        </section>
        <Map
            containerClass="w-full h-[300px] sm:h-[440px]"
            currentLocationMarker
            latitude={contactInfo?.mapLatitude}
            longitude={contactInfo?.mapLongitude}
            zoom={15}
        />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
