import {
    component$,
    useSignal,
    $,
} from "@builder.io/qwik"
import { useAuthSession } from "Accounts"
import { useCheckout } from "Sales"
import { AddressForm } from "Contacts"
import {
    Addresses,
    EmptyCheckout,
    PageTitle,
    Payments,
    Products,
    Shipments,
} from "CheckoutParts"
import {
    GradientButton,
    Loader,
    LoginNeeded,
} from "Shared"

const LayoutWrapper = component$(({
    addresses,
    addressStatics,
    cart,
    checkoutStatics,
    gateways,
    loginNeededStatics,
    paymentMethods,
    paymentStatics,
    shipmentMethods,
    shipmentMethodStatics,
}) => {

    const session = useAuthSession()
    const isOpen = useSignal(false)

    const {
        handleSubmit,
        isValid,
        model,
        progress,
    } = useCheckout({})

    const addAddressHandler = $(() => {
        isOpen.value = true
    })

    return <>
        {
            session?.value?.user ? < section class=" mx-auto px-4 py-6 2xl:px-0 max-w-6xl flex flex-col items-center justify-center w-full gap-y-4" >
                <div class={`w-full border rounded-md my-5 p-4 md:p-10 min-h-[300px]`}>
                    <PageTitle checkoutStatics={checkoutStatics} />
                    {cart ?
                        <>
                            {cart.orderLines && cart.orderLines.length === 0 ?
                                <EmptyCheckout {...checkoutStatics} />
                                :
                                <>
                                    <Products
                                        checkoutStatics={checkoutStatics}
                                        cart={cart}
                                    />
                                    <Addresses
                                        addAddressHandler={addAddressHandler}
                                        addresses={addresses}
                                        packageModel={model}
                                        addressStatics={addressStatics}
                                        session={session}
                                    />
                                    <div class="w-full flex flex-col lg:flex-row my-5 gap-x-10 gap-y-5">
                                        <Shipments
                                            packageModel={model}
                                            shipmentMethods={shipmentMethods}
                                            shipmentMethodStatics={shipmentMethodStatics}
                                        />
                                        <Payments
                                            packageModel={model}
                                            paymentMethods={paymentMethods}
                                            paymentStatics={paymentStatics}
                                            gateways={gateways}
                                        />
                                    </div>
                                    <GradientButton
                                        class="w-fit my-6 md:mt-12 flex mx-auto disabled:bg-[linear-gradient(0deg,#71717a,#a1a1aa,#d4d4d8,#e4e4e7)]"
                                        disabled={!isValid.value}
                                        onClick$={handleSubmit}
                                    >
                                        <span>
                                            {checkoutStatics?.gotoGatewayText}
                                        </span>

                                    </GradientButton>
                                </>
                            }
                        </>
                        :
                        <Loader title={checkoutStatics.loadingTitle} />
                    }
                </div>
                <AddressForm
                    addresses={addresses}
                    addressStatics={addressStatics}
                    isOpen={isOpen}
                    session={session}
                />
            </section >
                :
                <LoginNeeded statics={loginNeededStatics} />
        }
    </>
})

export default LayoutWrapper
