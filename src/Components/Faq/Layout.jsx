import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Accordion } from "Shared"

const Layout = component$(({
    items,
    title,
}) => {

    const activeAccordionId = useSignal()

    const accordionClickHandler = $(id => {

        if (id === activeAccordionId.value) {
            activeAccordionId.value = ""
        } else {
            activeAccordionId.value = id
        }
    })

    return <div class="max-w-6xl mx-auto px-2 2xl:px-0 w-full">
        <h1 class="w-full pb-2 border-b border-custom-color3 flex items-center text-xl font-bold text-custom-color32">
            {title}
        </h1>

        <div class="w-full flex flex-col text-start border border-custom-color3 bg-white p-4 md:p-8 mt-4">
            {items?.map(qa => <Accordion
                clickHandler={accordionClickHandler}
                isOpen={activeAccordionId?.value === qa?.id}
                item={qa}
                key={qa.id}
                questionClass="text-custom-color14 flex-row-reverse [&>svg]:fill-custom-color14 group font-black hover:text-custom-color1"
                answerClass="text-custom-color32"
                title={qa?.question}
            >
                {qa.answer}
            </Accordion>
            )}
        </div>
    </div>
})

export default Layout
