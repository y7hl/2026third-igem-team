import { lazy, Suspense, useEffect, useState } from "react";
import Home from './components/layout/Header'
import "./App.css";

const HomeContent = lazy(() => import("./components/temp-home/HomeContent"));

function App() {
  const [showMain, setShowMain] = useState(
    Boolean(window.__IGEM_SPLASH_DONE__),
  );

  useEffect(() => {
    import("./components/temp-home/HomeContent");
  }, []);

  useEffect(() => {
    if (showMain) return undefined;

    const handleSplashDone = () => {
      setShowMain(true);
    };

    window.addEventListener("IGEM_SPLASH_DONE", handleSplashDone);

    return () => {
      window.removeEventListener("IGEM_SPLASH_DONE", handleSplashDone);
    };
  }, [showMain]);

  return showMain ? (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  ) : null;
}

export default App;
