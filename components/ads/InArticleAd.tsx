"use client";

import AdUnit from "./AdUnit";

export default function InArticleAd() {
  return (
    <div className="my-8 py-6 border-y border-gray-200 dark:border-gray-700">
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <AdUnit 
        slot="1234567890" // Replace with your ad slot ID
        format="auto"
        responsive={true}
        className="min-h-[250px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg"
      />
    </div>
  );
}
