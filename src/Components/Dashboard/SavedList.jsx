import { component$ } from "@builder.io/qwik"

const SavedList = component$(({ }) => {

    return <div>
        <strong class="text-gray-500 text-lg font-bold py-4 border-bottom">saved List</strong>
        <div class="border rounded-sm mt-5 p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, optio?</p>
            <p class="w-full py-1 px-4 bg-custom-color1 text-white my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, aperiam?</p>
            saved list
        </div>

    </div>
})

export default SavedList
