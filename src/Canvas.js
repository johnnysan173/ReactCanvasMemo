import React, { Component } from "react";

const style = {
  // border: "1px solid gray",
  backgroundColor: "white"
};

class Canvas extends Component {
  constructor() {
    super();
    this.state = { drawing: false, rect: {} };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.clearContext();
  }

  downloadContext() {
    const base64 = this.canvasRef.current.toDataURL("image/jpeg");
    return base64;
  }

  clearContext() {
    const ctx = this.getContext();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 300, 300);
  }

  getContext() {
    return this.canvasRef.current.getContext("2d");
  }

  startDrawing(x, y) {
    this.setState({ drawing: true });
    const ctx = this.getContext();
    // It affect clear Fixed by adding ctx.beginPath()
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  draw(x, y) {
    if (!this.state.drawing) {
      return;
    }
    const ctx = this.getContext();
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  endDrawing() {
    this.setState({ drawing: false });
  }

  render() {
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          width="300px"
          height="300px"
          onMouseDown={(e) =>
            this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          }
          onMouseUp={() => this.endDrawing()}
          onMouseLeave={() => this.endDrawing()}
          onMouseMove={(e) =>
            this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          }
          onTouchStart={(e) =>
            this.startDrawing(
              e.touches[0].clientX -
                this.canvasRef.current.getBoundingClientRect().left,
              e.touches[0].clientY -
                this.canvasRef.current.getBoundingClientRect().top
            )
          }
          onTouchMove={(e) =>
            this.draw(
              e.touches[0].clientX -
                this.canvasRef.current.getBoundingClientRect().left,
              e.touches[0].clientY -
                this.canvasRef.current.getBoundingClientRect().top
            )
          }
          style={style}
        />
        {/* onTouchCancel onTouchEnd onTouchMove onTouchStart */}
      </div>
    );
  }
}
export default Canvas;
