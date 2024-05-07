const Attributes = ({
    attributes
}) => {

    const uniqBy = (arr, key) => {
        return [
            ...new Map(
                arr.map(x => [key[x], x])
            ).values()
        ]
    }

    return <div>

        {
            attributes.map(attribute => <>
                <div class="flex items-start gap-2">
                    <span class="text-sm shrink-0">{attribute.title}</span>
                    <span>:</span>
                    <p class="flex items-center gap-0.5 flex-wrap">
                        {
                            uniqBy(attribute.relatedItems.values, "value").map(item => <>
                                <span
                                    class="text-sm"
                                    key={item.id}
                                >{item.value}</span>
                            </>
                            )
                        }
                    </p>
                    <span>{attribute?.relatedItems?.values?.[0]?.unitsUnitTitle}</span>
                </div>
            </>
            )
        }
    </div>
}

export default Attributes
