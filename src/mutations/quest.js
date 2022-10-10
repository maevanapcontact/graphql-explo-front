import { gql } from "@apollo/client";

const ADD_QUEST = gql`
  mutation addQuest(
    $name: String!
    $description: String!
    $status: QuestStatus
    $characterId: ID!
  ) {
    addQuest(
      name: $name
      description: $description
      status: $status
      characterId: $characterId
    ) {
      id
      name
      description
      status
      character {
        id
        name
        role
        level
      }
    }
  }
`;

const DELETE_QUEST = gql`
  mutation deleteQuest($id: ID!) {
    deleteQuest(id: $id) {
      id
      name
      description
      status
      character {
        id
        name
      }
    }
  }
`;

export { ADD_QUEST, DELETE_QUEST };
