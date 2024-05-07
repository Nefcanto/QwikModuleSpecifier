import { getFromCacheOrApi } from "Base"
import { useSections } from "Contents"

const getPage = async (key, props) => {
    const {
        query,
        url,
    } = props
    const { pathname } = url
    const locale = query?.get("locale")
    const page = await getFromCacheOrApi(`/page/get?key=${key}&locale=${locale}${pathname === "/" ? "&isHome=true" : ""}`)
    const transformedSections = useSections(page)
    const { sections, ...sectionlessPage } = page
    return {
        ...sectionlessPage,
        ...transformedSections
    }
}

export default getPage
