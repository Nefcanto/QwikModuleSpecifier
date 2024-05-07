import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getGlobalization } from "Globalization"
import { getPage } from "Contents"
import { getRecentProducts } from "Products"
import { useSeo } from "Seo"
import {
    FirstSection,
    Ranges,
    SecondSection,
    ThirdSection,
    TopDeals,
} from "Index"

const getData = routeLoader$(async props => {

    const [
        globalization,
        page,
        Products,
    ] = await useAsync([
        getGlobalization(props),
        getPage("home", props),
        getRecentProducts(10, props)
    ])

    return {
        ...globalization,
        ...page,
        ...Products,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        firstAd,
        latestProducts,
        localePathPrefix,
        ranges,
        secondAd,
        thirdAd,
        topDeals,
    } = data

    return <>
        <FirstSection {...firstAd} />
        <SecondSection {...secondAd} />
        <ThirdSection {...thirdAd} />
        <TopDeals
            {...topDeals}
            products={latestProducts}
            localePathPrefix={localePathPrefix}
        />
        <Ranges {...ranges} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
