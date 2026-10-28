import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, ShieldCheck, Wrench, MessageSquareText } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Future Tech Blog is written by Iain, a Devon-based builder of AI and website security services for UK small businesses.",
  alternates: { canonical: "/about" },
};

const topics = [
  { icon: PhoneCall, title: "Phone and customer contact", text: "AI receptionists, missed calls, and answering enquiries faster." },
  { icon: ShieldCheck, title: "Website and cyber security", text: "Keeping your website, customer data and email safe without jargon." },
  { icon: MessageSquareText, title: "AI tools that save time", text: "Which assistants are worth paying for, with UK prices." },
  { icon: Wrench, title: "Automation how-tos", text: "Step-by-step guides to taking repetitive admin off your plate." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">About Future Tech Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Practical AI and tech advice for UK small businesses, from someone who builds it
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Who writes this</h2>
            <p>
              I&apos;m Iain, based in Devon. I build technology for small businesses:{" "}
              <a href="https://securesitecheck.co.uk" className="text-blue-600 dark:text-blue-400 underline">SecureSiteCheck</a>,
              which checks small business websites for security problems, and{" "}
              <a href="https://robustai.co.uk" className="text-blue-600 dark:text-blue-400 underline">Robust AI</a>,
              an AI receptionist for UK trades.
            </p>
            <p>
              Most AI coverage is written for developers or big companies. This blog is for everyone else: the
              plumber missing calls while on a job, the shop owner wondering if their website is safe, the
              five-person firm deciding whether ChatGPT or Copilot is worth paying for.
            </p>
            <p>
              Everything here is written in plain English, with UK prices and rules in mind. When I mention my own
              services, I&apos;ll say so.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What we cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get one useful email a week</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              AI tools worth using, security risks to watch, and simple automations. No spam, unsubscribe anytime.
            </p>
            <Link
              href="/newsletter"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
