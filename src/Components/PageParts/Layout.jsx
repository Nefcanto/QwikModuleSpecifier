import {
    Breadcrumb,
    RichText,
} from "Shared"

const Layout = ({
    breadcrumb,
    content,
    page,
}) => {

    return <>
        <section class="max-w-6xl mx-auto px-4 2xl:px-0 pb-10">
            <Breadcrumb items={breadcrumb} />
            <h1 class="w-full pb-2 border-b border-custom-color3 flex items-center text-xl font-bold text-custom-color32">
                {page?.title}
            </h1>
            <div class="bg-white border border-custom-color3 p-4 md:p-8 mt-4">
                <RichText content={content} />
            </div>
        </section>
    </>
}

export default Layout
