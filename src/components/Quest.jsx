import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { DELETE_QUEST } from "../mutations/quest";

import { GET_QUEST, GET_QUESTS } from "../queries/quest";

import Character from "./Character";

const Quest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_QUEST, { variables: { id } });
  const [deleteQuestr] = useMutation(DELETE_QUEST, {
    variables: { id },
    onCompleted: () => navigate("/quests"),
    refetchQueries: [{ query: GET_QUESTS }],
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      {!loading && !error && (
        <>
          <section>
            <span className="row">Name: {data.quest.name}</span>
            <span className="row">Description: {data.quest.description}</span>
            <span className="row">Status: {data.quest.status}</span>
          </section>
          <Character data={data.quest.character} />
          <button type="button" onClick={() => deleteQuestr()}>
            Delete Quest
          </button>
        </>
      )}
    </>
  );
};

export default Quest;
