import { component$ } from "@builder.io/qwik"
import { merge } from "Base"
import Field from "./Field"

const File = component$(({
    ariaLabel,
    class: internalClass,
    label,
    modelBind,
    placeholder,
    property,
    ...rest
}) => {
    return <Field {...rest}>
        <input
            class={merge("text-blue-600 rounded", internalClass)}
            type="file"
            aria-label={ariaLabel ?? label ?? placeholder}
            placeholder={placeholder}
            multiple
            onInput$={(e) => {
                console.log(property)
                window[property] = e.target.files
            }}
        />
        <label>
            {label}
        </label>
    </Field>
})

export default File
