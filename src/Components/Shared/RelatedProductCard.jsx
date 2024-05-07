import { Image } from "Base"
import { useProductUrl } from "Products"
import {
    DiscountPercent,
    Rating,
} from "Shared"
import { Brand } from "ProductParts"

const RelatedProductCard = ({
    localePathPrefix,
    product,
}) => {

    return <div class="border border-custom-color3 px-2 py-6 relative w-full max-w-[300px] bg-white">
        {/* <Brand class="absolute top-0 start-2">brand</Brand> */}
        <a href={useProductUrl(
            product.slug,
            localePathPrefix
        )}
        >
            <Image
                alt={product.id}
                containerClass="w-full aspect-square"
                src={product.relatedItems?.imageUrl}
            />
        </a>
        <a
            class="text-center text-sm line-clamp-2 min-h-[40px] font-bold mt-3"
            href={useProductUrl(product.slug, localePathPrefix)}
        >
            {product.title}
        </a>
        {/* <span class="text-xs">product id</span> */}
        <div class="my-1">
            {
                product.relatedItems?.ratingAverage &&
                <Rating length={product.relatedItems?.ratingAverage} />
            }
        </div>
        <div class="flex flex-col gap-y-2 mt-2 items-end">
            {/* <div class="invisible when discount not exist">
                <DiscountPercent
                    percent="25"
                />
            </div> */}
            <div class="text-custom-color32 text-md font-bold flex items-center pe-1">
                {product.relatedItems?.price?.amount?.toLocaleString()}
            </div>
            {/* <del class="text-xs font-thin ">5445</del> */}
        </div>
    </div>
}

export default RelatedProductCard
