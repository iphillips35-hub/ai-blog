import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Newsletter | AI App Insights",
  description: "Get practical AI tools, tutorials and insights delivered to your inbox every week.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Newsletter />
    </div>
  );
}
