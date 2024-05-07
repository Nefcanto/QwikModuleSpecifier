import {
    $,
    component$,
} from "@builder.io/qwik"
import {
    AddressCard,
} from "CheckoutParts"
import { Plus } from "Svg"

const Addresses = component$(({
    addAddressHandler,
    addresses,
    addressStatics,
    packageModel,
    session = { session }

}) => {

    return <>
        <div class="w-full my-4">
            <p class="font-cold text-xl font-bold text-custom-color14">{addressStatics?.savedAddressesText}</p>
            <p class="py-5 text-lg text-custom-color14">{addressStatics?.selectAddressText}</p>
        </div>

        <div class="w-full flex flex-wrap items-center justify-center gap-4">
            <div class="w-full">
                {addresses?.length < 1 &&
                    <strong class="py-2 flex">{addressStatics?.noAddressText}</strong>}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full items-center justify-center">
                    {
                        addresses?.map(address => <div
                            key={address.id}>
                            <AddressCard
                                address={address}
                                addresses={addresses}
                                addressStatics={addressStatics}
                                click={$(() => {
                                    packageModel.addressGuid = address.guid
                                })}
                                isActive={address.guid == packageModel.addressGuid}
                                key={address.id}
                                session={session}
                            />
                        </div>
                        )
                    }
                    <div
                        onClick$={addAddressHandler}
                        class="w-full h-full border rounded-md border-2 border-dotted w-full h-full flex flex-col items-center justify-center gap-5 group p-4 cursor-pointer"
                    >
                        <div class="w-14 h-14 rounded-full border border-2 border-gray-600 flex items-center justify-center group-hover:border-green-500">
                            <Plus class="w-8 fill-gray-600 group-hover:fill-green-500" />
                        </div>
                        <span class="group-hover:text-green-500">
                            {addressStatics?.addAddressText}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </>
})

export default Addresses
