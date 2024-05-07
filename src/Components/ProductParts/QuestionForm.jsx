import { component$ } from "@builder.io/qwik"
import { Message } from "Base"
import {
    Hidden,
    LongText,
    Text,
    useForm,
} from "Forms"
import { Loading } from "Svg"

const QuestionForm = component$(({
    fields,
    form,
    entityGuid: ProductEntityGuid,
    ...rest
}) => {
    const {
        content,
        entityGuid,
        entityType,
        message,
        title,
    } = fields

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form: form,
    })

    return <>
        <div class="m-2 lg:mx-2 my-10 lg:my-8 sm:max-w-[85%] sm:mx-auto lg:max-w-full">
            <div class="max-w-lg mx-auto mt-5">
                <p class="font-bold text-lg md:text-xl">
                    {form?.title}
                </p>
                <Text
                    class="w-full bg-custom-color2 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    placeholder={title?.placeholder}
                    property={title?.key}
                    type="text"
                />
                <LongText
                    class="w-full bg-custom-color2 px-5 py-4 mt-4 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    placeholder={content?.placeholder}
                    property={content?.key}
                />
                <Hidden
                    modelBind={model}
                    placeholder={entityGuid?.placeholder}
                    property={entityGuid?.key}
                    value={ProductEntityGuid}
                />
                <Hidden
                    modelBind={model}
                    placeholder={entityType?.placeholder}
                    property={entityType?.key}
                    value="products"
                />

                <div class="text-end">
                    <button
                        aria-label={form?.ctaText}
                        class={`${progress.value ? "bg-gray-400" : ""}w-40 py-3 inline-block mx-auto text-center text-lg text-slate-50 hover:text-slate-50 bg-custom-color1 transition-all`}
                        onClick$={handleSubmit}
                    >
                        {
                            progress.value
                                ? <Loading class="animate-spin w-7 aspect-square mx-auto" />
                                : form?.ctaText
                        }
                    </button>
                </div>
            </div>
            {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? form?.successMessage : form?.errorMessage}
                />
            }
        </div>
    </>
})

export default QuestionForm
