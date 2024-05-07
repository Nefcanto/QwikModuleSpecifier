import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { merge } from "Base"
import {
    Minus,
    Plus,
} from "Svg"

const Accordion = component$(({
    answerClass,
    clickHandler,
    isOpen,
    item,
    questionClass,
    title,
}) => {

    return <div onClick$={() => { clickHandler(item.title || item.id) }}>
        <div class={`border-t border-custom-color3 ${isOpen ? "border-b border-dotted border-b-custom-color3 bg-custom-color15/5" : "border-b border-b-transparent"}`}>

            {/* <div class="w-full h-[2px] bg-slate-700 bg-gradient-to-b from-blue-400 to-black"></div> */}

            <div class={merge("w-full my-1 py-2 px-3 flex items-center justify-between fill-white cursor-pointer cursor-pointer", questionClass)}>
                {isOpen ? <Minus class="w-5 aspect-square stroke-2" /> : <Plus class="w-5 aspect-square stroke-2" />}
                <span class="font-bold">
                    {title}
                </span>
            </div>

        </div>
        <div
            onClick$={(e) => e.stopPropagation()}
            class={`text-sm overflow-hidden transition-all ${isOpen ? "max-h-[100vh] duration-1000" : "max-h-0 duration-1000"}`}
        >
            <div class={merge("py-4 px-3", answerClass)}>
                <Slot />
            </div>
        </div>
    </div>
})

export default Accordion
