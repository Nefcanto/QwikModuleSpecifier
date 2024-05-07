import { component$ } from "@builder.io/qwik"
import { RichText } from "Base"
import {
    Check,
    Form as FormWrapper,
    LongText,
    MultiSelect,
    Numeric,
    Select,
    Text,
    useForm,
} from "Forms"

const Form = component$(({
    forms,
    slug
}) => {
    const form = forms?.find(form => form.slug === slug)

    const {
        handleSubmit,
        model,
        ...rest
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })
    return <>
        <div>
            <div class="relative max-w-full w-[560px] mx-auto px-5 mt-10 md:mt-20 bg-gray-200 rounded-md">
                <h2 class="text-center font-bold text-3xl form-title pt-12 mb-10">
                    {form?.title}
                </h2>
                {
                    form?.description &&
                    <p class="form-description mt-4 mb-6">
                        {form?.description}
                    </p>
                }
                <FormWrapper
                    handleSubmit={handleSubmit}
                    {...form}
                    {...rest}
                >
                    {form?.relatedItems?.fields?.map(field => {
                        switch (field.type) {
                            case "text":
                                return <Text
                                    {...field}
                                    modelBind={model}
                                    property={field.key}
                                />
                            case "longText":
                                return <LongText
                                    {...field}
                                    modelBind={model}
                                    property={field.key}
                                />
                            case "singleChoice":
                                return <Select
                                    {...field}
                                    modelBind={model}
                                    choices={field?.relatedItems?.choices}
                                    property={field.key}
                                />
                            case "multiChoice":
                                return <MultiSelect
                                    {...field}
                                    modelBind={model}
                                    choices={field?.relatedItems?.choices}
                                    property={field.key}
                                />

                            case "boolean":
                                return <Check
                                    {...field}
                                    modelBind={model}
                                    property={field.key}
                                />
                            case "numeric":
                                return <Numeric
                                    {...field}
                                    modelBind={model}
                                    property={field.key}
                                />
                            default:
                                break
                        }
                    })}
                </FormWrapper>
                <div class="mt-14 mb-20 leading-8">
                    <RichText
                        content={form?.relatedItems?.content}
                        class="prose max-w-none [&>ul>li]:my-[3px] [&>ol>li]:my-[3px] [&>img]:my-[25px] [&>img]:mx-auto [&>table]:overflow-x-scroll [&>table]:border [&>table]:border-slate-950 [&>table]:border-collapse [&>td]:py-[10px] [&>td]:px-[5px] [&>td]:border [&>td]:border-slate-950 [&>td]:border-collapse [&>th]:border [&>th]:border-slate-950 [&>th]:border-collapse"
                        h1="font-bold mt-[30px] text-[1.75rem]"
                        h2="font-bold mt-[20px] text-[1.5rem]"
                        h3="font-bold mt-[20px] text-[1.25rem]"
                        h4="font-bold mt-[15px] mb-[10px] text-[1.15rem]"
                        h5="mt-[3px] mb-[10px] font-600 text-[1.08rem]"
                        h6="mt-[3px] mb-[10px] font-600 text-[1.08rem]"
                        p="mt-[3px] mb-[10px]"
                        a="transition-all"
                        ul="my-[1rem] mx-[1rem] list-disc"
                        ol="my-[1rem] mx-[1rem] list-decimal"
                    />
                </div>
            </div>
        </div >
    </>
})

export default Form
