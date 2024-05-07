import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { md } from "Base"

const Taglines = component$(({ taglines }) => {

    const currentTaglineIndex = useSignal(0)
    const isOpacityIncreasing = useSignal(true)
    const currentOpacity = useSignal(0)

    useVisibleTask$(() => {

        if (screen.availWidth < md) {
            const taglineElement = document.getElementById(".current-tagline")
            setInterval(() => {
                currentTaglineIndex.value = currentTaglineIndex.value == (taglines?.items?.length - 1) ? 0 : currentTaglineIndex.value + 1
            }, 2000)
            setInterval(() => {
                if (!taglineElement) {
                    return
                }
                if (currentOpacity.value == 100) {
                    isOpacityIncreasing.value = false
                }
                if (currentOpacity.value == 0) {
                    isOpacityIncreasing.value = true
                }
                if (isOpacityIncreasing.value) {
                    currentOpacity.value = currentOpacity.value + 1
                    taglineElement.style.opacity = `${currentOpacity.value}%`
                } else {
                    currentOpacity.value = currentOpacity.value - 1
                    taglineElement.style.opacity = `${currentOpacity.value}%`
                }
            }, 10)
        }
    })

    return <div class="w-full border-b border-custom-color3">
        <div class="max-w-6xl mx-auto">
            <a
                class="current-tagline md:hidden w-full flex items-center justify-center gap-2 p-1 border-b border-custom-color3 block"
                href={taglines?.items[currentTaglineIndex.value]?.link}
            >
                <p class="font-bold block text-custom-color14 text-sm">
                    {taglines?.items[currentTaglineIndex.value]?.boldTitle}
                </p>
                <p class="block text-xs">
                    {taglines?.items[currentTaglineIndex.value]?.regularTitle}
                </p>

            </a>
            <div class="md:flex items-center justify-center hidden">
                {
                    taglines?.items.map((item, index) => <a
                        class={`block w-full flex items-center justify-center gap-2 line-clamp-1 whitespace-nowrap m-1 ${index < (taglines?.items?.length - 1) && "border-e border-custom-color3"}`}
                        href={taglines?.items[currentTaglineIndex.value]?.link}
                        key={item.id}
                    >
                        <p class="font-bold block text-custom-color14 text-xs">
                            {item.boldTitle}
                        </p>
                        <p class="block text-xs text-custom-color33">
                            {item.regularTitle}
                        </p>
                    </a>
                    )
                }
            </div>
        </div>
    </div>
})

export default Taglines
