import crypto from "crypto"
import { get } from "Base"

globalThis.cache = {}

const getFromCacheOrApi = async (url) => {
    const start = new Date()
    let handle = url
    handle = handle.replace(/\//ig, "_")
    handle = crypto.createHash("md5").update(encodeURI(handle)).digest("hex")
    if (globalThis.cache?.[handle]) {
        console.log(`Getting ${url} from cache ...`)
        const data = globalThis.cache[handle]
        const end = new Date()
        console.log(`Took ${end - start} milliseconds`)
        return JSON.parse(data)
    }

    console.log(`Getting ${url} from API ...`)
    const data = await get(url)
    const { statusCode } = data || {}
    if (!data || statusCode) {
        console.log(`Not caching because server returned ${statusCode}\nURL: ${url}\n${JSON.stringify(data)}`)
        return data
    }
    globalThis.cache[handle] = JSON.stringify(data)
    const end = new Date()
    console.log(`Took ${end - start} milliseconds`)
    return data
}

const clearCache = () => {
    console.log("Clearing cache ...")
    globalThis.cache = {}
    console.log("Cleared the cache")
}

export { getFromCacheOrApi }
export { clearCache }
