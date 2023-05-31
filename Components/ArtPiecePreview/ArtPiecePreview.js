export default function ArtPiecePreview({ title, artist, image, slug }) {
  console.log({ title });
  return (
    <li key={slug}>
      <img src={image} alt={title} width="200px"></img>
      <h4>{title}</h4>
      <p>{artist}</p>
    </li>
  );
}
