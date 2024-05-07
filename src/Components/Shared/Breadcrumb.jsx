import { component$ } from "@builder.io/qwik"
import { Home } from "Svg"

const Breadcrumb = component$(({
    items,
    separator,
    simple,
    small,
}) => {

    return <ul class={`flex items-center justify-start mb-4 gap-x-2`}>
        {
            items?.length > 0 && items?.map((item, index) =>
                <li
                    class="flex items-center shrink-0"
                    key={item.text}
                >
                    <div class="flex items-center gap-x-2">
                        <a
                            class={`text-custom-color14 text-sm font-bold hover:underline hover:text-custom-color14 flex gap-x-1 items-start ${index + 1 === items.length && "pointer-events-none"} ${small ? "text-sm" : "text-md"}`}
                            href={item?.link}
                        >
                            {
                                index === 0
                                &&
                                !simple
                                &&
                                <Home class="w-5 fill-custom-color1" />
                            }
                            {item?.text}
                        </a>
                        <span
                            class={`${items?.slice(1).length == index && " hidden "}`}
                        >
                            {separator || <span class="w-8 h-8 text-custom-color14">&#62;</span>}
                        </span>
                    </div>
                </li>
            )
        }
    </ul>
})

export default Breadcrumb
