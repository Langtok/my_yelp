/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBathrooms = /* GraphQL */ `
  query GetBathrooms($id: ID!) {
    getBathrooms(id: $id) {
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
export const listBathrooms = /* GraphQL */ `
  query ListBathrooms(
    $filter: ModelBathroomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBathrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
