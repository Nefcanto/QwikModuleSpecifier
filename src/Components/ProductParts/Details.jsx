import {
    $,
    component$,
    useSignal,
    useTask$,
} from "@builder.io/qwik"
import { Rating } from "Social"
import { useBrandUrl } from "Brands"
import { useProductVariantsUrl } from "Products"
import { Breadcrumb } from "Shared"
import { provideStateStyles } from "Functions"
import {
    Branding,
    MoreDetails,
    VariantAttributes,
} from "ProductParts"

const Details = component$(({
    attributes,
    brand,
    localePathPrefix,
    product,
    productStatics,
    slug,
    states,
    handleTabClick,
    tabItems,
    variants,
    variantSlug,
}) => {

    const stateTranslation = useSignal("")
    const selectedVariants = variants?.find(variant => variant.slug === variantSlug)

    useTask$(() => {

        const statesArray = Object.entries(states)
        const [stateKey, stateValue] = statesArray?.find(([key, value]) => key?.toLowerCase() == product?.relatedItems?.inventoryAvailabilityStateKey?.toLowerCase()) || ["EmptyState", ""]
        stateTranslation.value = stateValue || ""

    })

    const scrollToTab = $(name => {
        const element = document.getElementById(name)
        handleTabClick(name)
        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    })

    const secondBreadcrumb = [
        {
            text: brand?.originalName,
            link: useBrandUrl({ brand, localePathPrefix })
        },
        {
            text: product.title,
            link: "/"
        },
    ]

    return <div class="pb-4 md:pb-0 col-span-3">
        {/* {brand &&
            <Branding
                {...brand}
                localePathPrefix={localePathPrefix}
            />
        } */}
        <div class="flex flex-col gap-1">
            {/* {
                brand?.slug &&
                <Breadcrumb
                    items={secondBreadcrumb}
                    itemsClass="break-all"
                    simple
                    small
                />
            } */}
            <div class="flex items-center gap-2 text-custom-color14">

                <h1 class="text-xl leading-8 font-bold">
                    {product?.title}
                </h1>
                {
                    selectedVariants?.title
                    &&
                    <span class="text-sm">
                        (
                        {selectedVariants?.title}
                        )
                    </span>}
            </div>
            <strong class="text-xs">{product.code}</strong>
        </div>
        <div class="flex flex-wrap items-start gap-y-2 gap-x-4 h-fit py-4">
            <Rating
                containerClass="px-2"
                readOnly
                starClass="w-4"
            // entityGuid={ }
            // entityType={ }
            // value={}
            />
            <div
                class="text-custom-color14 text-sm cursor-pointer"
                onClick$={() => scrollToTab(tabItems.writeReviewKey)}
            >
                {tabItems.writeReview}
            </div>
            <div
                class="text-custom-color14 text-sm cursor-pointer"
                onClick$={() => scrollToTab(tabItems?.askQuestionKey)}
            >
                {tabItems?.askQuestion}
            </div>
        </div>
        <span class={`inline-block text-sm p-2 m-1 rounded-md ${provideStateStyles("product?.relatedItems?.inventoryAvailabilityStateKey")}`} >
            {stateTranslation.value}
        </span>
        <div class="text-sm leading-[1.6]">
            {product?.summary}
        </div>
        <div class="flex flex-col sm:flex-row gap-4 items-start justify-between lg:justify-evenly lg:px-4 xl:px-0">
            <MoreDetails
                attributes={attributes}
                productStatics={productStatics}
            />
            <VariantAttributes
                attributes={attributes}
                product={product}
                productStatics={productStatics}
                variants={variants}
                variantSlug={variantSlug}
            />
        </div>
    </div>
})

export default Details
