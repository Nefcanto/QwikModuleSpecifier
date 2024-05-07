import getLocale from "./GetLocale"

const isRtl = () => {
    var locale = getLocale()
    return locale.isRtl ?? false
}

export default isRtl
