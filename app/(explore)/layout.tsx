import Navbar from "@/components/explore/Navbar";
import Footer from "@/components/explore/Footer";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
