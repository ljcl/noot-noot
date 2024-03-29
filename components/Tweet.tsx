const bird = `url(
  'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%231b95e0%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E'
)`;

type TweetProps = {
  noots: number;
  text: string;
};

export default function Tweet(props: TweetProps) {
  return (
    <>
      <a
        target="_blank"
        data-category="twitter"
        data-action="click"
        data-label="button"
        data-noot={props.noots}
        data-tweeturl="https://twitter.com/intent/tweet?url=http%3A%2F%2Fnoot.space&text=just made pingu noot noot"
        href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fnoot.space/&text=noot noot"
        rel="noreferrer"
      >
        {props.text}
      </a>
      <style jsx>{`
        a {
          display: inline-block;
          padding: 9px 10px 6px 32px;
          border: #ccc solid 1px;
          border-radius: 3px;
          background: #f8f8f8 ${bird} 4px 3px no-repeat;
          background: ${bird} 4px 3px no-repeat,
            -webkit-linear-gradient(#fff, #dedede);
          background: ${bird} 4px 3px no-repeat, linear-gradient(#fff, #dedede);
          background-size: 24px 24px, auto auto;
          font: bold 14px Helvetica, Arial, sans-serif;
          text-decoration: none;
          color: #333;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
          white-space: nowrap;
        }
        a:hover,
        a:focus,
        a:active {
          border-color: #bbb;
          background: #d9d9d9 ${bird} 4px 3px no-repeat;
          background: ${bird} 4px 3px no-repeat,
            -webkit-linear-gradient(#f8f8f8, #d9d9d9);
          background: ${bird} 4px 3px no-repeat,
            linear-gradient(#f8f8f8, #d9d9d9);
          background-size: 24px 24px, auto auto;
          box-shadow: none;
        }
        a:focus,
        a:active {
          outline: none;
          border-color: #ff3b6b;
        }
      `}</style>
    </>
  );
}
