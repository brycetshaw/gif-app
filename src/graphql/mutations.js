/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSelection = /* GraphQL */ `
  mutation CreateSelection(
    $input: CreateSelectionInput!
    $condition: ModelSelectionConditionInput
  ) {
    createSelection(input: $input, condition: $condition) {
      id
      object
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSelection = /* GraphQL */ `
  mutation UpdateSelection(
    $input: UpdateSelectionInput!
    $condition: ModelSelectionConditionInput
  ) {
    updateSelection(input: $input, condition: $condition) {
      id
      object
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSelection = /* GraphQL */ `
  mutation DeleteSelection(
    $input: DeleteSelectionInput!
    $condition: ModelSelectionConditionInput
  ) {
    deleteSelection(input: $input, condition: $condition) {
      id
      object
      createdAt
      updatedAt
      owner
    }
  }
`;
