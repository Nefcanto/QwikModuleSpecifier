import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { AccordionInnerState } from "Shared"

const FilterAttributesList = component$(({ attributes }) => {

    const { url } = useLocation()
    const { searchParams } = url

    const AddFilterHandler = $((title, optionValue) => {
        const url = new URL(window.location.href)
        if (url.searchParams.has(title) && url.searchParams.get(title) === optionValue) {
            url.searchParams.delete(title)
        } else {

            url.searchParams.set(title, optionValue)
        }

        window.location.href = url.toString()
    })

    return <>
        {
            attributes?.map((attribute, index) => <div
                key={index}
                class="border-t w-full h-fit"
            >
                <AccordionInnerState
                    title={`${attribute.title}`}
                    id={attribute.slug}
                    isEmpty={attribute.relatedItems.options.length === 0}
                >
                    <div class="flex flex-col">
                        {
                            attribute.relatedItems.options.map(option => <div
                                key={option.id}
                                class="cursor-pointer duration-300 p-1.5 w-full rounded-sm flex items-center gap-2"
                                onClick$={(e) => AddFilterHandler(attribute.slug, option.title)}
                            >
                                <input
                                    class="cursor-pointer h-full w-fit block border-none outline-none text-center text-sm text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    type="checkbox"
                                    checked={searchParams.get(attribute.slug) === option.title}
                                />
                                <span>
                                    {option.title}
                                </span>
                            </div>)
                        }
                    </div>

                </AccordionInnerState>
            </div>
            )}
    </>
})

export default FilterAttributesList
