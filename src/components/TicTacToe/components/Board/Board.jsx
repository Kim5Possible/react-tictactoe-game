import styles from "./Board.module.css";

import Strike from "../Strike/Strike";
import Tile from "../Tile/Tile";

function Board({ tiles, handleClick, player, strikeClass }) {
  return (
    <div className={styles.board}>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          value={tile}
          onClick={() => handleClick(index)}
          player={player}
        />
      ))}
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
