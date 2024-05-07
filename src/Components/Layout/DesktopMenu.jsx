import { useHierarchyUrl } from "Taxonomy"
import { useCategoryUrl } from "Products"
import { DesktopLevelTwoMenu } from "Layout"

const DesktopMenu = ({
    categories,
    headerItems,
    localePathPrefix,
}) => {

    const levelOneCategoryMinimumLength = 6
    const levelTwoCategoryMaximumLength = 7
    const defaultThreeCategoryShown = 12
    const levelThreeCategoryShownWithTwoRow = 5

    const filteredCategories = categories.filter(item => item.relatedItems.children.length > 0)

    return <div class="hidden xl:flex before w-full before:pointer-events-none group">
        {/* <div class="w-screen h-screen bg-black/70 absolute start-0 top-1/2 z-10 translate-y-[35px] transition-all duration-1000"></div> */}
        <div
            style={{ gridTemplateColumns: `repeat(${Math.max(filteredCategories.length, levelOneCategoryMinimumLength)}, minmax(70px, 1fr))` }}
            class="relative text-custom-color14 w-full grid mx-auto group before text-custom-color32 cursor-auto"
        >
            {/* <div class="bg-custom-color31 z-30 absolute w-full h-full duration-300 transition-all"></div> */}
            {
                filteredCategories?.map(category => <div
                    key={category.id}
                    class="text-sm h-full group/item group-hover:z-3 duration-300 transition-all group-hover:duration-300 group-hover:transition-all"
                >
                    <a
                        class="text-sm font-bold relative group-hover:z-30 group-hover/item:bg-white group-hover/item:text-custom-color14 h-full p-1 flex items-center justify-center py-3 px-1 group-hover:transition-all"
                        href={useCategoryUrl(category.slug, localePathPrefix)}
                    >
                        {category.title}
                    </a>
                    <div class="w-full absolute start-0 top-0 opacity-0 translate-y-[100%] group-hover/item:translate-y-0 group-hover/item:opacity-100 group-hover/item:delay-200 group-hover/item:duration-300 group-hover/item:transition-all">
                        <DesktopLevelTwoMenu
                            category={category}
                            headerItems={headerItems}
                            levelTwoMax={levelTwoCategoryMaximumLength}
                            levelThreeDefault={defaultThreeCategoryShown}
                            levelThreeWithTwoRow={levelThreeCategoryShownWithTwoRow}
                            localePathPrefix={localePathPrefix}
                        />
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default DesktopMenu
