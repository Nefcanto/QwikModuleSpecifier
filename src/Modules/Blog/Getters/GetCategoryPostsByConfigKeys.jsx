import { getFromCacheOrApi } from "Base"
import { getSystemConfig } from "Configuration"

const getCategoryPostsByConfigKeys = async (configKeys, props) => {
    const {
        query,
        url,
    } = props
    const locale = query?.get("locale")
    const { configs, getKeyFromValue } = await getSystemConfig()
    let csv = ""
    configKeys.forEach(key => csv += `,${key}`)
    const posts = await getFromCacheOrApi(`/blog/getCategoryPostsByConfigKeys?configKeysCsv=${csv}&locale=${locale}&tenantDomain=${url?.hostname}`)

    return posts
}

export default getCategoryPostsByConfigKeys
