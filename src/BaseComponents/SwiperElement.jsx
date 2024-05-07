import {
    component$,
    Slot,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik"
import Swiper from "swiper"
import {
    Autoplay,
    EffectCoverflow,
    EffectCube,
    EffectFade,
    Grid,
    HashNavigation,
    Navigation,
    Pagination,
    Thumbs,
} from "swiper/modules"
import swiperStyles from "swiper/css?inline"
import paginationStyle from "swiper/css/pagination?inline"
import navigationStyle from "swiper/css/navigation?inline"
import coverflowStyle from "swiper/css/effect-coverflow?inline"
import fadeEffectStyle from "swiper/css/effect-fade?inline"
import cubeEffectStyle from "swiper/css/effect-cube?inline"
import gridStyle from "swiper/css/grid?inline"
import "swiper/css/free-mode?inline"
import SwiperConfig from "../Base/SwiperConfig"

const SwiperElement = component$(({
    config,
    containerClass,
    name,
    navigation: NavigationElements,
    paginationClass,
}) => {

    if (!name) {
        return <div class="bg-red-800 text-white p-10">Swiper name is not defined</div>
    }

    const {
        modules,
        navigation,
        onSwiper: OnSwiper,
        pagination,
        thumbs,
        ...rest
    } = config || {}

    useStyles$(paginationStyle)
    useStyles$(navigationStyle)
    useStyles$(swiperStyles)
    useStyles$(coverflowStyle)
    useStyles$(fadeEffectStyle)
    useStyles$(cubeEffectStyle)
    useStyles$(gridStyle)

    useVisibleTask$(() => {

        const mergedConfig = {
            ...SwiperConfig,
            modules: [
                Autoplay,
                EffectCoverflow,
                EffectCube,
                EffectFade,
                HashNavigation,
                Navigation,
                Pagination,
                Thumbs,
                Grid,
            ],
            hashNavigation: {
                watchState: true,
            },
            ...(pagination && Object.keys(pagination)?.length > 0 && {
                pagination: {
                    ...pagination,
                }
            }),
            ...(navigation && Object.keys(navigation)?.length > 0 && {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    ...navigation,
                }
            }),
            ...rest,
        }
        const swiperElement = document.querySelectorAll(`.${name}`)
        if (swiperElement.length > 1) {
            throw `More than one element is named ${name}. Swiper can not find the intended element. Use unique names for your sliders.`
        }
        const swiperInstance = new Swiper(`.${name}`, mergedConfig)
        if (OnSwiper) {

            OnSwiper(swiperInstance)
        }
    }, {
        strategy: "document-ready"
    })

    return <div class={`w-full swiper relative ${name} ${containerClass}`}>
        <div class={`swiper-wrapper`} >
            <Slot />
        </div>
        {NavigationElements && <NavigationElements />}
        {paginationClass && <div class={`swiper-pagination ${paginationClass}`}></div>}
    </div >

})

export default SwiperElement
