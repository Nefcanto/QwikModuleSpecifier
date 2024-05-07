import { component$ } from "@builder.io/qwik"

const Gateways = component$(({
    gateways,
    packageModel,
    paymentStatics,
}) => {

    return packageModel.paymentMethodKey == "onlinePayment" &&
        <div class="mt-8">
            <div class="flex items-center gap-1">
                <div class="w-4 aspect-square bg-custom-color9"></div>
                <p class="text-base font-bolder">{paymentStatics?.gatewayTitle}</p>
            </div>
            <div class="border p-4 mt-6">
                <div class="flex flew-wrap gap-4">
                    {
                        gateways?.map(item => <div class="border p-4">
                            <label
                                class="text-sm font-bold text-gray-900 block flex items-start gap-2">
                                <input
                                    id={item.key}
                                    class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                    name="gateway"
                                    type="radio"
                                    value={item.key}
                                    onInput$={e => {
                                        const choseGateway = gateways.find(i => i.key == e.target.value)
                                        packageModel.gatewayKey = choseGateway.key
                                        packageModel.gatewayGuid = choseGateway.guid
                                    }}
                                />
                                <span class="font-bold">
                                    {item.title}
                                </span>

                            </label>
                        </div>)
                    }
                </div>
            </div>
        </div>

})

export default Gateways
