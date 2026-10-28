import { PhoneCall, ShieldCheck } from "lucide-react";

const services = [
  {
    name: "SecureSiteCheck",
    icon: ShieldCheck,
    description:
      "Is your website leaking customer data or open to attack? Run a free check and get a plain-English report of what to fix.",
    cta: "Run the free check",
    href: "https://securesitecheck.co.uk/check",
  },
  {
    name: "Robust AI",
    icon: PhoneCall,
    description:
      "An AI receptionist for UK trades. It answers the calls you miss, takes the details and sends them straight to you.",
    cta: "See how it works",
    href: "https://robustai.co.uk",
  },
];

export default function BusinessHelp() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Want it done for you?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Future Tech Blog is written by the team behind these two services for small businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map(({ name, icon: Icon, description, cta, href }) => (
            <a
              key={name}
              href={href}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                {cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
