import { component$ } from "@builder.io/qwik"
import {
    useDocumentHead,
    useLocation,
} from "@builder.io/qwik-city"
import { isDev } from "Base"
import { log } from "console"

export const RouterHead = component$(() => {

    const head = useDocumentHead()
    const { url } = useLocation()
    const {
        frontmatter,
        links,
        meta,
        styles,
        title,
    } = head
    const {
        googleAnalyticsId,
        googleTagManagerId,
        homeScripts,
        schemas,
        siteScripts,
    } = frontmatter
    const {
        aggregateRating,
        breadcrumb,
        faqPage,
        localBusiness,
        organization,
        product,
    } = schemas || {}

    let colorsCssSrc = isDev() ? `${globalThis.settings.ApiUrl}/blob/colors` : "/colors.css"

    if (globalThis?.settings?.Multitenant) {
        const tld = new URL(globalThis.settings.ApiUrl).hostname.split('.').pop()

        var hostname = url?.hostname.replace(".local", `.${tld}`)

        colorsCssSrc = `${globalThis.settings.ApiUrl}/tenant/colors?tenantDomain=${hostname}`
    }

    return (
        <>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link
                rel="shortcut icon"
                href="/favicon.ico"
            />
            {
                meta?.map((m) => (
                    <meta key={m.key} {...m} />
                ))
            }
            {
                links?.map((l) => (
                    <link key={l.key} {...l} />
                ))
            }
            {
                styles?.map((s) => (
                    <style
                        key={s.key}
                        {...s.props}
                        dangerouslySetInnerHTML={s.style}
                    />
                ))
            }
            {
                organization &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={organization}
                />
            }
            {
                localBusiness &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={localBusiness}
                />
            }
            {
                breadcrumb &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={breadcrumb}
                />
            }
            {
                aggregateRating &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={aggregateRating}
                />
            }
            {
                faqPage &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={faqPage}
                />
            }
            {
                product &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={product}
                />
            }
            {/* {
                Object.values(schemas)?.map(schema =>
                    schema && schema != null && <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={schema}
                    />
                )
            } */}
            {
                googleAnalyticsId &&
                <>
                    <script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
                    <script dangerouslySetInnerHTML={`window.dataLayer = window.dataLayer || [];
                            function gtag() {window?.dataLayer?.push(arguments)}
                            gtag("js", new Date());
                            gtag("config", "${googleAnalyticsId}");`}
                    />
                </>
            }
            {
                googleTagManagerId &&
                <script dangerouslySetInnerHTML={`(function (w, d, s, l, i) {
                            w[l] = w[l] || []; w[l].push({
                                "gtm.start":
                                    new Date().getTime(), event: "gtm.js"
                            }); var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : ""; j.async = true; j.src =
                                    "https://www.googletagmanager.com/gtm.js?id=" + i + dl; f.parentNode.insertBefore(j, f);
                        })(window, document, "script", "dataLayer","${googleTagManagerId}")`}
                />
            }
            <link type="text/css" rel="stylesheet" href={colorsCssSrc} />
        </>
    )
})
