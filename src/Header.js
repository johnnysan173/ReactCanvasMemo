import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <button className="header__clear" onClick={props.clear}>
        取り消し
      </button>
      <a
        className="header__download"
        href={props.url}
        onClick={props.download}
        download="memo.jpg"
      >
        ダウンロード
      </a>
    </div>
  );
};

export default Header;
