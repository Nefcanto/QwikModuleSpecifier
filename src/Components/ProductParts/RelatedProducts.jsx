import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
} from "Base"
import { RelatedProductCard } from "Shared"
import {
    ArrowLeftFill,
    ArrowRightFill,
} from "Svg"

const RelatedProducts = ({
    commonStatics,
    localePathPrefix,
    relatedProducts,
}) => {

    return <>
        <div class="flex-1 relative">
            <h2 class="text-xl text-custom-color14 py-3 font-bold border-b border-custom-color3">
                {commonStatics?.relatedProduct}
            </h2>
            <div class="block w-full my-4">
                <Swiper
                    config={{
                        pagination: false,
                        navigation: {
                            nextEl: ".related-products-next",
                            prevEl: ".related-products-prev",
                            disabledClass: "related-products-disabled",
                        },
                        breakpoints: {
                            [xs]: {
                                slidesPerView: 1,
                                spaceBetween: 6,
                            },
                            [sm]: {
                                slidesPerView: 1.8,
                                spaceBetween: 6,
                            },
                            [md]: {
                                slidesPerView: 2.8,
                                spaceBetween: 6,
                            },
                            [lg]: {
                                slidesPerView: 4,
                                spaceBetween: 6,
                            },
                            [xl]: {
                                slidesPerView: 5,
                                spaceBetween: 6,
                            }
                        }
                    }}
                    name="related-products"
                >
                    {
                        relatedProducts?.map(item => <SwiperSlide key={item.id}>
                            <RelatedProductCard
                                localePathPrefix={localePathPrefix}
                                product={item}
                            />
                        </SwiperSlide>
                        )
                    }
                </Swiper>
                <div class="flex gap-x-4 justify-center absolute end-5 top-0 z-20 h-10">
                    <div
                        class="flex items-center justify-center related-products-prev [&.related-products-disabled]:opacity-40 cursor-pointer p-1 border w-fit rounded-md border-black hover:bg-gray-200"
                    >
                        <ArrowRightFill class="w-6" />
                    </div>
                    <div
                        class="flex items-center justify-center related-products-next [&.related-products-disabled]:opacity-40 cursor-pointer p-1 border w-fit rounded-md border-black hover:bg-gray-200"
                    >
                        <ArrowLeftFill class="w-6" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RelatedProducts
