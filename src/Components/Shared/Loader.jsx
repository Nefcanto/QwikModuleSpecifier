import { merge } from "Base"
import { Backdrop } from "Shared"
import { Loading } from "Svg"

const Loader = ({
    title,
    titleClass,
}) => {

    return <>
        <Backdrop
            class="bg-white opacity-[0.4]"
        />
        <div class="w-screen h-screen flex items-center justify-center fixed z-50 top-0 start-0 flex-col">
            <div class="-translate-y-10 flex items-center justify-center flex-col">

                <Loading class="animate-spin w-20 h-20 fill-custom-color1 stroke-5" />
                <p class={merge("w-full text-center text-lg text-custom-color14", titleClass)}>
                    {title}
                </p>
            </div>
        </div>
    </>
}

export default Loader
