export default function Spotlight({ image, artist }) {
  return (
    <div className="Spotlight">
      <img src={image} width={600}></img>
      <h3>{artist}</h3>
    </div>
  );
}
