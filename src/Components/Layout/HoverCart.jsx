import { Image } from "Base"
import { useProductUrl } from "Products"
import { useCartUrl } from "Orders"

const HoverCart = ({
    headerItems,
    localePathPrefix,
    orderLines,
}) => {

    return <>
        {
            orderLines?.length > 0
            &&
            <div class="rounded-md shadow-[0px_2px_10px_2px_rgba(0,0,0,0.2)] top-20 opacity-0 invisible z-30 group-hover:visible group-hover:opacity-100 group-hover:top-10 transition-all duration-200 absolute h-max w-[300px] end-0 bg-white text-center hidden md:block border">
                <div class="max-h-[300px] overflow-y-auto flex flex-col gap-y-1 w-full py-2">
                    {
                        orderLines?.map(product => <div
                            key={product.id}
                            class="border-b p-2 flex items-center gap-x-1 rounded-md"
                        >
                            <Image
                                containerClass="w-10 aspect-square border border-2 p-0.5"
                                src={product.relatedItems?.entity?.relatedItems?.imageUrl}
                            />
                            <div class="font-bold">
                                {product.quantity}
                            </div>
                            <span>x</span>
                            <div class="w-[40%] text-start">
                                <a
                                    class="font-bold text-xs line-clamp-1"
                                    href={useProductUrl(product.relatedItems?.entity?.slug, localePathPrefix)}
                                >
                                    {product.relatedItems?.entity?.title}
                                </a>
                            </div>

                            <div class="ms-auto">{product.totalPrice?.toLocaleString()}</div>
                        </div>)}
                </div>
                <a
                    href={useCartUrl()}
                    class="flex w-fit m-1 rounded-md py-2 px-2 text-sm text-start text-custom-color14 "
                >
                    {headerItems?.cartTitle}
                </a>

            </div>
        }
    </>
}

export default HoverCart
