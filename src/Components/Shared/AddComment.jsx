import { component$ } from "@builder.io/qwik"
import { useComment } from "Social"
import {
    LongText,
    Text,
} from "Forms"
import { Message } from "Shared"

const AddComment = component$(({
    body,
    ctaText,
    email,
    entity,
    errorMessage,
    name,
    submit: textButton,
    successMessage,
    title,
}) => {

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
    } = useComment(entity)

    return <>
        <div class="w-full mx-auto my-10 md:mb-20">

            <p class="font-bold text-lg md:text-xl">
                {title}
            </p>

            <div class="flex flex-col sm:flex-row sm:gap-8">
                <div class="w-full">
                    <Text
                        class="w-full bg-custom-color2 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        property="Name"
                        placeholder={name?.placeholder}
                    />
                </div>
                <div class="w-full">
                    <Text
                        type="mail"
                        class="w-full bg-custom-color2 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={email?.placeholder}
                        property={email?.key}
                    />
                </div>
            </div>
            <div class="w-full">
                <LongText
                    class="w-full mt-4 bg-custom-color2 px-5 py-4 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    property="Body"
                    placeholder={body?.placeholder}
                />
            </div>
            <div class="flex justify-end mt-1">
                <span
                    class="w-40 py-3 inline-block mx-auto text-center text-lg text-slate-50 hover:text-slate-50 bg-custom-color1 transition-all"
                    onClick$={handleSubmit}
                >
                    {ctaText || textButton}
                </span>
            </div>

            {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? successMessage : errorMessage}
                />
            }

        </div>
    </>
})

export default AddComment
