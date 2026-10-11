import type { Metadata } from "next";
import BrushDivider from "@/components/ui/BrushDivider";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading kicker="About" title="A little about me" />
      <div className="ink-rise space-y-5 text-[17px] leading-8 text-ink-soft">
        <p>Write something about yourself here.</p>
      </div>
      <BrushDivider className="mt-16 h-4 w-40 text-ink/40" />
    </div>
  );
}
