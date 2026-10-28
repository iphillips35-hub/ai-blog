import { ArrowRight } from "lucide-react";
import { services, type ServiceId } from "@/components/BusinessHelp";

export default function PostHelpBox({ service }: { service: ServiceId }) {
  const s = services.find((item) => item.id === service)!;
  const Icon = s.icon;
  return (
    <aside className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 p-6 md:p-8">
      <div className="flex items-center space-x-3 mb-3">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Need help with this?</h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{s.description}</p>
      <a
        href={s.href}
        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        <span>{s.cta}</span>
        <ArrowRight className="w-4 h-4" />
      </a>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{s.name} is run by the team behind Future Tech Blog.</p>
    </aside>
  );
}
