"use client";

import { useEffect } from "react";

interface BannerAdProps {
  position?: "top" | "bottom";
}

export default function BannerAd({ position = "top" }: BannerAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('Banner ad loading error:', err);
    }
  }, []);

  return (
    <div className={`w-full ${position === "top" ? "mb-8" : "mt-8"}`}>
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <div className="container mx-auto px-4">
        <ins 
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9431025338025038"
          data-ad-slot="5696674685"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
