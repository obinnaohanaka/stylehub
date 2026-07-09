"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

export default function AppLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return children;
}