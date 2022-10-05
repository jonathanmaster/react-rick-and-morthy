export default function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>Nombre: {character.name}</h3>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      ></img>
      <p>Especie: {character.species}</p>
      <p>Origen: {character.origin.name}</p>
    </div>
  );
}
