import { component$ } from "@builder.io/qwik"
import {
    SignIn,
    SignOut,
    useAuthSession,
} from "Accounts"
import { Progress } from "Shared"
import { UserIcon } from "Svg"

const User = component$(({
    actonItemsClass,
    authActions,
    headerItems,
}) => {

    const session = useAuthSession()

    return <>
        {
            session?.value?.user
                ?
                <div class="hidden md:flex relative group col-start-9 col-end-11 md:order-0 xl:order-2">
                    < a
                        href={authActions?.dashboardLink}
                        class="lg:flex flex-col justify-center items-center lg:gap-x-2 lg:items-center"
                    >
                        <UserIcon class="w-6 md:w-10 mx-auto fill-custom-color1" />
                        <span
                            dir="ltr"
                            class="block text-center text-sm w-[150px] px-1 overflow-x-hidden font-medium opacity-90 text-custom-color14"
                        >
                            {session.value?.user?.email.slice(0, 14)}
                        </span>
                    </a>
                    <div class="rounded-md shadow-[0px_2px_10px_2px_rgba(0,0,0,0.2)] top-20 opacity-0 invisible z-30 group-hover:visible group-hover:opacity-100 group-hover:top-10 transition-all duration-200 absolute bottom-0 w-[80%] mx-auto h-max start-0 end-0 bg-white text-center hidden md:block border">
                        <div class="text-sm px-2 divide-y">
                            <a
                                class="py-3 inline-block"
                                href={authActions?.dashboardLink}
                            >
                                {authActions?.dashboardText}
                            </a>
                            <div class="py-3">
                                <SignOut progress={Progress}>
                                    <button class="text-red-700 cursor-pointer">{authActions?.logoutText}</button>
                                </SignOut>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div class="hidden md:flex col-start-9 col-end-11 md:order-0 xl:order-2 justify-center border-e border-custom-color3">
                    <SignIn progress={Progress}>
                        <button class={`${actonItemsClass}`}>
                            <UserIcon class="w-6 md:w-10" />
                            <span>{headerItems?.accountTitle}</span>
                            <span class="text-xs text-gray-400 ">{headerItems?.accountSubTitle}</span>
                        </button>
                    </SignIn>
                </div>
        }
    </>
})

export default User
