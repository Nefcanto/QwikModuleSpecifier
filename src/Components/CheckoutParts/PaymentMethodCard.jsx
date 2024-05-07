import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import { CheckedIcon } from "Svg"

const PaymentMethodCard = component$(({
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
        <span class="text-sm font-bold">
            {method?.title}
        </span>
        {isActive && <div class="group-hover:hidden rounded-full absolute top-1/2 -translate-y-1/2 end-0 p-0.5">
            <CheckedIcon class="fill-green-800 w-6" />
        </div>}
    </div>
})

export default PaymentMethodCard
