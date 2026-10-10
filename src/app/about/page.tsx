import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold">About</h1>
      <p className="leading-7 opacity-80">Write something about yourself here.</p>
    </div>
  );
}
