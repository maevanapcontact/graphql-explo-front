import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { GET_QUESTS } from "../queries/quest";
import { ADD_QUEST } from "../mutations/quest";
import { GET_CHARACTERS } from "../queries/characters";

const Quests = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [characterId, setCharacterId] = useState("");

  const { loading, error, data } = useQuery(GET_QUESTS);
  const {
    loading: characterLoading,
    error: characterError,
    data: characterData,
  } = useQuery(GET_CHARACTERS);
  const [addQuest] = useMutation(ADD_QUEST, {
    variables: { name, description, status, characterId },
  });

  const resetForm = () => {
    setName("");
    setDescription("");
    setStatus("todo");
    setCharacterId("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (name === "" || description === "" || characterId === "") {
      console.log("Please, fill all the fields");
      return;
    }

    addQuest(name, description, status, characterId);
    resetForm();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      {data.quests.length > 0 ? (
        <div>
          {data.quests.map((quest) => (
            <section key={quest.id}>
              <span className="row">Name: {quest.name}</span>
              <span className="row">Description: {quest.description}</span>
              <span className="row">Status: {quest.status}</span>
              <a href={`/quests/${quest.id}`}>Go to quest</a>
            </section>
          ))}
        </div>
      ) : null}
      <h1>Add Quest</h1>
      <form onSubmit={handleSubmit}>
        <label className="row">
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
        <label className="row">
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          />
        </label>
        <label className="row">
          Status:{" "}
          <select
            value={status}
            onChange={(evt) => setStatus(evt.target.value)}
          >
            <option value="todo">To do</option>
            <option value="doing">In progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        {!characterLoading && !characterError && (
          <label className="row">
            Character ID:{" "}
            <select
              value={characterId}
              onChange={(evt) => setCharacterId(evt.target.value)}
            >
              <option value="">Select a character</option>
              {characterData.characters.map((character) => (
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </label>
        )}
        <input type="submit" value="ADD" />
      </form>
    </>
  );
};

export default Quests;
