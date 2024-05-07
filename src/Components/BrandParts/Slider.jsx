import { component$ } from "@builder.io/qwik"
import {
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    xxl,
} from "Base"
import { DealCard } from "Shared"

const Slider = component$(({
    category,
    localePathPrefix,
    products,
}) => {

    return <>
        {
            products?.length > 0 ?
                <div class="w-full">
                    <h2 class="text-xl font-bold mb-6">{category.title}</h2>
                    <Swiper
                        name={`brandHierarchyProductsSlider${category.id}`}
                        containerClass="pb-10"
                        paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
                        config={{
                            breakpoints: {
                                [xs]: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 6,
                                },
                                [sm]: {
                                    slidesPerView: 2.0,
                                    spaceBetween: 6,
                                },
                                [md]: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 6,
                                },
                                [xl]: {
                                    slidesPerView: 4,
                                    spaceBetween: 6,
                                },
                            }
                        }}
                    >
                        {
                            products?.map((product, index) => <SwiperSlide
                                key={product.id}
                            >
                                <DealCard
                                    class="border-custom-color3"
                                    index={index}
                                    localePathPrefix={localePathPrefix}
                                    product={product}
                                />
                            </SwiperSlide>
                            )}
                    </Swiper>
                </div>
                :
                null
        }
    </>
})

export default Slider
