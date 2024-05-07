import { component$ } from "@builder.io/qwik"
import { useComment } from "Social"
import {
    LongText,
    Text,
} from "Forms"
import {
    merge,
    Message,
} from "Base"

const AddComment = component$(({
    body,
    buttonClass,
    containerClass,
    ctaText,
    entity,
    errorMessage,
    fieldClass,
    name,
    submit: textButton,
    successMessage,
    title,
    ...rest
}) => {

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
    } = useComment(entity)

    return <div class={merge("max-w-full w-[600px] flex flex-col gap-2 mx-auto mt-10 md:mt-12 mb-10 md:mb-20", containerClass)}>
        <div class="font-bold text-lg mb-4 text-custom-color1">
            {title}
        </div>
        <Text
            modelBind={model}
            property="Name"
            placeholder={name?.placeholder}
            class={merge("w-full bg-gray-100 rounded px-3 py-2 placeholder:text-gray-500 focus:outline-none", fieldClass)}
        />
        <LongText
            modelBind={model}
            property="Body"
            placeholder={body?.placeholder}
            class={merge("w-full bg-gray-100 rounded px-3 py-2 placeholder:text-gray-500 focus:outline-none", fieldClass)}
        />
        <div class="flex justify-end mt-1">
            <div
                class={merge("text-center font-bold px-6 py-2 rounded bg-custom-color1 text-custom-color2 hover:bg-custom-color2 hover:text-custom-color1 cursor-pointer focus:outline-none transition-all", buttonClass)}
                onClick$={handleSubmit}
            >
                {ctaText || textButton}
            </div>
        </div>

        {
            isMessageShown.value &&
            <Message
                isSuccess={isSuccess.value}
                message={isSuccess.value ? successMessage : errorMessage}
            />
        }

    </div>
})

export default AddComment
