import { Image } from "Base"
import { useHierarchyUrl } from "Taxonomy"
import { useCategoryUrl } from "Products"

const Category = ({
    category,
    localePathPrefix,
    priority,
}) => {
    const isProduct = category?.ancestorsIdsCsv?.split(",").filter(item => item !== "").length > 1

    return <a
        class="flex sm:flex-col items-center gap-x-4 w-full group border border-custom-color3 block bg-white overflow-hidden"
        href={isProduct ? useCategoryUrl(category?.slug, localePathPrefix) : useHierarchyUrl("product", category?.slug)}
    >
        <Image
            alt={category.title}
            containerClass="w-32 sm:w-72 sm:h-auto overflow-hidden aspect-square"
            src={category.relatedItems.imageUrl}
            priority={priority || false}
        />
        <strong class="my-2 px-2 text-sm py-1 flex items-center justify-center group-hover:text-custom-color14 group-hover:underline">
            {category.title}
        </strong>
    </a>
}

export default Category
