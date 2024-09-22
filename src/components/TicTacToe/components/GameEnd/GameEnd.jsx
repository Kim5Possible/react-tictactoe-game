import styles from "./GameEnd.module.css";
import GameState from "./GameState";

function GameEnd({ gameState }) {
  switch (gameState) {
    case GameState.X_WON:
      return <h1 className={styles["game-end"]}>X won!</h1>;
    case GameState.O_WON:
      return <h1 className={styles["game-end"]}>O won!</h1>;
    case GameState.DRAW:
      return <h1 className={styles["game-end"]}>DRAW!</h1>;
    default:
      return null;
  }
}

export default GameEnd;
