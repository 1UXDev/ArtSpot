export default function Spotlight({ image, artist }) {
  return (
    <div className="Spotlight">
      <img src={image}></img>
      <h3>{artist}</h3>
    </div>
  );
}
