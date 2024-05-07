import {
    $,
    component$,
    useContext,
} from "@builder.io/qwik"
import { AppContext } from "Base"
import { Toggle } from "Shared"

const DesktopVat = component$(({ headerItems }) => {

    const app = useContext(AppContext)

    const vatChangeHandler = $(() => {
        app.isIncludeVat = !app.isIncludeVat
    })

    return <div class="flex items-center gap-x-1 text-xs text-white font-bold">
        <span class="flex gap-x-1">
            <span>{headerItems?.includeText}</span>
            <span>
                {headerItems?.vatText}
            </span>
        </span>
        <Toggle
            id="toggleOne"
            checked={app.isIncludeVat}
            onChange={vatChangeHandler}
        />
        <span class="flex gap-x-1">
            <span>{headerItems?.excludeText}</span>
            <span>
                {headerItems?.vatText}</span>
        </span>
    </div>
})

export default DesktopVat
