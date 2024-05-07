import { Image } from "Base"
import { useProductUrl } from "Products"

const DealCard = ({
    class: internalClass,
    index,
    localePathPrefix,
    product,
}) => {

    return <a
        class={`max-w-[400px] bg-white border flex flex-col group md:max-w-sm w-full ${internalClass}`}
        aria-label={product.title}
        href={useProductUrl(product.slug, localePathPrefix)}
    >
        <Image
            containerClass="w-full aspect-square overflow-hidden md:max-w-full mx-auto"
            imageClass="hover:scale-[105%] duration-300 w-full h-full object-cover"
            src={product?.relatedItems?.imageUrl}
            alt={product?.title}
            priority={index < 4}
        />
        <div class="p-4 bg-white text-custom-color14 group-hover:underline transition-all border-t border-slate-100 flex items-center justify-center">
            <p class="text-center text-sm line-clamp-2 min-h-[37px] font-bold">{product?.title}</p>
        </div>
    </a>
}

export default DealCard
