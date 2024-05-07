import {
    $,
    useSignal,
    useStore,
    useVisibleTask$,
} from "@builder.io/qwik"
import { postWithAuthentication } from "Base"
import { useAuthSession } from "Accounts"

const useCheckout = ({
    paymentOnly
}) => {

    const progress = useSignal(false)

    const session = useAuthSession()

    const isValid = useSignal(false)

    const model = useStore({
        addressGuid: null,
        gatewayGuid: null,
        gatewayKey: null,
        paymentMethodGuid: null,
        paymentMethodKey: null,
        shipmentMethodGuid: null
    })

    const handleSubmit = $(async () => {
        progress.value = true
        const result = await postWithAuthentication("/sales/register", model, session)

        if (result.url && result.url != "") {
            window.location.href = result.url
        } else {
            alert("Error")
        }

        progress.value = false
    })

    const validationPayment = $(() => {
        if (model.paymentMethodGuid && model.gatewayGuid) {
            return true
        } else {
            if (model.paymentMethodGuid && model.paymentMethodKey && model.paymentMethodKey != "onlinePayment") {
                return true
            }
        }
        return false
    })

    const validationShipment = $(() => {
        if (model.addressGuid && model.shipmentMethodGuid) {
            return true
        }

        return false
    })

    useVisibleTask$(async ({ track }) => {
        track(() => [
            model.addressGuid,
            model.gatewayGuid,
            model.gatewayKey,
            model.paymentMethodGuid,
            model.paymentMethodKey,
            model.shipmentMethodGuid
        ])
        if (paymentOnly) {
            isValid.value = await validationPayment()
        } else {
            isValid.value = await validationPayment() && await validationShipment()

        }
    })

    return {
        handleSubmit,
        isValid,
        model,
        progress,
    }
}

export default useCheckout
