import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_QUEST } from "../queries/quest";

const Quest = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_QUEST, { variables: { id } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      {!loading && !error && (
        <section>
          <span className="row">Name: {data.quest.name}</span>
          <span className="row">Description: {data.quest.description}</span>
          <span className="row">Status: {data.quest.status}</span>
        </section>
      )}
    </>
  );
};

export default Quest;
