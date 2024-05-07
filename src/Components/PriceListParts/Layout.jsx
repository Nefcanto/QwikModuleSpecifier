import {
    $,
    component$,
} from "@builder.io/qwik"
import { useProductUrl } from "Products"
import {
    Breadcrumb,
    RichText,
} from "Shared"

const Layout = component$(({
    breadcrumb,
    commonStatics,
    localePathPrefix,
    priceList,
    priceListStatics,
    seo,
    states,
}) => {

    const priceListWithVariants = []
    priceList.forEach(element => {
        priceListWithVariants.push(element)
        if (element?.relatedItems?.variants) {
            element.relatedItems.variants.forEach(variant => {

                priceListWithVariants.push({
                    ...variant,
                    title: element.title,
                    variantTitle: variant.title,
                })
            })
        }
    })

    return <div class="max-w-6xl mx-auto px-4 2xl:px-0 min-h-[50vh]">
        <Breadcrumb items={breadcrumb} />
        {
            seo.relatedItems.content &&
            <RichText
                class="my-10"
                content={seo.relatedItems.content}
            />
        }
        <div class="border rounded-md overflow-hidden mb-10">
            <table class="w-full mx-auto">
                <thead>
                    <tr class="bg-blue-200 [&>th]:text-start [&>th]:px-3 [&>th]:py-2">
                        <th>{priceListStatics?.row}</th>
                        <th>{priceListStatics?.title}</th>
                        <th>{priceListStatics?.variantTitle}</th>
                        <th>{priceListStatics?.price}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        priceListWithVariants.map(
                            (
                                item,
                                index
                            ) => <tr
                                class="odd:bg-slate-100 hover:bg-slate-200 duration-300 px-4 [&>td]:text-start [&>td]:px-3 [&>td]:py-2"
                                key={`${item.id} ${item?.variantTitle}`}
                            >
                                    <td>{index + 1}</td>
                                    <td>
                                        <a href={useProductUrl(item.slug, localePathPrefix)}>
                                            {item.title}
                                        </a>
                                    </td>
                                    <td>{item.variantTitle && item.variantTitle}</td>
                                    <td>
                                        <span>
                                            {item.relatedItems?.price?.amount?.toLocaleString()}
                                        </span>
                                        <span class="px-1">{item?.relatedItems?.price?.currenciesCurrencySuperUnitName}</span>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
        </div>

    </div>
})

export default Layout
