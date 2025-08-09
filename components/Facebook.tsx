import styles from './Facebook.module.css';

type FacebookProps = {
  noots: number;
};

export default function Facebook(props: FacebookProps) {
  return (
    <a
      href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fnoot.space"
      target="_blank"
      data-category="facebook"
      data-action="click"
      data-label="button"
      data-noot={props.noots}
      data-facebookurl="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fnoot.space"
      rel="noreferrer"
      className={styles.facebook}
      suppressHydrationWarning
    >
      &nbsp;
    </a>
  );
}
