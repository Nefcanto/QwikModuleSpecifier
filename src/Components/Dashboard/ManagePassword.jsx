import { component$ } from "@builder.io/qwik"
import { useAuthSession } from "Accounts"

const ManagePassword = component$(() => {

    const session = useAuthSession()

    return <div>
        <strong class="text-gray-500 text-lg font-bold border-bottom font-bold">manage password</strong>
        <div class="my-10 border px-5 py-10 flex flex-col items-center">

            <div class="flex flex-col w-full items-center">
                <span class="inline-block pt-4 text-custom-color14">current password: </span>
                <div class="w-full max-w-sm rounded-md overflow-hidden flex justify-between border-2 focus-within:border-2 focus-within:border-custom-color1 bg-white">
                    <input
                        class="grow p-2 border-none outline-none shadow-[inset_0_3px_8px_#e5e5e5]"
                        type="text"
                    />
                </div>
            </div>
            <div class="flex flex-col w-full items-center py-4">
                <span class="inline-block pt-4 text-custom-color14">new password: </span>
                <div class="w-full max-w-sm rounded-md overflow-hidden flex justify-between border-2 focus-within:border-2 focus-within:border-custom-color1 bg-white">
                    <input
                        class="grow p-2 border-none outline-none shadow-[inset_0_3px_8px_#e5e5e5]"
                        type="text"
                    />
                </div>
            </div>
            <button
                class="select-none border border-green-800 mx-auto w-full max-w-[200px] rounded-md text-white fill-white flex items-center justify-center hover:border-green-600 transition-all px-4 py-3 bg-[linear-gradient(0deg,#056a18_0,#3e961c_49%,#5eab2a_52%,#82c72c)]"
                type="button"
            >
                <span class="font-bold text-lg text-white">change password</span>
            </button>
        </div>
    </div>
})

export default ManagePassword
