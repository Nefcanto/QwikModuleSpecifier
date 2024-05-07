import { useCategoryUrl } from "Products"

const DesktopLevelThreeMenu = ({
    category,
    headerItems,
    levelThreeDefault,
    levelThreeWithTwoRow,
    levelTwoMax,
    localePathPrefix,
    parent,
}) => {

    return <>
        {
            category.relatedItems?.children.length > 0 && <div class="my-5 flex flex-col gap-y-1">
                {
                    category.relatedItems?.children
                        .slice(0,
                            (
                                parent.relatedItems.children.length > levelTwoMax ?
                                    levelThreeWithTwoRow
                                    :
                                    levelThreeDefault
                            )
                        )
                        .map(sub => <a
                            key={sub.id}
                            href={useCategoryUrl(sub.slug, localePathPrefix)}
                            class="flex w-full gap-x-2 z-10 top-0 start-0 w-full bg-white py-1 text-custom-color32 hover:text-custom-color14 transition-all text-xs"
                        >
                            {sub.title}
                        </a>
                        )}
                {
                    (
                        category.relatedItems?.children.length > levelThreeDefault ||
                        parent.relatedItems.children.length > levelTwoMax &&
                        category.relatedItems?.children.length >= levelThreeWithTwoRow
                    ) &&
                    <a
                        href={category.slug}
                        class="text-custom-color14 inline-block mt-3 mb-4 underline hover:text-custom-color14 text-sm transition-all"
                    >
                        {headerItems?.viewAll}
                    </a>
                }
            </div>
        }
    </>
}

export default DesktopLevelThreeMenu
