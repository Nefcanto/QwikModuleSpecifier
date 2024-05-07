import { getFromCacheOrApi } from "Base"

const getLatestPosts = async (count, props) => {
    const {
        query,
        url
    } = props || {}

    const locale = query?.get("locale")
    const posts = await getFromCacheOrApi(`/blog/latestPosts?locale=${locale ?? "null"}&count=${count}&tenantDomain=${url?.hostname}`)
    return posts
}

export default getLatestPosts
