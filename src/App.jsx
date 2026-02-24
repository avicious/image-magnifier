import ImageMagnifier from "./components/imageMagnifier";

const App = () => {
  return (
    <div className="container">
      <ImageMagnifier
        imageUrl="/src/assets/sample.jpg"
        magnifierHeight={200}
        magnifierWidth={200}
        zoomLevel={1.5}
      />
    </div>
  );
};

export default App;
