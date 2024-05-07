import { component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { Image } from "Base"
import { useProductUrl } from "Products"
import { Gallery } from "ProductParts"
import { Breadcrumb } from "Shared"

const Layout = component$(({
    attributes,
    breadcrumb,
    localePathPrefix,
    product,
    productStatics,
    variants,
}) => {

    const { url } = useLocation()
    const variantSlug = url.pathname.split("/")[3]

    return <div class="max-w-6xl mx-auto bg-white">
        <Breadcrumb items={breadcrumb} />
        <div class="border shadow-xl rounded-md pb-8 mb-10 px-4 2xl:px-0">
            <div class="flex items-center justify-between max-w-2xl mx-auto px-2">
                <div class="max-w-[50%]">
                    <Gallery
                        simple
                        productStatics={productStatics}
                        product={product}
                        attributes={attributes}
                    />
                </div>
                <h1 class="text-xl text-custom-color14 font-bold">{product?.title}</h1>
            </div>

            {
                variants?.map((variant, index) => <div
                    class="flex flex-col border rounded-lg py-2 px-4 mb-2 w-full max-w-2xl gap-x-2 mx-auto items-center"
                    key={variant.id}
                >
                    <a
                        href={useProductUrl(product?.slug, localePathPrefix, variant?.slug)}
                        class="w-full flex items-center justify-between gap-1 border-b border-gray-100 py-1">
                        <Image
                            containerClass="w-16 aspect-square rounded-full overflow-hidden"
                            src={variant.relatedItems.imageUrl}
                        />
                        <span class="font-bold text-md">{variant.title}</span>
                        <p class="flex gap-0.5">
                            <span>{variant?.relatedItems?.price?.amount}</span>
                            <span class="text-xs self-center">{variant?.relatedItems?.price?.currenciesCurrencySuperUnitName}</span>
                        </p>
                    </a>

                    <div class="flex flex-wrap justify-between gap-1 py-2">

                        {
                            variant.relatedItems?.entityAttributes?.map(attribute => <div class="flex min-w-[40%] items-center gap-0.5">
                                <span class="text-xs">{attribute?.attributesAttributeTitle}:</span>
                                <span class="text-xs">{attribute?.value}</span>
                                <span class="text-xs">{attribute?.unitsUnitTitle}</span>
                            </div>)
                        }
                    </div>
                </div>
                )
            }

        </div>
    </div>
})

export default Layout
