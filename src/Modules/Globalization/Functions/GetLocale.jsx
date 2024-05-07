import { useLocation } from "@builder.io/qwik-city"

const getLocale = () => {
    const { url } = useLocation()
    const { searchParams } = url
    var locale = {}
    const queryParameterLocale = searchParams.get("locale")
    if (queryParameterLocale) {
        locale = globalThis.locales.find(i => i.key === queryParameterLocale) ?? {}
    } else {
        locale = globalThis.defaultLocale
    }
    return locale
}

export default getLocale
