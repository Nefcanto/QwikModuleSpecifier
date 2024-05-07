import {
    component$,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik"
import Swiper from "swiper"
import {
    Navigation,
    Thumbs,
} from "swiper/modules"
import swiperStyles from "swiper/css?inline"
import paginationStyle from "swiper/css/pagination?inline"
import navigationStyle from "swiper/css/navigation?inline"
import {
    Image,
    lg,
    md,
    sm,
    zero,
} from "Base"
import { Backdrop } from "Shared"
import {
    ArrowLeftFill,
    ArrowRightFill
} from "Svg"

const ImageModalGalleries = component$(({
    click,
    isOpen,
    product
}) => {

    useStyles$(paginationStyle)
    useStyles$(navigationStyle)
    useStyles$(swiperStyles)

    useVisibleTask$(() => {
        const modalSwiper = new Swiper(".swiper-product-modal", {
            modules: [Thumbs],
            spaceBetween: 20,
            slidesPerView: 1,
            watchSlidesProgress: true,
        })
        const modalSwiperThumb = new Swiper(".thumbs-swiper-product-modal", {
            modules: [Thumbs, Navigation],
            spaceBetween: 10,
            slidesPerView: 2.5,
            slideToClickedSlide: true,
            navigation: {
                nextEl: ".thumb-swiper-next",
                prevEl: ".thumb-swiper-prev",
            },
            thumbs: {
                swiper: modalSwiper,
            },
            breakpoints: {
                [zero]: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                },
                [sm]: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                [md]: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                [lg]: {
                    slidesPerView: 8,
                    spaceBetween: 10
                }
            },
        })
    }, {
        strategy: "document-ready"
    })

    return <>
        {
            isOpen
            &&
            <Backdrop click={click}
            />
        }
        <div class={`max-w-[calc(100vw-20px)] w-[800px] absolute z-40 top-2 start-1/2 translate-x-1/2 text-white order-5 ${isOpen ? "block visible" : "hidden invisible"}`}>
            <span
                class="flex gap-x-2 fixed top-0 start-5 cursor-pointer z-50 font-bold"
                onClick$={click}
            >
                <span>x</span>
                <span>
                    close
                </span>
            </span>
            <div class="bg-white mt-10 rounded-sm">
                <div class="swiper swiper-product-modal">
                    <div class="swiper-wrapper">
                        {product?.relatedItems?.images?.map((img, index) => <div
                            key={img.id}
                            class="swiper-slide">
                            <Image
                                alt={product.title}
                                containerClass="w-full h-full max-w-sm mx-auto"
                                src={img.relatedItems.url}
                            />
                        </div>)}
                    </div>
                </div>
                <div class="flex gap-x-3 items-center justify-between border-t ">
                    <div class="w-full max-w-xl mx-auto swiper thumbs-swiper-product-modal order-2 py-5">
                        <div class="swiper-wrapper">
                            {product?.relatedItems?.images?.map(img => <div
                                key={img.id}
                                class="swiper-slide">
                                <Image
                                    alt={product.title}
                                    containerClass="w-full h-full border rounded-sm overflow-hidden cursor-pointer"
                                    src={img.relatedItems.url}
                                />
                            </div>)}
                        </div>
                    </div>
                    <div class="thumb-swiper-next lg:hidden order-1 aspect-square border border-gray-600 rounded-md bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all">
                        <ArrowRightFill class="w-8" />
                    </div>
                    <div class="thumb-swiper-prev lg:hidden order-3 aspect-square border border-gray-600 rounded-md bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all">
                        <ArrowLeftFill class="w-8" />
                    </div>
                </div>
            </div>
        </div>
    </>

})

export default ImageModalGalleries
