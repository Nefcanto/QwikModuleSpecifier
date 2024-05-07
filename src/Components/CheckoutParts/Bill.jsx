import { Image } from "Base"

const Bill = ({ cart }) => {

    return <div class="w-full max-w-6xl mx-auto">
        <div class="flex flex-col items-start p-4 rounded-md">
            {
                cart?.orderLines?.map(order => <div class="w-full p-1 border-b border-b-2 border-gray-500 border-dotted flex justify-between text-sm items-center last:border-none">
                    <div class="flex items-center gap-x-1">
                        <Image
                            containerClass="w-10 aspect-square rounded-sm overflow-hidden"
                            imageClass="w-full h-full object-cover"
                            src={order.relatedItems?.entity?.relatedItems?.imageUrl}
                        />
                        <span>{order?.quantity}</span>
                        <span>X</span>
                        <span>
                            {order?.relatedItems?.entity?.title}
                        </span>
                    </div>

                    <span class="justify-self-end">{order?.totalPrice?.toLocaleString()}</span>
                </div>
                )
            }
        </div>
    </div>
}

export default Bill
