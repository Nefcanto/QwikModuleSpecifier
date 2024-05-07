import { component$ } from "@builder.io/qwik"
import {
    Image,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    xs,
    xxl,
} from "Base"
import { useProductsUrl } from "Products"
import { useCartUrl } from "Orders"
import { Backdrop } from "Shared"
import {
    ArrowLeftFill,
    CheckedIcon,
} from "Svg"

const ShoppingModal = component$(({
    click,
    isOpen,
    localePathPrefix,
    product,
    productsStatics,
}) => {

    return <>
        {
            isOpen && <Backdrop click={click} />
        }
        <div class={`max-w-[calc(100vw-20px)] w-[800px] fixed z-40 top-1/4 start-1/2 translate-x-1/2 -translate-y-1/2 text-white order-5 ${isOpen ? "block visible" : "hidden invisible"}`}>
            <span
                class="flex gap-x-2 fixed top-0 start-5 cursor-pointer z-50 font-bold"
                onClick$={click}
            >
                <span>x</span>
                <span>
                    {productsStatics.close}
                </span>
            </span>
            <div class="bg-white mt-10 text-black p-6 shadow">
                <div class="flex items-center justify-start gap-x-2">
                    <CheckedIcon class="w-14 fill-green-600" />
                    <h2 class="text-start">{product?.title} </h2>
                </div>
                <div class="flex items-center justify-center gap-x-2 py-5 border-b border-custom-color3">
                    <a
                        href={useCartUrl()}
                        class="select-none border border-green-800 w-full max-w-[150px] text-white fill-white flex items-center justify-between hover:border-green-600 transition-all px-4 py-3 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)]"
                    >
                        <span class="text-md font-bold">
                            {productsStatics.checkout}
                        </span>
                        <ArrowLeftFill class="w-5 fill-gray-600" />
                    </a>
                    <a
                        href={useProductsUrl({ localePathPrefix })}
                        class="select-none border border-green-800 w-full max-w-[150px] text-white fill-white flex items-center justify-between hover:border-green-600 transition-all px-4 py-3 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)]"
                    >
                        <span class="text-md font-bold">
                            {productsStatics.continueShopping}
                        </span>
                        <ArrowLeftFill class="w-6 fill-gray-600" />
                    </a>
                </div>
                <div class="py-10">
                    <Swiper
                        name="related-products"
                        containerClass="px-1"
                        config={{
                            pagination: false,
                            navigation: {
                                nextEl: ".related-products-next",
                                prevEl: ".related-products-prev",
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
                                    slidesPerView: 3,
                                    spaceBetween: 6,
                                },
                                [xl]: {
                                    slidesPerView: 4,
                                    spaceBetween: 6,
                                },
                                [xxl]: {
                                    slidesPerView: 4,
                                    spaceBetween: 6,
                                },
                            }
                        }}
                    >
                        {[1, 2, 3, 4, 5].map(img => <SwiperSlide
                            key={img.id}
                        >
                            <p>related product</p>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    </>

})

export default ShoppingModal
