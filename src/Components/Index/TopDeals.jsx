import {
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
} from "Base"
import { DealCard } from "Shared"

const TopDeals = ({
    localePathPrefix,
    products,
    title,
    viewAllLink,
    viewAllText,
}) => {

    return <section class="bg-custom-color1 py-10 mt-5 lg:mt-20 bg-gradient-to-b from-custom-color13 to-custom-color14">
        <div class="max-w-6xl mx-auto px-4 2xl:px-0">
            <div class="w-full pb-4 border-b border-white flex justify-between items-center text-white">
                <strong class="text-xl">{title}</strong>
                <a
                    class="text-sm underline"
                    href={viewAllLink}>{viewAllText}</a>
            </div>
            <div class="py-5">
                <Swiper
                    name="best-seller"
                    containerClass="px-1"
                    config={{
                        pagination: false,
                        navigation: {
                            nextEl: ".best-seller-next",
                            prevEl: ".best-seller-prev",
                        },
                        breakpoints: {
                            [xs]: {
                                slidesPerView: 1.5,
                                spaceBetween: 6,
                            },
                            [sm]: {
                                slidesPerView: 2,
                                spaceBetween: 6,
                            },
                            [md]: {
                                slidesPerView: 4.5,
                                spaceBetween: 6,
                            },
                            [xl]: {
                                slidesPerView: 6,
                                spaceBetween: 6,
                            },
                        }
                    }}
                >
                    {
                        products?.map(product => <SwiperSlide key={product.id}>
                            <DealCard
                                class="border-white"
                                localePathPrefix={localePathPrefix}
                                product={product}
                            />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    </section>
}

export default TopDeals
