/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSelection = /* GraphQL */ `
  query GetSelection($id: ID!) {
    getSelection(id: $id) {
      id
      object
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSelections = /* GraphQL */ `
  query ListSelections(
    $filter: ModelSelectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSelections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        object
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
