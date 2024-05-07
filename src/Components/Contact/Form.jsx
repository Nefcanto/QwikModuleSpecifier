import { component$ } from "@builder.io/qwik"
import { Message } from "Base"
import {
    LongText,
    Text,
    useForm,
} from "Forms"
import { Loading } from "Svg"

const Form = component$(({
    fields,
    form,
}) => {
    const {
        email,
        fullName,
        message,
        phone,
        subject,
    } = fields

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })

    return <>
        <div class="bg-white border border-custom-color3 px-4 py-7 md:px-8 mt-4">

            <h2 class="pb-2 border-b-[1px] border-custom-color3 text-xl font-bold text-custom-color14">
                {form?.title}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mt-4 md:mt-10">
                <div class="w-full">
                    <Text
                        type="text"
                        class="w-full bg-custom-color3 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={fullName?.placeholder}
                        property={fullName?.key}
                    />
                </div>
                <div class="w-full">
                    <Text
                        type="text"
                        class="w-full bg-custom-color3 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={subject?.placeholder}
                        property={subject?.key}
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">

                <div class="w-full">
                    <Text
                        type="mail"
                        class="w-full bg-custom-color3 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={email?.placeholder}
                        property={email?.key}
                    />
                </div>
                <div class="w-full">
                    <Text
                        type="mail"
                        class="w-full bg-custom-color3 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={phone?.placeholder}
                        property={phone?.key}
                    />
                </div>
            </div>

            <div>
                <LongText
                    class="w-full mt-4 bg-custom-color3 px-5 py-4 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    placeholder={message?.placeholder}
                    property={message?.key}
                >
                </LongText>
            </div>
            <div class="mt-4 text-end">

                <button
                    id="buttonSubmit"
                    aria-label={form.ctaText}
                    class={`${progress.value ? "bg-gray-300" : ""} px-20 py-2 inline-block ms-auto text-center text-lg text-slate-50 bg-custom-color1 border-4 border-custom-color1 hover:bg-transparent hover:border-custom-color2 hover:text-custom-color2 duration-500 transition-all`}
                    onClick$={handleSubmit}
                >
                    {
                        progress.value
                            ? <Loading class="animate-spin w-7 aspect-square mx-auto" />
                            : form.ctaText
                    }
                </button>

            </div>
            {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? form.successMessage : form.errorMessage}
                />
            }
        </div>
    </>
})

export default Form
