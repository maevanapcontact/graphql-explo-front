import { gql } from "@apollo/client";

const GET_QUESTS = gql`
  query getQuests {
    quests {
      id
      name
      description
      status
      characterId
    }
  }
`;

const GET_QUEST = gql`
  query getQuest($id: ID!) {
    quest(id: $id) {
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

export { GET_QUESTS, GET_QUEST };
