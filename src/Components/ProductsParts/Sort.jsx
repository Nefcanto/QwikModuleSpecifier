import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { ArrowDown } from "Svg"

const Sort = component$(({
    class: internalClass,
    showTitle,
    statics,
}) => {

    const location = useLocation()
    const sort = useSignal()

    const url = new URL(location.url.href)

    if (url.searchParams.has("sort")) {
        sort.value = url.searchParams.get("sort")
        // onlyShowInStockProducts.value = value == "inStock"
        // console.log("sort value", value)
    }

    const sortChangeHandler = $((e) => {
        const value = e.target.value
        const newSearchParams = url.searchParams
        newSearchParams.set("sort", value)
        window.location.href = url.toString()
    })

    const sorts = [
        { title: "top sellers", value: "top-sellers" },
        { title: "something sellers", value: "something-sellers" },
        { title: "other sellers", value: "other-sellers" },
    ]

    return <div class={internalClass}>
        {
            showTitle &&
            <span class="text-sm md:text-md font-bold text-custom-color14">{statics.sortByTitle} : </span>
        }

        <div class="flex items-center justify-between bg-white w-[170px] relative z-20">
            <select
                onInput$={sortChangeHandler}
                name="sort"
                id="sort"
                class="h-full w-full ps-10 text-end appearance-none relative bg-transparent z-10 p-2 border border-custom-color3 focus:border-custom-color1 active:border-custom-color1 outline-none rounded-sm"
            >
                {
                    sorts.map(item => <option
                        key={item.id}
                        selected={sort.value === item.value}
                        value={item.value}
                    >
                        {item.title}
                    </option>
                    )
                }
            </select>
            <ArrowDown class="w-8 border-e absolute z-0 px-1 start-0 top-[50%] -translate-y-1/2" />
        </div>

    </div>
})

export default Sort
