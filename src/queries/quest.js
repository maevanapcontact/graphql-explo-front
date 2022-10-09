import { gql } from "@apollo/client";

const GET_QUESTS = gql`
  query getQuests {
    quests {
      name
      description
      status
      characterId
    }
  }
`;

export { GET_QUESTS };
