import { Image } from "Base"
import { useBrandUrl } from "Brands"

const Brand = ({
    brand,
    localePathPrefix,
}) => {

    return <div class="flex flex-col gap-2 rounded-lg bg-white text-center border border-custom-color32 shadow-md overflow-hidden">
        <a
            href={useBrandUrl({ brand, localePathPrefix })}
            class="block w-full flex items-center justify-center hover:translate-y-1 hover:duration-500 duration-300 border overflow-hidden"
            aria-label={brand?.originalName}
        >
            <Image
                containerClass="w-24 aspect-square rounded-t-lg overflow-hidden"
                imageClass="object-contain w-full h-full"
                src={brand?.relatedItems?.logoUrl}
                alt={brand?.originalName}
            />
        </a>
        <a
            class="text-sm font-bold text-black hover:text-custom-color11"
            href={useBrandUrl({ brand, localePathPrefix })}
        >
            {brand?.originalName}
        </a>
    </div>
}

export default Brand
