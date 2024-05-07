import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    zero,
} from "Base"
import { PostCard } from "Shared"

const Related = ({
    localePathPrefix,
    posts,
    title,
}) => {
    return <>
        <p class="text-lg md:text-xl font-bold border-b pb-4 mb-5">
            {title}
        </p>
        <Swiper
            name="LatestPostsSlider"
            containerClass="pb-10"
            paginationClass="pt-0 bullet:w-3 bullet:h-3 active-bullet:bg-custom-color1"
            config={{
                autoplay: false,
                speed: 800,
                breakpoints: {
                    [zero]: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    [xs]: {
                        slidesPerView: 1.6,
                        spaceBetween: 10,
                    },
                    [sm]: {
                        slidesPerView: 2.2,
                        spaceBetween: 6,
                    },
                    [md]: {
                        slidesPerView: 2.4,
                        spaceBetween: 6,
                    },
                    [lg]: {
                        slidesPerView: 2.8,
                        spaceBetween: 6,
                    },
                    [xl]: {
                        slidesPerView: 3,
                        spaceBetween: 6,
                    }
                }
            }}
        >
            {
                posts?.map(item => <SwiperSlide key={item.id}>
                    <PostCard
                        class="border border-custom-color3 p-1.5"
                        item={item}
                        localePathPrefix={localePathPrefix}
                    />
                </SwiperSlide>)}

        </Swiper>
    </>
}

export default Related
