import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "One plain-English email a week on AI tools, website security and automation for UK small businesses.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Newsletter />
    </div>
  );
}
