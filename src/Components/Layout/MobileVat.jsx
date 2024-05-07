import {
    $,
    component$,
    useContext,
} from "@builder.io/qwik"
import { AppContext } from "Base"
import { Toggle } from "Shared"

const MobileVat = component$(({ headerItems }) => {

    const app = useContext(AppContext)

    const vatChangeHandler = $(() => {
        app.isIncludeVat = !app.isIncludeVat
    })

    return <div class="col-start-7 col-end-13 flex justify-end items-center gap-x-1 text-xs text-custom-color14 font-bold md:hidden pe-4 2xl:px-0">
        <p class="flex flex-col justify-center">
            <span>{headerItems?.includeText}</span>
            <span>{headerItems?.vatText}</span>
        </p>
        <Toggle
            id="toggleTwo"
            checked={app.isIncludeVat}
            onChange={vatChangeHandler}
        />
        <p class="flex flex-col justify-center">
            <span>{headerItems?.excludeText}</span>
            <span>{headerItems?.vatText}</span>
        </p>
    </div>
})

export default MobileVat
