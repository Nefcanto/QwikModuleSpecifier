import { component$ } from "@builder.io/qwik"
import { Image } from "Base"
import {
    RichText,
    TabButton,
} from "Shared"
import {
    Questions,
    Reviews,
} from "ProductParts"

const Tabs = component$(({
    activeTabName,
    comments,
    questions,
    content,
    product,
    productStatics,
    handleTabClick,
    tabItems,
    variantContent,
    questionForm,
    form,
    fields,
}) => {

    const tabs = [
        {
            name: tabItems.specificationKey,
            component: <>
                <RichText content={variantContent ?? content} />
                {
                    product.relatedItems.diagramImages?.map(image => <Image
                        alt={image.title}
                        containerClass="w-full"
                        key={image.id}
                        src={image.relatedItems.url}
                    />)
                }
                {
                    product.relatedItems.dimensionsImages?.map(image => <Image
                        alt={image.title}
                        containerClass="w-full"
                        key={image.id}
                        src={image.relatedItems.url}
                    />)
                }
            </>
        },
        {
            name: tabItems.writeReviewKey,
            component: <Reviews
                comments={comments}
                fields={fields}
                form={form}
                product={product}
            />
        },
        {
            name: tabItems.askQuestionKey,
            component: <Questions
                {...productStatics}
                {...questionForm}
                questions={questions}
                entityGuid={product.guid}
            />
        },
    ]

    return <div class="w-full border border-custom-color3 shadow-xl bg-white">
        <div class="px-1 bg-custom-color2 m-2 pt-4 flex border-b border-custom-color3">

            {
                tabs.map(tab => <TabButton
                    selected={activeTabName?.value === tab.name}
                    click={handleTabClick}
                    key={tab.id}
                    name={tab.name}
                >
                    {tabItems?.[tab.name]}

                </TabButton>)}

        </div>
        <div class="mt-10 px-3 md:px-8 pb-3 md:pb-8">
            {
                tabs.find(tab => tab.name === activeTabName?.value)?.component
            }
        </div>
    </div>
})

export default Tabs
