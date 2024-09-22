import styles from "../Board/Board.module.css";
import cn from "classnames";
import "../Board/Board.module.css";

function Strike({ strikeClass }) {
  return <div className={cn(styles.strike, styles[strikeClass])}></div>;
}

export default Strike;
