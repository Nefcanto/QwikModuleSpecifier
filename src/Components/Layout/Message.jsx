import {
    component$,
    useContext,
} from "@builder.io/qwik"
import {
    AppContext
} from "Base"

const Message = component$(({ message }) => {

    const app = useContext(AppContext)

    return <>
        {
            app.messageIsShown && <div>
                {
                    app.messageKey ? (message[app.messageKey] ?? `[${app.messageKey}]`) : app.message
                }
            </div>
        }
    </>

})

export default Message
