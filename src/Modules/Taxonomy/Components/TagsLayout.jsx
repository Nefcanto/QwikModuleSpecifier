const TagsLayout = ({
    entityType,
    tags,
}) => {

    return <div class="tags">
        {
            tags?.map(tag => <div
                class="tag"
                key={tag?.id}
            >
                {tag.name}
            </div>)
        }
    </div>
}

export default TagsLayout
