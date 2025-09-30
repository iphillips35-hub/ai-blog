"use client";

import AdUnit from "./AdUnit";

export default function SidebarAd() {
  return (
    <div className="sticky top-20">
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <AdUnit 
        slot="0987654321" // Replace with your ad slot ID
        format="vertical"
        responsive={true}
        className="min-h-[600px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg"
      />
    </div>
  );
}
