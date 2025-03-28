/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBathrooms = /* GraphQL */ `
  mutation CreateBathrooms(
    $input: CreateBathroomsInput!
    $condition: ModelBathroomsConditionInput
  ) {
    createBathrooms(input: $input, condition: $condition) {
      id
      name
      rating
      address
      description
      image_url
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBathrooms = /* GraphQL */ `
  mutation UpdateBathrooms(
    $input: UpdateBathroomsInput!
    $condition: ModelBathroomsConditionInput
  ) {
    updateBathrooms(input: $input, condition: $condition) {
      id
      name
      rating
      address
      description
      image_url
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBathrooms = /* GraphQL */ `
  mutation DeleteBathrooms(
    $input: DeleteBathroomsInput!
    $condition: ModelBathroomsConditionInput
  ) {
    deleteBathrooms(input: $input, condition: $condition) {
      id
      name
      rating
      address
      description
      image_url
      createdAt
      updatedAt
      __typename
    }
  }
`;
