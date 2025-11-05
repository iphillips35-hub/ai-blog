"use client";

import { useEffect } from "react";

export default function NativeAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('Native ad loading error:', err);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <ins 
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-9431025338025038"
        data-ad-slot="2686479913"
      />
    </div>
  );
}
