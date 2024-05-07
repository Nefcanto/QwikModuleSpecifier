import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Magnifier } from "Svg"
import { useProductsUrl } from "Products"

const Search = component$(({
    actionItemsClass,
    activeTabChangeHandler,
    headerItems,
    isOpen,
    localePathPrefix,
    name,
}) => {

    const search = useSignal("")

    const handelSearch = $(() => {
        window.location.href = useProductsUrl({
            search: search.value,
            localePathPrefix: localePathPrefix
        })
    })

    return <div
        class={`col-start-5 col-end-9 md:order-2 md:col-start-7 md:col-end-13 md:border-none md:hover:bg-transparent xl:order-1 xl:col-start-4 xl:col-end-9 border-e border-custom-color3 md:border-none ${isOpen === name && "bg-gray-100"} ${actionItemsClass}`}
        onClick$={(e) => activeTabChangeHandler(e, name)}
    >
        <div class="md:hidden flex flex-col items-center text-custom-color14 cursor-pointer text-xs md:text-base">
            <Magnifier class="w-6 h-6 fill-custom-color1" />
            <span class="font-bold">{headerItems?.searchTitle}</span>
            {
                isOpen === name &&
                <div
                    onSubmit$={() => window.location.href = "/search?q=drill"}
                    onClick$={(e) => { e.stopPropagation() }}
                    class="absolute top-[100%] start-0 w-screen md:max-w-sm bg-white overflow-hidden rounded-sm"
                >
                    <div class="py-2 w-full bg-custom-color1 px-4">
                        <div class="w-[95%] mx-auto rounded-md overflow-hidden flex justify-between items-center divide-xs bg-white">
                            <input
                                type="text"
                                placeholder={headerItems?.searchPlaceHolder}
                                class="grow p-2 border-none outline-none shadow-[inset_0_3px_8px_#e5e5e5]"
                                onInput$={e => search.value = e.target.value}
                            />
                            <div
                                onClick$={handelSearch}
                                class="w-9 px-1 cursor-pointer"
                            >
                                <Magnifier class="w-full fill-custom-color1" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        <div
            class="hidden w-full rounded-md overflow-hidden md:flex justify-between items-center border-2 divide-x focus-within:border-2 focus-within:border-custom-color1"
        >
            <input
                type="text"
                placeholder={headerItems?.searchPlaceHolder}
                class="grow p-2 border-none outline-none shadow-[inset_0_3px_8px_#e5e5e5]"
                onInput$={e => search.value = e.target.value}
            />
            <div
                onClick$={handelSearch}
                class="w-9 px-1 cursor-pointer"
            >
                <Magnifier class="w-full fill-custom-color1" />
            </div>
        </div>
    </div>
})

export default Search
