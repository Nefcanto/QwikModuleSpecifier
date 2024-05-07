import { useCategoryUrl } from "Blog"

const BlogCategories = ({
    categories,
    localePathPrefix,
    title,
}) => {

    return <div class="bg-white border border-custom-color3">
        <p class="text-md md:text-lg font-bold border-b border-b-custom-color3 p-3">
            {title}
        </p>
        <div class="inline-flex xl:w-full md:flex md:flex-col gap-2 overflow-x-auto">
            {
                categories?.map(item => <>
                    <a
                        key={item.id}
                        href={useCategoryUrl(item.slug, localePathPrefix)}
                        class="px-3 py-2.5 md:py-3 md:border-b md:border-b-custom-color3 text-custom-color32 text-sm md:text-base hover:text-custom-color14 transition-all min-w-fit"
                    >
                        {item.title}
                    </a>
                </>)
            }
        </div>
    </div>
}

export default BlogCategories
