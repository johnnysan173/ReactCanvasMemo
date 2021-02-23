import "./styles.css";
import Header from "./Header";
import Body from "./Body";
import { useRef, useState } from "react";

export default function App() {
  const [url, setUrl] = useState("#");
  const bodyRef = useRef();

  return (
    <div className="App">
      <h2>シンプル メモ帳</h2>
      <Header
        clear={() => bodyRef.current.clearContext()}
        download={() => bodyRef.current.downloadContext()}
        url={url}
      />
      <Body ref={bodyRef} setUrl={setUrl} />
    </div>
  );
}
