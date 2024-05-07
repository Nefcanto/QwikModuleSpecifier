import { LocalizedDate } from "Base"
import { Rating } from "Social"
import { useCategoryUrl } from "Blog"
import {
    Calendar,
    Category,
    Chat,
    Eye,
} from "Svg"

const Icons = ({
    commentView,
    currentLocale,
    localePathPrefix,
    localesEnum,
    post,
    visitCount,
}) => {

    return <div class="flex items-center justify-between gap-4 pb-3 text-custom-color32 text-xs md:text-sm border-b">
        <div class="flex flex-wrap gap-2 sm:gap-6">
            {post?.relatedItems?.hierarchies && post?.relatedItems?.hierarchies.length > 0 &&
                <a
                    class="w-full sm:w-auto flex items-center gap-1.5"
                    href={useCategoryUrl(post?.relatedItems?.hierarchies?.[0]?.slug, localePathPrefix)}
                >
                    <Category
                        class="w-5 aspect-square fill-custom-color32"
                    />
                    {post?.relatedItems?.hierarchies?.[0]?.title}
                </a>
            }
            <span class="flex items-center gap-1.5">
                <Eye
                    class="w-7 aspect-square fill-custom-color32"
                />
                {visitCount}
            </span>
            <span class="flex items-center gap-1.5">
                <Chat
                    class="w-[18px] aspect-square fill-custom-color32"
                />
                {commentView}
            </span>
            <span class="hidden sm:flex items-center gap-1.5">
                <Calendar
                    class="w-5 aspect-square fill-custom-color32"
                />
                <LocalizedDate
                    localeKey={currentLocale?.key}
                    localesEnum={localesEnum}
                    utcDate={post?.utcDate}
                />
            </span>
        </div>
        <div class="flex flex-col">
            <Rating
                containerClass="ms-auto"
                entityGuid={post?.guid}
                entityType="BlogPost"
                once
                value={post.relatedItems?.ratingAverage?.value}
            />
            <span class="flex sm:hidden items-center justify-end gap-1.5 mt-2">
                <Calendar
                    class="w-5 aspect-square fill-custom-color32"
                />
                <LocalizedDate
                    localeKey={currentLocale?.key}
                    localesEnum={localesEnum}
                    utcDate={post?.utcDate}
                />
            </span>
        </div>
    </div>
}

export default Icons
