"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  // Auto redirect to home after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-[#111214] rounded-2xl p-10 text-center shadow-xl">

        {/* Success Icon */}
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#3bb9e1]/20">
            <svg
              className="h-8 w-8 text-[#3bb9e1]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-[#7D8387] text-lg mb-4">
          Your message has been successfully submitted.
        </p>

        <p className="text-[#7D8387] text-sm mb-8">
          Our team at{" "}
          <span className="text-white font-medium">
            Pine Book Publishing
          </span>{" "}
          has received your request and will get back to you shortly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-col gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 h-[44px] rounded-full bg-[#3bb9e1] text-black font-semibold hover:opacity-90 transition"
          >
            Back to Home
          </a>

          <span className="text-[#7D8387] text-sm self-center">
            Redirecting automatically in 5 seconds…
          </span>
        </div>

      </div>
    </div>
  );
}
