import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    Image,
    Swiper,
    SwiperSlide,
    zero,
} from "Base"
import { useImages } from "Attributes"
import {
    Brand,
    ImageModalGalleries,
} from "ProductParts"
import {
    MagnifierWithPlus,
    NavigateNext,
    NavigatePrev,
    VideoIcon,
} from "Svg"

const Gallery = component$(({
    attributes,
    product,
    productStatics,
    simple,
    variants,
    variantSlug,
}) => {

    const isOpenModal = useSignal(false)

    return <div class="col-span-2 lg:col-span-2">
        {
            !simple &&
            <ImageModalGalleries
                product={product}
                isOpen={isOpenModal.value}
                click={$(() => { isOpenModal.value = !isOpenModal.value })}
            />}
        <div class="space-y-0 relative md:pb-5">
            {
                !simple &&
                <div
                    class="flex items-center justify-center bg-black/20 rounded-full overflow-hidden p-1 w-10 aspect-square absolute top-0 start-5 z-30 fill-slate-100 cursor-pointer"
                    onClick$={() => isOpenModal.value = true}
                >
                    <MagnifierWithPlus
                        class="w-full "
                    />
                </div>}

            {/* {
                !simple &&
                <Brand class="bg-red-300"></Brand>
            } */}

            <div class="max-w-xs mx-auto relative">
                <Swiper
                    name="product-swiper"
                    config={{
                        navigation: {
                            nextEl: ".product-swiper-next",
                            prevEl: ".product-swiper-prev",
                        },
                        breakpoints: {
                            [zero]: {
                                spaceBetween: 10,
                                slidesPerView: 1,
                            }
                        }
                    }}
                >
                    {
                        useImages(product, variants, variantSlug).map((img, index) => <SwiperSlide
                            key={img.id}
                        >
                            <Image
                                containerClass={`w-full aspect-square ${!simple && "cursor-pointer"}`}
                                src={img?.relatedItems?.url}
                                alt={product.title}
                                priority={index < 1}
                            />
                        </SwiperSlide>)}
                </Swiper>
                <div class="product-swiper-next absolute z-10 start-0 top-[45%]">
                    <NavigateNext class="w-10 fill-gray-400 cursor-pointer" />
                </div>
                <div class="product-swiper-prev absolute z-10 end-0 top-[45%]">
                    <NavigatePrev class="w-10 fill-gray-400 cursor-pointer" />
                </div>
            </div>
            {
                !simple &&
                <button class="select-none border border-green-800 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)] mx-auto w-28 rounded-md text-white fill-white flex items-center justify-between hover:border-green-600 hover:via-0% hover:from-0% transition-all px-4 py-2">
                    <VideoIcon class="w-6" />
                    <span class="font-bold">{productStatics?.video}</span>
                </button>}
        </div>
    </div>
})

export default Gallery
