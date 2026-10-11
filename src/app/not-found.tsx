import Link from "next/link";
import Enso from "@/components/ui/Enso";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="relative flex size-56 items-center justify-center text-ink">
        <Enso seed="404" className="absolute inset-0" />
        <span className="font-serif text-5xl font-medium">404</span>
      </div>
      <p className="mt-6 font-serif text-2xl">Lost in the mist.</p>
      <p className="mt-2 text-sm text-muted">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-line px-6 py-2.5 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper"
      >
        Back to home
      </Link>
    </div>
  );
}
