import {
    $,
    component$,
} from "@builder.io/qwik"
import {
    GatewayCard,
    PaymentMethodCard,
} from "CheckoutParts"

const Payments = component$(({
    gateways,
    packageModel,
    paymentMethods,
    paymentStatics,
}) => {

    return <>
        <div class="w-full flex flex-col items-center md:col-span-2 w-full gap-2">
            <strong class="bg-custom-color2 w-full text-center p-2 rounded-md">
                {paymentStatics?.paymentMethodsText}
            </strong>
            {
                paymentMethods?.map(method => <PaymentMethodCard
                    click={$(() => {
                        packageModel.paymentMethodGuid = method.guid
                        packageModel.paymentMethodKey = method.key
                    })}
                    method={method}
                    isActive={method.guid === packageModel.paymentMethodGuid}
                />
                )
            }
        </div>
        <div class={`${packageModel.paymentMethodKey == "onlinePayment" ? "opacity-100" : "opacity-0 duration-1000"} transition-all w-full flex flex-col items-center md:col-span-2 w-full gap-2`}>
            <strong class="bg-custom-color2 w-full text-center p-2 rounded-md">
                {paymentStatics?.gatewaysText}
            </strong>
            {
                gateways?.map(gateway => <div key={gateway.id}>
                    <GatewayCard
                        click={$(() => packageModel.gatewayGuid = gateway.guid)}
                        gateway={gateway}
                        isActive={gateway.guid === packageModel.gatewayGuid}
                    />
                </div>)
            }
        </div>
    </>
})

export default Payments
