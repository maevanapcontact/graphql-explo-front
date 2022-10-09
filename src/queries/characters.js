import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      id
      name
      role
      level
    }
  }
`;

export { GET_CHARACTERS };
