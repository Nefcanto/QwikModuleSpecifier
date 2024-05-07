import { getFromCacheOrApi } from "Base"

const getQuestions = async props => {
    const { query } = props
    const locale = query?.get("locale")
    const posts = await getFromCacheOrApi(`/questions/data?locale=${locale}`)
    return posts
}

export default getQuestions
