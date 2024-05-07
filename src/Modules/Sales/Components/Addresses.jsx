import { useAddressesUrl } from "Contacts"
import { Plus } from "Sales"

const Addresses = ({
    addresses,
    addressStatics,
    localePathPrefix,
    packageModel,
}) => {

    return <div>
        <div class="flex items-center gap-1">
            <div class="w-4 aspect-square bg-custom-color9"></div>
            <p class="text-base font-bolder">{addressStatics.addressTitle}</p>
        </div>
        <div class="border p-4 mt-6">
            <p class="text-base font-bolder">{addressStatics.addressSubtitle}</p>
            <p class="text-sm font-bold flex items-center gap-2">
                <span class="text-gray-400">{addressStatics.client}</span>
                <span class="text-blue-500">x</span>
            </p>

            <div class="mt-10">
                {
                    addresses?.map(item => <div class="flex gap-2 md:items-center flex-col md:flex-row mb-4">
                        <div class="border p-2 grow">
                            <label
                                class="text-sm font-medium text-gray-900 block flex items-center gap-2">
                                <input
                                    key={item.id}
                                    type="radio"
                                    name="address"
                                    value={item.guid}
                                    class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                    onclick$={(e) => {
                                        packageModel.addressGuid = e.target.value
                                    }}
                                />
                                <span>
                                    {item.full}
                                </span>
                            </label>
                        </div>
                        {/* <div class="flex items-center gap-2 self-end md:self-stretch">
                            <div
                            // onClick$={}
                            >
                                <svg viewBox="0 -960 960 960"
                                    class="w-5 aspect-square fill-gray-400"
                                >
                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                </svg>
                            </div>

                            <div
                            // onClick$={}
                            >
                                <svg
                                    viewBox="0 -960 960 960"
                                    class="w-5 aspect-square fill-red-500"
                                >
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                </svg>
                            </div>
                        </div> */}
                    </div>
                    )}
                <a
                    class="my-10 flex items-center gap-1"
                    href={useAddressesUrl(localePathPrefix)}
                >
                    <Plus class="w-6 aspect-square fill-blue-500" />
                    <span class="text-sm text-blue-500">{addressStatics.addNewAddressTitle}</span>
                </a>
            </div>

        </div>
    </div>
}

export default Addresses
