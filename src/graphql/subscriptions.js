/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGif = /* GraphQL */ `
    subscription OnCreateGif($owner: String!) {
        onCreateGif(owner: $owner) {
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
export const onUpdateGif = /* GraphQL */ `
    subscription OnUpdateGif($owner: String!) {
        onUpdateGif(owner: $owner) {
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
export const onDeleteGif = /* GraphQL */ `
    subscription OnDeleteGif($owner: String!) {
        onDeleteGif(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
    subscription OnCreateComment {
        onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
    subscription OnUpdateComment {
        onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
    subscription OnDeleteComment {
        onDeleteComment {
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
