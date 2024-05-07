import { getFromCacheOrApi } from "Base"

const getBranding = async (props) => {
    const { query } = props
    const locale = query?.get("locale")
    const branding = await getFromCacheOrApi(`/localeConfig/branding?locale=${locale}`)
    return {
        brand: branding.brand,
        slogan: branding.slogan,
    }
}

export default getBranding
