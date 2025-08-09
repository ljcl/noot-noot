import styles from './Tweet.module.css';

type TweetProps = {
  noots: number;
  text: string;
};

export default function Tweet(props: TweetProps) {
  return (
    <a
      target="_blank"
      data-category="twitter"
      data-action="click"
      data-label="button"
      data-noot={props.noots}
      data-tweeturl="https://twitter.com/intent/tweet?url=http%3A%2F%2Fnoot.space&text=just made pingu noot noot"
      href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fnoot.space/&text=noot noot"
      rel="noreferrer"
      className={styles.tweet}
      suppressHydrationWarning
    >
      {props.text}
    </a>
  );
}
