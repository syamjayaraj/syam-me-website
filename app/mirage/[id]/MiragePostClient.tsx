"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

interface MiragePostClientProps {
  children: React.ReactNode;
}

export default function MiragePostClient({ children }: MiragePostClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        containerRef.current.style.setProperty("--mouse-x", `${x}%`);
        containerRef.current.style.setProperty("--mouse-y", `${y}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={styles.main}>
      {children}
    </div>
  );
}
