import { component$ } from "@builder.io/qwik"
import {
    Profile,
    loadProfile,
} from "Contacts"

const Index = component$(() => {

    const {
        globalization,
        personInfo,
        profileStatics,
        session,
    } = loadProfile().value
    return <Profile
        personInfo={personInfo}
        profileStatics={profileStatics}
        session={session}
        {...globalization}
    />
})

export default Index

export { loadProfile }
