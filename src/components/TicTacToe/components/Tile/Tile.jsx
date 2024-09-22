import styles from "./Tile.module.css";
import cn from "classnames";

function Tile({ value, onClick, player }) {
  return (
    <div
      className={cn(
        styles.tile,
        { [styles.xColor]: value === "X", [styles.oColor]: value === "O" },
        {
          [styles.xTile]: player === "X" && value == null,
          [styles.oTile]: player === "O" && value == null,
        }
      )}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Tile;
