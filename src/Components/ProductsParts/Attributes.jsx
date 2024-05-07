const Attributes = ({ productAttributes }) => {

    return <ul>
        {productAttributes?.slice(0, 3).map(attribute => <li
            class="ps-4 py-0.5 text-xs before:block before:w-1 before:shrink-0 before:aspect-square before:rounded-full before:bg-black flex gap-x-1 items-baseline">
            <span class="shrink-0">{attribute.attributesAttributeTitle}</span>
            <span>:</span>
            <span class="line-clamp-2">{attribute.value}</span>
            <span>{attribute?.unitsUnitsTitle}</span>
        </li>
        )}
    </ul>
}

export default Attributes
