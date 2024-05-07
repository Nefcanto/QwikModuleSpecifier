import { getFromCacheOrApi } from "Base"
import { getSystemConfig } from "Configuration"

const getCategoryProductsByConfigKeys = async (configKeys, props) => {
    const { query } = props
    const locale = query?.get("locale")
    const { configs, getKeyFromValue } = await getSystemConfig()
    let csv = ""
    configKeys.forEach(key => csv += `,${configs[key] || ""}`)
    const configKeysCsv = configKeys.join(",")
    const products = await getFromCacheOrApi(`/products/getProductsByConfigKeys?configKeysCsv=${configKeysCsv}&locale=${locale}`)
    for (let product in products) {
        if (product === "milliseconds") {
            continue
        }
        const key = getKeyFromValue(product)
        products[key] = products[product]
    }
    return products
}

export default getCategoryProductsByConfigKeys
