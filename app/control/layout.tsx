import { getSession } from "@/lib/auth";
import ControlHeader from "@/components/control/ControlHeader";

export default async function ControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // If unauthenticated (e.g. rendering login page), render children directly
  if (!session) {
    return <>{children}</>;
  }

  // Authenticated Control Center Shell
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      <ControlHeader />
      <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
