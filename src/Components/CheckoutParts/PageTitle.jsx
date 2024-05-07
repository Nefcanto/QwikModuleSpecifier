import { Image } from "Base"

const PageTitle = ({ checkoutStatics }) => {
    return <div class="flex items-center justify-between">
        <div class="flex items-center gap-4 py-4 border-b mb-5 w-full">
            <Image
                src={checkoutStatics?.secureIcon}
                containerClass="w-10 aspect-square overflow-hidden rotate-[-45deg] rtl:rotate-[45deg]"
            />
            <span class="text-2xl font-bold text-gray-700">
                {checkoutStatics.secureTitle}
            </span>
        </div>
    </div>
}

export default PageTitle
