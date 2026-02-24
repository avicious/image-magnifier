import ImageMagnifier from "./components/imageMagnifier";
import SAMPLE_IMAGE from "./assets/sample.jpg";

const App = () => {
  return (
    <div className="container">
      <ImageMagnifier
        imageUrl={SAMPLE_IMAGE}
        magnifierHeight={200}
        magnifierWidth={200}
        zoomLevel={1.5}
      />
    </div>
  );
};

export default App;
