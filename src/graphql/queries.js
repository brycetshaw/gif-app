/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGif = /* GraphQL */ `
    query GetGif($id: ID!) {
        getGif(id: $id) {
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
export const listGifs = /* GraphQL */ `
    query ListGifs(
        $filter: ModelGifFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGifs(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
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
            nextToken
        }
    }
`;
export const getComment = /* GraphQL */ `
    query GetComment($id: ID!) {
        getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
    query ListComments(
        $filter: ModelCommentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                gif {
                    id
                    height
                    width
                    title
                    username
                    src
                    createdAt
                    updatedAt
                    owner
                }
                poster
                content
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;
