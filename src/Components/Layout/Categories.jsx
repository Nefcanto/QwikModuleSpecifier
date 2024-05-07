import { component$ } from "@builder.io/qwik"
import {
    DesktopMenu,
    MobileMenu,
} from "Layout"

const Categories = component$(({
    actionItemsClass,
    activeTabChangeHandler,
    categories,
    headerItems,
    isOpen,
    localePathPrefix,
    name,
}) => {

    return <div class={`relative z-20 xl:z-auto my-0 col-start-1 col-end-5 md:order-2 md:col-start-1 md:relative md:col-end-6 md:px-4 xl:px-0 md:flex-row md:justify-between md:py-2 xl:static xl:py-0 xl:order-3 xl:col-span-full md:border md:border-custom-color3 xl:border-x-transparent xl:border-b-transparent xl:hover:border-e-transparent md:rounded-lg xl:rounded-none xl:hover:border-t-custom-color3 md:bg-gradient-to-b from-50% from-custom-color2 to-50% to-custom-color34 xl:bg-none delay-500 duration-500 transition-all hover:delay-500 hover:duration-500 hover:transition-all ${isOpen === name && ""} ${actionItemsClass}`}
    >
        <MobileMenu
            activeTabChangeHandler={activeTabChangeHandler}
            categories={categories}
            headerItems={headerItems}
            isOpen={isOpen}
            localePathPrefix={localePathPrefix}
            name={name}
        />
        <DesktopMenu
            categories={categories}
            localePathPrefix={localePathPrefix}
            headerItems={headerItems}
        />
    </div>
})

export default Categories
