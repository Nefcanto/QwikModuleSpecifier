import {
    $,
    component$,
} from "@builder.io/qwik"
import { ShipmentMethodCard } from "CheckoutParts"

const Shipments = component$(({
    packageModel,
    shipmentMethods,
    shipmentMethodStatics,
}) => {

    return <div class={`w-full flex flex-col items-center md:col-span-2 w-full gap-2`}>
        <strong class="bg-custom-color2 w-full text-center p-2 rounded-md">
            {shipmentMethodStatics?.shipmentMethodsText}
        </strong>
        {
            shipmentMethods?.map(method => <div
                class="w-full"
                key={method.id}
            >
                <ShipmentMethodCard
                    click={$(() => packageModel.shipmentMethodGuid = method.guid)}
                    method={method}
                    isActive={method.guid === packageModel.shipmentMethodGuid}
                />

            </div>
            )
        }
    </div>
})

export default Shipments
