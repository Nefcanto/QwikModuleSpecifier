const useLayoutSeo = (loadData, resolveValue) => {

    const { configs } = resolveValue(loadData)
    if (!configs)
    {
        throw new Error("systemConfigs not loaded in layout.jsx")
    }
    const {
        googleAnalyticsId,
        googleTagManagerId,
        siteScripts,
    } = configs

    return {
        frontmatter: {
            googleAnalyticsId,
            googleTagManagerId,
            siteScripts,
        }
    }
}

export default useLayoutSeo
