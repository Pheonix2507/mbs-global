import CircularLoader from "@/components/ui/CircularLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-center gap-4">
        <CircularLoader size="xl" />
        <p className="font-zalando text-zinc-600 dark:text-zinc-400 text-sm font-medium tracking-widest uppercase animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
