// @ts-nocheck

import loadSettings from "../Base/SettingsLoader"

export const onRequest = async () => {

    if (globalThis.settings) {
        return globalThis.settings
    }

    const settings = await loadSettings(true)
    globalThis.settings = settings

    let url = ""
    try {
        url = `${settings.ApiUrl}/globalization/data?scopesCsv=all,site`
        let res = await fetch(url)
        let retries = 0
        const maxRetries = 3
        while (res.status !== 200 && retries < maxRetries) {
            console.log(`${retries + 1}. Retrying to fetch /globalization/data`)
            retries++
            res = await fetch(url)
        }
        retries = 0
        const data = await res.json()

        const {
            defaultLocale,
            locales,
            locale,
        } = data

        globalThis.defaultLocale = defaultLocale
        globalThis.locales = locales
        globalThis.locale = locale
        return data

    } catch (error) {
        console.error(error, `Failed to fetch the globalization data from ${url}`)
    }
}
