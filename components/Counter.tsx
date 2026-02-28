import styles from "./Counter.module.css";
import Facebook from "./Facebook";
import Tweet from "./Tweet";

export default function Counter(props: { noots: number }) {
  return (
    <div className={styles.counter}>
      <Tweet text={`${props.noots} Noots`} noots={props.noots} />{" "}
      <Facebook noots={props.noots} />
    </div>
  );
}
