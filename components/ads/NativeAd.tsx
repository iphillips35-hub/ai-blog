"use client";

export default function NativeAd() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
          Ad
        </div>
        <div className="flex-1">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sponsored</div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Your Ad Title Here
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Compelling ad description that encourages clicks and engagement.
          </p>
          <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
