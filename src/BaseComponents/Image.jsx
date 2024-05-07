// https://www.corewebvitals.io/pagespeed/fix-slow-hero-images-core-web-vitals
import {
    getPixel,
    isDev,
    lg,
    md,
    sm,
    xl,
    xs,
    xxl,
} from "Base"

const Image = ({
    alt,
    containerClass,
    hideDefault,
    imageClass,
    isBackground,
    onClick$: _onClick$,
    priority,
    src,
}) => {

    const imageIsDefault = src?.includes('000000')
    const id = Date.now()
    let xsWidth
    let smWidth
    let mdWidth
    let lgWidth
    let xlWidth
    let xxlWidth

    const getWidth = tailwindWidth => {
        const values = tailwindWidth.match(/[\d\/]+/g)
        if (values && values.length > 0) {
            if (tailwindWidth.indexOf("px") > -1) {
                return values[0]
            }
            else if (tailwindWidth.indexOf("%") > -1) {
                return lg
            }
            else if (tailwindWidth.indexOf("/") > -1) {
                return lg
            }
            else {
                return getPixel(values[0])
            }
        }
        if (tailwindWidth.indexOf("full") > -1) {
            return xs
        }
        return null
    }

    const getContainerSizeBasedOnTailwindClassesToPreventCls = () => {
        if (!containerClass) {
            return
        }
        const matches = containerClass.match(/[^ ]*\bw-[^ ]+/g)
        if (!matches) {
            return
        }
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i]
            if (match.startsWith("sm")) {
                smWidth = getWidth(match)
            }
            else if (match.startsWith("md")) {
                mdWidth = getWidth(match)
            }
            else if (match.startsWith("lg")) {
                lgWidth = getWidth(match)
            }
            else if (match.startsWith("xl")) {
                xlWidth = getWidth(match)
            }
            else if (match.startsWith("xxl")) {
                xxlWidth = getWidth(match)
            }
            else {
                xsWidth = getWidth(match)
            }
        }

        smWidth = smWidth || xsWidth
        mdWidth = mdWidth || smWidth
        lgWidth = lgWidth || mdWidth
        xlWidth = xlWidth || lgWidth
        xxlWidth = xxlWidth || xlWidth

        xsWidth = xsWidth || xs
        smWidth = smWidth || sm
        mdWidth = mdWidth || md
        lgWidth = lgWidth || lg
        xlWidth = xlWidth || xl
        xxlWidth = xxlWidth || xxl
    }
    getContainerSizeBasedOnTailwindClassesToPreventCls()

    const dynamicProps = {}
    if (priority) {
    } else {
        dynamicProps.loading = "lazy"
    }
    if (!src?.endsWith(".webp")) {

        dynamicProps.srcset =
            `${src}/${xsWidth} ${xs}w, ` +
            `${src}/${smWidth} ${sm}w, ` +
            `${src}/${mdWidth} ${md}w, ` +
            `${src}/${lgWidth} ${lg}w, ` +
            `${src}/${xlWidth} ${xl}w, ` +
            `${src}/${xxlWidth} ${xxl}w`
    }

    if (isBackground) {
        return <picture>
            Background image (to be implemented soon)
        </picture>
    }


    return <>
        {
            hideDefault && imageIsDefault ?
                <div class='flex flex-col items-center p-1 justify-center gap-0.5 text-red-600 text-xs text-start'>
                    {
                        isDev() &&
                        <>
                            <span>dev mode</span>
                            <span>your image is default</span>
                            <span>remove hideDefault props to display this image</span>
                        </>
                    }
                </div>
                :
                <div
                    class={containerClass || ""}
                    onClick$={_onClick$}
                >
                    <img
                        alt={alt || ""}
                        class={(
                            (imageClass?.indexOf("object-") > -1 || imageClass?.indexOf("bg-") > -1)
                                ?
                                ""
                                :
                                " w-full h-full object-cover ") + (imageClass || "")
                        }
                        decoding="async"
                        id={id}
                        src={src}
                        {...dynamicProps}

                    />
                </div>
        }

    </>
}

export default Image
