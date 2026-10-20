import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function CoachingTeaser() {
  return (
    <section className="container-custom">
      <Link
        href="/coaching"
        className="bento-card p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 group bg-gradient-to-br from-emerald-900/10 via-transparent to-blue-900/10"
      >
        <div className="flex gap-6 items-start">
          <div className="hidden sm:flex w-14 h-14 shrink-0 rounded-2xl bg-emerald-500/10 items-center justify-center">
            <GraduationCap className="w-7 h-7 text-emerald-400" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Now mentoring
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Learn to build apps — and earn from them.
            </h2>
            <p className="text-gray-400 max-w-xl">
              From your first line of HTML to a live SaaS product, built with
              modern AI tools. Personal mentoring, straight from a founder.
            </p>
          </div>
        </div>
        <span className="btn-magnetic bg-white text-black group-hover:bg-gray-200 shrink-0 self-start md:self-center">
          See the program
          <ArrowRight className="w-4 h-4 ml-2" />
        </span>
      </Link>
    </section>
  );
}
