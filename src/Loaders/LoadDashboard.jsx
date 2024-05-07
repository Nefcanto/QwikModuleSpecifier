import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import {
    getAddresses,
    getPersonInfo,
} from "Contacts"

const loadDashboard = routeLoader$(async (props) => {
    const [
        addresses,
        personInfo,
    ] = await useAsync([
        getAddresses(props),
        getPersonInfo(props),
    ])

    return {
        addresses,
        personInfo,
    }
})

export default loadDashboard
