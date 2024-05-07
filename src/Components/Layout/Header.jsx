import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    Categories,
    Checkout,
    Logo,
    MobileVat,
    Search,
    Taglines,
    TopBar,
    User,
} from "Layout"
import { Backdrop } from "Shared"

const Header = component$(({
    authActions,
    branding,
    categories,
    contactInfo,
    headerItems,
    headerItems,
    headerTaglines,
    localePathPrefix,
}) => {

    const activeTabName = useSignal(null)

    const closeTabHandler = $(() => {
        activeTabName.value = null
    })

    const activeTabChangeHandler = $((e, pressedTabName) => {
        e.preventDefault()
        // if (e.target !== e.currentTarget) return
        if (activeTabName.value === pressedTabName) {
            activeTabName.value = null
        } else {
            activeTabName.value = pressedTabName
        }
    })

    const actonItemsClass = `sm:mt-2 flex flex-col gap-y-0.5 items-center flex-1 text-custom-color14 fill-custom-color1 hover:cursor-pointer font-bold `

    return <header class="relative z-40 bg-white drop-shadow-sm">

        <TopBar
            authActions={authActions}
            headerItems={headerItems}
            mainPhone={contactInfo?.mainPhone}
        />
        <div class="w-full bg-white border-b border-custom-color3">
            <div class="sm:mt-2 md:mb-2 xl:mb-0 max-w-6xl mx-auto grid grid-cols-12 items-center bg-white md:px-4 2xl:px-0">
                {/* {
                    activeTabName.value !== null
                    &&
                    <Backdrop
                        click={closeTabHandler}
                        class="xl:hidden"
                        special
                    />
                } */}
                <Logo branding={branding} />
                {/* <MobileVat headerItems={headerItems} /> */}
                <User
                    authActions={authActions}
                    actonItemsClass={actonItemsClass}
                    headerItems={headerItems}
                />
                <Categories
                    headerItems={headerItems}
                    categories={categories}
                    name="categories"
                    isOpen={activeTabName.value}
                    activeTabChangeHandler={activeTabChangeHandler}
                    actionItemsClass={actonItemsClass}
                    localePathPrefix={localePathPrefix}
                />
                <Search
                    activeTabChangeHandler={activeTabChangeHandler}
                    actonItemsClass={actonItemsClass}
                    headerItems={headerItems}
                    isOpen={activeTabName.value}
                    localePathPrefix={localePathPrefix}
                    name="search"

                />
                <Checkout
                    headerItems={headerItems}
                    actonItemsClass={actonItemsClass}
                    localePathPrefix={localePathPrefix}
                />
            </div>
        </div>
        <Taglines taglines={headerTaglines} />

        <div
            class={`absolute start-0 top-0 translate-x-full bg-black/70 z-0 duration-500 transition-all ${activeTabName.value ? "w-screen h-screen translate-x-[0px]" : "w-0 h-0"}`}
            onClick$={() => activeTabName.value = !activeTabName.value}
        ></div>

    </header>
})

export default Header
