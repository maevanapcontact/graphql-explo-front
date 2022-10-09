import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { GET_CHARACTERS } from "../queries/characters";
import { DELETE_CHARACTER, ADD_CHARACTER } from "../mutations/character";

const Characters = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [role, setRole] = useState("dps");

  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [deleteCharacter] = useMutation(DELETE_CHARACTER);
  const [addCharacter] = useMutation(ADD_CHARACTER, {
    variables: { name, level, role },
  });

  const resetForm = () => {
    setName("");
    setLevel(1);
    setRole("dps");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (name === "") {
      console.log("Name cannot be empty");
      return;
    }

    addCharacter(name, role, level);
    resetForm();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      {!loading && !error && (
        <>
          <div>
            {data.characters.map((character) => (
              <section key={character.id}>
                <span className="row">ID: {character.id}</span>
                <span className="row">Name: {character.name}</span>
                <span className="row">Role: {character.role}</span>
                <span className="row">Level: {character.level}</span>
                <button
                  onClick={() =>
                    deleteCharacter({ variables: { id: character.id } })
                  }
                >
                  DELETE
                </button>
              </section>
            ))}
          </div>
          <div>
            <h1>Add Character</h1>
            <form onSubmit={handleSubmit}>
              <label className="row">
                Name:{" "}
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                />
              </label>
              <label className="row">
                Role:{" "}
                <select
                  id="role"
                  value={role}
                  onChange={(evt) => setRole(evt.target.value)}
                >
                  <option value="tank">Tank</option>
                  <option value="heal">Heal</option>
                  <option value="dps">DPS</option>
                </select>
              </label>
              <label className="row">
                Level:{" "}
                <input
                  type="number"
                  id="level"
                  value={level}
                  onChange={(evt) => setLevel(evt.target.value)}
                />
              </label>
              <input type="submit" value="ADD" />
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Characters;
