import { useState, useEffect } from "react";
import styles from "./TicTacToe.module.css";
import Board from "./components/Board/Board";
import ResetButton from "./components/ResetButton/ResetButton";
import GameEnd from "./components/GameEnd/GameEnd";
import GameState from "./components/GameEnd/GameState";
import clickSoundEffect from "../../sounds/click.wav";
import endSoundEffect from "../../sounds/end.wav";
import resetSoundEffect from "../../sounds/reset.wav";

const winningLines = [
  { line: [0, 1, 2], strikeClass: "strike-row-1" },
  { line: [3, 4, 5], strikeClass: "strike-row-2" },
  { line: [6, 7, 8], strikeClass: "strike-row-3" },
  { line: [0, 3, 6], strikeClass: "strike-column-1" },
  { line: [1, 4, 7], strikeClass: "strike-column-2" },
  { line: [2, 5, 8], strikeClass: "strike-column-3" },
  { line: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { line: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const clickSound = new Audio(clickSoundEffect);
clickSound.volume = 0.7;
clickSound.autoplay = true;

const endSound = new Audio(endSoundEffect);
endSound.volume = 0.1;
endSound.autoplay = true;

const resetSound = new Audio(resetSoundEffect);
resetSound.volume = 0.2;
resetSound.autoplay = true;

export default function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [strikeClass, setStrikeClass] = useState("");
  const [gameState, setGameState] = useState(GameState.IN_PROGRESS);

  const handleClick = (index) => {
    if (gameState !== GameState.IN_PROGRESS) {
      return;
    }

    if (tiles[index] === null) {
      setTiles((prevTiles) => {
        const newTiles = [...prevTiles];
        newTiles[index] = player;
        return newTiles;
      });
      setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    }
  };

  const checkForWinner = (board) => {
    for (const { line, strikeClass } of winningLines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { strikeClass, winner: board[a] };
      }
    }

    if (board.every((tile) => tile !== null)) {
      return { gameState: GameState.DRAW };
    }
    return null;
  };

  useEffect(() => {
    const result = checkForWinner(tiles);
    if (result) {
      setGameState(
        result.winner === "X"
          ? GameState.X_WON
          : result.winner === "O"
          ? GameState.O_WON
          : result.gameState
      );
      setStrikeClass(result.strikeClass);
    }
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.IN_PROGRESS) {
      endSound.play();
    }
  }, [gameState]);

  const resetGame = () => {
    setTiles(Array(9).fill(null));
    setPlayer("X");
    setGameState(GameState.IN_PROGRESS);
    setStrikeClass("");

    resetSound.play();
  };

  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.tic}>TIC</span>-
        <span className={styles.tac}>TAC</span>-TOE
      </h1>
      <Board
        tiles={tiles}
        handleClick={handleClick}
        player={player}
        strikeClass={strikeClass}
      />
      <GameEnd gameState={gameState} />
      <ResetButton resetGame={resetGame} gameState={gameState} />
    </div>
  );
}
