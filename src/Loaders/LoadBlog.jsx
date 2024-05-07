import { routeLoader$ } from "@builder.io/qwik-city"

const loadBlog = routeLoader$(() => {

    return { test: "test" }
})

export default loadBlog
