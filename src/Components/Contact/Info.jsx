import { Image } from "Base"

const Info = ({
    items
}) => {

    return <>
        {
            items?.map(item => <div
                class="bg-white border border-custom-color3 px-4 py-7 md:px-8 mt-4"
                key={item.id}
            >
                <h2 class="pb-2 border-b-[1px] border-custom-color3 text-xl font-bold text-custom-color14">{item?.title}</h2>

                <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 items-center mt-4 text-custom-color32">
                    <div class="col-span-1 px-4">
                        <Image
                            alt={item?.title}
                            containerClass="w-24 sm:max-w-full sm:w-48 mx-auto"
                            src={item?.image}
                        />
                    </div>

                    <div class="col-span-1 sm:col-span-3 px-4">
                        <p class="text-sm">{item?.description}</p>
                    </div>
                </div>
            </div>
            )
        }
    </>
}

export default Info
