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
      {/* <Tile value={tiles[0]} onClick={() => handleClick(0)} player={player} />
      <Tile value={tiles[1]} onClick={() => handleClick(1)} player={player} />
      <Tile value={tiles[2]} onClick={() => handleClick(2)} player={player} />
      <Tile value={tiles[3]} onClick={() => handleClick(3)} player={player} />
      <Tile value={tiles[4]} onClick={() => handleClick(4)} player={player} />
      <Tile value={tiles[5]} onClick={() => handleClick(5)} player={player} />
      <Tile value={tiles[6]} onClick={() => handleClick(6)} player={player} />
      <Tile value={tiles[7]} onClick={() => handleClick(7)} player={player} />
      <Tile value={tiles[8]} onClick={() => handleClick(8)} player={player} /> */}
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
