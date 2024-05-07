import { component$ } from "@builder.io/qwik"
import {
    BlogCategories,
    Breadcrumb,
    LatestPosts,
    Pagination,
} from "Shared"
import { Card } from "BlogParts"

const Layout = component$(({
    blogStatics,
    breadcrumb,
    categories,
    currentLocale,
    latestPosts,
    localePathPrefix,
    localesEnum,
    posts,
    seo,
}) => {

    return <div class="max-w-6xl mx-auto px-4 2xl:px-0 relative">

        <Breadcrumb items={breadcrumb} />

        <section class="grid grid-cols-1 md:grid-cols-[30%,66%] xl:grid-cols-[22%,76%] justify-between pb-10">
            <aside class="xl:mb-14">
                <BlogCategories
                    categories={categories}
                    localePathPrefix={localePathPrefix}
                    title={blogStatics?.categoriesTitle}
                />
                <LatestPosts
                    latestPosts={latestPosts}
                    localePathPrefix={localePathPrefix}
                    title={blogStatics?.latestPostsTitle}
                />
            </aside>
            <article class="bg-white border border-custom-color3 xl:mb-14">

                <h2 class="text-md md:text-lg font-bold border-b border-b-custom-color3 p-3">
                    <span>{seo?.pageTitle}</span>
                </h2>

                <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2.5 px-2.5 my-10">
                    <Card
                        currentLocale={currentLocale}
                        items={posts?.data}
                        localePathPrefix={localePathPrefix}
                        localesEnum={localesEnum}
                        readMore={blogStatics?.postCardReadMore}
                    />
                </div>
                <div class="mb-10">
                    <Pagination
                        first
                        last
                        metadata={posts?.metadata}
                    />
                </div>
            </article>
        </section>

    </div>
})

export default Layout
