import React, { useEffect, useState } from "react";

const SiteEffects = () => {
  const [pointer, setPointer] = useState({ x: -100, y: -100, visible: false });

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (!isDesktop) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      setPointer({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handlePointerLeave = () => {
      setPointer((current) => ({ ...current, visible: false }));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="absolute transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)`,
          opacity: pointer.visible ? 1 : 0,
        }}
      >
        <div className="absolute -left-8 -top-8 h-16 w-16 rounded-full border border-emerald-400/20 bg-emerald-400/5 blur-sm animate-pulse" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/55 bg-slate-950/70 shadow-[0_0_30px_rgba(16,185,129,0.18)] backdrop-blur-md">
          <div className="slash-cursor" />
        </div>
      </div>
    </div>
  );
};

export default SiteEffects;
