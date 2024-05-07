import { component$ } from "@builder.io/qwik"
import {
    loadPaymentResult,
    PaymentResultLayout,
} from "Payment"

const Index = component$(() => {
    const data = loadPaymentResult().value
    return <PaymentResultLayout {...data} />

})

export default Index

export { loadPaymentResult }
