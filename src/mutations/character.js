import { gql } from "@apollo/client";

const DELETE_CHARACTER = gql`
  mutation deleteCharacter($id: ID!) {
    deleteCharacter(id: $id) {
      id
      name
      role
      level
    }
  }
`;

const ADD_CHARACTER = gql`
  mutation addCharacter($name: String!, $role: CharacterRole, $level: Int!) {
    addCharacter(name: $name, role: $role, level: $level) {
      id
      name
      role
      level
    }
  }
`;

export { DELETE_CHARACTER, ADD_CHARACTER };
