import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Form } from "@builder.io/qwik-city"
import {
    useAuthSession,
    useAuthSignin,
    useAuthSignout,
} from "Accounts"
import {
    ArrowDown,
    UserIcon,
} from "Svg"

const MobileLogin = component$(({
    authActions,
    headerItems,
}) => {

    const session = useAuthSession()
    const signIn = useAuthSignin()
    const signOut = useAuthSignout()
    const isOpenMenu = useSignal(false)

    return <>
        {session?.value?.user ?
            <div
                onClick$={() => isOpenMenu.value = !isOpenMenu.value}
                class="min-w-fit flex gap-1 items-center text-xs text-white md:hidden justify-end relative"
            >
                <UserIcon class="w-6 h-6 fill-white" />
                <ArrowDown class="w-5 fill-white cursor-pointer" />
                <div class={`rounded-md shadow-[0px_2px_10px_2px_rgba(0,0,0,0.2)] z-30 transition-all duration-200 absolute top-7 w-28 h-max end-0 bg-white text-center block md:hidden border ${isOpenMenu.value ? "visible" : "invisible"}`}>
                    <span class="flex pt-5 pb-2 justify-center items-center text-black">{session.value?.user?.email.slice(0, 14)}</span>
                    <div class="text-sm px-2 divide-y">
                        <a
                            class="py-3 inline-block text-black"
                            href={authActions?.dashboardLink}
                        >
                            {authActions?.dashboardText}
                        </a>
                        <div class="py-3">
                            <Form action={signOut}>
                                <input
                                    name="callbackUrl"
                                    type="hidden"
                                    value="/"
                                />
                                <button class="text-red-700 cursor-pointer">{authActions?.logoutText}</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div> :
            <div class="min-w-fit flex gap-1 items-center text-xs text-white md:hidden relative">

                <Form action={signIn}>
                    <input
                        name="providerId"
                        type="hidden"
                        value="keycloak"
                    />
                    <input
                        name="options.callbackUrl"
                        type="hidden"
                        value="/dashboard"
                    />
                    <button class="flex items-center">
                        <UserIcon class="w-6 h-6 fill-white mx-auto" />
                        <span>{headerItems?.accountSubTitle}</span>
                    </button>
                </Form>
            </div>
        }
    </>
})

export default MobileLogin
