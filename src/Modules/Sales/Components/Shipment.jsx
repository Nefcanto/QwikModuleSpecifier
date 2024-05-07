import { component$ } from "@builder.io/qwik"
import { Addresses } from "Sales"

const Shipment = component$(({
    packageModel,
    shipmentMethods,
    shipmentStatics,
    ...rest
}) => {
    return <>
        <Addresses
            packageModel={packageModel}
            {...rest}
        />

        <div class="mt-8">
            <div class="flex items-center gap-1">
                <div class="w-4 aspect-square bg-custom-color9"></div>
                <p class="text-base font-bolder">{shipmentStatics.shipmentTitle}</p>
            </div>
            <div class="border p-4 mt-6">
                <p class="text-base font-bolder">{shipmentStatics.shipmentSubtitle}</p>
                <div class="mt-10">

                    {
                        shipmentMethods?.map(item => <div
                            class="mb-4"
                            key={item.key}
                        >
                            <div class="p-2">
                                <label class="text-sm font-bold text-gray-900 block flex items-start gap-2">
                                    <input
                                        key={item.key}
                                        type="radio"
                                        name="shipmentMethod"
                                        class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                        value={item.key}
                                        onclick$={(e) => {
                                            const selectedShipmentMethods = shipmentMethods.find(i => i.key == e.target.value)
                                            packageModel.shipmentMethodKey = selectedShipmentMethods.key
                                            packageModel.shipmentMethodGuid = selectedShipmentMethods.guid
                                        }}
                                    />
                                    <p class="flex flex-col gap-1">
                                        <span class="font-bold">
                                            {item.title}
                                        </span>
                                        {/* <span class="text-xs text-gray-400">{item.subtitle}</span> */}
                                    </p>
                                </label>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </div>
    </>

})

export default Shipment
