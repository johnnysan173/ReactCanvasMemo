import Canvas from "./Canvas";
import "./Body.css";
import { forwardRef, useRef, useImperativeHandle } from "react";

const Body = forwardRef((props, ref) => {
  const canvasRef = useRef();

  useImperativeHandle(ref, () => ({
    clearContext() {
      canvasRef.current.clearContext();
    },
    downloadContext() {
      props.setUrl(canvasRef.current.downloadContext());
    }
  }));

  return (
    <div className="container">
      <Canvas ref={canvasRef} />
    </div>
  );
});

export default Body;
