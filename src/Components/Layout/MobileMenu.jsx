import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    useCategoryUrl,
    useProductsUrl,
} from "Products"
import {
    ArrowDown,
    ArrowRight,
    ThreeLine,
} from "Svg"
import { MobileSubMenu } from "Layout"

const MobileMenu = component$(({
    activeTabChangeHandler,
    categories,
    headerItems,
    isOpen,
    localePathPrefix,
    name,
}) => {

    const displayedMenu = useSignal({
        relatedItems: { children: categories },
    })

    const category = categories.find(item => item.id === displayedMenu.value.parentId)

    const menuClickHandler = $((e) => {
        activeTabChangeHandler(e, name)

        document.body.classList.toggle("overflow-hidden")
        document.body.classList.toggle("h-screen")
    })

    const displayedMenuHandler = $(category => {

        if (category.relatedItems?.children.length > 0) {

            displayedMenu.value = category
        }
    })

    return <div
        class={`relative z-50 w-full h-full flex justify-center md:justify-between items-center xl:hidden select-none group border-e border-custom-color3 md:border-none bg-white rounded-t`}
        onClick$={e => menuClickHandler(e)}
    >
        <div class="flex flex-col md:flex-row md:justify-between items-center gap-x-2 xl:hidden">
            <ThreeLine class="w-6 h-6" />
            <span class="text-xs md:text-base">{headerItems?.browseTitle}</span>
        </div>
        <ArrowDown class="w-4 h-4 hidden md:flex xl:hidden" />
        {
            isOpen === name &&
            <div
                onClick$={e => { e.stopPropagation() }}
                class="absolute top-[100%] md:top-[120%] start-0 w-screen md:max-w-lg bg-white overflow-hidden rounded-sm"
            >
                <div class="py-5 w-full px-4 text-blue-500">
                    {
                        category ? <div
                            class="flex gap-x-1"
                            onClick$={() => displayedMenu.value = category}
                        >
                            <span>{headerItems?.backTo}</span>
                            <span>{category?.title}</span>
                        </div> :
                            <div
                                class="flex gap-x-1"
                                onClick$={() => displayedMenu.value = {
                                    relatedItems: { children: categories },
                                }}
                            >
                                <span>{headerItems?.backTo}</span>
                                <span>{headerItems?.mainMenu}</span>
                            </div>
                    }
                </div>
                <MobileSubMenu
                    displayedMenu={displayedMenu}
                    localePathPrefix={localePathPrefix}
                    displayedMenuHandler={displayedMenuHandler}
                    headerItems={headerItems}
                />
            </div>
        }
    </div>
})

export default MobileMenu
