import {
    component$,
    useContext,
} from "@builder.io/qwik"
import {
    AppContext,
    Image,
} from "Base"
import { useCompareUrl } from "Modules"

const Compare = component$(({ productsStatics }) => {

    const app = useContext(AppContext)
    const compareList = app?.compare && [...app?.compare]

    const generateCompareIds = () => {

        if (app.compare && [...app.compare]?.length > 1) {
            return ([...app.compare].map(el => el.id).join(","))
        }
    }

    return <div class={`fixed bottom-0 start-0 z-30 w-full transition-all shadow shadow-lg bg-white border-t ${compareList?.length > 1 ? "translate-y-0" : "translate-y-full"}`}>
        <div class="max-w-6xl mx-auto px-4 2xl:px-0 flex items-center gap-10">

            <a
                href={useCompareUrl("product", generateCompareIds())}
                class="w-fit rounded-lg px-4 py-1 bg-green-500 ">
                {productsStatics.compare}
            </a>
            <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2 py-4">
                {
                    compareList?.map(product => <div
                        class="relative shadow shadow-lg bg-white flex flex-col items-center justify-center gap-2 p-2 rounded-md border"
                        key={product.id}
                    >
                        <Image
                            containerClass="w-10 aspect-square rounded-sm overflow-hidden"
                            src={product.relatedItems.imageUrl}
                        />
                        <span
                            onClick$={() => { app.compare = [...app.compare].filter(p => p.id !== product.id) }}
                            class="absolute top-0.5 start-1 z-10 cursor-pointer hover:text-red-500">x</span>
                        <span class="text-xs flex justify-center max-w-[120px] mx-auto text-center">{product.title}</span>
                    </div>
                    )
                }
            </div>
        </div>
    </div>
})

export default Compare
