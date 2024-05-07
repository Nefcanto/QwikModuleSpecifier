import { useBrandUrl } from "Brands"
import { Image } from "Base"

const Branding = ({
    localePathPrefix,
    relatedItems,
    slug,
    localizedName,
}) => {

    return <a
        aria-label={localizedName}
        class="block mb-2 w-16 aspect-square border border-custom-color3 p-1 bg-white"
        href={useBrandUrl(slug, localePathPrefix)}
    >
        <Image
            alt={localizedName}
            containerClass="w-full max-h-full"
            src={relatedItems?.logoUrl}
        />
    </a>
}

export default Branding
