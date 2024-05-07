import { useBrandUrl } from "Brands"

const ShopByBrand = ({
    brands,
    localePathPrefix,
    statics,
}) => {

    return <div class="bg-custom-color14 bg-gradient-to-b from-custom-color13 to-custom-color14 border-b border-b-8 border-b-custom-color11 p-4">
        <span class="inline-block pb-4 text-md font-bold text-white">
            {statics?.shopByBrand}
        </span>
        <div class="flex flex-wrap gap-x-1 md:gap-x-4 gap-y-1 md:gap-y-4 lg:gap-y-6">
            {
                brands?.slice(0, 10).map(brand => <a
                    class="border rounded-full px-2 md:px-4 py-1 min-w-[100px] text-center inline-block border-white text-white hover:translate-y-1 duration-300"
                    href={useBrandUrl({ brand, localePathPrefix })}
                    key={brand.id}
                >
                    {brand?.localizedName || brand?.originalName}

                </a>
                )
            }
        </div>
    </div>
}

export default ShopByBrand
