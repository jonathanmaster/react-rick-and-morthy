import { useEffect, useState } from "react";
import Character from "./Characters";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Pagina: {props.page}</p>
      <button
        className="btn btn-primary"
        onClick={() => props.setPage(props.page + 1)}
      >
        Pagina {props.page + 1}
      </button>
    </header>
  );
}

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4 " key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
