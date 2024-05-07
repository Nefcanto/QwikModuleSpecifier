import axios from "axios"
import https from "https"

const createAxiosApi = async () => {
    let apiUrl = globalThis.settings.ApiUrl

    // if (globalThis.settings.IsDeveloping) {
    //     const httpsAgent = new https.Agent({
    //         rejectUnauthorized: false,
    //     })
    //     axios.defaults.httpsAgent = httpsAgent
    // }

    globalThis.axiosApi = axios.create({
        baseURL: apiUrl
    })

    globalThis.axiosApi.interceptors.request.use(config => {
        config.headers["Accept"] = "application/json"
        config.headers["X-Client"] = "Qwik"
        if (globalThis.settings.Multitenant) {
            const tld = new URL(config.baseURL).hostname.split('.').pop()
            for (const key in config.params) {
                config.params[key] = config.params[key].replace(".local", `.${tld}`);
            }
        }
        return config
    })

    globalThis.axiosApi.interceptors.response.use(
        response =>
            response,
        error => {
            if (apiUrl === undefined) {
                throw "You have not defined the ApiUrl in settings"
            }
            if (error.response === undefined) {
                throw error.message ? error.toString() : "Unknown error"
            }
            if (error.response.status === 404) {
                console.log(error.response.data)
                console.log(error.response.headers)
                console.log(error.response.status)
                if (error.response.data?.code === "404") {
                    throw error.response.data
                }
                else {
                    throw `404\nService does not exist\n${error.request.path}\n${apiUrl}`
                }
            }
            if (error.response.status === 400 || error.response.status === 500) {
                let messages = ""
                let data = error.response.data
                if (typeof data !== "string") {
                    for (let item in error.response.data) {
                        if (item.toLowerCase && item.toLowerCase() === "type") {
                            continue
                        }
                        if (Array.isArray(data[item])) {
                            for (let i = 0; i < data[item].length; i++) {
                                messages += data[item][i] + "\n"
                            }
                        }
                        else if (typeof data[item] === "object") {
                            console.log(data[item])
                        }
                        else {
                            messages += data[item] + "\n"
                        }
                    }
                }
                else {
                    messages = data
                }
                console.log(messages)
                throw messages
            }
        }
    )
}

export async function get(url) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    const path = url.split("?")[0]
    let query = new URLSearchParams()
    if (url.indexOf("?") > 0) {
        query = url.split("?")[1]
        query = new URLSearchParams(query)
    }
    const params = {}
    query.forEach((value, key) => params[key] = value)
    const start = new Date()
    console.log(`Getting ${globalThis.settings.ApiUrl}${url} ...`)
    return await
        globalThis.axiosApi.get(path, {
            params: params,
            crossDomain: true
        }).then(response => {
            const end = new Date()
            console.log(`Took ${end - start} milliseconds for ${globalThis.settings.ApiUrl}${url}`)
            return response?.data
        }).catch(error => {
            if (error.error?.code === "404") {
                return { statusCode: 404, error }
            }
            return { statusCode: error?.response?.status ?? 500, error }
        })
}

export async function post(url, data) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    console.log(`Posting to ${globalThis.settings.ApiUrl}${url} ...`)
    console.log("Post request body:")
    console.dir(data)
    return await globalThis.axiosApi
        .post(url, { ...data })
        .then(response => response?.data)
}

export async function upload(url, data) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    return await globalThis.axiosApi
        .post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(response => response?.data)
        .catch(error => {
            throw error
        })
}

export async function getWithAuthentication(url, session) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    const token = session?.user?.accessToken
    console.log(token)
    const path = url.split("?")[0]
    let query = new URLSearchParams()
    if (url.indexOf("?") > 0) {
        query = url.split("?")[1]
        query = new URLSearchParams(query)
    }
    const params = {}
    query.forEach((value, key) => params[key] = value)
    const start = new Date()
    console.log(`Getting ${globalThis.settings.ApiUrl}${url} ...`)
    return await
        globalThis.axiosApi.get(path, {
            crossDomain: true,
            params: params,
            headers: {
                authorization: `Bearer ${token}`,
            }
        }).then(response => {
            const end = new Date()
            console.log(`Took ${end - start} milliseconds for ${globalThis.settings.ApiUrl}${url}`)
            return response?.data
        }).catch(error => {
            if (error.error?.code === "404") {
                return { statusCode: 404, error }
            }
            const checkForUnauthenticatedOrUnauthorizedAndSendToSingInPage = () => {

            }
            checkForUnauthenticatedOrUnauthorizedAndSendToSingInPage();
            return { statusCode: error?.response?.status ?? 500, error }
        })
}

export async function postWithAuthentication(url, data, session) {
    if (!globalThis.axiosApi) {
        await createAxiosApi()
    }
    let token = session?.user?.accessToken
    if (!token) {
        token = session?.value?.user?.accessToken
    }

    return await globalThis.axiosApi
        .post(url, { ...data }, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        .then(response => response?.data)
}
