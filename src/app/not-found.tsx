import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold">404</h1>
      <p className="mt-2 opacity-80">This page could not be found.</p>
      <Link href="/" className="mt-4 inline-block underline">
        Back to home
      </Link>
    </div>
  );
}
