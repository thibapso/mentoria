"use client";

import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]'
    );

    if (existingScript) {
      if ((window as any).VLibras) {
        new (window as any).VLibras.Widget("https://vlibras.gov.br/app");
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).VLibras) {
        new (window as any).VLibras.Widget("https://vlibras.gov.br/app");
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div {...({ vw: "true" } as any)} className="enabled">
      <div {...({ "vw-access-button": "true" } as any)} className="active" />
      <div {...({ "vw-plugin-wrapper": "true" } as any)}>
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
