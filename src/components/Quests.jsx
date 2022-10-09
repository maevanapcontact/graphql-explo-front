import { useQuery } from "@apollo/client";

import { GET_QUESTS } from "../queries/quest";

const Quests = () => {
  const { loading, error, data } = useQuery(GET_QUESTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return data.quests.map((quest) => (
    <section key={quest.id}>
      <span className="row">Name: {quest.name}</span>
      <span className="row">Description: {quest.description}</span>
      <span className="row">Status: {quest.status}</span>
      <a href={`/quests/${quest.id}`}>Go to quest</a>
    </section>
  ));
};

export default Quests;
