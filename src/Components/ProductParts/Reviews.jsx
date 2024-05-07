import {
    AddComment,
    CommentsList,
} from "Shared"

const Reviews = ({
    comments,
    commentsTexts,
    fields,
    form,
    product,
}) => {

    return <div>

        <AddComment
            {...fields}
            {...form}
            entity={product}
        />

        <CommentsList
            {...comments}
            description={commentsTexts?.commentsListDescription}
        />

    </div>
}

export default Reviews
