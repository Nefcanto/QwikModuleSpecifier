import { get } from "Base"
import {
    writeFile,
    writeFileSync,
} from "fs"

const pathBlobs = {
    "color": "dist/colors.css",
    "sitemap": "dist/sitemap.xml",
    "robots": "dist/robots.txt"
}

export const onPost = async ({
    json,
    url
}) => {
    const personGuid = url.searchParams.get("personGuid")
    const blobs = await get(`/personBlob/data?personGuid=${personGuid}`)

    blobs.forEach(value => {
        switch (value.key) {
            case "favicon":
                writeFile("dist/favicon.ico", value.content, "base64", function (err) {
                    console.log(err)
                })
                break
            default:
                writeFileSync(pathBlobs[value.key], value?.relatedItems?.textualContent)
        }
    })

    json(200, { status: "created succussFully" })
}
