import { Image } from "Base"
import { FaqPages } from "Seo"
import {
    AddComment,
    BlogCategories,
    Breadcrumb,
    CommentsList,
    LatestPosts,
    RichText,
} from "Shared"
import {
    Icons,
    Related,
    Tags,
} from "PostParts"

const Layout = ({
    blogStatics,
    breadcrumb,
    categories,
    comments,
    commentsTexts,
    content,
    currentLocale,
    faqPages,
    fields,
    form,
    latestPosts,
    localePathPrefix,
    localesEnum,
    post,
    relatedPosts,
    visitCount,
}) => {

    return <>
        <div class="max-w-6xl mx-auto px-4 2xl:px-0 relative">

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
                <article class="bg-white border border-custom-color3 xl:mb-14 p-3">

                    <Icons
                        commentView={comments.metadata.dataCount}
                        currentLocale={currentLocale}
                        localePathPrefix={localePathPrefix}
                        localesEnum={localesEnum}
                        post={post}
                        visitCount={visitCount}
                    />

                    <Image
                        alt={post?.title}
                        containerClass="w-full sm:w-1/2 mx-auto aspect-square mb-3 overflow-hidden"
                        imageClass="object-fill w-full h-full object-center border border-custom-color2 p-1"
                        src={post?.relatedItems?.imageUrl}
                    />
                    <h1 class="font-bold mt-6 mb-5 text-xl lg:text-2xl">
                        {post?.title}
                    </h1>
                    <RichText
                        content={content}
                        hasToc
                    />
                    <Tags
                        localePathPrefix={localePathPrefix}
                        tagItems={post?.relatedItems?.tags}
                        title={blogStatics?.tagTitle}
                    />
                    <FaqPages
                        containerClass="bg-white"
                        faqPages={faqPages}
                    />
                    <CommentsList
                        {...comments}
                        description={commentsTexts?.commentsListDescription}
                    />
                    <AddComment
                        {...fields}
                        {...form}
                        entity={post}
                    />
                    <Related
                        localePathPrefix={localePathPrefix}
                        posts={relatedPosts}
                        title={blogStatics?.relatedTitle}
                    />
                </article>
            </section>
        </div>
    </>
}

export default Layout
