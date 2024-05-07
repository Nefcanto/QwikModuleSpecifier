import { Image } from "Base"
import { useProductsUrl } from "Products"
import {
    Breadcrumb,
    RichText,
} from "Shared"
import { Slider } from "BrandParts"

const Layout = ({
    brand,
    breadcrumb,
    categories,
    content,
    localePathPrefix,
}) => {

    return <div class="max-w-6xl mx-auto px-4 2xl:px-0 min-h-[50vh]">
        <Breadcrumb items={breadcrumb} />
        <div class="bg-white border border-custom-color3 p-3 md:p-8">

            <div class="flex items-center gap-4 mb-4">
                <Image
                    containerClass="w-20 sm:w-32 md:w-40 bg-white p-2 border border-custom-color3"
                    imageClass="w-full h-full object-contain"
                    src={brand?.relatedItems?.logoUrl}
                />
                <h1 class="font-bold text-xl md:text-2xl">{brand?.originalName}</h1>
            </div>

            <RichText content={content} />

            <div class="w-full flex flex-wrap gap-4 mt-6 border-b border-custom-color3 pb-6">
                {
                    categories?.map(item => <div
                        class="flex items-center self-stretch border border-dotted rounded-full border-custom-color1 px-2 py-1.5 hover:translate-y-[2px] duration-300 hover:bg-slate-100"
                        key={item.category?.id}
                    >
                        <a
                            class="text-custom-color1"
                            href={
                                useProductsUrl({
                                    brand: brand?.slug,
                                    category: item?.category?.slug,
                                    localePathPrefix: localePathPrefix,
                                })
                            }
                        >
                            {item.category?.title}
                        </a>
                    </div>)
                }
            </div>
            <div class="w-full mt-6">
                {
                    categories?.map(item => <Slider
                        category={item?.category}
                        key={item.category.id}
                        localePathPrefix={localePathPrefix}
                        products={item?.products}
                    />)
                }
            </div>
        </div>
    </div>
}

export default Layout
