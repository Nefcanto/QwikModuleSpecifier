import { component$ } from "@builder.io/qwik"
import {
    DesktopVat,
    Links,
    MobileLogin,
    NeedHelp,
} from "Layout"

const TopBar = component$(({
    authActions,
    headerItems,
    mainPhone,
    session,
    signIn,
    signOut,
}) => {

    return <div class="bg-custom-color1 bg-gradient-to-b from-custom-color13 to-custom-color14 py-1">
        <div class="flex justify-between items-center gap-4 max-w-6xl mx-auto px-4 2xl:px-0">
            <MobileLogin
                authActions={authActions}
                headerItems={headerItems}
                session={session}
                signIn={signIn}
                signOut={signOut}
            />
            <div class="flex items-center justify-between gap-4">
                <NeedHelp headerItems={headerItems} />
                <div class="hidden sm:flex items-center justify-start gap-x-2">
                    <Links headerItems={headerItems} />
                </div>
                {/* <DesktopVat headerItems={headerItems} /> */}
            </div>
            <a
                class="text-white hidden md:block"
                href={`tel:${mainPhone}`}
            >
                {mainPhone}
            </a>
        </div>
        <div class="max-w-6xl mx-auto px-4 flex xs:justify-center sm:hidden gap-2 mt-0.5 overflow-x-auto">
            <Links headerItems={headerItems} />
        </div>
    </div>
})

export default TopBar
