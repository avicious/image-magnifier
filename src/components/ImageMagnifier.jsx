import { useRef, useState } from "react";
import styles from "./ImageMagnifier.module.css";

const ImageMagnifier = ({
  imageUrl,
  magnifierHeight = 200,
  magnifierWidth = 200,
  zoomLevel = 1.5,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const imgRef = useRef(null);

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setXY([x, y]);
  };

  return (
    <div className={styles.container}>
      <img
        ref={imgRef}
        src={imageUrl}
        className={styles.img}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowMagnifier(false)}
        alt="magnifier"
      />

      {showMagnifier && (
        <div
          className={styles.magnifier}
          style={{
            display: showMagnifier ? "" : "none",

            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifierWidth / 2}px`,

            backgroundImage: `url('${imageUrl}')`,

            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
            backgroundPosition: `${-x * zoomLevel + magnifierWidth / 2}px ${
              -y * zoomLevel + magnifierHeight / 2
            }px`,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
