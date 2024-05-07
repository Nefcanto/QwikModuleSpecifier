import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import { Image } from "Base"
import { Accordion } from "Shared"

const Accordions = component$(({
    aboutFooterLinks,
    customerServices,
    quickAccessFooterLinks,
    shoppingWithUs,
}) => {

    const activeAccordionId = useSignal()

    const accordionClickHandler = $(id => {

        if (id === activeAccordionId.value) {
            activeAccordionId.value = ""
        } else {
            activeAccordionId.value = id
        }
    })

    return <div class="sm:hidden">
        <Accordion
            isOpen={activeAccordionId.value === customerServices?.title}
            clickHandler={accordionClickHandler}
            title={customerServices?.title}
            item={customerServices}
        >
            {
                customerServices?.items?.map(item => <a
                    key={item.id}
                    href={item.link}
                    class="flex gap-x-1 items-center hover:underline"
                >
                    <Image
                        containerClass="w-10 aspect-square"
                        src={item.image}
                        alt={item.title}
                    />
                    <span class="text-sm">{item.title}</span>
                </a>
                )
            }
        </Accordion>
        <Accordion
            isOpen={activeAccordionId.value === shoppingWithUs?.title}
            clickHandler={accordionClickHandler}
            title={shoppingWithUs?.title}
            item={shoppingWithUs}
        >
            <div class="flex flex-col gap-y-2 mt-1">

                {
                    shoppingWithUs?.items?.map(item => <a
                        key={item.id}
                        href={item.link}
                        class="flex gap-x-1 items-center text-sm hover:underline"
                        aria-label={item.title}
                    >
                        <span>{item.title}</span>
                    </a>)
                }
            </div>
        </Accordion>
        <Accordion
            isOpen={activeAccordionId.value === aboutFooterLinks.title}
            clickHandler={accordionClickHandler}
            title={aboutFooterLinks.title}
            item={aboutFooterLinks}
        >
            <div class="flex flex-col gap-y-2 mt-1">
                {
                    aboutFooterLinks.items.map(item => <a
                        key={item.id}
                        href={item.link}
                        class="flex gap-x-1 items-center text-sm hover:underline"
                        aria-label={item.title}
                    >
                        <span>{item.title}</span>
                    </a>)
                }
            </div>
        </Accordion>
        <Accordion
            isOpen={activeAccordionId.value === quickAccessFooterLinks.title}
            clickHandler={accordionClickHandler}
            title={quickAccessFooterLinks.title}
            item={quickAccessFooterLinks}
        >
            <div class="flex flex-col gap-y-2 mt-1">
                {
                    quickAccessFooterLinks.items.map(item => <a
                        key={item.id}
                        href={item.link}
                        class="flex gap-x-1 items-center text-sm hover:underline"
                        aria-label={item.title}
                    >
                        <span>{item.title}</span>
                    </a>)
                }
            </div>
        </Accordion>
    </div>
})

export default Accordions
