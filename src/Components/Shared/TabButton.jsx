import {
    component$,
    Slot,
} from "@builder.io/qwik"

const TabButton = component$(({
    click,
    name,
    selected,
}) => {

    return <button
        type="button"
        onClick$={() => click(name)}
        class={`relative z-10 border border-custom-color3 py-3 px-4 mx-1 md:mx-2 font-bold text-custom-color32 hover:text-custom-color14 -mb-[1px] transition-all ${selected ? "bg-white border-b-white" : "bg-custom-color2 "}`}
        id={name}
    >
        <Slot />
    </button>
})

export default TabButton
