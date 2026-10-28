"use client";

import { useState } from "react";
import { CheckCircle, MessageCircleQuestion } from "lucide-react";
import { OTHER_TOPIC, pollTopics } from "@/data/pollTopics";

export default function TopicPoll() {
  const [topic, setTopic] = useState("");
  const [other, setOther] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/poll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, other, email, company, page: window.location.pathname }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
      <div className="flex items-center space-x-3 mb-2">
        <MessageCircleQuestion className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What&apos;s your biggest tech headache right now?</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Tell us what you&apos;re struggling with. We&apos;ll write plain-English answers to the most popular topics.
      </p>

      {status === "success" ? (
        <div className="flex items-center space-x-2 text-green-700 dark:text-green-400 font-semibold" role="status">
          <CheckCircle className="w-6 h-6" />
          <span>Thanks for voting!{email ? " We'll email you when the answer is published." : ""}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <legend className="sr-only">Pick one topic</legend>
            {pollTopics.map((t) => (
              <label
                key={t}
                className={`flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  topic === t
                    ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-purple-400"
                }`}
              >
                <input
                  type="radio"
                  name="topic"
                  value={t}
                  checked={topic === t}
                  onChange={() => setTopic(t)}
                  className="mt-1 accent-purple-600"
                  required
                />
                <span className="text-gray-800 dark:text-gray-200">{t}</span>
              </label>
            ))}
          </fieldset>

          {topic === OTHER_TOPIC && (
            <textarea
              value={other}
              onChange={(e) => setOther(e.target.value)}
              maxLength={500}
              rows={3}
              required
              placeholder="What are you struggling with?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          )}

          <div>
            <label htmlFor="poll-email" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Want the answer by email? (optional)
            </label>
            <input
              id="poll-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.co.uk"
              className="w-full sm:max-w-md px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              If you add your email, we&apos;ll send you the answer and our weekly newsletter. Unsubscribe anytime.
            </p>
          </div>

          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {error && (
            <p className="text-red-600 dark:text-red-400 text-sm" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading" || !topic}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send my vote"}
          </button>
        </form>
      )}
    </section>
  );
}
