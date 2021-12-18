type FacebookProps = {
  noots: number;
};

export default function Facebook(props: FacebookProps) {
  return (
    <>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fnoot.space"
        target="_blank"
        data-category="facebook"
        data-action="click"
        data-label="button"
        data-noot={props.noots}
        data-facebookurl="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fnoot.space"
        rel="noreferrer"
      >
        &nbsp;
      </a>
      <style jsx>{`
        a {
          display: inline-block;
          padding: 9px 10px 6px 32px;
          border: #ccc solid 1px;
          border-color: #435a8b #3c5488 #334c83;
          border-radius: 3px;
          background: #f8f8f8 url('facebook.svg') 45% 3px no-repeat;
          background: url('facebook.svg') 45% 3px no-repeat,
            -webkit-linear-gradient(#4c69ba, #3b55a0);
          background: url('facebook.svg') 45% 3px no-repeat,
            linear-gradient(#4c69ba, #3b55a0);
          background-size: 24px 24px, auto auto;
          /* Text */
          font: bold 14px Helvetica, Arial, sans-serif;
          text-decoration: none;
          color: #333;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
          white-space: nowrap;
        }
        a:hover,
        a:focus,
        a:active {
          border-color: #5874c4 #4961a8 #41599f;
          background: #5b7bd5 url('facebook.svg') 45% 3px no-repeat;
          background: url('facebook.svg') 45% 3px no-repeat,
            -webkit-linear-gradient(#5b7bd5, #4864b1);
          background: url('facebook.svg') 45% 3px no-repeat,
            linear-gradient(#5b7bd5, #4864b1);
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
