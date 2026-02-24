# Image Magnifier

A lightweight, high-performance React component that adds a "magnifying glass" effect to images on hover. Perfect for e-commerce product galleries or high-detail photography displays.

## 🚀 Features

- **Customizable Zoom:** Control the magnification level via props.
- **Dynamic Sizing:** Adjustable magnifier height, width, and shape (circle/square).
- **Performance Optimized:** Uses `useRef` and relative coordinate mapping to minimize layout thrashing.
- **Zero Dependencies:** Built using standard React hooks (`useState`, `useRef`).

## 🧠 How It Works

The component calculates the cursor's position relative to the image bounds using getBoundingClientRect. It then translates those coordinates into a background-position percentage for a duplicated background image inside the lens.

1. Cursor Tracking: Detects `x` and `y` offsets from the top-left of the image.

2. Background Scaling: Sets `background-size` to `ImageWidth * zoomLevel`.

3. Lens Positioning: Centers the lens `div` on the cursor using a negative margin or offset calculation.

## 📦 Installation

1. Copy the `ImageMagnifier.jsx` (or `.tsx`) file into your components folder.
2. Create the corresponding `ImageMagnifier.module.css` file.
3. Import and use!

## 🛠️ Usage

```jsx
import ImageMagnifier from "./components/ImageMagnifier";

function App() {
  return (
    <div className="App">
      <ImageMagnifier
        imageUrl={imageUrl}
        magnifierHeight={200}
        magnifierWidth={200}
        zoomLevel={1.5}
      />
    </div>
  );
}
```
