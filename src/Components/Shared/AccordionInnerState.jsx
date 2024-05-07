import {
    component$,
    Slot,
    useSignal,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    Minus,
    Plus,
} from "Svg"

const AccordionInnerState = component$(({
    id,
    isEmpty,
    simple,
    title,
}) => {

    const { url } = useLocation()
    const { pathname, searchParams } = url
    const AccordionState = useSignal(searchParams.get(id))

    return <div class={`w-full`}
    >
        <div
            onClick$={() => AccordionState.value = !AccordionState.value}
            class={`w-full py-2 px-4 flex items-center justify-between fill-white cursor-pointer`}>
            <div class={AccordionState.value || isEmpty ? "bg-custom-color3" : "bg-custom-color1"}>
                {AccordionState.value || isEmpty ? <Minus class="w-4" /> : <Plus class="w-4" />}
            </div>
            <span class="font-bold text-md select-none">
                {title}
            </span>
        </div>
        <div class={`my-2 px-6 overflow-hidden
        ${!simple && "transition-all"}
        ${AccordionState.value ?
                `max-h-[50vh] ${!simple && "duration-1000"}`
                : `max-h-0 ${!simple && "duration-1000"}`
            }`
        }
        >
            <Slot />
        </div>
    </div>
})

export default AccordionInnerState
