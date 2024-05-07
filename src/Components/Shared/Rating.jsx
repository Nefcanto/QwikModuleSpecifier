import { Star } from "Svg"

const Rating = ({ length }) => {
    return <div class="flex items-center gap-x-2">
        <div class="flex items-center gap-x-0.5">
            {
                new Array(+length).fill(+length).map(item => <Star
                    key={item.id}
                    class="w-5 h-5 fill-custom-color3"
                />
                )
            }
        </div>
        <span class="text-xs">({length})</span>
    </div>
}

export default Rating
