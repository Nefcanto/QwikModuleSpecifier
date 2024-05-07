import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
} from "Base"
import { RangeCard } from "Index"

const Ranges = ({
    items,
    title,
}) => {

    return <section class="max-w-6xl mx-auto mt-5 lg:mt-20 px-4 2xl:px-0">

        <div class="w-full pb-4 border-b border-custom-color3 flex items-center text-xl font-bold text-custom-color14">
            {title}
        </div>

        <div class="py-10">
            <Swiper
                name="ranges"
                containerClass="px-1"
                config={{
                    pagination: false,
                    navigation: {
                        nextEl: ".ranges-next",
                        prevEl: ".ranges-prev",
                    },
                    breakpoints: {
                        [xs]: {
                            slidesPerView: 1.5,
                            spaceBetween: 6,
                        },
                        [sm]: {
                            slidesPerView: 2.2,
                            spaceBetween: 6,
                        },
                        [md]: {
                            slidesPerView: 3.2,
                            spaceBetween: 30,
                        },
                        [lg]: {
                            slidesPerView: 4,
                            spaceBetween: 80,
                        },
                    }
                }}
            >
                {
                    items?.map(item => <SwiperSlide
                        key={item.id}
                    >
                        <RangeCard {...item} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    </section>
}

export default Ranges
