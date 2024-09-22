import GameState from "../GameEnd/GameState";
import styles from "./ResetButton.module.css";

function ResetButton({ resetGame, gameState }) {
  if (gameState === GameState.IN_PROGRESS) {
    return;
  }
  return (
    <button className={styles["glow-on-hover"]} onClick={resetGame}>
      RESET
    </button>
  );
}

export default ResetButton;
