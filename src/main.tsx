import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

if (rootElement.innerHTML.trim()) {
  // Pre-rendered HTML exists — hydrate for seamless SPA takeover
  hydrateRoot(rootElement, <App />);
} else {
  // No pre-rendered content (dev mode) — normal render
  createRoot(rootElement).render(<App />);
}
