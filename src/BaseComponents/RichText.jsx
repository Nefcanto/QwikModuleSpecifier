import {
    Element,
    Toc,
} from "Base"

const RichText = ({
    content,
    hasToc,
    tocClosedByDefault,
    tocHeadingClass,
    tocScrollMarginTop,
    tocTitle,
    ...rest
}) => {

    let elements = content && JSON.parse(content)

    elements = elements?.map((element, index) => {
        if (element?.type == "heading-two") {
            if (element?.attributes) {
                element.attributes = [...element.attributes, { name: "id", value: `h2-${index}` }]
                return element
            }
            element.attributes = [{ name: "id", value: `h2-${index}` }]
            return element
        }
        return element
    })

    const headingTwoElements = elements?.filter(i => i.type == "heading-two")

    return <div
        class={"richText " + (rest.class || "")}
    >
        {
            hasToc && <Toc
                scrollMarginTop={tocScrollMarginTop}
                title={tocTitle}
                headingTwoElements={headingTwoElements}
                closedByDefault={tocClosedByDefault}
            />
        }
        {
            elements?.map((item, index) => <Element
                key={index}
                headingTwoElements={headingTwoElements}
                {...item}
                {...rest}
            />)
        }
    </div>
}

export default RichText
