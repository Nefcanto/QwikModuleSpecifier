import { routeLoader$ } from "@builder.io/qwik-city"
import loadHierarchyChildren from "./Loaders/LoadHierarchyChildren.jsx"
import loadBlog from "./Loaders/LoadBlog.jsx"

const loadSignIn = routeLoader$(async (props) => {
    const data = null
    return null
})


const loadProduct = routeLoader$(async (props) => {
    const data = null
    return null
})


const loadProductWithVariants = routeLoader$(async (props) => {
    const data = null
    return null
})


const loadPost = routeLoader$(async (props) => {
    const data = null
    return null
})

export { loadSignIn }
export { loadProduct }
export { loadProductWithVariants }
export { loadPost }
export { loadHierarchyChildren }
export { loadBlog }
