import { useHierarchyUrl } from "Taxonomy"
import { useCategoryUrl } from "Products"
import { DesktopLevelThreeMenu } from "Layout"

const DesktopLevelTwoMenu = ({
    category,
    headerItems,
    levelThreeDefault,
    levelThreeWithTwoRow,
    levelTwoMax,
    localePathPrefix,
}) => {

    return <div class={`hidden w-full group-hover/item:opacity-100 group-hover/item:flex group-hover/item:grid absolute z-10 top-0 start-0 w-full bg-white shadow-xl pt-16 px-2 rounded-md grid-cols-7 delay-300 duration-300 transition-all group-hover/item:delay-300 group-hover/item:duration-300 group-hover/item:transition-all ${category.relatedItems.children.length > levelTwoMax ? "grid-rows-2" : "grid-rows-1"}`}>
        {
            category.relatedItems?.children?.map(subCategory => <div
                key={subCategory.id}
                class="px-2 text-sm font-bold"
            >
                <a
                    href={useCategoryUrl(subCategory.slug, localePathPrefix)}
                    class={`pb-5 border-b inline-block w-full ${category.relatedItems.children.length > 10 ? "text-[12px]" : "text-md"}`}
                >
                    {subCategory.title}
                </a>
                <DesktopLevelThreeMenu
                    parent={category}
                    category={subCategory}
                    levelTwoMax={levelTwoMax}
                    levelThreeDefault={levelThreeDefault}
                    levelThreeWithTwoRow={levelThreeWithTwoRow}
                    headerItems={headerItems}
                    localePathPrefix={localePathPrefix}
                />
            </div>)}
    </div>
}

export default DesktopLevelTwoMenu
