import { component$ } from "@builder.io/qwik"
import {
    Image,
    merge,
} from "Base"
import { CheckedIcon } from "Svg"

const ShipmentMethodCard = component$(({
    click,
    isActive,
    method,
}) => {
    return <div
        onClick$={click}
        class={merge(
            "flex items-center justify-start border-2 border-dotted border-custom-color1 w-full gap-6 p-2 cursor-pointer rounded-md relative",
            `${isActive && "bg-green-100"}`)}
    >
        <Image
            alt={method?.title}
            src={method?.relatedItems?.imageUrl}
            imageClass="object-contain w-full h-full"
            containerClass="w-12 aspect-square"
        />
        <span class="text-sm font-bold">
            {method?.title}
        </span>
        {isActive && <div class="group-hover:hidden rounded-full absolute end-2.5 top-2.5 p-0.5">
            <CheckedIcon class="fill-green-800 w-6" />
        </div>}
    </div>
})

export default ShipmentMethodCard
