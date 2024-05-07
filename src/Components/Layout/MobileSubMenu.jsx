import { component$ } from "@builder.io/qwik"
import { useCategoryUrl } from "Products"
import { ArrowRight } from "Svg"

const MobileSubMenu = component$(({
    displayedMenuHandler,
    headerItems,
    displayedMenu,
    localePathPrefix,
}) => {

    return <div class="px-4">
        {displayedMenu.value.relatedItems.children?.length > 0 && <>
            {
                displayedMenu.value.slug && <a
                    class="flex justify-between border-b py-4"
                    href={useCategoryUrl(displayedMenu.value.slug, localePathPrefix)}
                >
                    <p class="flex items-center gap-1 font-bolder">
                        <span>{headerItems.all}</span>
                        <span class="text-sm font-bold">{displayedMenu.value.title}</span>
                    </p>
                    <ArrowRight class="w-6 fill-custom-color3" />
                </a>
            }
            {
                displayedMenu.value.relatedItems?.children?.map(category => <div key={category.id}>
                    {
                        category.relatedItems?.children?.length > 0 ?
                            <div
                                class="flex justify-between border-b py-4"
                                onClick$={() => displayedMenuHandler(category)}
                            >
                                <span>{category.title}</span>
                                <ArrowRight class="w-6 fill-custom-color3" />
                            </div>
                            :
                            <a
                                class="flex justify-between border-b py-4"
                                href={useCategoryUrl(category.slug, localePathPrefix)}
                            >
                                <span>{category.title}</span>
                                <ArrowRight class="w-6 fill-custom-color3" />
                            </a>
                    }
                </div>)
            }
        </>
        }
    </div>
})

export default MobileSubMenu
