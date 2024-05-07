import { component$ } from "@builder.io/qwik"
import {
    AddressesList,
    loadAddresses,
} from "Contacts"

const Index = component$(() => {

    const {
        addresses,
        addressStatics,
        session,
        globalization,
    } = loadAddresses().value

    return <AddressesList
        addresses={addresses}
        addressStatics={addressStatics}
        session={session}
        {...globalization}
    />
})

export default Index

export { loadAddresses }
