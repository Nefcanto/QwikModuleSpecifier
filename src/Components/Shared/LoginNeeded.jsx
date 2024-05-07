import { component$ } from "@builder.io/qwik"
import { Form } from "@builder.io/qwik-city"
import { useAuthSignin } from "Accounts"

const LoginNeeded = component$(({ statics }) => {
    const signIn = useAuthSignin()
    return <div class="min-h-[50vh] w-full px-4 max-w-6xl flex flex-col items-center justify-center gap-8 mx-auto">
        <span
            class="[&>svg]:w-10 [&>svg]:fill-red-600"
            dangerouslySetInnerHTML={statics?.icon}
        >
        </span>
        <strong>
            {statics?.errorTitle}
        </strong>
        <span class="text-sm">
            {statics?.errorDescription}
        </span>
        <Form action={signIn}>
            <input
                name="providerId"
                type="hidden"
                value="keycloak"
            />
            <input
                name="options.callbackUrl"
                type="hidden"
                value="/checkout"
            />
            <button class="flex p-2 bg-gray-200 rounded-md text-sm">
                <span>{statics?.buttonText}</span>
            </button>
        </Form>
    </div>
})

export default LoginNeeded
