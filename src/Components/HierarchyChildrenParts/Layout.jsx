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
import {
    AsideCategoryDetails,
    Breadcrumb,
    RelatedProductCard,
    RichText,
} from "Shared"
import {
    ArrowLeftFill,
    ArrowRightFill,
} from "Svg"
import { Category } from "HierarchyChildrenParts"

const Layout = ({
    breadcrumb,
    children: categories,
    hierarchiesStatics,
    latestProducts,
    localePathPrefix,
    parent,
    seo,
}) => {
    return <div class="max-w-6xl mx-auto px-4 2xl:px-0">
        <Breadcrumb items={breadcrumb} />
        <div class="banners mb-6">
            <a
                class="block"
                href={hierarchiesStatics.bannerLink}
            >
                <Image
                    containerClass="w-full aspect-[4/1]"
                    src={hierarchiesStatics.banner}
                    priority
                />
            </a>
        </div>
        {/* <div class="grid grid-cols-1 sm:grid-cols-[30%,70%] lg:grid-cols-[22%,78%] gap-x-2 pb-10"> */}
        <div class="grid grid-cols-1">
            {/* <AsideCategoryDetails
                categories={categories}
                localePathPrefix={localePathPrefix}
                parent={parent}
                statics={hierarchiesStatics}
            /> */}
            <div class="block mt-4 sm:mt-0 mb-14">
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2">
                    {
                        categories?.map(item => <Category
                            category={item}
                            key={item.id}
                            localePathPrefix={localePathPrefix}
                        />)
                    }
                </div>
                <div class="best seller">
                    <div class="flex items-center justify-between">
                        <strong class="py-5 px-4 text-lg text-custom-color14">{hierarchiesStatics.bestSellers}</strong>
                        <div class="flex gap-x-1 items-center px-2">
                            <div class="best-seller-next aspect-square border border-gray-600 rounded-md bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all cursor-pointer">
                                <ArrowRightFill class="w-8" />
                            </div>
                            <div class="best-seller-prev aspect-square border border-gray-600 rounded-md bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all cursor-pointer">
                                <ArrowLeftFill class="w-8" />
                            </div>
                        </div>
                    </div>
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
                        {
                            latestProducts?.map(item => <SwiperSlide
                                key={item.id}
                            >
                                <RelatedProductCard
                                    localePathPrefix={localePathPrefix}
                                    product={item}
                                />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
        {seo?.relatedItems?.content &&
            <div class="w-full bg-white border border-custom-color3 mb-6 p-4">
                <RichText content={seo?.relatedItems?.content} />
            </div>
        }
    </div >
}

export default Layout

