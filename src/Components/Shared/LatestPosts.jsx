import { PostCard } from "Shared"

const LatestPosts = ({
    latestPosts,
    localePathPrefix,
    title,
}) => {

    return <div class="bg-white border border-custom-color3 mt-6">
        {
            latestPosts?.length > 0 && <>
                <p class="text-md md:text-lg font-bold border-b border-b-custom-color3 p-3">
                    {title}
                </p>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-6 p-3">
                    {
                        latestPosts?.map(item => <div
                            class="text-center border-b border-b-custom-color3 group"
                            key={item.id}
                        >
                            <PostCard
                                item={item}
                                localePathPrefix={localePathPrefix}
                            />
                        </div>)}
                </div>
            </>
        }
    </div>
}

export default LatestPosts
