import {
    $,
    component$,
    Slot,
} from "@builder.io/qwik"
import {
    merge,
    Message,
} from "Base"

const Form = component$(({
    class: internalClass,
    ctaText,
    errorMessage,
    handleSubmit,
    isMessageShown,
    isSuccess,
    successMessage,
}) => {
    return <form
        class={merge("w-full flex flex-col gap-4 md:px-5 mb-10 md:mb-20 pb-12", internalClass)}
        novalidate
    >
        <div class="form-body flex flex-col gap-2">
            <Slot />
        </div>
        <div class="flex justify-end mt-1 form-actions">
            <div
                class="w-full text-center text-md py-2 px-4 rounded-md bg-custom-color1/80 hover:bg-custom-color1 transition-all cursor-pointer"
                onClick$={handleSubmit}
            >
                {ctaText}
            </div>
        </div>
        {
            isMessageShown?.value &&
            <Message
                isSuccess={isSuccess.value}
                message={isSuccess.value ? successMessage : errorMessage}
            />
        }
    </form>
})

export default Form
