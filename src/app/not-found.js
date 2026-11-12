import Link from "next/link";
import { ShieldQuestion } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] text-white px-6 py-24 flex items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-4 flex justify-center">
          <ShieldQuestion className="h-12 w-12 text-blue-500" aria-hidden="true" />
        </div>
        <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Error 404</p>
        <h1 className="text-3xl font-bold mb-3">We couldn&apos;t find that page</h1>
        <p className="text-slate-400 mb-8">
          The link may be broken or the page may have moved. Check the address, or head back to
          safety.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="rounded-full bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-500 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/checklist"
            className="rounded-full border border-slate-700 px-8 py-3 font-semibold hover:border-blue-600 transition-colors"
          >
            Take the Checklist
          </Link>
        </div>
      </div>
    </main>
  );
}
