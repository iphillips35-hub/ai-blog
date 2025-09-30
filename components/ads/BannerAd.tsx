"use client";

import AdUnit from "./AdUnit";

interface BannerAdProps {
  position?: "top" | "bottom";
}

export default function BannerAd({ position = "top" }: BannerAdProps) {
  return (
    <div className={`w-full ${position === "top" ? "mb-8" : "mt-8"}`}>
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
        Advertisement
      </div>
      <div className="container mx-auto px-4">
        <AdUnit 
          slot="1122334455" // Replace with your ad slot ID
          format="horizontal"
          responsive={true}
          className="min-h-[90px] md:min-h-[250px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg"
        />
      </div>
    </div>
  );
}
