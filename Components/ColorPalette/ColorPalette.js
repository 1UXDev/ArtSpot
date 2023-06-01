import { uid } from "uid";

export default function ColorPalette({ colors }) {
  console.log(colors);
  return colors.map((color) => {
    return (
      <div
        key={uid()}
        className="colorContainer"
        style={{ backgroundColor: color, height: `16px` }}
      ></div>
    );
  });
}
