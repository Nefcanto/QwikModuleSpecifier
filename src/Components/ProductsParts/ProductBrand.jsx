import { Image } from "Base"
import { ShopByBrand } from "Shared"

const ProductBrand = ({
    brands,
    class: internalClass,
    localePathPrefix,
    productsStatics,
}) => {

    return <div class={internalClass}>
        <a
            href={productsStatics.bannerLink}
            class="block"
        >
            <Image
                containerClass="w-full aspect-[4/1]"
                src={productsStatics.banner}
            />
        </a>
        <ShopByBrand
            brands={brands}
            localePathPrefix={localePathPrefix}
            statics={productsStatics}
        />
    </div>
}

export default ProductBrand
