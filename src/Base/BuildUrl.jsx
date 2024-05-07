const buildUrl = ({
    extra,
    localePathPrefix,
    queryParams,
}) => {
    let extraParams = []
    let path = ""
    if (!extra) {
        extra = ""
    }
    if (extra.includes("?")) {
        path = extra.split("?")[0]
        extraParams = extra.split("?")[1]
    }
    else {
        path = extra
    }
    if (!queryParams) {
        queryParams = []
    }
    const mergedParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => {
        mergedParams.append(key, queryParams[key])
    })
    const keyValuePairs = extraParams.split('&')
    keyValuePairs.forEach(pair => {
        const [key, value] = pair.split('=')
        mergedParams.append(key, value)
    })
    const url = `${localePathPrefix}/${path}?${mergedParams.toString()}`.replace(/\/{2,}/g, '/')
    return url
}

export default buildUrl
