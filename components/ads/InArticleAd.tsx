"use client";

import { useEffect } from "react";

export default function InArticleAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('In-article ad loading error:', err);
    }
  }, []);

  return (
    <div className="my-8 py-6 border-y border-gray-200 dark:border-gray-700">
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <ins 
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9431025338025038"
        data-ad-slot="9795701798"
      />
    </div>
  );
}
