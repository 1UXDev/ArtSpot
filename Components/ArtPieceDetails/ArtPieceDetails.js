export default function ArtPieceDetails({ title, artist, year, genre, image }) {
  return (
    <div>
      <img src={image} width={600}></img>
      <h1>{title}</h1>
      <div>
        <p>{artist}</p>
        <p>{year}</p>
      </div>
      <div>
        <p>{genre}</p>
      </div>
    </div>
  );
}
