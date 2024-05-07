import { getFromCacheOrApi } from "Base"
import { useSections } from "Contents"

const getLayout = async (key, props) => {
    const { query } = props
    // const locale = useLocation().url.searchParams.get("locale")
    const locale = query?.get("locale")
    const layout = await getFromCacheOrApi(`/layout/get?key=${key}&locale=${locale}`)
    const { sections, ...sectionlessLayout } = layout
    const transformedSections = useSections(layout)
    return {
        ...sectionlessLayout,
        ...transformedSections
    }
}

export default getLayout
