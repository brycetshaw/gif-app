/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGif = /* GraphQL */ `
    mutation CreateGif(
        $input: CreateGifInput!
        $condition: ModelGifConditionInput
    ) {
        createGif(input: $input, condition: $condition) {
            id
            height
            width
            title
            username
            src
            comments {
                items {
                    id
                    poster
                    content
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
            owner
        }
    }
`;
export const updateGif = /* GraphQL */ `
    mutation UpdateGif(
        $input: UpdateGifInput!
        $condition: ModelGifConditionInput
    ) {
        updateGif(input: $input, condition: $condition) {
            id
            height
            width
            title
            username
            src
            comments {
                items {
                    id
                    poster
                    content
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
            owner
        }
    }
`;
export const deleteGif = /* GraphQL */ `
    mutation DeleteGif(
        $input: DeleteGifInput!
        $condition: ModelGifConditionInput
    ) {
        deleteGif(input: $input, condition: $condition) {
            id
            height
            width
            title
            username
            src
            comments {
                items {
                    id
                    poster
                    content
                    createdAt
                    updatedAt
                }
                nextToken
            }
            createdAt
            updatedAt
            owner
        }
    }
`;
export const createComment = /* GraphQL */ `
    mutation CreateComment(
        $input: CreateCommentInput!
        $condition: ModelCommentConditionInput
    ) {
        createComment(input: $input, condition: $condition) {
            id
            gif {
                id
                height
                width
                title
                username
                src
                comments {
                    nextToken
                }
                createdAt
                updatedAt
                owner
            }
            poster
            content
            createdAt
            updatedAt
        }
    }
`;
export const updateComment = /* GraphQL */ `
    mutation UpdateComment(
        $input: UpdateCommentInput!
        $condition: ModelCommentConditionInput
    ) {
        updateComment(input: $input, condition: $condition) {
            id
            gif {
                id
                height
                width
                title
                username
                src
                comments {
                    nextToken
                }
                createdAt
                updatedAt
                owner
            }
            poster
            content
            createdAt
            updatedAt
        }
    }
`;
export const deleteComment = /* GraphQL */ `
    mutation DeleteComment(
        $input: DeleteCommentInput!
        $condition: ModelCommentConditionInput
    ) {
        deleteComment(input: $input, condition: $condition) {
            id
            gif {
                id
                height
                width
                title
                username
                src
                comments {
                    nextToken
                }
                createdAt
                updatedAt
                owner
            }
            poster
            content
            createdAt
            updatedAt
        }
    }
`;
